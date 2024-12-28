import React from "react";
import Header from "../components/Header";
import { FaSunPlantWilt } from "react-icons/fa6";
import { GiPlantWatering } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import PlanteInt from "../data/PlanteInt";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

export default function Home() {
    console.log(PlanteInt);
    return (
        <div>
            <Header />
            <section className="sec-1">
                <div className="box1">
                    <FaSunPlantWilt
                        style={{
                            color: "rgb(213, 217, 129)",
                            fontSize: "145px",
                        }}
                    />
                    <p className="p1">Eviter le déchesse de vos plantes</p>
                </div>
                <div className="box1">
                    <GiPlantWatering
                        style={{
                            color: "rgb(107, 178, 222)",
                            fontSize: "145px",
                        }}
                    />
                    <p className="p2">Arroser vos plantes à temps</p>
                </div>
                <div className="box1">
                    <RiPlantFill
                        style={{
                            color: "rgb(173, 217, 129)",
                            fontSize: "145px",
                        }}
                    />
                    <p className="p3">Connaître les besoins de vos plantes</p>
                </div>
            </section>
            <section className="sec-2">
                <h2>Nos meilleurs plantes d'intérieur</h2>
                <div className="box1">
                    {PlanteInt.map((plante) => (
                        <div className="card" key={plante.id}>
                            <div className="cardContainer">
                                <div className="cardImg">
                                    <img src={plante.photo} alt={plante.nom} />
                                </div>
                                <div className="CardText">
                                    <h3>{plante.nom}</h3>
                                    <p>{plante.description}</p>
                                    <p className="arrosage">
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "rgb(107, 178, 222)",
                                            }}
                                        >
                                            Arrosage:
                                        </span>{" "}
                                        {plante.arrosage}
                                    </p>
                                    <p className="ensoleillement">
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "rgb(173, 217, 129)",
                                            }}
                                        >
                                            Ensoleillement:
                                        </span>{" "}
                                        {plante.ensoleillement}
                                    </p>
                                </div>
                                <Button
                                    className="btn"
                                    variant="outlined"
                                    style={{
                                        backgroundColor: "rgb(107, 178, 222)",
                                        color: "white",
                                        padding: "5px 10px",
                                    }}
                                >
                                    Ajouter
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
