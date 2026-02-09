import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { IoBagCheck } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userLogout } from "../../redux/userSlice";

function Header() {
  const { wishItems } = useSelector((state) => state.bikeState);
  const { isAuthenticated } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    toast.success("User logged out successfully");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Bikerzone
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/bikes">Bikes</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/wishlist">
              <IoBagCheck /> {wishItems?.length ?? 0}
            </Nav.Link>

            {isAuthenticated ? (
              <NavDropdown title={<FaRegUserCircle />} id="user-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/addbikes">
                  Add Bikes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/listbikes">
                  List Bikes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/users">
                  Users
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
