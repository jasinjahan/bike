import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import HomeCarousels from "../Components/HomeCarousels";


import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToWish } from "../../redux/bikeSlice";



function Home() {

    const {bikes} = useSelector((state) => state.bikeState);
    const dispatch = useDispatch();

   


    const handleAddToWish = (bike) => {

        

     dispatch(addToWish(bike));

    }


    return (
        <>
            <HomeCarousels />
            <Container>
                {/* <h5> Count:{count}  </h5> */}
                <Row>
                    {bikes.map((bike, index) => (
                        <Col md={6} lg={4} xl={3} key={index} className="mt-4 ">
                            <Card className="bike-card">
                                <Link to={`/bike/${bike.id}`}>
                                    <Card.Img variant="top  " src={bike?.photo ?? null} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>
                                        {bike?.bikename ?? ""}
                                    </Card.Title>
                                    <Card.Text>
                                        {bike?.description ?? ""}
                                    </Card.Text>
                                    <Button onClick={() => handleAddToWish(bike)} variant="primary">Add to wish</Button>
                                </Card.Body>
                            </Card>
                        </Col>






                    )

                    )}


                </Row>
            </Container>
        </>
    );

}
export default Home;