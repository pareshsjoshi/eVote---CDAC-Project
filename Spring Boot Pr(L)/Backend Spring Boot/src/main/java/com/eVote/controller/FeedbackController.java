package com.eVote.controller;

import com.eVote.dto.FeedbackDTO;
import com.eVote.entity.Feedback;
import com.eVote.service.FeedbackService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/admin")  // Admin endpoints for managing feedback
@CrossOrigin(origins = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // Admin can view all feedback
    @GetMapping("/feedback")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can view all feedback
    public ResponseEntity<List<FeedbackDTO>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        List<FeedbackDTO> feedbackDTOs = feedbacks.stream()
                .map(FeedbackDTO::fromEntity)
                .toList();
        return ResponseEntity.ok(feedbackDTOs);
    }

    // Admin can view feedback by ID
    @GetMapping("/feedback/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can view feedback by ID
    public ResponseEntity<FeedbackDTO> getFeedbackById(@PathVariable Integer id) {
        Feedback feedback = feedbackService.getFeedbackById(id);
        return feedback != null 
            ? ResponseEntity.ok(FeedbackDTO.fromEntity(feedback)) 
            : ResponseEntity.notFound().build();
    }

    // Admin can delete feedback by ID
    @DeleteMapping("/feedback/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can delete feedback
    public ResponseEntity<Void> deleteFeedback(@PathVariable Integer id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.noContent().build();
    }
}

@RestController
@RequestMapping("/feedback")  // User endpoints for submitting feedback
@CrossOrigin(origins = "*")
class FeedbackControllerVoter {

    @Autowired
    private FeedbackService feedbackService;
    
    // Voters can submit feedback
    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER')")  // Only authenticated users can submit feedback
    public ResponseEntity<?> saveFeedback(@Valid @RequestBody FeedbackDTO feedbackDTO) {
        Feedback savedFeedback = feedbackService.saveFeedback(feedbackDTO);
        return ResponseEntity.ok(savedFeedback);
    }
}
