import Carousel from 'react-bootstrap/Carousel';
import Banner from './banner.png'
import Info from './Info';

function Home() {
  return (
   <div>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner}
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner}  
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    <Info/>
   </div>
  );
}

export default Home;