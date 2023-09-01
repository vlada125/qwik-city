import {component$, Resource, useResource$, useStore, useVisibleTask$} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useQuery } from 'qwikql';
import { FETCH_PAGES_QUERY } from "~/queries/page";

export default component$(() => {
  const loc = useLocation();
  const { executeQuery$ } = useQuery(FETCH_PAGES_QUERY);
  const store = useStore({ devicePixelRatio: 1 });
  
  const item = useResource$(async () => (
    await executeQuery$()
  ));
  
  useVisibleTask$(async () => {
    store.devicePixelRatio = window.devicePixelRatio;
  })
  
  return (
    <Resource
      value={item}
      onPending={() => (
        <>Loading Item</>
      )}
      onResolved={(data: any) => {
        const pageContent = data?.pages?.data?.find((page: any) => page?.attributes?.slug === loc.params.slug);
        const bannerImageUrl = store.devicePixelRatio > 1 ? (pageContent?.attributes?.images?.banner?.data?.attributes?.formats?.large?.url || pageContent?.attributes?.images?.banner?.data?.attributes?.formats?.thumbnail?.url) : pageContent?.attributes?.images?.banner?.data?.attributes?.formats?.thumbnail?.url;
        
        return (
          <div class="bg-grey-F9">
            <div class="h-50 overflow-hidden my-8 md:my-0">
              <img
                src={import.meta.env.PUBLIC_API_URL + bannerImageUrl}
                class={'w-full h-full max-h-62 object-cover'} alt={'banner'}/>
            </div>
            <div class="md:p-12 px-7 pb-9 md:pt-8">
              <h2 class="text-grey-42 text-size-23 leading-7 font-bold mb-4 capitalize">
                {pageContent?.attributes?.title}
              </h2>
              <p class="text-mid-grey leading-size-26 text-base font-medium mb-8">
                {pageContent?.attributes?.content}
              </p>
            </div>
          </div>
        )
      }}
      onRejected={(error) => (
        <>Error fetching item: {error}</>
      )}
    />
  );
});
