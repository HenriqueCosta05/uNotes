package com.unotes.unotes.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="note")
public class Note {
    @Id
    @JsonProperty(value = "id")
    @Column(name="id", columnDefinition = "serial")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonProperty(value = "Title")
    @Column(name="title")
    private String title;

    @JsonProperty(value = "Content")
    @Column(name="content")
    private String content;

    @JsonProperty(value = "Author")
    @Column(name="author")
    @JoinTable(name= "user")
    @JoinColumn(name="username")
    private String author;

    @JsonProperty(value = "Created_at")
    @Column(name="created_at")
    private LocalDateTime createdAt;
}
