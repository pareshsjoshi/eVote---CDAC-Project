


/*import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import stateDistrictData from '../components/StateDistrictMap';  // Add your district data mapping
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

// Validation Schema for the form
const validationSchema = Yup.object().shape({
  aadhar_number: Yup.string()
    .matches(/^[2-9]{1}[0-9]{11}$/, "Aadhar Number must be 12 digits and cannot start with 0 or 1")
    .required("Aadhar Number is required"),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  contact_number: Yup.string()
    .matches(/^\d{10}$/, 'Contact number must be a 10-digit number')
    .required('Contact number is required'),
  dob: Yup.date().required('Date of Birth is required').max(new Date(), 'Date of Birth cannot be in the future'),
  gender: Yup.string().required('Gender is required'),
  address: Yup.string().required('Address is required'),
  state: Yup.string().required('State is required'),
  district: Yup.string().required('District is required'),
  pincode: Yup.string()
    .matches(/^\d{6}$/, 'Pincode must be a 6-digit number')
    .required('Pincode is required'),
});

const RegistrationPage = () => {
  const location = useLocation();
  const role = location.state.message || {}; // Accessing role passed through home or admin pages
  const [selectedState, setSelectedState] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const navigate = useNavigate();
  const trueBool = true;

  const handleStateChange = (e, setFieldValue) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setFieldValue('state', selected);
    setFieldValue('district', ''); // Reset district when state changes
  };

  const handleOtpSend = (email) => {
    // Simulate OTP sending
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
    setOtp(generatedOtp);
    setOtpSent(true);
    setShowOtpField(true);
    alert(`OTP sent to ${email}: ${generatedOtp}`); // In real case, you would call an API to send OTP via email
  };

  const handleOtpSubmit = () => {
    if (enteredOtp === otp.toString()) {
      alert('Registration successful!');
      // Proceed with form submission
      alert('Form Data Submitted:', otp);
      navigate(role === "ADMIN" ? "/admin" : "/");
    } else {
      alert('Invalid OTP, please try again.');
    }
  };

  const initialValues = {
    aadhar_number: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact_number: '',
    dob: '',
    gender: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    role: role,
    isActive: trueBool,
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center mb-4">User/Admin Registration</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              if (!otpSent) {
                handleOtpSend(values.email);
              } else {
                alert('Please verify OTP first.');
              }
            }}
          >
            {({ setFieldValue, values }) => (
              <FormikForm>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Aadhar Number</Form.Label>
                      <Field name="aadhar_number" type="text" className="form-control" />
                      <ErrorMessage name="aadhar_number" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Field name="name" type="text" className="form-control" />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Field name="email" type="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Field name="password" type="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Field name="confirmPassword" type="password" className="form-control" />
                      <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Number</Form.Label>
                      <Field name="contact_number" type="text" className="form-control" />
                      <ErrorMessage name="contact_number" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Field name="dob" type="date" className="form-control" />
                      <ErrorMessage name="dob" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Field as="select" name="gender" className="form-control">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Field name="address" type="text" className="form-control" />
                      <ErrorMessage name="address" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Field as="select" name="state" className="form-control" onChange={(e) => handleStateChange(e, setFieldValue)}>
                        <option value="">Select State</option>
                        {Object.keys(stateDistrictData).map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Field>
                      <ErrorMessage name="state" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>District</Form.Label>
                      <Field as="select" name="district" className="form-control">
                        <option value="">Select District</option>
                        {selectedState && stateDistrictData[selectedState] && stateDistrictData[selectedState].map((district, index) => (
                          <option key={index} value={district}>{district}</option>
                        ))}
                      </Field>
                      <ErrorMessage name="district" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pincode</Form.Label>
                      <Field name="pincode" type="text" className="form-control" />
                      <ErrorMessage name="pincode" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                
                {showOtpField && (
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Enter OTP</Form.Label>
                        <Field
                          name="otp"
                          type="text"
                          className="form-control"
                          onChange={(e) => setEnteredOtp(e.target.value)}
                        />
                        <ErrorMessage name="otp" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="w-10 mb-5">
                    {otpSent ? "Verify OTP" : "Register"}
                  </Button>
                </div>

               
                {otpSent && (
                  <div className="d-flex justify-content-center">
                    <Button variant="secondary" onClick={handleOtpSubmit}>
                      Submit OTP
                    </Button>
                  </div>
                )}
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;*/



































import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import stateDistrictData from '../components/StateDistrictMap'; // Add your district data mapping
import { useLocation, useNavigate } from 'react-router-dom';

// Validation Schema for the form
const validationSchema = Yup.object().shape({
  aadhar_number: Yup.string()
    .matches(/^[2-9]{1}[0-9]{11}$/, "Aadhar Number must be 12 digits and cannot start with 0 or 1")
    .required("Aadhar Number is required"),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  contact_number: Yup.string()
    .matches(/^\d{10}$/, 'Contact number must be a 10-digit number')
    .required('Contact number is required'),
  dob: Yup.date().required('Date of Birth is required').max(new Date(), 'Date of Birth cannot be in the future'),
  gender: Yup.string().required('Gender is required'),
  address: Yup.string().required('Address is required'),
  state: Yup.string().required('State is required'),
  district: Yup.string().required('District is required'),
  pincode: Yup.string()
    .matches(/^\d{6}$/, 'Pincode must be a 6-digit number')
    .required('Pincode is required'),
});

const RegistrationPage = () => {
  const location = useLocation();
  const role = location.state.message || {}; // Accessing role passed through home or admin pages
  const [selectedState, setSelectedState] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false); // Added OTP verification state
  const [showOtpField, setShowOtpField] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false); // State to track if form is completed
  const navigate = useNavigate();

  const handleStateChange = (e, setFieldValue) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setFieldValue('state', selected);
    setFieldValue('district', ''); // Reset district when state changes
  };

  // Simulating OTP Send (In a real-world application, use an email service like SendGrid, AWS SES, etc.)
  const handleOtpSend = (email) => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
    setOtp(generatedOtp);
    setOtpSent(true);
    setShowOtpField(true);
    alert(`OTP sent to ${email}: ${generatedOtp}`); // Simulating sending OTP to user's email
  };

  // OTP Submit handler
  const handleOtpSubmit = () => {
    if (enteredOtp === otp.toString()) {
      setOtpVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP, please try again.');
    }
  };

  const handleFormSubmit = (values) => {
    if (!otpVerified) {
      alert('Please verify OTP first.');
      return;
    }
    alert('Form Submitted successfully!');
    // Proceed with the actual form submission logic
    // navigate(role === "ADMIN" ? "/admin" : "/");
  };

  const initialValues = {
    aadhar_number: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact_number: '',
    dob: '',
    gender: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    role: role,
    isActive: true,
  };

  const checkFormCompletion = (values) => {
    // Check if all fields except OTP are filled
    const formValues = Object.values(values);
    return formValues.every(value => value !== '' && value !== null && value !== undefined);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center mb-4">User/Admin Registration</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ setFieldValue, values }) => {
              // Check if form is completed
              const isFormCompleted = checkFormCompletion(values);
              if (!formCompleted && isFormCompleted) {
                setFormCompleted(true);
              }

              return (
                <FormikForm>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Aadhar Number</Form.Label>
                        <Field name="aadhar_number" type="text" className="form-control" />
                        <ErrorMessage name="aadhar_number" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Field name="email" type="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Field name="password" type="password" className="form-control" />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Field name="confirmPassword" type="password" className="form-control" />
                        <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Field name="contact_number" type="text" className="form-control" />
                        <ErrorMessage name="contact_number" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Field name="dob" type="date" className="form-control" />
                        <ErrorMessage name="dob" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Field as="select" name="gender" className="form-control">
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Field name="address" type="text" className="form-control" />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Field as="select" name="state" className="form-control" onChange={(e) => handleStateChange(e, setFieldValue)}>
                          <option value="">Select State</option>
                          {Object.keys(stateDistrictData).map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </Field>
                        <ErrorMessage name="state" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>District</Form.Label>
                        <Field as="select" name="district" className="form-control">
                          <option value="">Select District</option>
                          {selectedState && stateDistrictData[selectedState] && stateDistrictData[selectedState].map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                          ))}
                        </Field>
                        <ErrorMessage name="district" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pincode</Form.Label>
                        <Field name="pincode" type="text" className="form-control" />
                        <ErrorMessage name="pincode" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* OTP Input Field */}
                  {showOtpField && !otpVerified && (
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Enter OTP</Form.Label>
                          <Field
                            name="otp"
                            type="text"
                            className="form-control"
                            onChange={(e) => setEnteredOtp(e.target.value)}
                          />
                          <ErrorMessage name="otp" component="div" className="text-danger" />
                        </Form.Group>
                      </Col>
                    </Row>
                  )}

                  {/* Send OTP button only after form completion */}
                  {formCompleted && (
                    <div className="d-flex justify-content-center">
                      <Button variant="primary" type="button" onClick={() => handleOtpSend(values.email)} className="w-10 mb-5">
                        Send OTP
                      </Button>
                    </div>
                  )}

                  {showOtpField && !otpVerified && (
                    <div className="d-flex justify-content-center">
                      <Button variant="secondary" onClick={handleOtpSubmit}>
                        Verify OTP
                      </Button>
                    </div>
                  )}

                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="w-10 mb-5" disabled={!otpVerified}>
                      Register
                    </Button>
                  </div>
                </FormikForm>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
