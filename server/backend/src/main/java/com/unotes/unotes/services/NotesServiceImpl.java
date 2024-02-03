package com.unotes.unotes.services;

import com.unotes.unotes.repositories.NoteRepository;
import org.springframework.stereotype.Service;

@Service
public class NotesServiceImpl implements INotesService{
    NoteRepository noteRepository;

}
