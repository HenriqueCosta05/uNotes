package com.unotes.unotes.dtos;

import com.unotes.unotes.models.Note;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Integer id;
    private String username;
    private String email;
    private String phoneNumber;
    private String password;
    private Integer notesCreated;
    private List<Note> noteList;
}
