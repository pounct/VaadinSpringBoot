import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type Mot_1 from "./com/pounct/FullSSpring/entities/Mot.js";
import client_1 from "./connect-client.default.js";
async function getAllmots_1(init?: EndpointRequestInit_1): Promise<Array<Mot_1 | undefined> | undefined> { return client_1.call("MotService", "getAllmots", {}, init); }
async function saveMot_1(mot: Mot_1 | undefined, init?: EndpointRequestInit_1): Promise<Mot_1 | undefined> { return client_1.call("MotService", "saveMot", { mot }, init); }
export { getAllmots_1 as getAllmots, saveMot_1 as saveMot };
