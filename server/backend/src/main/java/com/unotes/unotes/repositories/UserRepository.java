package com.unotes.unotes.repositories;

import liquibase.database.core.MySQLDatabase;

import java.util.Optional;

public interface UserRepository<User, Integer> {

    Optional<User> findById (Integer id);

    boolean existsByEmail(String email);

    User findByEmail(String email);

    void deleteByEmail(String email);

}
