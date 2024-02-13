package com.unotes.unotes;

import com.unotes.unotes.models.Role;
import com.unotes.unotes.models.User;
import com.unotes.unotes.repositories.RoleRepository;
import com.unotes.unotes.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class UnotesApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnotesApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			User admin = new User(1, "Henrique", passwordEncoder.encode("password"), roles);

			userRepository.save(admin);
		};
	}
}
