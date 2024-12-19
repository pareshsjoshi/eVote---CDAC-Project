package com.eVote.service;

import java.util.List;

import org.springframework.validation.BindingResult;

import com.eVote.dto.FeedbackDTO;
import com.eVote.entity.Feedback;

public interface FeedbackService {

	List<Feedback> getAllFeedbacks();

	Feedback getFeedbackById(Integer id);

	Feedback saveFeedback(FeedbackDTO feedback/* , BindingResult bindingResult */);

	void deleteFeedback(Integer id);
}
