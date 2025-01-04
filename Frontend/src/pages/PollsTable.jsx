import React, { useEffect, useState } from "react";

import "../stylesheets/PollTable.css";
import { Button, Table, Container, Row, Col, Modal, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletePollById, fetchAllPolls, updatePoll } from "../services/PollService";

const PollsTable = () => {
  const [polls, setPolls] = useState([]);
  const [editRowId, setEditRowId] = useState(null); // ID of the row being edited
  const [editData, setEditData] = useState({}); // Temporary storage for edited row data
  const [showModal, setShowModal] = useState(false);
  const [selectedPollId, setSelectedPollId] = useState(0);

  const getAllPolls = async () => {
    try {
      const response = await fetchAllPolls();
      console.log(response);
      setPolls(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePollDelete = async () => {
    try {
      const response = await deletePollById(selectedPollId);
      if (response.status === 200) {
        getAllPolls();
      }
    } catch (error) {
      console.log(error);
    } finally {
      closeModal();
    }
  };

  const handleEditClick = (poll) => {
    setEditRowId(poll.pollId);
    setEditData({ ...poll });
  };

  const handleSaveClick = async () => {
    // Add validation logic here
    if (!editData.title || !editData.description || !editData.startDate || !editData.endDate) {
      alert("All fields are required!");
      return;
    }

    try {
      // Simulate an API call to save the updated data
      const response = await updatePoll(editData.pollId, editData);
        if (response.status === 200) {
          // toast.success(response.data.message);
          getAllPolls();
        }
      // console.log("Updated Poll Data:", editData);
      // setPolls((prevPolls) =>
      //   prevPolls.map((poll) =>
      //     poll.pollId === editRowId ? { ...poll, ...editData } : poll
      //   )
      // );
      // setEditRowId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setEditRowId(null);
    setEditData({});
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllPolls();
  }, []);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Button as={Link} to="/admin/poll-create" variant="primary">
            Add Poll
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Updated At</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {polls.map((poll) =>
            editRowId === poll.pollId ? (
              <tr key={poll.pollId}>
                <td>{poll.pollId}</td>
                <td>
                  <input
                    type="text"
                    value={editData.title}
                    onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editData.description}
                    onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="datetime-local"
                    value={editData.startDate}
                    onChange={(e) => setEditData({ ...editData, startDate: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="datetime-local"
                    value={editData.endDate}
                    onChange={(e) => setEditData({ ...editData, endDate: e.target.value })}
                  />
                </td>
                <td>
                  <select
                    value={editData.status}
                    onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td>{poll.createdAt}</td>
                <td>{poll.createdBy}</td>
                <td>{poll.updatedAt}</td>
                <td>{poll.updatedBy}</td>
                <td>
                  <Button variant="success" size="sm" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button variant="danger" size="sm" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </td>
              </tr>
            ) : (
              <tr key={poll.pollId}>
                <td>{poll.pollId}</td>
                <td>{poll.title}</td>
                <td>{poll.description}</td>
                <td>{poll.startDate}</td>
                <td>{poll.endDate}</td>
                <td>{poll.status ? "Active" : "Inactive"}</td>
                <td>{poll.createdAt}</td>
                <td>{poll.createdBy}</td>
                <td>{poll.updatedAt}</td>
                <td>{poll.updatedBy}</td>
                <td>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Button variant="warning" size="sm" onClick={() => handleEditClick(poll)}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        setSelectedPollId(poll.pollId);
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
          Are you sure you want to remove {selectedPollId}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handlePollDelete}>
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

export default PollsTable;
