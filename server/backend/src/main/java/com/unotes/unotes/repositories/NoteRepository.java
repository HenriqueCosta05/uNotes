package com.unotes.unotes.repositories;

import com.unotes.unotes.models.Note;
import com.unotes.unotes.models.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends UserRepository<User, Integer> {
    List<Note> listNotesByUser(User user);
    boolean findNoteById(Integer id);
    Note createNote(User user);
    Note updateNote(Integer id);
    void deleteNote(Integer id);

}
