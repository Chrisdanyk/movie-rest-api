package com.juniorro.apibackend.service.impl;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.juniorro.apibackend.domain.User;
import com.juniorro.apibackend.domain.security.UserRole;
import com.juniorro.apibackend.repo.RoleRepo;
import com.juniorro.apibackend.repo.UserRepo;
import com.juniorro.apibackend.service.UserService;


@Service
public class UserServiceImpl implements UserService {
	
	private static final Logger LOG = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Transactional
	public User createUser(User user, Set<UserRole> userRoles) {
		User localUser = userRepo.findByUsername(user.getUsername());		
		if(localUser != null) {
			LOG.info("User with username {} already exist. Nothing will be done. ", user.getUsername());
		} else {
			for (UserRole ur : userRoles) {
				roleRepo.save(ur.getRole());
			}			
			user.getUserRoles().addAll(userRoles);			
			localUser = userRepo.save(user);
		}		
		return localUser;
	}
}
