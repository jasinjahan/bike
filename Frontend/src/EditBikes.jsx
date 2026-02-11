

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditBikes() {
  const { Formik } = formik;
  const navigate = useNavigate();
  const { id } = useParams();

  const bikes = JSON.parse(localStorage.getItem("bikes")) || [];

  const bikeToEdit = bikes.find((bike) => bike.id === Number(id));

  const schema = yup.object().shape({
    bikeName: yup
      .string()
      .required("Please Enter bikename")
      .min(2, "bikename should be min 2 characters")
      .max(20, "Max Full Name characters exceed 20"),
    bikePrice: yup.number().required("Please enter your price"),
    bikeDescription: yup.string().required("Please enter your bike description"),
    bikePhoto: yup.string().required("Please add your bike photo"),
  });

  const handleEditBikes = (values) => {
    const updatedBikes = bikes.map((bike) =>
      bike.id === Number(id) ? { ...values, id: bike.id } : bike
    );

    localStorage.setItem("bikes", JSON.stringify(updatedBikes));
    
    toast.success("Bike updated successfully ");

    navigate("/");
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mt-4">
            <Row>
              <Col>
                <h4>Edit Bikes</h4>
              </Col>
            </Row>

            <Row>
              <Col>
                <Formik
                  validationSchema={schema}
                  onSubmit={handleEditBikes}
                  initialValues={{
                    bikeName: bikeToEdit?.bikeName || "",
                    bikePrice: bikeToEdit?.bikePrice || "",
                    bikeDescription: bikeToEdit?.bikeDescription || "",
                    bikePhoto: bikeToEdit?.bikePhoto || "",
                  }}
                  enableReinitialize
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGroupfullname"
                        >
                          <Form.Label>bikename</Form.Label>
                          <Form.Control
                            type="text"
                            name="bikeName"
                            placeholder="Enter bikename"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bikeName}
                            isValid={touched.bikeName && !errors?.bikeName}
                            isInvalid={touched.bikeName && !!errors.bikeName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors?.bikeName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGroupEmail1"
                        >
                          <Form.Label>Enter price</Form.Label>
                          <Form.Control
                            type="number"
                            name="bikePrice"
                            placeholder="Enter price"
                            onChange={handleChange}
                            value={values.bikePrice}
                            onBlur={handleBlur}
                            isValid={touched.bikePrice && !errors?.bikePrice}
                            isInvalid={touched.bikePrice && !!errors.bikePrice}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors?.bikePrice}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGrouppasssword"
                        >
                          <Form.Label>description</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="bikeDescription"
                            placeholder="Enter description"
                            onChange={handleChange}
                            value={values.bikeDescription}
                            onBlur={handleBlur}
                            isValid={
                              touched.bikeDescription && !errors?.bikeDescription
                            }
                            isInvalid={
                              touched.bikeDescription && !!errors.bikeDescription
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors?.bikeDescription}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group
                          as={Col}
                          className="mb-3"
                          controlId="formGroupfullname"
                        >
                          <Form.Label>photo</Form.Label>
                          <Form.Control
                            type="text"
                            name="bikePhoto"
                            placeholder="add bike photo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bikePhoto}
                            isValid={touched.bikePhoto && !errors?.bikePhoto}
                            isInvalid={touched.bikePhoto && !!errors.bikePhoto}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors?.bikePhoto}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>

                      <Row className="d-grid">
                        <Button type="submit">Submit</Button>
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
  );
}

export default EditBikes;
