import Head from "next/head";

type Props = {
  title: string;
};

export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>{title} | Next.js Practice</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="here I learn and practice Next.js from the start"
      />
    </Head>
  );
}
