package com.pounct.FullSSpring.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
@BrowserCallable
@AnonymousAllowed
public class LLMChatService {
    private final ChatClient chatClient;

    public LLMChatService(ChatClient.Builder chatClient) {
        this.chatClient = chatClient.build();
    }
    public String chat(String question){
        return chatClient.prompt()
                .user(question)
                .call().content();
    }
}
