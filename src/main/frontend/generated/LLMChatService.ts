import { Subscription as Subscription_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
function chat_1(question: string | undefined): Subscription_1<string | undefined> { return client_1.subscribe("LLMChatService", "chat", { question }); }
export { chat_1 as chat };
