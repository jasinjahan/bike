// import { Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";


// function BikeDetails() {


// const {bikes} =useSelector((state)=>state.bikeState)

//     const { id } = useParams();


//     const bike = bikes.find((pr) => pr.id === Number(id));




//     console.log(bike);

//     return (






//         <Container>
//             <Row>
//                 <Col>
//                     <h3>bike Details</h3>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col md={4}>

//                     <Image src={bike?.bikePhoto} alt={bike?.bikeName} />

//                 </Col>
//                 <Col md={8}>
//                     <ListGroup variant="flush">
//                         <ListGroup.Item>
//                             <h3>
//                                 {bike?.bikeName ?? ''}
//                             </h3>
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             {bike?.bikePrice ?? ''}
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             {bike?.bikeDescription ?? ''}
//                         </ListGroup.Item>

//                     </ListGroup>




//                 </Col>
//             </Row>

//         </Container>
//     )
// }
// export default BikeDetails
import {
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function BikeDetails() {
  const { bikes } = useSelector((state) => state.bikeState);
  const { id } = useParams();

  const bike = bikes?.find(
    (pr) => String(pr.id) === String(id)
  );

  if (!bike) {
    return (
      <Container className="mt-4 text-center">
        <h4>Loading bike details...</h4>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Bike Details</h3>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Image
            src={bike.bikePhoto}
            alt={bike.bikeName}
            fluid
          />
        </Col>

        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{bike.bikeName}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              {bike.bikePrice}
            </ListGroup.Item>

            <ListGroup.Item>
              {bike.bikeDescription}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default BikeDetails;
