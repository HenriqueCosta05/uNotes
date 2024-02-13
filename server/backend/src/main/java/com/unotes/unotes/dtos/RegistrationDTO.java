package com.unotes.unotes.dtos;

import com.unotes.unotes.models.Role;
import lombok.*;

import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationDTO {
    private Set<Role> Authority;

    private String fullName;

    private String username;

    private String email;

    private String phone;

    private String password;

    @Override
    public String toString() {
        return "Registration Info" +
                "fullName='" + fullName + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
