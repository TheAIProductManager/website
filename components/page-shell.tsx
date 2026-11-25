import { pageContent } from "./page-content";
import SiteEnhancements from "./site-enhancements";

export default function PageShell({ page }: { page: keyof typeof pageContent }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const html = basePath
    ? pageContent[page].replaceAll('href="/', `href="${basePath}/`)
    : pageContent[page];

  return (
    <>
      <SiteEnhancements />
      <div className="min-h-screen bg-[#F2F4F3] text-[#10263B]" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
