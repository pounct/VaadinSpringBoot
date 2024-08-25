import React, { useState, useEffect } from 'react';
        import { MotService } from "../generated/endpoints";  // Vérifiez que ce chemin est correct
        import { Mot } from "../generated/models";  // Assurez-vous que ce chemin est correct et que Mot est bien exporté

        export default function MotComponent() {
        const [mots, setMots] = useState<Mot[]>([]);

        useEffect(() => {
        MotService.getAllmots().then((resp) => {  // Utilisez le bon nom de méthode
        setMots(resp);
        });
        }, []);

        return (
<div>
<h1>Mot List</h1>
{/* Ajoutez un rendu des mots */}
<ul>
    {mots.map(mot => (
    <li key={mot.id}>{mot.esqueleto} {mot.mot}</li>
))}
</ul>
        </div>
        );
        }