import { Button, ButtonGroup, Col, Container, Form, Image, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

import { toast } from "react-toastify";
import { useState } from "react";
import { decrementItemQuantity, deleteBike, incrementItemQuantity, removeWishItem } from "../../redux/bikeSlice";

import "./WishList.css"

const WishList = () => {
       const [show, setShow] = useState(false);
    
        const [deleteBikeId ,setDeleteBikeId] = useState(null);
    
    const dispatch = useDispatch();

    const { wishItems } = useSelector((state) => state.bikeState)

    const totalPrice = wishItems.reduce((acc, item) => {
        acc += (item.price * item.quantity);
        return acc;

    }, 0);

    const handleQuantityIncrement = (bikeId)=>{
        dispatch(incrementItemQuantity(bikeId));
    }

     const handleQuantityDecrement = (bikeId)=>{
        dispatch(decrementItemQuantity(bikeId));
    }
    
     const handleItemRemove = (bikeId)=>{
        dispatch(removeWishItem(bikeId));
        toast.success("Item removed from wishlist!");
     }



const handleBikeDelete=(bikeId)=>{
    setDeleteBikeId(bikeId)
    setShow(true);
}
const handleClose = ()=> {
    setDeleteBikeId(null);
    setShow(false);
    
}
const confirmBikeDelete = ()=>{
        dispatch(deleteBike(deleteBikeId));
    toast.success("Bike deleted successfullyy ");
    setDeleteBikeId(null);
    setShow(false);


}


    return (
        <Container>
            <Row>
                <Col className="mt-4">
                    <h4>Wish List</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bike Photo </th>
                                <th>Bike Name</th>
                                <th>Bike Price</th>
                                <th>Bike Description</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishItems.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <Image src={item.photo} className="image-photosize1" />


                                    </td>
                                    <td>
                                        {item.bikename ?? 0}
                                    </td>
                                    <td>
                                        {item.price ?? 0} x {item?.quantity ?? 1} ={item?.price * item?.quantity}
                                    </td>

                                    <td>
                                        {item.description}
                                    </td>
                                    <td>
                                        <InputGroup size="sm" className="mb-3">
                                            <Button variant="outline-secondary" id="button-addon1" onClick={()=>handleQuantityIncrement(item.id)}>
                                               +
                                            </Button>
                                            <Form.Control
                                                aria-label="small"
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={item?.quantity ?? 1}
                                                readOnly
                                            />
                                            <Button disabled={item?.quantity === 1? true : false} variant="outline-secondary" id="button-addon1" onClick={()=>handleQuantityDecrement(item.id)}>
                                                -
                                            </Button>
                                        </InputGroup>
                                      
                                    </td>
                                    <td className="icon-align text-center">
                                        <MdDelete size={22} className="icon-align text-center text-danger" onClick={()=>handleBikeDelete(item.id)} />
                                    </td>

                                </tr>

                            ))}
                            <tr >
                                <td colSpan={7} className="text-end" >
                                    <h4>
                                        Total Price {totalPrice}
                                    </h4>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </Col>
            </Row>
            
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
export default WishList;