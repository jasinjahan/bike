import { Col, Container, Image, Row, Table } from "react-bootstrap";
// import "./ListProducts.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./ListBikes.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBike } from "../../../redux/bikeSlice";
import { useState } from "react";




const bikes=JSON.parse(localStorage.getItem("bikes")) || [];

const ListBikes = () => {




    const [deleteBikeId ,setDeleteBikeId] = useState(null);

const {bikes}= useSelector((state)=> state.bikeState);

 const dispatch = useDispatch();

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
    toast.success("product deleted successfullyy ");
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
            {bikes.length <1 ?(
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
                            
                       
                       
                        {bikes.map ((bike,i) => (
                            <tr key={i}>
                                <td>{i+1}</td>

                                <td>
                                    <Image src={bike?.photo ?? null} className="bike-image" alt="{ {bike?.bikename ?? null}"/>
                                
                                </td>
                                <td>
                                    {bike?.bikename ?? null}
                                </td>
                                <td>
                                    {bike?.price ?? null}
                                </td>
                                <td>
                                    <Link to={`/admin/edit-bike/${bike.id}`}>
                                    <FaEdit size={22} />
                                    </Link>
                                </td>
                                <td>
                                    <MdDelete onClick={()=> handleBikeDelete(bike.id)} size={22} />
                                </td>
                            </tr>
                             ) )}
                        
                          
                         

                        </tbody>
                    </Table>
                </Col>
            </Row>)}
        </Container>
    )
}

export default ListBikes;