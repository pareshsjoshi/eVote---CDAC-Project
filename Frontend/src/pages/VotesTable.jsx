import React from "react";
import { Button, Table, Container, Row, Col } from 'react-bootstrap';

const VotesTable = () => {
  const demoData = [
    {  vote_id: 1, user_id: 1, poll_id: 1, candidate_id: 1, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    {  vote_id: 2, user_id: 2, poll_id: 1, candidate_id: 2, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    {  vote_id: 3, user_id: 1, poll_id: 2, candidate_id: 4, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
    {  vote_id: 4, user_id: 1, poll_id: 3, candidate_id: 7, created_at: "2024-12-04", created_by: "Lorem Ipsum", updated_at: "2024-12-04", updated_by: "Lorem Ipsum" },
  ];

  return (
    <Container className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vote ID</th>
            <th>User ID</th>
            <th>Poll ID</th>
            <th>Candidate ID</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Updated At</th>
            <th>Updated By</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {demoData.map((item) => (
            <tr key={item.id}>
              <td>{item.vote_id}</td>
              <td>{item.user_id}</td>
              <td>{item.poll_id}</td>
              <td>{item.candidate_id}</td>
              <td>{item.created_at}</td>
              <td>{item.created_by}</td>
              <td>{item.updated_at}</td>
              <td>{item.updated_by}</td>
              {/* <td>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button variant="warning" size="sm">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default VotesTable;


// export const RecordsTable = () => {
//   return (
//     <div>
//       <h2>Records Table</h2>
//       <p>Here are the records.</p>
//     </div>
//   );
// };

// export default RecordsTable;
