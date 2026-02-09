import { Button, Card, Col, Container, Row,  } from "react-bootstrap";

const Bikes = ({ bikes }) => {
    return (

        <Container>
            <Row>
                <Col>
                    <h2>
                        Bikes
                    </h2>


                </Col>
            </Row>
            <Row>
                {bikes.map((bikes , index) => (
                    <Col md={6} lg={4} xl={3} key={index} className="mt-4 ">
                        <Card className="bikes-card">
                            <Card.Img variant="top  " src={bikes?.bikePhoto ?? null} />
                            <Card.Body>
                                <Card.Title>
                                    {bikes?.bikeName ?? ""}
                                </Card.Title>
                                <Card.Text>
                                    {bikes?.bikeDescription ?? ""}
                                </Card.Text>
                                <Button variant="primary">Add to wishlist</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                )

                )}


            </Row>
        </Container>








    )
}

export default Bikes;