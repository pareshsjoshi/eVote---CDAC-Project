import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import stateDistrictData from '../components/StateDistrictMap';

// Mock State and District Data
// const stateDistrictData = {
//   "State 1": ["District 1A", "District 1B", "District 1C"],
//   "State 2": ["District 2A", "District 2B"],
//   "State 3": ["District 3A", "District 3B", "District 3C", "District 3D"],
// };

const RegistrationPage = () => {
  const [selectedState, setSelectedState] = useState('');

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
  };

  const handleSubmit = (values) => {
    // event.preventDefault();
    console.log('Form Data Submitted:', values);
    alert('Registration successful!');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center mb-4">User Registration</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <FormikForm>
                <Row>
                  <Col md={6}>
                    {/* Aadhar Number */}
                    <Form.Group className="mb-3">
                      <Form.Label>Aadhar Number</Form.Label>
                      <Field name="aadhar_number" type="text" className="form-control" />
                      <ErrorMessage name="aadhar_number" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    {/* Name */}
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Field name="name" type="text" className="form-control" />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    {/* Email */}
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Field name="email" type="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    {/* Password */}
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Field name="password" type="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    {/* Confirm Password */}
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Field name="confirmPassword" type="password" className="form-control" />
                      <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    {/* Contact Number */}
                    <Form.Group className="mb-3">
                      <Form.Label>Contact Number</Form.Label>
                      <Field name="contact_number" type="text" className="form-control" />
                      <ErrorMessage name="contact_number" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    {/* Date of Birth */}
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Field name="dob" type="date" className="form-control" />
                      <ErrorMessage name="dob" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {/* Gender */}
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <div className="d-inline-flex align-items-center gap-3">
                        <label className="d-flex align-items-center">
                          <Field className="me-2" name="gender" type="radio" value="Male" />
                          Male
                        </label>
                        <label className="d-flex align-items-center">
                          <Field className="me-2" name="gender" type="radio" value="Female" />
                          Female
                        </label>
                        <label className="d-flex align-items-center">
                          <Field className="me-2" name="gender" type="radio" value="Other" />
                          Other
                        </label>
                      </div>
                      <ErrorMessage name="gender" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    {/* Address */}
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Field name="address" as="textarea" className="form-control" />
                      <ErrorMessage name="address" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    {/* Pincode */}
                    <Form.Group className="mb-3">
                      <Form.Label>Pincode</Form.Label>
                      <Field name="pincode" type="text" className="form-control" />
                      <ErrorMessage name="pincode" component="div" className="text-danger" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    {/* State */}
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
                    {/* District */}
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

export default RegistrationPage;