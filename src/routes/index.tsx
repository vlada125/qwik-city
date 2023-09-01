import { component$, Resource, useResource$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useQuery } from 'qwikql';
import { FETCH_PAGES_QUERY } from "~/queries/page";
import {FETCH_CONTACT_PAGE_QUERY} from "~/queries/contact";

export default component$(() => {
  const { executeQuery$: executeFetchPagesQuery$ } = useQuery(FETCH_PAGES_QUERY);
  const { executeQuery$: executeFetchContactPageQuery$ } = useQuery(FETCH_CONTACT_PAGE_QUERY);
  const store = useStore({ devicePixelRatio: 1 });

  const item = useResource$(async () => ({
    pages: await executeFetchPagesQuery$(),
    contact: await executeFetchContactPageQuery$()
  }));

  useVisibleTask$(async () => {
    store.devicePixelRatio = window.devicePixelRatio;
    
    await delay(100);
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const line1: any = card.querySelector(".line-1");
      const line2: any = card.querySelector(".line-2");

      if (line1 && line2) {
        card.addEventListener("mousemove", (e: any) => {
          line1.style.top = `${e.layerY + 140 - 150}px`;
          line1.style.right = `${e.layerY + 100}px`;

          line2.style.transform = `translate(73px, -122px) rotate(45deg)`;

          line2.style.top = `${e.layerY + 50}px`;
          line2.style.right = `${e.layerY - 100}px`;
        });
      }
    });
  })

  return (
    <Resource
      value={item}
      onPending={() => (
        <>Loading Item</>
      )}
      onResolved={(data: any) => (
        <div class="grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 gap-4">
          {data?.pages?.pages?.data?.map((card: any, index: number) => {
            const thumbnailImageUrl = store.devicePixelRatio > 1 ? (card?.attributes?.images?.thumbnail?.data?.attributes?.formats?.large?.url || card?.attributes?.images?.thumbnail?.data?.attributes?.formats?.thumbnail?.url) : card?.attributes?.images?.thumbnail?.data?.attributes?.formats?.thumbnail?.url;
            
            return (
              <div key={`card${index}`} class="overflow-hidden">
                <a href={`/${card?.attributes?.slug}/`} class="group aspect-square relative card group">
                  <img src={import.meta.env.PUBLIC_API_URL + thumbnailImageUrl} class={'w-full h-full'} alt={'thumbnail'} />
                  <div class="absolute top-0 left-0 h-full w-full grid place-items-center pointer-events-none">
                    <span class="p-3 bg-white tracking-size-2 text-size-11 uppercase font-bold opacity-0 duration-200 group-hover:opacity-100">{card?.attributes?.slug}</span>
                  </div>
                  
                  <div style="transition-property: opacity; top: 175px; right: 285px;"
                       class="h-1/2 w-0.5 bg-grey-F9 absolute -translate-y-1/2 line-1 line1_position duration-500 rotate-45 opacity-0 group-hover:opacity-70"></div>
                  <div
                    style="transition-property: opacity; transform: translate(73px, -122px) rotate(45deg); top: 235px; right: 85px;"
                    class="h-1/2 w-0.5 bg-grey-F9 absolute top-1/2 -translate-y-1/2 right-5 line-2 duration-500 rotate-45 opacity-0 group-hover:opacity-70"></div>
                </a>
              </div>
            );
          })}
          <div class="overflow-hidden">
            <a href={`/${data?.contact?.contact?.data?.attributes?.slug}/`} class="group aspect-square relative card group">
              <img
                src={import.meta.env.PUBLIC_API_URL + (store.devicePixelRatio > 1 ? (data?.contact?.contact?.data?.attributes?.images?.thumbnail?.data?.attributes?.formats?.large?.url || data?.contact?.contact?.data?.attributes?.images?.thumbnail?.data?.attributes?.formats?.thumbnail?.url) : data?.contact?.contact?.data?.attributes?.images?.thumbnail?.data?.attributes?.formats?.thumbnail?.url)}
                class={'w-full h-full'} alt={'thumbnail'}/>
              <div class="absolute top-0 left-0 h-full w-full grid place-items-center pointer-events-none">
          <span
            class="p-3 bg-white tracking-size-2 text-size-11 uppercase font-bold opacity-0 duration-200 group-hover:opacity-100">{data?.contact?.contact?.data?.attributes?.slug}</span>
              </div>
              
              <div style="transition-property: opacity; top: 175px; right: 285px;"
                   class="h-1/2 w-0.5 bg-grey-F9 absolute -translate-y-1/2 line-1 line1_position duration-500 rotate-45 opacity-0 group-hover:opacity-70"></div>
              <div
                style="transition-property: opacity; transform: translate(73px, -122px) rotate(45deg); top: 235px; right: 85px;"
                class="h-1/2 w-0.5 bg-grey-F9 absolute top-1/2 -translate-y-1/2 right-5 line-2 duration-500 rotate-45 opacity-0 group-hover:opacity-70"></div>
            </a>
          </div>
        </div>
      )}
      onRejected={(error) => (
        <>Error fetching item: {error}</>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
const delay = (time: number) => new Promise((res) => setTimeout(res, time));
