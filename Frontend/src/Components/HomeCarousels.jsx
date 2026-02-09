import Carousel from 'react-bootstrap/Carousel';
import "./HomeCarousels.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeCarousels() {
  return (
    <Carousel className='homecarousels'>
      <Carousel.Item>
     <img  className='w-100 photosize' src="https://maintenanceschedule.com/wp-content/uploads/2021/08/2021-Triumph-Speed-Twin-RHS-front-diagonal.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100 photosize' src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-speedtriplers_my24-770x770.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100 photosize' src="https://wallpaperaccess.com/full/2313058.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousels;