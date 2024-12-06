import React from "react";
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const PollsTable = () => {
  const demoData = [
    { id: 1, title: "Lorem", description: "Lorem Ipsum", start_date: "2024-12-04", end_date: "2024-12-04", status:true, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { id: 2, title:  "Lorem", description: "Lorem Ipsum", start_date: "2024-12-04", end_date: "2024-12-04", status:false, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { id: 3, title:  "Lorem", description: "Lorem Ipsum", start_date: "2024-12-04", end_date: "2024-12-04", status:true, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { id: 4, title:  "Lorem", description: "Lorem Ipsum", start_date: "2024-12-04", end_date: "2024-12-04", status:false, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" }
  ];

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Button as={Link} to="/admin/poll-create" variant="primary">Add Poll</Button>
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
          {demoData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td>{item.status}</td>
              <td>{item.created_at}</td>
              <td>{item.created_by}</td>
              <td>{item.updated_at}</td>
              <td>{item.updated_by}</td>
              <td>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button variant="warning" size="sm">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PollsTable;


// export const RecordsTable = () => {
//   return (
//     <div>
//       <h2>Records Table</h2>
//       <p>Here are the records.</p>
//     </div>
//   );
// };

// export default RecordsTable;
