package com.juniorro.apibackend.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juniorro.apibackend.domain.User;


public interface UserRepo extends CrudRepository<User, Long> {
	User findByUsername(String username);

	User findByEmail(String email);

	List<User> findAll();
}
