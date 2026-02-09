import { Button, Col, Container, Form, Row } from "react-bootstrap"
import * as formik from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddBikes() {
    const { Formik } = formik;

    const navigate=useNavigate();

    const bikes = JSON.parse(localStorage.getItem("bikes")) || [];


    const schema = yup.object().shape({
        bikename: yup.string().required("Please Enter  bikename").min(2, "bikename should me min 2 characters").max(20, "Max Full Name characters exceed 20"),
        price: yup.number().required("Plases enter your  price"),
        description: yup.string().required("Plaese enter your bike description"),
        photo: yup.string().required("Plaese add your bike photo"),

    });

    const handleAddBikes = (values) => {

        values.id =Date.now();
        bikes.push(values);



        localStorage.setItem("bikes", JSON.stringify(bikes));
        toast.success(" bike added successfull");
        
        navigate("/")
    }



    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">

                        <Row>
                            <Col>

                                <h4>
                                    Addbikes
                                </h4>


                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleAddBikes}
                                    initialValues={{
                                        bikename: "",
                                        price: "",
                                        description: "",
                                         photo: ""
                                    }}
                                >

                                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (

                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                                    <Form.Label>bikename</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="bikename"
                                                        placeholder="Enter bikename"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.bikename}
                                                        isValid={touched.bikename && !errors?.bikename}
                                                        isInvalid={touched.bikename && !!errors.bikename}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.bikename}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupEmail1">
                                                    <Form.Label>Enter price</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="price"
                                                        placeholder="Enter price"
                                                        onChange={handleChange}
                                                        value={values.price}
                                                        onBlur={handleBlur}
                                                        isValid={touched.price && !errors?.price}
                                                        isInvalid={touched.price && !!errors.price}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.price}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGrouppasssword">
                                                    <Form.Label> description</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        name="description"
                                                        placeholder="Enter description"
                                                        onChange={handleChange}
                                                        value={values.description}
                                                        onBlur={handleBlur}
                                                        isValid={touched.description && !errors?.description}
                                                        isInvalid={touched.description && !!errors.description}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.description}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row>
                                                <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
                                                    <Form.Label>photo</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="photo"
                                                        placeholder="add bike photo"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.photo}
                                                        isValid={touched.photo && !errors?.photo}
                                                        isInvalid={touched.photo && !!errors.photo}

                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors?.photo}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="d-grid">
                                                <Button type="submit"> Submit
                                                </Button>
                                            </Row>
                                        </Form>
                                    )}



                                </Formik>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddBikes