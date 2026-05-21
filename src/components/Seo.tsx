import { useEffect } from "react";

function upsertMeta(name: string, content: string, attr: "name" | "property") {
  const selector = `meta[${attr}="${name}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function Seo(props: {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: unknown;
}) {
  useEffect(() => {
    document.title = props.title;
    upsertMeta("description", props.description, "name");
    upsertMeta("og:title", props.title, "property");
    upsertMeta("og:description", props.description, "property");
    upsertMeta("twitter:card", "summary_large_image", "name");

    if (props.canonicalPath) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = props.canonicalPath;
    }
  }, [props.canonicalPath, props.description, props.title]);

  useEffect(() => {
    if (!props.jsonLd) return;
    const id = "ws-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(props.jsonLd);
  }, [props.jsonLd]);

  return null;
}

