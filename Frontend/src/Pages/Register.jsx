import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userRegister } from "../../redux/userSlice";
import instance from "../../axios/instance";


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { users, isAuthenticated } = useSelector(
        (state) => state.userState
    );

    const [formData, setFormData] = useState({
        fullName: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullName = formData.fullName.trim();
        const email = formData.email.trim().toLowerCase();
        const password = formData.password.trim();

        if (!fullName || !email || !password) {
            toast.error("All fields are required");
            return;
        }

        const userExists = users.some(
            (u) => u.email.toLowerCase() === email
        );

        if (userExists) {
            toast.error("User already exists");
            return;
        }

        try {
            const { data } = await instance.post("/user/register", {
                fullName,
                email,
                password,
            });

            dispatch(
                userRegister({
                    id: data?.user?.id || Date.now(),
                    fullName,
                    email,
                    role: data?.user?.role || "User",
                    status: true,
                })
            );

            toast.success(data?.message || "Registration successful");
            navigate("/login");
        } catch (error) {
            toast.error(
                error?.response?.data?.message || error.message
            );
        }
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
                                name="fullName"
                                type="text"
                                placeholder="Enter full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                value={formData.password}
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

