import { Button } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        <div className="footer" style={{ backgroundColor: "#222" }}>
            <div className="footer-section">
                <div className="box1">
                    <h3>Liens rapides</h3>
                    <ul>
                        <li>
                            <a href="#accueil">Accueil</a>
                        </li>
                        <li>
                            <a href="#livres">Objectifs</a>
                        </li>
                        <li>
                            <a href="#contact">Nos plantes</a>
                        </li>
                    </ul>
                </div>
                <div className="box2">
                    <h3>Contact</h3>
                    <div className="sous-box">
                        <p>Email: book@gmail.com</p>
                        <p>Téléphone :063-546-9780</p>
                        <p>Adresse : Boulevard Ghandi, Casablanca</p>
                    </div>
                </div>
                <div className="box3">
                    <h2>Suivez-nous</h2>
                    <div className="sous-box">
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#3b5998",
                                color: "white",
                                marginRight: "10px",
                            }}
                        >
                            Facebook
                        </Button>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#1da1f2",
                                color: "white",
                                marginRight: "10px",
                            }}
                        >
                            Twitter
                        </Button>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#c13584",
                                color: "white",
                            }}
                        >
                            Instagram
                        </Button>
                    </div>
                </div>
            </div>
            <p>
                © 2024 Green Convert. Tous droits réservés. Conçu par le groupe
                1
            </p>
        </div>
    );
}
