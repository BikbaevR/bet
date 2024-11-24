
import { Link } from "react-router-dom";
import style from './style.module.css'
import {useState} from "react";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={style.header}>
            <div className={style.menu}>
                <button className={style.menuButton} onClick={toggleMenu}>
                    ☰
                </button>
                {menuOpen && (
                    <nav className={style.dropdown}>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Дом</Link>
                        <Link to="/cases" onClick={() => setMenuOpen(false)}>Кейсы</Link>
                        <Link to="/mines" onClick={() => setMenuOpen(false)}>Мины</Link>

                    </nav>
                )}
            </div>

            <div className={style.title}>How to Play?</div>

            <div className={style.price}>2999.70 USD</div>
        </header>
    );
};

