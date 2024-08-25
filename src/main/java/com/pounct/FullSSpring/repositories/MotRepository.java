package com.pounct.FullSSpring.repositories;

import com.pounct.FullSSpring.entities.Mot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface MotRepository extends JpaRepository<Mot, Long>, JpaSpecificationExecutor<Mot> {
}
