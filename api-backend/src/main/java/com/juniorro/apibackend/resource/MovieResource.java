package com.juniorro.apibackend.resource;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.juniorro.apibackend.domain.Movie;
import com.juniorro.apibackend.service.MovieService;

@RestController
@RequestMapping("/movie")
public class MovieResource {

	@Autowired
	private MovieService movieService;

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Movie saveMovie(@RequestBody Movie movie) {
		return movieService.save(movie);
	}

	@RequestMapping("/movieList")
	public List<Movie> getMovieList() {
		return movieService.findAll();
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public Movie updateMovie(@RequestBody Movie movie) {
		return movieService.save(movie);
	}

	@RequestMapping(value = "/remove", method = RequestMethod.POST)
	public ResponseEntity removeMovie(@RequestBody String id) throws IOException {
		String fileName = id + ".png";
		Files.delete(Paths.get("src/main/resources/static/image/computer/" + fileName));
		movieService.removeOne(Long.parseLong(id));
		return new ResponseEntity("Remove Success!", HttpStatus.OK);
	}

	@RequestMapping("/{id}")
	public Movie getMovie(@PathVariable("id") Long id) {
		Movie Movie = movieService.findOne(id);
		return Movie;
	}

	@RequestMapping(value = "/image", method = RequestMethod.POST)
	public ResponseEntity uploadImage(@RequestParam("movieId") Long movieId, HttpServletResponse response,
			HttpServletRequest request) {
		try {
			Movie movie = movieService.findOne(movieId);
			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			Iterator<String> it = multipartRequest.getFileNames();
			MultipartFile multipartFile = multipartRequest.getFile(it.next());
			String fileName = movieId+".png";
			byte[] bytes = multipartFile.getBytes();
			BufferedOutputStream stream = new BufferedOutputStream(
					new FileOutputStream(new File("src/main/resources/static/image/movie/"+fileName)));
			stream.write(bytes);
			stream.close();
			return new ResponseEntity("File Uploaded Successfully!", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity("File Upload Failed!", HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value = "/update/image", method = RequestMethod.POST)
	public ResponseEntity updateImage(@RequestParam("movieId") Long movieId, HttpServletResponse response,
			HttpServletRequest request) {
		try {
			Movie movie = movieService.findOne(movieId);
			MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
			Iterator<String> it = multipartRequest.getFileNames();
			MultipartFile multipartFile = multipartRequest.getFile(it.next());
			String fileName = movieId+".png";
			Files.delete(Paths.get("src/main/resources/static/image/movie/"+fileName));
			byte[] bytes = multipartFile.getBytes();
			BufferedOutputStream stream = new BufferedOutputStream(
					new FileOutputStream(new File("src/main/resources/static/image/movie/"+fileName)));
			stream.write(bytes);
			stream.close();
			return new ResponseEntity("File Uploaded Successfully!", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity("File Upload Failed!", HttpStatus.BAD_REQUEST);
		}
	}

}
