package com.eVote.controller;

import com.eVote.dto.FeedbackDTO;
import com.eVote.entity.Feedback;
import com.eVote.service.FeedbackService;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")  // Updated to /feedback
@CrossOrigin(origins = "https://fluffy-enigma-w4vvpg6jgrr3g4qg-5173.app.github.dev")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping("feedback")
    public ResponseEntity<List<FeedbackDTO>> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackService.getAllFeedbacks();
        List<FeedbackDTO> feedbackDTOs = feedbacks.stream()
                .map(FeedbackDTO::fromEntity)
                .toList();
        return ResponseEntity.ok(feedbackDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FeedbackDTO> getFeedbackById(@PathVariable Integer id) {
        Feedback feedback = feedbackService.getFeedbackById(id);
        return feedback != null 
            ? ResponseEntity.ok(FeedbackDTO.fromEntity(feedback)) 
            : ResponseEntity.notFound().build();
    }

//    @PostMapping
//	public ResponseEntity<FeedbackDTO> saveFeedback(
//			@Valid @RequestBody FeedbackDTO feedbackDTO/* , BindingResult bindingResult */) {
////        if (bindingResult.hasErrors()) {
////            // Handle validation errors
////            return ResponseEntity.badRequest().body(null);
////        }
//		Feedback savedFeedback = feedbackService.saveFeedback(feedbackDTO.toEntity()/* , bindingResult */);
//        return ResponseEntity.ok(FeedbackDTO.fromEntity(savedFeedback));
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable Integer id) {
        feedbackService.deleteFeedback(id);
        return ResponseEntity.noContent().build();
    }
}

@RestController
@RequestMapping("/feedback")  // Updated to /feedback
@CrossOrigin(origins = "https://fluffy-enigma-w4vvpg6jgrr3g4qg-5173.app.github.dev")
class FeedbackControllerVoter {

    @Autowired
    private FeedbackService feedbackService;
    
    @PostMapping
 	public ResponseEntity<?> saveFeedback(
 			@Valid @RequestBody FeedbackDTO feedbackDTO/* , BindingResult bindingResult */) {
//         if (bindingResult.hasErrors()) {
//             // Handle validation errors
//             return ResponseEntity.badRequest().body(null);
//         }
//    	System.out.println(feedbackDTO);
 		Feedback savedFeedback = feedbackService.saveFeedback(feedbackDTO/* , bindingResult */);
         return ResponseEntity.ok(savedFeedback);
     }
}

