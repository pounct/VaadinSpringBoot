import React, { useState } from 'react';
        import { Button, TextField } from "@vaadin/react-components";
        import { LLMChatService } from "../generated/endpoints";

        export default function LlmChat() {
        const [question, setQuestion] = useState<string>("");
    const [response, setResponse] = useState<string>("");

        async function sendMessage() {
        try {
        const chatResponse = await LLMChatService.chat(question);
        if (chatResponse !== undefined) {
        setResponse(chatResponse);
        } else {
        setResponse("Aucune réponse reçue.");
        }
        } catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
        setResponse("Une erreur s'est produite. Veuillez réessayer.");
        }
        }

        return (
        <div>
            <div className="p-m">
                <h1>Chat Bot</h1>
                <TextField
                        style={{ width: '60%' }}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                />
                <Button onClick={sendMessage}>Send</Button>
        </div>
        <div>
            <p>{response}</p>
        </div>
    </div>
    );
    }
