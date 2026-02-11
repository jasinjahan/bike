import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { userLogin } from "../../redux/userSlice";
import instance from "../../axios/instance";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(
    (state) => state.userState
  );

  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();

      const newErrors = {};
      form.querySelectorAll(":invalid").forEach((input) => {
        newErrors[input.name] = input.validationMessage;
      });

      setErrors(newErrors);
      setValidated(true);
      return;
    }

    try {
      const { data } = await instance.post("/user/login", userLoginData);
      dispatch(userLogin(data?.user));
      toast.success(data?.message);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4} className="mt-4">
          <h2>Login</h2>

          <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Enter email"
                value={userLoginData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email || "Please enter your email"}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                type="password"
                placeholder="Enter password"
                value={userLoginData.password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password || "Please enter your password"}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button type="submit">Login</Button>
            </div>
          </Form>

          <p className="mt-4">
            If you don't have an account,{" "}
            <Link to="/register">register now</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

