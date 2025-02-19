// Java Program to Illustrate Creation Of
// Service Interface

package com.eVote.service;

// Importing required classes
import com.eVote.entity.EmailDetails;

// Interface
public interface EmailService {

    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
}
