package com.unotes.unotes.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class NoteDTO {
    private int id;
    private String title;
    private String content;
    private String author;
    private LocalDateTime createdAt;

    public NoteDTO(String title, String content, String author, LocalDateTime createdAt) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
    }

    // Getters and Setters
}
