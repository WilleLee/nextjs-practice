import Head from "next/head";

type Props = {
  title: string;
};

export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>{`${title} | Next.js Practice`}</title>
      <meta
        name="description"
        content="Here I learn Next.js for the first tiem."
      />
      <meta name="keywords" content="nextjs, reactjs, javascript, frontend" />
    </Head>
  );
}
