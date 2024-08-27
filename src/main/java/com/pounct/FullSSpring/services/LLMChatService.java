package com.pounct.FullSSpring.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
import reactor.core.publisher.Flux;

@BrowserCallable
@AnonymousAllowed
public class LLMChatService {
    private final ChatClient chatClient;

    public LLMChatService(ChatClient.Builder chatClient) {
        this.chatClient = chatClient.build();
    }
    public Flux<String> chat(String question){
        return chatClient.prompt()
                .user(question)
                .stream().content();
    }
}
