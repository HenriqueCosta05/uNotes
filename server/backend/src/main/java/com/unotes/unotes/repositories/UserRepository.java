package com.unotes.unotes.repositories;

import com.unotes.unotes.models.Role;
import com.unotes.unotes.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    boolean existsByEmail(String email);

    User findByEmail(String email);

    void deleteByEmail(String email);

}
