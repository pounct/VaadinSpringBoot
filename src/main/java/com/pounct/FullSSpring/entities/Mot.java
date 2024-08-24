package com.pounct.FullSSpring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Map;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Mot {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min = 1,max = 20)
    private String mot;
    private String esqueleto;
    private Map<String,String> consonneVoyelle;

}
