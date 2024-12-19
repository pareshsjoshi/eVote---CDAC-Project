package com.eVote.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.eVote.dto.FeedbackDTO;
import com.eVote.entity.Feedback;
import com.eVote.entity.Users;
import com.eVote.repository.FeedbackRepository;
import com.eVote.repository.UsersRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor // Lombok will generate the constructor for us
public class FeedbackServiceImpl implements FeedbackService {

	private final FeedbackRepository feedbackRepository;
	
	@Autowired
	UsersRepository userDao;

	@Override
	public List<Feedback> getAllFeedbacks() {
		return feedbackRepository.findAll();
	}

	@Override
	public Feedback getFeedbackById(Integer id) {
		Optional<Feedback> findById = feedbackRepository.findById(id);
		return findById.orElse(null);
	}

	@Override
	public Feedback saveFeedback(@Valid FeedbackDTO feedbackDTO /* , BindingResult bindingResult */) {
//		if (bindingResult.hasErrors()) {
//			// Gather error messages
//			StringBuilder errors = new StringBuilder();
//			bindingResult.getAllErrors().forEach(error -> errors.append(error.getDefaultMessage()).append("; "));
//			throw new IllegalArgumentException("Validation errors: " + errors.toString());
//		}
		Users user = userDao.findById(feedbackDTO.getAadhar_number())
				.orElseThrow(()->new RuntimeException("User Not Found"));
		Feedback feedback = new Feedback(feedbackDTO.getMessage(),user);
				return feedbackRepository.save(feedback);
	}

	@Override
	public void deleteFeedback(Integer id) {
		feedbackRepository.deleteById(id);
	}
}
