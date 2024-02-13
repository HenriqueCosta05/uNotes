package com.unotes.unotes.services;

import com.unotes.unotes.dtos.RegistrationDTO;
import com.unotes.unotes.dtos.UserDTO;
import com.unotes.unotes.models.Role;
import com.unotes.unotes.models.User;
import com.unotes.unotes.repositories.RoleRepository;
import com.unotes.unotes.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(String fullName, String username, String email, String phone, String password, Set<Role> authorities) {

        String encodedPassword = passwordEncoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();

        authorities.add(userRole);

        return userRepository.save(new User(fullName, username, email, phone, encodedPassword, authorities));
    }
}
