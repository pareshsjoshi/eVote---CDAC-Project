import React from "react";
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const CandidateTable = () => {
  const demoData = [
    { id: 1, user_id: 1, name: "John Doe", poll_id: 28, agenda: "Lorem Ipsum", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { id: 2, user_id: 2, name: "Jane Smith", poll_id: 34, agenda: "Lorem Ipsum", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { id: 3, user_id: 3, name: "Michael Brown", poll_id: 42, agenda: "Lorem Ipsum", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    { id: 4, user_id: 4, name: "Emily Davis", poll_id: 25, agenda: "Lorem Ipsum", created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" }
  ];

  return (
    // <Container className="mt-4">
    //   <Row className="mb-3">
    //     <Col className="text-end">
    //       <Button variant="primary">Click Me</Button>
    //     </Col>
    //   </Row>
    //   <Table striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th>Profession</th>
    //         <th>Action</th>
    //         {/* <th>Delete</th> */}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {demoData.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.id}</td>
    //           <td>{item.name}</td>
    //           <td>{item.age}</td>
    //           <td>{item.profession}</td>
    //           <td>
    //             <Button variant="warning" size="sm">Edit</Button>
    //           {/* </td>
    //           <td> */}
    //             <Button variant="danger" size="sm">Delete</Button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </Container>
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
            <th>User ID</th>
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
          {demoData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.user_id}</td>
              <td>{item.name}</td>
              <td>{item.poll_id}</td>
              <td>{item.agenda}</td>
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

export default CandidateTable;


// export const RecordsTable = () => {
//   return (
//     <div>
//       <h2>Records Table</h2>
//       <p>Here are the records.</p>
//     </div>
//   );
// };

// export default RecordsTable;
