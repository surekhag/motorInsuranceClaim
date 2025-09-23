package com.example.claims.service;

import java.util.List;
import java.util.Optional;

import com.example.claims.model.Claims;

public interface ClaimsService {
    List<Claims> findAll();
    Optional<Claims> findById(Long id);
    Claims create(Claims claims);
    Optional<Claims> update(Long id, Claims claims);
    boolean delete(Long id);
}
