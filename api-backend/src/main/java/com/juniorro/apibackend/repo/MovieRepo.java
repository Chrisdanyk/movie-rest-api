package com.juniorro.apibackend.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.juniorro.apibackend.domain.Movie;



public interface MovieRepo extends CrudRepository<Movie, Long>{
	List<Movie> findByTitle(String title);
}
