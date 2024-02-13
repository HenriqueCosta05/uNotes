package com.unotes.unotes.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="roles")
public class Role implements GrantedAuthority {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "role_id")
    private Integer roleId;

    @Getter
    @Setter
    private String authority;

    public Role(String authority){
        this.authority = authority;
    }


}
