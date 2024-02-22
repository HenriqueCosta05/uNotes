package com.unotes.unotes.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Embeddable
@Entity
@AllArgsConstructor
@NoArgsConstructor
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


    @Enumerated(value = EnumType.STRING)
    private Role role;

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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
}
