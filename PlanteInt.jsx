const PlanteInt = [
    {
        id: 1,
        nom: "Monstera Deliciosa",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante tropicale, facile d'entretien avec des feuilles grandes et perforées.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 2,
        nom: "Pothos",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante grimpante populaire, très tolérante et résistante.",
        arrosage: "1 fois tous les 10 jours",
        ensoleillement: "Lumière indirecte faible à modérée",
    },
    {
        id: 3,
        nom: "Cactus",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7159917/pexels-photo-7159917.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Idéal pour les débutants, peu exigeant avec de longues périodes sans eau.",
        arrosage: "1 fois par mois",
        ensoleillement: "Lumière directe forte",
    },
    {
        id: 4,
        nom: "Succulent",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Petites plantes avec des feuilles épaisses et charnues.",
        arrosage: "1 fois toutes les 3 semaines",
        ensoleillement: "Lumière forte",
    },
    {
        id: 5,
        nom: "Sansevieria",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/2718447/pexels-photo-2718447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Plante à croissance lente qui purifie l'air.",
        arrosage: "1 fois par mois",
        ensoleillement: "Lumière indirecte ou faible",
    },
    {
        id: 6,
        nom: "Zamioculcas Zamiifolia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Aussi connue sous le nom de plante ZZ, elle est très résistante et demande peu d'entretien.",
        arrosage: "1 fois toutes les 2 semaines",
        ensoleillement: "Faible lumière ou lumière indirecte",
    },

    {
        id: 7,
        nom: "Calathea",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/15823272/pexels-photo-15823272/free-photo-of-green-leaves-in-garden.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante au feuillage décoratif, parfaite pour les endroits ombragés.",
        arrosage: "2 fois par semaine",
        ensoleillement: "Lumière indirecte faible",
    },
    {
        id: 8,
        nom: "Dracaena Marginata",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4503822/pexels-photo-4503822.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Arbuste d'intérieur élégant et facile à entretenir.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 9,
        nom: "Anthurium",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/7291906/pexels-photo-7291906.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante fleurie avec des couleurs vives, idéale pour apporter une touche de nature.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 10,
        nom: "Maranta Leuconeura",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4590439/pexels-photo-4590439.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Appelée aussi 'plante prieuse', elle a des feuilles magnifiques qui bougent en fonction de la lumière.",
        arrosage: "2 fois par semaine",
        ensoleillement: "Lumière indirecte faible",
    },
    {
        id: 11,
        nom: "Peperomia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/11705901/pexels-photo-11705901.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante compacte avec des feuilles épaisses et une grande variété de formes et de couleurs.",
        arrosage: "1 fois tous les 10 jours",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 12,
        nom: "Fittonia",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4750335/pexels-photo-4750335.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Surnommée la plante 'nerveuse', elle est connue pour ses motifs colorés sur les feuilles.",
        arrosage: "2 à 3 fois par semaine",
        ensoleillement: "Lumière indirecte faible à modérée",
    },
    {
        id: 13,
        nom: "Chlorophytum Comosum",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/4457654/pexels-photo-4457654.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Connue comme 'plante araignée', elle est facile à entretenir et produit de longues tiges avec de petits rejets.",
        arrosage: "1 fois par semaine",
        ensoleillement: "Lumière indirecte modérée",
    },
    {
        id: 14,
        nom: "Alocasia Amazonica",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/9707478/pexels-photo-9707478.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Plante spectaculaire avec des feuilles en forme de flèche et des veines marquées.",
        arrosage: "1 à 2 fois par semaine",
        ensoleillement: "Lumière indirecte forte",
    },
    {
        id: 15,
        nom: "Aspidistra Elatior",
        type: "intérieur",
        photo: "https://images.pexels.com/photos/18444673/pexels-photo-18444673/free-photo-of-potted-plant-standing-on-a-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
            "Surnommée la 'plante de fer', elle est presque indestructible et tolère des conditions difficiles.",
        arrosage: "1 fois toutes les 2 semaines",
        ensoleillement: "Faible lumière ou lumière indirecte",
    },
];

export default PlanteInt;
