import { component$, useResource$, Resource } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useQuery } from 'qwikql';
import { FETCH_HOME_PAGE_QUERY, FETCH_PAGES_QUERY } from '~/queries/page';
import { FETCH_CONTACT_PAGE_QUERY } from '~/queries/contact';

export default component$(() => {
  const { executeQuery$: executeFetchPagesQuery$ } = useQuery(FETCH_PAGES_QUERY);
  const { executeQuery$: executeFetchHomePageQuery$ } = useQuery(FETCH_HOME_PAGE_QUERY);
  const { executeQuery$: executeFetchContactPageQuery$ } = useQuery(FETCH_CONTACT_PAGE_QUERY);

  const item = useResource$(async () => ({
    pages: await executeFetchPagesQuery$(),
    homepage: await executeFetchHomePageQuery$(),
    contact: await executeFetchContactPageQuery$()
  }));

  const loc = useLocation();

  return (
    <div>
      <aside class="sticky top-7 left-0">
        <div class="flex justify-center md:inline-block">
          <a href="#"
             class="text-size-23 leading-size-44 text-darker-grey font-medium border-2 border-darker-grey px-4">Paper</a>
        </div>

        <nav class="mb-10 md:mb-0">
          <ul>
            <li>
              <ul class="mt-7 md:mt-11">
                <li
                  class="hidden md:block text-size-13 text-grey-26 font-bold leading-4 uppercase tracking-size-2 mb-2.5">
                  Menu
                </li>
                <li class="flex justify-center md:w-fit">
                  <ul class="md:space-y-1 flex flex-wrap items-center justify-center gap-5 md:block uppercase lg:capitalize w-52 md:w-auto">
                    <Resource
                      value={item}
                      onPending={() => (
                        <>Loading Item</>
                      )}
                      onResolved={(data: any) => (
                        <>
                          <li class="text-light-brown md:font-medium font-bold text-size-14 md:text-size-15 leading-size-21">
                            <a href={'/'}
                               class="relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-b before:border-light-brown before:w-0 before:duration-200 hover:before:w-full">{data?.homepage?.homepage?.data?.attributes?.title}
                              {loc.url.pathname === '/' && (
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                     height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"
                                     class="absolute top-1/2 -translate-y-1/2 -left-4 opacity-40 hidden md:block">
                                  <path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path>
                                </svg>
                              )}
                            </a>
                          </li>
                          {data?.pages?.pages?.data.map((page: any, index: number) => (
                            <li key={`menu-link${index}`} class="text-light-brown md:font-medium font-bold text-size-14 md:text-size-15 leading-size-21">
                              <a href={`/${page?.attributes?.slug}/`}
                                 class="relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-b before:border-light-brown before:w-0 before:duration-200 hover:before:w-full">{page?.attributes?.title}
                                {loc.url.pathname === `/${page?.attributes?.slug}/` && (
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                       height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"
                                       class="absolute top-1/2 -translate-y-1/2 -left-4 opacity-40 hidden md:block">
                                    <path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path>
                                  </svg>
                                )}
                              </a>
                            </li>
                          ))}
                          <li
                            class="text-light-brown md:font-medium font-bold text-size-14 md:text-size-15 leading-size-21">
                            <a href={`/${data?.contact?.contact?.data?.attributes?.slug}/`}
                               class="relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-b before:border-light-brown before:w-0 before:duration-200 hover:before:w-full">{data?.contact?.contact?.data?.attributes?.title}
                              {loc.url.pathname === `/${data?.contact?.contact?.data?.attributes?.slug}/` && (
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                     height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"
                                     class="absolute top-1/2 -translate-y-1/2 -left-4 opacity-40 hidden md:block">
                                  <path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"></path>
                                </svg>
                              )}
                            </a>
                          </li>
                        </>
                      )}
                      onRejected={(error) => (
                        <>Error fetching item: {error}</>
                      )}
                    />
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
});
