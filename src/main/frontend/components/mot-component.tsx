import React, { useState, useEffect } from 'react';
        import { DataGrid } from '@mui/x-data-grid';
        import { MotService } from "../generated/endpoints";
        import Mot from "generated/com/pounct/FullSSpring/entities/Mot";


        export default function MotComponent() {
        const [mots, setMots] = useState<(Mot | undefined)[]>([]);

        useEffect(() => {
        MotService.getAllMots().then((resp) => {
        if (resp) {
        setMots(resp);
        }
        }).catch(error => {
        console.error("Erreur lors de la récupération des mots:", error);
        });
        }, []);

        return (
<div>
<h1>Mot List</h1>
<DataGrid
        rows={mots.filter((mot): mot is Mot => mot !== undefined)}
columns={[{ field: 'id' }, { field: 'mot' }, { field: 'esqueleto' }]}
/>
</div>
        );
        }