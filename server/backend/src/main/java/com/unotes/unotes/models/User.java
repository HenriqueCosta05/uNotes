package com.unotes.unotes.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Embeddable
@Entity
@AllArgsConstructor
@Getter
@Setter
@Table(name="user")

public class User implements UserDetails {
    @Id
    @JsonProperty(value = "Id")
    @Column(name="id", columnDefinition = "serial")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonProperty(value="Username")
    @Column(name="username", unique = true)
    private String username;

    @JsonProperty(value="name")
    @Column(name="name")
    private String fullName;
    
    @JsonProperty(value="Email")
    @Column(name="email", unique = true)
    private String email;

    @JsonProperty(value="PhoneNumber")
    @Column(name="phone_number")
    private String phone;

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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name="user_role_junction",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name="role_id")}
    )

    private Set<Role> authorities;

    public User() {
        super();
        this.authorities = new HashSet<Role>();
    }

    public User(String username, String name, String phoneNumber, String email, String password, int numofNotes, Set<Role> roles) {
        this.username = username;
        this.fullName = name;
        this.phone = phoneNumber;
        this.email = email;
        this.password = password;
        this.notesCreated = numofNotes;
        this.authorities = roles;
    }

    public User(String username, String password, Set<Role> roles) {
        this.username = username;
        this.password = password;
        this.authorities = roles;
    }

    public User(int userId, String username, String password, Set<Role> roles) {
        this.id = userId;
        this.username = username;
        this.password = password;
        this.authorities = roles;
    }

    public User(String fullName, String username, String email, String phone, String encodedPassword, Set<Role> authorities) {
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = encodedPassword;
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
