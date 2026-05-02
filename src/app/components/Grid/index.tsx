import type { Artigo } from "@/types/types";
import Style from "./Grid.module.css";
import Card from "../Card";

type GridProps = {
    artigos: Artigo[];
}

const Grid = ({ artigos }: GridProps) => {
    return (
        <section className={Style.grid}>
            {artigos.map((artigo) => (
                <Card key={artigo.id} artigo={artigo} />
            ))}
        </section>
    )
}

export default Grid;