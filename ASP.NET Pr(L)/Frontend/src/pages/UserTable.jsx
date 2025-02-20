import React, { useEffect, useState } from "react";
import { Button, Table, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUsers, setEditedUsers] = useState({});

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

  const handleEditClick = (user) => {
    setEditingUserId(user.userId);
    setEditedUsers({ ...editedUsers, [user.userId]: { ...user } });
  };

  const handleInputChange = (e, userId) => {
    const { name, value } = e.target;
    setEditedUsers({
      ...editedUsers,
      [userId]: {
        ...editedUsers[userId],
        [name]: value,
      },
    });
  };

  const handleSave = async (userId) => {
    try {
      await UserService.updateUser(userId, editedUsers[userId]);
      setUsers(users.map(user => user.userId === userId ? editedUsers[userId] : user));
      setEditingUserId(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await UserService.deleteUser(id);
        setUsers(users.filter((user) => user.userId !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
          <Button className="mx-2" as={Link} to="/admin/user-create" state={{ message: "Admin" }} variant="primary">
            Add Admin
          </Button>
          <Button as={Link} to="/admin/user-create" state={{ message: "User" }} variant="primary">
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>
                {editingUserId === user.userId ? (
                  <Form.Control
                    type="text"
                    name="name"
                    value={editedUsers[user.userId]?.name || ""}
                    onChange={(e) => handleInputChange(e, user.userId)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user.userId ? (
                  <Form.Control
                    type="email"
                    name="email"
                    value={editedUsers[user.userId]?.email || ""}
                    onChange={(e) => handleInputChange(e, user.userId)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.userId ? (
                  <Form.Control
                    type="date"
                    name="dob"
                    value={editedUsers[user.userId]?.dob?.split("T")[0] || ""}
                    onChange={(e) => handleInputChange(e, user.userId)}
                  />
                ) : (
                  user.dob
                )}
              </td>
              <td>
                {editingUserId === user.userId ? (
                  <Form.Control
                    as="select"
                    name="role"
                    value={editedUsers[user.userId]?.role || ""}
                    onChange={(e) => handleInputChange(e, user.userId)}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </Form.Control>
                ) : (
                  user.role
                )}
              </td>
              <td>
                <div style={{ display: "flex", gap: "5px" }}>
                  {editingUserId === user.userId ? (
                    <>
                      <Button variant="success" size="sm" onClick={() => handleSave(user.userId)}>
                        Save
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => setEditingUserId(null)}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button variant="warning" size="sm" onClick={() => handleEditClick(user)}>
                      Edit
                    </Button>
                  )}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(user.userId)}>
                    Delete
                  </Button>
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


//Old code

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
//         setUsers(users.filter((user) => user.user_id !== id));
//       } catch (error) {
//         console.error("Error deleting user:", error);
//       }
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <Row className="mb-3">
//         <Col className="d-flex justify-content-end">
//           <Button className="mx-2" as={Link} to="/admin/user-create" state={{ message: "Admin" }} variant="primary">
//             Add Admin
//           </Button>
//           <Button as={Link} to="/admin/user-create" state={{ message: "User" }} variant="primary">
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
//             <tr key={user.userId}>
//               <td>{user.userId}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.dob}</td>
//               <td>{user.role}</td>
//               <td>{user.active}</td>
//               <td>{user.created_at}</td>
//               <td>{user.created_by}</td>
//               <td>{user.updated_at}</td>
//               <td>{user.updated_by}</td>
//               <td>
//                 <div style={{ display: "flex", gap: "5px" }}>
//                   <Button as={Link} to={`/admin/user-edit/${user.user_id}`} variant="warning" size="sm">
//                     Edit
//                   </Button>
//                   <Button variant="danger" size="sm" onClick={() => handleDelete(user.user_id)}>
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
