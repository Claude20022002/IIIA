import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ButtonIC from "../components/ButtonIC";

export default function Connexion() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    // Fonction de soumission du formulaire
    const onSubmit = async (data) => {
        try {
            // Vérification du nom d'utilisateur et mot de passe
            if (!data.nomUtilisateur || !data.motDePasse) {
                toast.error("Veuillez remplir tous les champs");
                return;
            }

            // Logic de connexion ici (par exemple, envoi de la requête API)

            toast.success("Connexion réussie !");
            // Redirection vers la page d'accueil ou autre
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez réessayer.");
            console.error(error);
        }
    };
    return (
        <Stack
            sx={{
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url(./image2.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                flexDirection: "column",
                overflow: "auto",
            }}
        >
            <Stack
                className="toutLeFormulaire"
                sx={{
                    width: { xs: "90%", sm: "60%" },
                    height: "77vh",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 7px 50px rgb(214, 223, 213)",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box
                    className="partieVideo"
                    sx={{
                        flexBasis: "50%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <Stack className="videoformulaire">
                        <video
                            autoPlay
                            muted
                            loop
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        >
                            <source src="./video4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Box
                            className="textSurLaVideo"
                            sx={{ zIndex: 99, textAlign: "center" }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.125rem",
                                        md: "1.25rem",
                                    },
                                    color: "#FFF",
                                    fontWeight: "bold",
                                }}
                            >
                                Organiser et gérer vos plantes
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    color: "#FFF",
                                    fontWeight: "bold",
                                    fontSize: {
                                        xs: "0.875rem",
                                        sm: "1rem",
                                        md: "1.125rem",
                                    },
                                }}
                            >
                                Adoptez la quétude de la nature !
                            </Typography>
                        </Box>
                        <Stack
                            sx={{
                                position: "absolute",
                                bottom: 10,
                                left: 10,
                                right: 10,
                                backgroundColor: "rgba(255, 255, 255, 0.248)",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "row",
                                borderRadius: 2,
                                backdropFilter: "blur(1px)",
                                px: 2,
                                py: 1,
                            }}
                        >
                            <Typography
                                color="white"
                                sx={{ padding: "3px", marginLeft: "3px" }}
                            >
                                Besoin d'un compte ?
                            </Typography>
                            <Button
                                sx={{
                                    backgroundColor: "white",
                                    color: "hsl(94, 55%, 56%)",
                                    px: 2,
                                    py: 1,
                                    fontSize: "auto",
                                    fontWeight: 500,
                                    borderRadius: 2,
                                    transition: "0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "hsl(93, 75%, 76%)",
                                        color: "hsl(0, 0%, 18%)",
                                        width: "auto",
                                    },
                                }}
                                component={Link}
                                to="/inscription"
                            >
                                S'enregistrer
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
                <Stack
                    className="partieFormulaireDeConnexion-front"
                    sx={{
                        flexBasis: "50%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "#FFF",
                        padding: "10px",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                fontSize: {
                                    xs: "1.125rem",
                                    sm: "1.375rem",
                                    md: "1.625rem",
                                },
                                background:
                                    "linear-gradient(90deg, #1a6557, #569d7f, #63b45e, #a4bf85)", // Palette revisitée
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                margin: "auto",
                                padding: "5px",
                            }}
                        >
                            Green Convert
                        </Typography>
                    </Box>
                    <Stack
                        className="formulaire"
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 2,
                            width: "100%",
                        }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Box sx={{ width: "80%" }}>
                            <Typography variant="body2" mb={1}>
                                Nom d'utilisateur
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "hsl(330, 12%, 97%)",
                                    borderRadius: 2,
                                    p: 1,
                                }}
                            >
                                <FaUserShield color="hsl(0, 0%, 75%)" />
                                <TextField
                                    variant="standard"
                                    placeholder="Entrer un nom d'utilisateur"
                                    fullWidth
                                    sx={{
                                        ml: 2,
                                    }}
                                    {...register("nomUtilisateur", {
                                        required: "Veuillez saisir un nom",
                                        minLength: {
                                            value: 5,
                                            message:
                                                "Veuillez saisir plus de 5 caractères",
                                        },
                                    })}
                                />
                            </Box>
                            {errors.nomUtilisateur && (
                                <Typography color="red" variant="body2">
                                    {errors.nomUtilisateur.message}
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{ width: "80%" }}>
                            <Typography variant="body2" mb={1}>
                                Mot de passe
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "hsl(330, 12%, 97%)",
                                    borderRadius: 2,
                                    p: 1,
                                }}
                            >
                                <BsFillShieldLockFill color="hsl(0, 0%, 75%)" />
                                <TextField
                                    variant="standard"
                                    placeholder="Entrer votre mot de passe"
                                    type="password"
                                    fullWidth
                                    sx={{
                                        ml: 2,
                                    }}
                                    {...register("motDePasse", {
                                        required:
                                            "Veuillez saisir un mot de passe",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Veuillez saisir un mot de passe de plus de 6 caractères",
                                        },
                                    })}
                                />
                            </Box>
                            {errors.motDePasse && (
                                <Typography color="red" variant="body2">
                                    {errors.motDePasse.message}
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{ margin: "auto" }}>
                            <ButtonIC isInscription={false} />
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
