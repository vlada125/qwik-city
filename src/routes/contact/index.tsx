import {component$, useResource$, Resource, useVisibleTask$, useStore} from "@builder.io/qwik";
import { useQuery } from 'qwikql';
import { FETCH_CONTACT_PAGE_QUERY } from "~/queries/contact";

export default component$(() => {
  const { executeQuery$: executeFetchContactPageQuery$ } = useQuery(FETCH_CONTACT_PAGE_QUERY);
  const store = useStore({ devicePixelRatio: 1 });

  const item = useResource$(async () => (
    await executeFetchContactPageQuery$()
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
        const bannerImageUrl = store.devicePixelRatio > 1 ? (data?.contact?.data?.attributes?.images?.banner?.data?.attributes?.formats?.large?.url || data?.contact?.data?.attributes?.images?.banner?.data?.attributes?.formats?.thumbnail?.url) : data?.contact?.data?.attributes?.images?.banner?.data?.attributes?.formats?.thumbnail?.url;
        const photoImageUrl = store.devicePixelRatio > 1 ? (data?.contact?.data?.attributes?.photo?.data?.attributes?.formats?.large?.url || data?.contact?.data?.attributes?.photo?.data?.attributes?.formats?.thumbnail?.url) : data?.contact?.data?.attributes?.photo?.data?.attributes?.formats?.thumbnail?.url;
        
        return (
          <section class="md:mt-0 mt-7">
            <img src={import.meta.env.PUBLIC_API_URL + bannerImageUrl} class={'w-full h-full max-h-62 object-cover'} alt={'banner'}/>
            <div class="grid grid-cols-1 md:grid-cols-contact-grid">
              <div class="md:!p-12 bg-grey-F8 px-7 md:px-0 mt-7 md:mt-0">
                <h3 class="uppercase font-bold text-sm leading-size-15 text-grey-31 tracking-size-2 mb-4">
                  {data?.contact?.data?.attributes?.byline}
                </h3>
                <p class="text-size-15 text-grey-42 leading-size-26 font-medium mb-7">
                  {data?.contact?.data?.attributes?.details}
                </p>
                
                <form>
                  <div class="flex flex-col gap-1 text-grey-55 mb-5">
                    <label
                      class="flex items-center gap-1 text-size-11 font-bold leading-size-26 uppercase tracking-size-2">Name <span>*</span></label>
                    <input type="text"
                           class="max-w-82 bg-grey-EE px-3 py-2 font-medium w-full outline-none text-base" />
                  </div>
                  <div class="flex flex-col gap-1 text-grey-55 mb-5">
                    <label
                      class="flex items-center gap-1 text-size-11 font-bold leading-size-26 uppercase tracking-size-2">e-mail <span>*</span></label>
                    <input type="text"
                           class="max-w-82 bg-grey-EE px-3 py-2 font-medium w-full outline-none text-base" />
                  </div>
                  <div class="flex flex-col gap-1 text-grey-55 mb-5">
                    <label
                      class="flex items-center gap-1 text-size-11 font-bold leading-size-26 uppercase tracking-size-2">Message <span>*</span></label>
                    <textarea rows={5}
                              class="resize-none bg-grey-EE px-3 py-2 font-medium w-full outline-none text-base"></textarea>
                    
                    <div class="mt-3 flex justify-end w-full">
                      <button
                        class="tracking-size-2 text-darker-grey leading-size-26 text-xs font-bold uppercase border-2 border-grey-66 px-4 py-1">
                        {data?.contact?.data?.attributes?.submit}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div class="bg-grey-FC md:pt-12 md:px-[50px] pt-6 pb-6 md:pb-0">
                <div class="flex flex-col items-center">
                  <div class="mb-3">
                    <img class="aspect-square rounded-full object-cover w-12 h-12" src={import.meta.env.PUBLIC_API_URL + photoImageUrl} alt={'photo'}/>
                  </div>
                  <p class="text-size-15 leading-size-26 text-light-green font-medium">
                    hello@website.com
                  </p>
                  <p class="text-size-15 leading-size-26 text-mid-grey font-medium">
                    +95 (0) 123-456-7890 (Office)
                  </p>
                  <p class="text-size-15 leading-size-26 text-mid-grey font-medium">
                    @twitter
                  </p>
                </div>
              </div>
            </div>
          </section>
        )
      }}
      onRejected={(error) => (
        <>Error fetching item: {error}</>
      )}
    />
  );
});
