import React, { useState } from 'react';
        import { Button, TextField } from "@vaadin/react-components";
        import Markdown from 'react-markdown';
        import { LLMChatService } from "../generated/endpoints";

        export default function LlmChat() {
        const [question, setQuestion] = useState<string>("");
    const [response, setResponse] = useState<string>("");

        async function sendMessage() {
        try {
        LLMChatService.chat(question).onNext(item => setResponse(chatResponse => chatResponse + item));
        } catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
        }
        }

        return (
        <div className="p-m">
            <div className="p-m">
                <h1>Chat Bot</h1>
                <TextField
                        style={{ width: '70%' }}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                />
                <Button onClick={sendMessage}>Send</Button>
        </div>
        <div className="p-m">
            <Markdown>{response}</Markdown>
        </div>
    </div>
    );
    }
