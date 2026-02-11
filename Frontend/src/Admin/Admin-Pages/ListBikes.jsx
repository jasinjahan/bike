import { Button, Col, Container, Image, Modal, Row, Table } from "react-bootstrap";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./ListBikes.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBike } from "../../../redux/bikeSlice";
import { useState } from "react";
import { toast } from "react-toastify";





// const bikes=JSON.parse(localStorage.getItem("bikes")) || [];

const ListBikes = () => {

    const [show, setShow] = useState(false);



    const [deleteBikeId, setDeleteBikeId] = useState(null);

    const { bikes } = useSelector((state) => state.bikeState);

    const dispatch = useDispatch();

    const handleBikeDelete = (bikeId) => {
        setDeleteBikeId(bikeId)
        setShow(true);
    }
    const handleClose = () => {
        setDeleteBikeId(null);
        setShow(false);

    }
    const confirmBikeDelete = () => {
        dispatch(deleteBike(deleteBikeId));
        toast.success(" deleted successfullyy ");
        setDeleteBikeId(null);
        setShow(false);
    }






    return (
        <Container className="mb-4">
            <Row >
                <Col>
                    <h4>List Bikes</h4>
                </Col>
            </Row>
            {bikes.length < 1 ? (
                <Row>
                    <Col>
                        <h4>
                            bikes not found
                        </h4>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col>



                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>bikes Photo</th>
                                    <th>bikes Name</th>
                                    <th>bikes Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>



                                </tr>
                            </thead>


                            <tbody>



                                {bikes.map((bike, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>

                                        <td>
                                            <Image src={bike?.bikePhoto ?? null} className="bike-image" alt="{ {bike?.bikename ?? null}" />

                                        </td>
                                        <td>
                                            {bike?.bikeName ?? null}
                                        </td>
                                        <td>
                                            {bike?.bikePrice ?? null}
                                        </td>
                                        <td>
                                            <Link to={`/admin/edit-bike/${bike.id}`}>
                                                <FaEdit size={22} />
                                            </Link>
                                        </td>
                                        <td>
                                            <MdDelete onClick={() => handleBikeDelete(bike.id)} size={22} />
                                        </td>
                                    </tr>
                                ))}




                            </tbody>
                        </Table>
                    </Col>
                </Row>)}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Bike</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Bike ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={confirmBikeDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default ListBikes;