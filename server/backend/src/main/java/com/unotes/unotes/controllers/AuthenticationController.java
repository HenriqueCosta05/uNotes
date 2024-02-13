package com.unotes.unotes.controllers;

import com.unotes.unotes.dtos.RegistrationDTO;
import com.unotes.unotes.models.User;
import com.unotes.unotes.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(value = "**")

public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public User registerUser(@RequestBody RegistrationDTO user) {
        return authenticationService.registerUser(user.getFullName(), user.getUsername(), user.getEmail(), user.getPhone(), user.getPassword(), user.getAuthority());
    }
}
