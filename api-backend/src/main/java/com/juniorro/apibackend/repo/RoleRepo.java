package com.juniorro.apibackend.repo;

import org.springframework.data.repository.CrudRepository;

import com.juniorro.apibackend.domain.security.Role;



public interface RoleRepo extends CrudRepository<Role, Long> {

}
