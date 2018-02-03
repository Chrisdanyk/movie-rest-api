package com.juniorro.apibackend.service;

import java.util.List;

import com.juniorro.apibackend.domain.Movie;


public interface MovieService {

	List<Movie> findAll();

	Movie findOne(Long id);

	Movie save(Movie movie);

	List<Movie> searchByTitle(String title);

	void removeOne(Long id);
}
