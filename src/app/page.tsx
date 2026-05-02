import Grid from "./components/Grid";
import { Artigos } from "../lib/artigos"
import Title from "./components/Title";

export default function Home() {

  return (
    <>
      <Title title="Artigos em Destaque" />
      <Grid artigos={Artigos} />
    </>
  );
}
