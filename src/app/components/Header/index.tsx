import Style from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <header className={Style.header}>
            <div className={Style.header__container}>
                <h1 className={Style.header__logo}>
                    <Link href="/">
                        DevArticles
                    </Link>
                </h1>
                <nav className={Style.header__nav}>
                    <Link href="/">Início</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;