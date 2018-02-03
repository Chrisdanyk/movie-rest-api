package com.juniorro.apibackend.config;

import java.security.SecureRandom;
import java.util.Random;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class SecurityUtility {
	
	private static final String ENCODER = "RYQLdJQbKOS1uunhZv3uK1NpXkJgETgBiY"; 
	
	@Bean
	public static BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(12, new SecureRandom(ENCODER.getBytes()));
	}
	
	@Bean
	public static String randomPassword() {
		String SENCODERCHARS = "RYQ2LdJQbKvOS1uE1kZis4Ja9LhOppZf3dlyIUNYj7unhZv3uK1NpXkJgETgBiY";
		StringBuilder stringBuilder = new StringBuilder();
		Random rnd = new Random();
		
		while(stringBuilder.length() < 18) {
			int index = (int) (rnd.nextFloat() * SENCODERCHARS.length());
			stringBuilder.append(SENCODERCHARS.charAt(index));
		}
		
		String encoderString = stringBuilder.toString();
		return encoderString;
	}
}
