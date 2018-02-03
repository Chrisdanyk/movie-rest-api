package com.juniorro.apibackend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.juniorro.apibackend.domain.Movie;
import com.juniorro.apibackend.repo.MovieRepo;
import com.juniorro.apibackend.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepo movieRepo;

	public List<Movie> findAll() {
		List<Movie> computerList = (List<Movie>) movieRepo.findAll();
		return computerList;
	}

	public Movie findOne(Long id) {
		return movieRepo.findOne(id);
	}

	public Movie save(Movie movie) {
		return movieRepo.save(movie);
	}

	public List<Movie> searchByTitle(String title) {
		List<Movie> movies = movieRepo.findByTitle(title);
		return movies;
	}

	public void removeOne(Long id) {
		movieRepo.delete(id);
	}
}
