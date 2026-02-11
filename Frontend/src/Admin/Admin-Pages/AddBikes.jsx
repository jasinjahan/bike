// import { Button, Col, Container, Form, Row } from "react-bootstrap"
// import * as formik from 'formik';
// import * as yup from 'yup';
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import instance from "../../../axios/instance";
// import { addbikes } from "../../../redux/bikeSlice";
// import { useDispatch } from "react-redux";


// function AddBikes() {
//     const { Formik } = formik;

//     const navigate=useNavigate();

//     const bikes = JSON.parse(localStorage.getItem("bikes")) || [];

// const dispatch = useDispatch();
//     const schema = yup.object().shape({
//         bikeName: yup.string().required("Please Enter  bikename").min(2, "bikename should me min 2 characters").max(20, "Max Full Name characters exceed 20"),
//         bikePrice: yup.number().required("Plases enter your  price"),
//         bikeDescription: yup.string().required("Plaese enter your bike description"),
//         bikePhoto: yup.string().required("Plaese add your bike photo"),

//     });

//     const handleAddBikes = async(values) => {

//         // values.id =Date.now();
//      try {
//         const {data}=await instance.post('bike/add',values);
//        dispatch(addbikes(data?.bike));
//        toast.success(data?.message);
//        navigate("/admin/listbikes");

        
//      } catch (error) {
//         toast.error(error?.response?.data?.message || error.message);

        
//      }





//         // bikes.push(values);




//         // localStorage.setItem("bikes", JSON.stringify(bikes));
//         // toast.success(" bike added successfull");
        
//         // navigate("/")
//     }



//     return (
//         <>
//             <Container>
//                 <Row className="justify-content-center">
//                     <Col md={4} className="mt-4">

//                         <Row>
//                             <Col>

//                                 <h4>
//                                     Addbikes
//                                 </h4>


//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col>
//                                 <Formik
//                                     validationSchema={schema}
//                                     onSubmit={handleAddBikes}
//                                     initialValues={{
//                                         bikeName: "",
//                                         bikePrice: "",
//                                         bikeDescription: "",
//                                          bikePhoto: ""
//                                     }}
//                                 >

//                                     {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (

//                                         <Form noValidate onSubmit={handleSubmit} >
//                                             <Row>
//                                                 <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
//                                                     <Form.Label>bikename</Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="bikeName"
//                                                         placeholder="Enter bikename"
//                                                         onChange={handleChange}
//                                                         onBlur={handleBlur}
//                                                         value={values.bikeName}
//                                                         isValid={touched.bikeName && !errors?.bikeName}
//                                                         isInvalid={touched.bikeName && !!errors.bikeName}

//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {errors?.bikeName}
//                                                     </Form.Control.Feedback>
//                                                 </Form.Group>
//                                             </Row>
//                                             <Row>
//                                                 <Form.Group as={Col} className="mb-3" controlId="formGroupEmail1">
//                                                     <Form.Label>Enter price</Form.Label>
//                                                     <Form.Control
//                                                         type="number"
//                                                         name="bikePrice"
//                                                         placeholder="Enter price"
//                                                         onChange={handleChange}
//                                                         value={values.bikePrice}
//                                                         onBlur={handleBlur}
//                                                         isValid={touched.bikePrice && !errors?.bikePrice}
//                                                         isInvalid={touched.bikePrice && !!errors.bikePrice}
//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {errors?.bikePrice}
//                                                     </Form.Control.Feedback>
//                                                 </Form.Group>
//                                             </Row>
//                                             <Row>
//                                                 <Form.Group as={Col} className="mb-3" controlId="formGrouppasssword">
//                                                     <Form.Label> description</Form.Label>
//                                                     <Form.Control
//                                                         as="textarea"
//                                                         name="bikeDescription"
//                                                         placeholder="Enter description"
//                                                         onChange={handleChange}
//                                                         value={values.bikeDescription}
//                                                         onBlur={handleBlur}
//                                                         isValid={touched.bikeDescription && !errors?.bikeDescription}
//                                                         isInvalid={touched.bikeDescription && !!errors.bikeDescription}

//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {errors?.bikeDescription}
//                                                     </Form.Control.Feedback>
//                                                 </Form.Group>
//                                             </Row>
//                                             <Row>
//                                                 <Form.Group as={Col} className="mb-3" controlId="formGroupfullname">
//                                                     <Form.Label>photo</Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="bikePhoto"
//                                                         placeholder="add bike photo"
//                                                         onChange={handleChange}
//                                                         onBlur={handleBlur}
//                                                         value={values.bikePhoto}
//                                                         isValid={touched.bikePhoto && !errors?.bikePhoto}
//                                                         isInvalid={touched.bikePhoto && !!errors.bikePhoto}

//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {errors?.bikePhoto}
//                                                     </Form.Control.Feedback>
//                                                 </Form.Group>
//                                             </Row>
//                                             <Row className="d-grid">
//                                                 <Button type="submit"> Submit
//                                                 </Button>
//                                             </Row>
//                                         </Form>
//                                     )}



//                                 </Formik>

//                             </Col>
//                         </Row>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }
// export default AddBikes
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { addbikes } from "../../../redux/bikeSlice";
import { useDispatch } from "react-redux";

function AddBikes() {
    const { Formik } = formik;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        bikeName: yup
            .string()
            .required("Please Enter bikename")
            .min(2, "bikename should be min 2 characters")
            .max(20, "Max bikename characters exceed 20"),
        bikePrice: yup
            .number()
            .typeError("Price must be a number")
            .positive("Price must be greater than 0")
            .required("Please enter price"),
        bikeDescription: yup
            .string()
            .required("Please enter bike description"),
        bikePhoto: yup
            .string()
            .required("Please add bike photo"),
    });

    const handleAddBikes = async (values) => {
        try {
            const { data } = await instance.post("bike/add", values);

            dispatch(addbikes(data?.bike));
            toast.success(data?.message);
            navigate("/admin/listbikes");

        } catch (error) {
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="mt-4">
                        <Row>
                            <Col>
                                <h4>Addbikes</h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleAddBikes}
                                    initialValues={{
                                        bikeName: "",
                                        bikePrice: "",
                                        bikeDescription: "",
                                        bikePhoto: "",
                                    }}
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
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label>bikename</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="bikeName"
                                                        placeholder="Enter bikename"
                                                        value={values.bikeName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.bikeName && !errors.bikeName}
                                                        isInvalid={touched.bikeName && !!errors.bikeName}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.bikeName}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>

                                            <Row>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label>Enter price</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="bikePrice"
                                                        placeholder="Enter price"
                                                        value={values.bikePrice}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.bikePrice && !errors.bikePrice}
                                                        isInvalid={touched.bikePrice && !!errors.bikePrice}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.bikePrice}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>

                                            <Row>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        name="bikeDescription"
                                                        placeholder="Enter description"
                                                        value={values.bikeDescription}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.bikeDescription && !errors.bikeDescription}
                                                        isInvalid={touched.bikeDescription && !!errors.bikeDescription}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.bikeDescription}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>

                                            <Row>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label>Photo</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="bikePhoto"
                                                        placeholder="Add bike photo"
                                                        value={values.bikePhoto}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isValid={touched.bikePhoto && !errors.bikePhoto}
                                                        isInvalid={touched.bikePhoto && !!errors.bikePhoto}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.bikePhoto}
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

export default AddBikes;
