/*import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import stateDistrictData from '../components/StateDistrictMap';
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';



const RegistrationPage = () => {
  const location = useLocation();
  const role = location.state.message || {}; //Accessing role passed through home or admin pages
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();
  const trueBool = true;

  const validationSchema = Yup.object().shape({
    aadhar_number: Yup.string()
      .matches(/^[2-9]{1}[0-9]{11}$/, "Aadhar Number must be 12 digits and cannot start with 0 or 1")
      .required("Aadhar Number is required"),
    email: Yup.string().email('Invalid email').required('Email is required'),
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

  const handleStateChange = (e, setFieldValue) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setFieldValue('state', selected);
    setFieldValue('district', ''); // Reset district when state changes
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

  const handleSubmit = (values) => {
    event.preventDefault();
    if(values.role == "ADMIN"){
      UserService.createUser(values).then(() => {
        navigate("/admin");
      });
    }
    if(values.role == "VOTER"){
      UserService.createUser(values).then(() => {
        navigate("/");
      });
    }
    
    console.log('Form Data Submitted:', values);
    alert('Registration successful!');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center mb-4">User/Admin Registration</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                  <Col md={6}
                    
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
                      <div className="d-inline-flex align-items-center gap-3">
                        <label className="d-flex align-items-center">
                          <Field className="me-2" name="gender" type="radio" value="MALE" />
                          Male
                        </label>
                        <label className="d-flex align-items-center">
                          <Field className="me-2" name="gender" type="radio" value="FEMALE" />
                          Female
                        </label>
                        <label className="d-flex align-items-center">
                          <Field className="me-2" name="gender" type="radio" value="OTHER" />
                          Other
                        </label>
                      </div>
                      <ErrorMessage name="gender" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                  
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Field name="address" as="textarea" className="form-control" />
                      <ErrorMessage name="address" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Pincode</Form.Label>
                      <Field name="pincode" type="text" className="form-control" />
                      <ErrorMessage name="pincode" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    
                    <Form.Group className="mb-5">
                      <Form.Label>State</Form.Label>
                      <Field
                        name="state"
                        as="select"
                        className="form-select"
                        onChange={(e) => handleStateChange(e, setFieldValue)}
                      >
                        <option value="">Select State</option>
                        {Object.keys(stateDistrictData).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="state" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
              
                    <Form.Group className="mb-5">
                      <Form.Label>District</Form.Label>
                      <Field
                        name="district"
                        as="select"
                        className="form-select"
                        disabled={!selectedState}
                      >
                        <option value="">Select District</option>
                        {selectedState &&
                          stateDistrictData[selectedState].map((district) => (
                            <option key={district} value={district}>
                              {district}
                            </option>
                          ))}
                      </Field>
                      <ErrorMessage name="district" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <div className='d-flex justify-content-center'>
                  <Button variant="primary" type="submit" className="w-10 mb-5">
                    Register
                  </Button>
                </div>
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;*/




















import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stateDistrictData from "../components/StateDistrictMap";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isOtpVerified, setIsOtpVerified] = useState(false); // To track OTP verification status

  const validationSchema = Yup.object().shape({
    aadhar_number: Yup.string()
      .matches(/^[2-9]{1}[0-9]{11}$/, "Aadhar Number must be 12 digits")
      .required("Aadhar Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    contact_number: Yup.string()
      .matches(/^\d{10}$/, "Contact number must be 10 digits")
      .required("Contact number is required"),
    dob: Yup.date().required("Date of Birth is required").max(new Date(), "Date of Birth cannot be in the future"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    district: Yup.string().required("District is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
  });

  const handleStateChange = (e, setFieldValue) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setFieldValue("state", selected);
    setFieldValue("district", ""); // Reset district when state changes
  };

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleRegister = async (values, { setSubmitting }) => {
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      setSubmitting(false);
      return;
    }

    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    setShowOtpField(true); // Show OTP input field
    setIsOtpVerified(false); // Reset OTP verification status

    try {
      // Send OTP email
      await axios.post("http://localhost:5000/send-otp", { email: values.email, otp: newOtp });
      alert("OTP sent to your email");
    } catch (error) {
      console.error("Error sending OTP", error);
      alert("Failed to send OTP. Please try again.");
    }
    setSubmitting(false);
  };

  const handleOtpVerification = async () => {
    if (otp === generatedOtp) {
      alert("OTP verified!");
      setIsOtpVerified(true); // Set OTP verification status to true
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleFinalSubmit = async (values) => {
    if (!isOtpVerified) {
      alert("Please verify OTP before submitting the form.");
      return;
    }

    const user = {
      aadhar_number: values.aadhar_number,
      name: values.name,
      email: values.email,
      password: values.password,
      contact_number: values.contact_number,
      dob: values.dob,
      gender: values.gender,
      address: values.address,
      state: values.state,
      district: values.district,
      pincode: values.pincode,
    };

    try {
      // Register user
      await axios.post("http://localhost:5000/register", user);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user", error);
      alert("Registration failed. Please try again.");
    }
  };

  const initialValues = {
    aadhar_number: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact_number: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center mb-4">User Registration</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ setFieldValue, values, isSubmitting }) => (
              <FormikForm>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Aadhar Number</Form.Label>
                      <Field name="aadhar_number" type="text" className="form-control" />
                      <ErrorMessage name="aadhar_number" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Field name="name" type="text" className="form-control" />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Field name="email" type="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Field name="password" type="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Field name="confirmPassword" type="password" className="form-control" />
                      <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Number</Form.Label>
                      <Field name="contact_number" type="text" className="form-control" />
                      <ErrorMessage name="contact_number" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Field as="select" name="gender" className="form-select">
                        <option value="">Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Field as="textarea" name="address" className="form-control" />
                      <ErrorMessage name="address" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pincode</Form.Label>
                      <Field name="pincode" type="text" className="form-control" />
                      <ErrorMessage name="pincode" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Field
                        as="select"
                        name="state"
                        className="form-select"
                        onChange={(e) => handleStateChange(e, setFieldValue)}
                      >
                        <option value="">Select State</option>
                        {Object.keys(stateDistrictData).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="state" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>District</Form.Label>
                      <Field
                        as="select"
                        name="district"
                        className="form-select"
                        disabled={!selectedState}
                      >
                        <option value="">Select District</option>
                        {selectedState &&
                          stateDistrictData[selectedState].map((district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          ))}
                      </Field>
                      <ErrorMessage name="district" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-100"
                    >
                      {isSubmitting ? "Registering..." : "Register"}
                    </Button>
                  </Col>
                </Row>
              </FormikForm>
            )}
          </Formik>

          {showOtpField && (
            <div className="mt-3">
              <Form.Group>
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
              <Button
                variant="success"
                onClick={handleOtpVerification}
                className="w-100"
              >
                Verify OTP
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
