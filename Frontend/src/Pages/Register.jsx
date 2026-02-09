import { useState } from "react";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userRegister } from "../../redux/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, isAuthenticated } = useSelector(
    (state) => state.userState
  );

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    toast.preventDefault();

    const fullname = formData.fullname.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (!fullname || !email || !password) {
      T.error("All fields are required");
      return;
    }

    const userExists = users.some(
      (u) => u.email.toLowerCase() === email
    );

    if (userExists) {
      toast.error("User already exists");
      return;
    }

    dispatch(
      userRegister({ fullname, email, password })
    );

    toast.success("Registration successful");
    navigate("/login");
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4} className="mt-4">
          <h2>Register</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="fullname"
                type="text"
                placeholder="Enter full name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit">Register</Button>
            </div>
          </Form>

          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
