package com.pounct.FullSSpring.services;

import com.pounct.FullSSpring.entities.Mot;
import com.pounct.FullSSpring.repositories.MotRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;
@BrowserCallable
@AnonymousAllowed
public class MotCRUDService extends CrudRepositoryService<Mot,Long, MotRepository> {
}
