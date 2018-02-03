package com.juniorro.apibackend.service;

import java.util.Set;

import com.juniorro.apibackend.domain.User;
import com.juniorro.apibackend.domain.security.UserRole;


public interface UserService {

	User createUser(User user, Set<UserRole> userRoles);

}
