package com.example.claims.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import com.example.claims.model.Claims;

public class ClaimsServiceImpl implements ClaimsService {
    
    private final ConcurrentHashMap<Long, Claims> store = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(0);

@Override
    public List<Claims> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public Optional<Claims> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Claims create(Claims claim) {
        long id = idGenerator.incrementAndGet();
        claim.setId(id);
        store.put(id, claim);
        return claim;
    }

    @Override
    public Optional<Claims> update(Long id, Claims Claims) {
        return Optional.ofNullable(store.computeIfPresent(id, (k, existing) -> {
            return existing;
        }));
    }

    @Override
    public boolean delete(Long id) {
        return store.remove(id) != null;
    }
}
