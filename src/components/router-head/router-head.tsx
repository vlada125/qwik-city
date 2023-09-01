import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { useQuery } from "qwikql";
import { FETCH_GLOBAL_QUERY } from "~/queries/global";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const { executeQuery$ } = useQuery(FETCH_GLOBAL_QUERY);
  
  const item = useResource$(async () => (
    await executeQuery$()
  ));
  
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <Resource
        value={item}
        onPending={() => (
          <>Loading Item</>
        )}
        onResolved={(data: any) => (
          <title>{loc.url.pathname.replaceAll('/', '') || data?.global?.data?.attributes?.title}</title>
        )}
        onRejected={(error) => (
          <>Error fetching item: {error}</>
        )}
      />

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
