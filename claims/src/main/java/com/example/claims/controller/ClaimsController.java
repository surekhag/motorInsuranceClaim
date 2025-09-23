package com.example.claims.controller;

import com.example.claims.model.Claims;
import com.example.claims.service.ClaimsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/claims")
public class ClaimsController {
    private final ClaimsService claimsService;

    public ClaimsController(ClaimsService claimsService) {
        this.claimsService = claimsService;
    }

    @PostMapping
    public ResponseEntity<Claims> createClaim(@RequestBody Claims claim) {
        // Logic to create a claim
        
        return ResponseEntity.ok(claim);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Claims> getClaim(@PathVariable Long id) {
        // Logic to get a claim by ID
        return ResponseEntity.ok(new Claims());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Claims> updateClaim(@PathVariable Long id, @RequestBody Claims claim) {
        // Logic to update a claim
        return ResponseEntity.ok(claim);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClaim(@PathVariable Long id) {
        // Logic to delete a claim
        return ResponseEntity.noContent().build();
    }       
}
