package com.unotes.unotes.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
@Embeddable
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="user")

public class User {
    @Id
    @JsonProperty(value = "Id")
    @Column(name="id", columnDefinition = "serial")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonProperty(value="Username")
    @Column(name="username")
    private String username;

    @JsonProperty(value="Email")
    @Column(name="email")
    private String email;

    @JsonProperty(value="PhoneNumber")
    @Column(name="phone_number")
    private String phoneNumber;

    @JsonProperty(value="Password")
    @Column(name="password")
    private String password;

    @JsonProperty(value="Notes_created")
    @Column(name="notes_created")
    private Integer notesCreated;

    @JsonProperty(value = "NotesList")
    @JoinColumn(name= "user_id")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Note> noteList = new ArrayList<>();

}
