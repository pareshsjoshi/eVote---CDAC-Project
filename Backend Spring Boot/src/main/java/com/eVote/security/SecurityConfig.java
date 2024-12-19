//package com.eVote.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//	@Bean
//	public SecurityFilterChain securityFilter(HttpSecurity http) throws Exception{
//		
//		http.authorizeHttpRequests((request) -> request
//				.requestMatchers("/", "/polls/**", "/swagger-ui/**").permitAll()
//				.anyRequest().authenticated()
//		).formLogin();
//		
//		return http.build();
//	} 
////	public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception
////	{
////		http.csrf(customizer -> customizer.disable()) //disabled CSRF attack
////        .authorizeHttpRequests
////        (request -> 
////        request.requestMatchers("/products/view",
////        		"/users/signup","/users/signin",
////				"/v*/api-doc*/**","/swagger-ui/**").permitAll()
////        	
////       .requestMatchers("/products/purchase/**").hasRole("CUSTOMER")
////       .requestMatchers("/products/add","/products/delete")
////       .hasRole("ADMIN")        		
////        .anyRequest().authenticated())  //any other REMAINING request can be only accessible to logged in users
////        .httpBasic(Customizer.withDefaults())
////        .sessionManagement(session 
////        		-> session.sessionCreationPolicy(
////        				SessionCreationPolicy.STATELESS));
////        return http.build();
////	}
//}
