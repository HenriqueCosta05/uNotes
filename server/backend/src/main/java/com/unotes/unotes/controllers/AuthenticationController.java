package com.unotes.unotes.controllers;

import com.unotes.unotes.models.AuthenticationResponse;
import com.unotes.unotes.models.User;
import com.unotes.unotes.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("**")
@RestController
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @GetMapping("/auth/login")
    public ResponseEntity<AuthenticationResponse> login (
            @RequestBody User request
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

}
