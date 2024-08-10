import { configs } from "./configs";
import AnimationProvider from "@/components/animation-provider";
import Component from "./component";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = Object.keys(configs);

  return slugs.map((slug) => ({
    slug,
  }));
}

export default function Page({
  params,
}: { params: { slug: keyof typeof configs } }) {
  const config = configs[params.slug];

  return (
    <AnimationProvider>
      <Component config={config} />
    </AnimationProvider>
  );
}
