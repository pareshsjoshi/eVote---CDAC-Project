import React from "react";
import { Button, Table, Container, Row, Col } from 'react-bootstrap';

const LogsTable = () => {
  const demoData = [
    { log_id: 1, user_id: 1, action: "Created new user", created_at: "2024-12-04 12:00:00" },
    { log_id: 2, user_id: 1, action: "Created new poll", created_at: "2024-12-04 12:00:00" },
    { log_id: 3, user_id: 1, action: "Updated user", created_at: "2024-12-04 12:00:00" },
    { log_id: 4, user_id: 1, action: "Created new candidate", created_at: "2024-12-04 12:00:00" },
  ];

  return (
    <Container className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Log ID</th>
            <th>User ID</th>
            <th>Action</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((item) => (
            <tr key={item.id}>
              <td>{item.log_id}</td>
              <td>{item.user_id}</td>
              <td>{item.action}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LogsTable;


// export const RecordsTable = () => {
//   return (
//     <div>
//       <h2>Records Table</h2>
//       <p>Here are the records.</p>
//     </div>
//   );
// };

// export default RecordsTable;
