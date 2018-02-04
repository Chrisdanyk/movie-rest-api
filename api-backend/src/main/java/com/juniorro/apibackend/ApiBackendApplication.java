package com.juniorro.apibackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.juniorro.apibackend.service.UserService;


@SpringBootApplication
public class ApiBackendApplication implements CommandLineRunner {
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(ApiBackendApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		
		/*creating some users -- when running app for the 1st time,
		 * make sure the code below is not commented
		 */
		
		/*User user1 = new User();
		user1.setFirstName("Roland Junior");
		user1.setLastName("Toussaint");
		user1.setUsername("juniorro");
		user1.setPassword(SecurityUtility.passwordEncoder().encode("lol"));
		user1.setEmail("juniorro98@outlook.com");
		Set<UserRole> userRoles = new HashSet<>();
		Role role1 = new Role();
		role1.setRoleId(1);
		role1.setName("ROLE_ADMIN");
		userRoles.add(new UserRole(user1, role1));
		
		userService.createUser(user1, userRoles);
		
		userRoles.clear();
		
		User user2 = new User();
		user2.setFirstName("Admin");
		user2.setLastName("Admin");
		user2.setUsername("admin");
		user2.setPassword(SecurityUtility.passwordEncoder().encode("p"));
		user2.setEmail("Admin@gmail.com");
		Role role2 = new Role();
		role2.setRoleId(2);
		role2.setName("ROLE_ADMIN");
		userRoles.add(new UserRole(user2, role2));
		
		userService.createUser(user2, userRoles);*/
		
	}
}
