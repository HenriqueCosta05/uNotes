package com.unotes.unotes.controllers;

import com.unotes.unotes.models.User;
import com.unotes.unotes.services.NotesServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {

    private NotesServiceImpl notesService;
    @GetMapping("/my-notes/{username}")
    public String getAllNotes(User user) {
    }
}
