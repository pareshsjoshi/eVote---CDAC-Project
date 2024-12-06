import React from "react";
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const UserTable = () => {
  const demoData = [
    { user_id: 1, name: "John Doe", email: "example@gmail.com", dob: "2024-12-04", role: "admin", active: "true", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { user_id: 2, name: "John Doe", email: "example@gmail.com", dob: "2024-12-04", role: "user", active: "true", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { user_id: 3, name: "John Doe", email: "example@gmail.com", dob: "2024-12-04", role: "user", active: "true", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { user_id: 4, name: "John Doe", email: "example@gmail.com", dob: "2024-12-04", role: "user", active: "true", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
  ];

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Button as={Link} to="/admin/user-create" variant="primary">Add User</Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Role</th>
            <th>Active</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Updated At</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((item) => (
            <tr key={item.user_id}>
              <td>{item.user_id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td>{item.role}</td>
              <td>{item.active}</td>
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

export default UserTable;


// export const RecordsTable = () => {
//   return (
//     <div>
//       <h2>Records Table</h2>
//       <p>Here are the records.</p>
//     </div>
//   );
// };

// export default RecordsTable;
