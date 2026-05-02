import Grid from "./components/Grid";
import { Artigos } from "../lib/artigos"
import Title from "./components/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevArticles | Artigos em Destaque",
  description: "Confira os principais artigos sobre desenvolvimento web",
};

export const dynamic = "force-static";

async function getArtigos() {
  return Artigos;
}

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <>
      <Title title="Artigos em Destaque" />
      <Grid artigos={artigos} />
    </>
  );
}
