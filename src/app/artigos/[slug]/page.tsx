import type { Metadata } from "next";
import { Artigos } from "@/lib/artigos";
import { notFound } from "next/navigation";
import Style from "./DetailArtigo.module.css";
import Link from "next/link";

interface ArtigoPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const dynamic = "force-static";

async function getArtigo(slug: string) {
    return Artigos.find(
        (item) => item.slug === slug
    );
}

export async function generateStaticParams() {
    return Artigos.map((artigo) => ({
        slug: artigo.slug,
    }));
}

export async function generateMetadata({ params }: ArtigoPageProps): Promise<Metadata> {
    const { slug } = await params;
    const artigo = await getArtigo(slug);

    if (!artigo) {
        return {
            title: "Artigo não encontrado",
            description: "Este artigo não existe",
        };
    }

    return {
        title: artigo.title,
        description: artigo.content.substring(0, 120) + "...",
    };
}

export default async function ArtigoPage({ params }: ArtigoPageProps) {
    const { slug } = await params;
    const artigo = await getArtigo(slug);
    const datePt = new Date(artigo?.date || "").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

    if (!artigo) {
        return notFound();
    }

    return (
        <>
            <div className={Style.detalhes}>
                <div className={Style.detalhes__container}>
                    <Link href="/" className={Style.detalhes__voltar}>
                        Voltar
                    </Link>
                    <section className={Style.detalhes__content}>
                        <figure className={Style.content__image}>
                            <img className={Style.detalhes__image} src={artigo.image} alt={`Poster do artigo ${artigo.title}`} />
                        </figure>
                        <article className={Style.detalhes__info}>
                            <h2>{artigo.title}</h2>
                            <div className={Style.detalhes__info__meta}>
                                <span>{artigo.author}</span>
                                <span>{datePt}</span>
                            </div>
                            <p>{artigo.content}</p>
                            <p>{artigo.description}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    );
}