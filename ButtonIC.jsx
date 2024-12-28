import React from "react";
import { Button } from "@mui/material";
import { AiOutlineSwapRight } from "react-icons/ai";

export default function ButtonIC({ isInscription }) {
    return (
        <Button
            type="submit"
            className="btn"
            fullWidth
            sx={{
                px: 2,
                py: 1,
                backgroundColor: "hsl(94, 55%, 56%)",
                color: "white",
                fontWeight: 500,
                borderRadius: 2,
                transition: "0.9s ease-in-out",
                "&:hover": {
                    backgroundColor: "hsl(93, 75%, 76%)",
                    color: "hsl(0, 0%, 18%)",
                    "& .iconBouton": {
                        transform: "translateX(5px)",
                    },
                },
            }}
        >
            {isInscription ? "S'enregistrer" : "Se connecter"}{" "}
            <AiOutlineSwapRight className="iconBouton" />
        </Button>
    );
}
