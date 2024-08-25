package com.pounct.FullSSpring.services;

import com.pounct.FullSSpring.entities.Mot;
import com.pounct.FullSSpring.repositories.MotRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class MotService {
    private MotRepository motRepository;

    public MotService(MotRepository motRepository) {
        this.motRepository = motRepository;
    }

    public List<Mot> getAllMots(){
        return motRepository.findAll();
    }

    public  Mot saveMot(Mot mot){
        return motRepository.save(mot);
    }
}
