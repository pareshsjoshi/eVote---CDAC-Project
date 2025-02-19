import { Nav, Navbar, Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom directly

const AdminNavBar = () => { 
  return ( 
    <Navbar bg="dark" variant="dark"> 
      <Container> 
        <Nav className="me-auto">
          {/* Using Link directly for navigation */}
          <Nav.Link as={Link} to="/admin/dashboard">Admin Dashboard</Nav.Link> 
          <Nav.Link as={Link} to="/admin/candidate-records">Candidate Table</Nav.Link> 
          <Nav.Link as={Link} to="/admin/poll-records">Poll Table</Nav.Link> 
          <Nav.Link as={Link} to="/admin/user-records">User Table</Nav.Link> 
          {/* <Nav.Link as={Link} to="/admin/vote-records">Votes Table</Nav.Link>  */}
          {/* <Nav.Link as={Link} to="/admin/log-records">Logs</Nav.Link>  */}
          {/* <Nav.Link as={Link} to="/admin/feedback">Feedback</Nav.Link>  */}
        </Nav>
      </Container> 
    </Navbar> 
  );
};

export default AdminNavBar;
