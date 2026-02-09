import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function BikeDetails() {


const {bikes} =useSelector((state)=>state.bikeState)

    const { id } = useParams();


    const bike = bikes.find((pr) => pr.id === Number(id));




    console.log(bike);

    return (






        <Container>
            <Row>
                <Col>
                    <h3>bike Details</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>

                    <Image src={bike?.photo} alt={bike?.bikeName} />

                </Col>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>
                                {bike?.bikename ?? ''}
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {bike?.price ?? ''}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {bike?.description ?? ''}
                        </ListGroup.Item>

                    </ListGroup>




                </Col>
            </Row>

        </Container>
    )
}
export default BikeDetails