package com.pounct.FullSSpring.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Alphabet {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private char symbol;
    private int position;
    private String[] sorties;
}
