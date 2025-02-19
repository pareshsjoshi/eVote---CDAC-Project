import React, { useEffect, useState } from "react";
import { Button, Table, Container, Row, Col, Modal, ToastContainer } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { deleteCandidateById, fetchAllCandidates, updateCandidate } from "../services/CandidateServices";

const CandidateTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [editRowId, setEditRowId] = useState(null); // ID of the row being edited
  const [editData, setEditData] = useState({}); // Temporary storage for edited row data
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState(0);

  const getAllCandidates = async () => {
    try {
      const response = await fetchAllCandidates();
      setCandidates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCandidateDelete = async () => {
    try {
      const response = await deleteCandidateById(selectedCandidateId);
      if (response.status === 200) {
        // toast.success(response.data.message);
        getAllCandidates();
      }
    } catch (error) {
      console.log(error);
      // toast.error("Error deleting candidate.");
    } finally {
      closeModal();
    }
  };

  const handleEditClick = (candidate) => {
    setEditRowId(candidate.candidateId); // Set the ID of the row being edited
    setEditData({ ...candidate }); // Populate editData with the current row's data
  };

  const handleInputChange = (field, value) => {
    setEditData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveClick = async () => {
    if (!editData.name || !editData.agenda || !editData.pollId) {
      alert("Name and Agenda are required!");
      return;
    }
    else {
      try {
        const response = await updateCandidate(editData.candidateId, editData);
        if (response.status === 200) {
          // toast.success(response.data.message);
          getAllCandidates();
        }
      } catch (error) {
        console.log(error);
      }
    }
    // Replace with actual API call
    console.log("Saving:", editData);

    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.candidateId === editRowId ? editData : candidate
      )
    );

    setEditRowId(null); // Reset edit row
    setEditData({});
  };

  const handleCancelClick = () => {
    setEditRowId(null); // Exit edit mode
    setEditData({});
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllCandidates();
  }, []);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Button as={Link} to="/admin/candidate-create" variant="primary">Add Candidate</Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Poll ID</th>
            <th>Agenda</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Updated At</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) =>
            editRowId === candidate.candidateId ? (
              // Row in Edit Mode
              <tr key={candidate.candidateId}>
                <td>{candidate.candidateId}</td>
                <td>
                  <input
                    type="text"
                    value={editData.name || ""}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={editData.pollId || ""}
                    onChange={(e) => handleInputChange("pollId", e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editData.agenda || ""}
                    onChange={(e) => handleInputChange("agenda", e.target.value)}
                    required
                  />
                </td>
                <td>{candidate.createdAt}</td>
                <td>{candidate.createdBy}</td>
                <td>{candidate.updatedAt}</td>
                <td>{candidate.updatedBy}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <Button variant="success" size="sm" onClick={handleSaveClick}>
                      Save
                    </Button>
                    <Button variant="secondary" size="sm" onClick={handleCancelClick}>
                      Cancel
                    </Button>
                  </div>
                </td>
              </tr>
            ) : (
              // Normal Row
              <tr key={candidate.candidateId}>
                <td>{candidate.candidateId}</td>
                <td>{candidate.name}</td>
                <td>{candidate.pollId}</td>
                <td>{candidate.agenda}</td>
                <td>{candidate.createdAt}</td>
                <td>{candidate.createdBy}</td>
                <td>{candidate.updatedAt}</td>
                <td>{candidate.updatedBy}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleEditClick(candidate)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        setSelectedCandidateId(candidate.candidateId);
                        openModal();
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove {selectedCandidateId}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCandidateDelete}>
            Yes
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </Container>
  );
};

export default CandidateTable;
