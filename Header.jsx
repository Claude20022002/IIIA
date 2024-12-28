import React from "react";
import logo from "../assets/logoGreen.mp4";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Header() {
    return (
        <section className="header-container">
            <header className="header">
                <div className="logo">
                    <video autoPlay muted aria-label="Logo animé">
                        <source src={logo} type="video/mp4" />
                        Votre navigateur ne supporte pas les vidéos HTML5.
                    </video>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mesplantes">
                                Mes plantes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/decouvrir">
                                Découvrir
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/suivi">
                                Suivi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="sous-sec-1">
                <h1>
                    Green Convert, <br />
                    l'application qui vous aide à{" "}
                    <span className="typewriter-text">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 70,
                                strings: [
                                    "prendre soin de vos plantes",
                                    "les découvrir",
                                    "les suivre...",
                                ],
                            }}
                        />
                    </span>
                </h1>
                <p>
                    Pour une maison toujours plus verte 🌱🪴, avec un meilleur
                    suivi et une exploration de la nature !
                </p>
            </section>
        </section>
    );
}
