import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentDetails = () => {
  const navigate = useNavigate();

  // State variables for payment details
  const [cardNumber, setCardNumber] = useState('');
  const [ammount, setAmmount] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');

  // State variables for OTP flow
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');

  // Called when the payment details form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Generate a random 6-digit OTP as a string
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Generated OTP for ${email}: ${otp}`);
    setGeneratedOtp(otp);
    setOtpSent(true);

    // Call the backend API to send the OTP email
    try {
      const response = await fetch('http://localhost:3001/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp, ammount })
      });
      const data = await response.json();
      if (response.ok) {
        alert(`OTP has been sent to ${email}`);
      } else {
        alert(`Failed to send OTP: ${data.error}`);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('There was an error sending the OTP. Please try again.');
    }
  };

  // Called on every change in the OTP input field
  const handleOtpChange = (e) => {
    const otpValue = e.target.value;
    setEnteredOtp(otpValue);

    // If the entered OTP reaches the same length as the generated one, verify it
    if (otpValue.length === generatedOtp.length) {
      if (otpValue === generatedOtp) {
        // OTP verified: route to the payment success page
        navigate('/success');
        // alert('Payment successful!');
      } else {
        alert('Incorrect OTP. Please try again.');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <h2>Enter Payment Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" title="Enter a valid email address to receive the OTP">
              Email:
            </label>
            <input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          {/* Ammount Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="ammount" title="Enter an ammount to pay">
            Payment Amount (₹):
            </label>
            <input 
              id="ammount"
              type="number"
              value={ammount}
              onChange={(e) => setAmmount(e.target.value)}
              placeholder="example@mail.com"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          {/* Card Number Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="cardNumber" title="Enter your 16-digit debit card number">
              Card Number:
            </label>
            <input 
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234567890123456"
              pattern="\d{16}"
              title="Card number must be 16 digits"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          {/* Expiry Date Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="expiry" title="Enter the expiry date in MM/YY format">
              Expiry Date (MM/YY):
            </label>
            <input 
              id="expiry"
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              pattern="(0[1-9]|1[0-2])\/\d{2}"
              title="Enter a valid expiry date (MM/YY)"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          {/* CVV Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="cvv" title="Enter the 3-digit CVV from the back of your card">
              CVV:
            </label>
            <input 
              id="cvv"
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              pattern="\d{3}"
              title="CVV must be 3 digits"
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Submit Payment Details
          </button>
        </form>

        {/* Display OTP input field if the OTP has been "sent" */}
        {otpSent && (
          <div style={{ marginTop: '20px' }}>
            <h3>Enter the OTP sent to your email</h3>
            <input 
              type="text"
              value={enteredOtp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              title="Enter the 6-digit OTP you received"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;
