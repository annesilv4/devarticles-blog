import Style from "./Card.module.css";
import type { Artigo } from "@/types/types";
import Link from "next/link";

interface CardProps {
    artigo: Artigo;
}

const Card = ({ artigo }: CardProps) => {
    const { id, title, slug, author, date, image, content } = artigo;

    const resume = content?.length >= 256 ? `${content?.substring(0, 253)}...` : content;

    const datePt = new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

    return (
        <div key={id} className={Style.card}>
            <Link href={`/artigos/${slug}`}>
                <div className={Style.card__image}>
                    <img src={`${image}`} alt={`Imagem do artigo ${title}`} width={400} height={200} />
                </div>
                <div className={Style.card__info}>
                    <h3 className={Style.card__title}>{title}</h3>
                    <p className={Style.card__description}>{resume}</p>
                    <div className={Style.card__footer}>
                        <p className={Style.card__author}>{author}</p>
                        <p className={Style.card__date}>{datePt}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;