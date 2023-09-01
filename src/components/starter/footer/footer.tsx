import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useQuery } from "qwikql";
import { FETCH_GLOBAL_QUERY, FETCH_CONTACT_BUBBLES_QUERY } from "~/queries/global";

export default component$(() => {
  const { executeQuery$: executeGlobalQuery$ } = useQuery(FETCH_GLOBAL_QUERY);
  const { executeQuery$: executeFetchContactBubblesQuery$ } = useQuery(FETCH_CONTACT_BUBBLES_QUERY);
  
  const item = useResource$(async () => ({
    global: await executeGlobalQuery$(),
    contactBubbles: await executeFetchContactBubblesQuery$()
  }));

  return (
    <Resource
      value={item}
      onPending={() => (
        <>Loading Item</>
      )}
      onResolved={(data: any) => (
        <footer class="container md:mt-20 mt-5 mb-5 md:mb-5 w-full">
          <div class="flex items-center gap-3 md:gap-0 flex-col md:flex-row justify-between">
            <p class="leading-5 text-sm font-medium text-mid-grey">{data?.global?.global?.data?.attributes?.footer}</p>
            <ul class="flex items-center gap-3 group">
              {data?.contactBubbles?.contactBubbles?.data.map((link: any, index: number) => (
                <li key={`footer-link${index}`} class="opacity-75 hover:!opacity-80 cursor-pointer group-hover:opacity-30 duration-200 h-6 aspect-square rounded-full border-2 border-dark-grey flex items-center justify-center">
                  <a class={'relative [&>.tooltip]:hover:opacity-100'} href={link?.attributes?.link}>
                    <span class={`typcn ${link?.attributes?.icon}`} />
                    <span class="tooltip transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{link?.attributes?.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      )}
      onRejected={(error) => (
        <>Error fetching item: {error}</>
      )}
    />
  );
});
