package com.pounct.FullSSpring.entities;

import com.pounct.FullSSpring.converters.MapToStringConverter;
import jakarta.persistence.*;
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
    @Convert(converter = MapToStringConverter.class)
    private Map<String,String> consonneVoyelle;

}
