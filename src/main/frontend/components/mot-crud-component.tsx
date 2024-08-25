import React from 'react';
import { AutoCrud } from '@vaadin/hilla-react-crud';
        import MotModel from '../generated/com/pounct/FullSSpring/entities/MotModel';
        import { MotCRUDService } from "../generated/endpoints";

export default function MotCrudComponent(){
        return(
<AutoCrud
        service={MotCRUDService}
        model={MotModel}
        ></AutoCrud>
        );
        }