package com.pounct.FullSSpring.repositories;

import com.pounct.FullSSpring.entities.Alphabet;
import com.pounct.FullSSpring.entities.Mot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlphabetRepository extends JpaRepository<Alphabet,Long> {
}
