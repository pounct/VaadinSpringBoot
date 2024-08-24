package com.pounct.FullSSpring;

import com.pounct.FullSSpring.entities.Mot;
import com.pounct.FullSSpring.repositories.MotRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class DBInit implements ApplicationRunner {
    private final MotRepository motRepository;

    public DBInit(MotRepository motRepository) {
        this.motRepository = motRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        for (int i=0;i<20;i++) {
            Map<String, String> consonneVoyelle = new HashMap<>();
            consonneVoyelle.put("s", "");
            consonneVoyelle.put("q", "ue");
            Mot mot = Mot.builder()
                    .mot("mot"+i)
                    .esqueleto("esqueleto"+i)
                    .consonneVoyelle(consonneVoyelle)
                    .build();
            motRepository.save(mot);
        }
    }
}
