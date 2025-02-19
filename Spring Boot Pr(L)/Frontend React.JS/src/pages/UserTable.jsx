// import React, { useEffect, useState } from "react";
// import { Button, Table, Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import UserService from "../services/UserService";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);

//   // Fetch all users
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const data = await UserService.getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Delete user
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         await UserService.deleteUser(id);
//         setUsers(users.filter((user) => user.aadhar_number !== id));
//       } catch (error) {
//         console.error("Error deleting user:", error);
//       }
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <Row className="mb-3">
//         <Col className="d-flex justify-content-end">
//           <Button className="mx-2" as={Link} to="/admin/user-create" state={{ message: "ADMIN" }} variant="primary">
//             Add Admin
//           </Button>
//           <Button as={Link} to="/admin/user-create" state={{ message: "VOTER" }} variant="primary">
//             Add User
//           </Button>
//         </Col>
//       </Row>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>DOB</th>
//             <th>Role</th>
//             <th>Active</th>
//             <th>Created At</th>
//             <th>Created By</th>
//             <th>Updated At</th>
//             <th>Updated By</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.aadhar_number}>
//               <td>{user.aadhar_number}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.dob}</td>
//               <td>{user.role}</td>
//               <td>{user.isActive}</td>
//               <td>{user.created_at}</td>
//               <td>{user.created_by}</td>
//               <td>{user.updated_at}</td>
//               <td>{user.updated_by}</td>
//               <td>
//                 <div style={{ display: "flex", gap: "5px" }}>
//                   <Button as={Link} to={`/admin/user-edit/${user.aadhar_number}`} variant="warning" size="sm">
//                     Edit
//                   </Button>
//                   <Button variant="danger" size="sm" onClick={() => handleDelete(user.aadhar_number)}>
//                     Delete
//                   </Button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default UserTable;

import React, { useEffect, useState } from "react";
import { Button, Table, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UserService.getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUserId(user.aadhar_number);
    setEditedUser({ ...user });
  };

  const handleChange = (e, field) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await UserService.updateUser(editedUser.aadhar_number, editedUser);
      setUsers(users.map((user) => (user.aadhar_number === editedUser.aadhar_number ? editedUser : user)));
      setEditingUserId(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await UserService.deleteUser(id);
        setUsers(users.filter((user) => user.aadhar_number !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Button className="mx-2" as={Link} to="/admin/user-create" state={{ message: "ADMIN" }} variant="primary">
            Add Admin
          </Button>
          <Button as={Link} to="/admin/user-create" state={{ message: "VOTER" }} variant="primary">
            Add User
          </Button>
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
          {users.map((user) => (
            <tr key={user.aadhar_number}>
              {editingUserId === user.aadhar_number ? (
                <>
                  <td>{user.aadhar_number}</td>
                  <td><Form.Control value={editedUser.name} onChange={(e) => handleChange(e, "name")} /></td>
                  <td><Form.Control value={editedUser.email} onChange={(e) => handleChange(e, "email")} /></td>
                  <td>
                    <Form.Control 
                      type="date" 
                      value={editedUser.dob} 
                      onChange={(e) => handleChange(e, "dob")} 
                      max={new Date().toISOString().split('T')[0]}
                    />
                  </td>
                  <td>
                    <Form.Select value={editedUser.role} onChange={(e) => handleChange(e, "role")}>
                      <option value="VOTER">VOTER</option>
                      <option value="ADMIN">ADMIN</option>
                    </Form.Select>
                  </td>
                  <td><Form.Control value={editedUser.isActive} onChange={(e) => handleChange(e, "isActive")} /></td>
                  <td>{user.created_at}</td>
                  <td>{user.created_by}</td>
                  <td>{user.updated_at}</td>
                  <td>{user.updated_by}</td>
                  <td>
                    <Button variant="success" size="sm" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" size="sm" onClick={() => setEditingUserId(null)}>Cancel</Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.aadhar_number}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.role}</td>
                  <td>{user.isActive}</td>
                  <td>{user.created_at}</td>
                  <td>{user.created_by}</td>
                  <td>{user.updated_at}</td>
                  <td>{user.updated_by}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleEdit(user)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(user.aadhar_number)}>Delete</Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTable;

