// Importerar komponenter från react-bootstrap för att använda bootstrap-komponenter i React.
import Carousel from 'react-bootstrap/Carousel';
import { Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../css/Home.css';

// Importerar bilder som ska användas i karusellen.
import firstSlideImage from '../carouselImage/first-slide.jpg';
import secondSlideImage from '../carouselImage/second-slide.jpg';
import thirdSlideImage from '../carouselImage/third-slide.jpg';

// En funktionell komponent för att visa en bild i karusellen. Tar `src`, `alt`, och andra props som argument.
function CarouselImage({ src, alt, ...props }) {
  return <img className="d-block w-100 carousel-image" src={src} alt={alt} {...props} />;
}

// Huvudkomponenten Home som renderar hela hemvyn.
function Home() {
  return (
    <>
    <Carousel> {/*  en Carousel-komponent för att visa bildspel */}
      <Carousel.Item interval={1000}>
        <CarouselImage src={firstSlideImage} alt="First slide" />
        <Carousel.Caption>
          <h3>Discover the unique flavors and warm hospitality at our restaurant—your next culinary adventure awaits!</h3>
          <p>Experience serene views, exceptional service, and delicious cuisine at our restaurant, 
            where both families and individuals can unwind and indulge in culinary delights.
          </p>
          <Button variant='outline-info' size='lg'>More info</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage src={secondSlideImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>imagine the taste, smell</h3>
          <p>Savor the symphony of flavors in our signature dish: 
            succulent, pan-seared salmon atop a bed of crisp, organic greens, 
            drizzled with a delicate, citrus-infused vinaigrette.
          </p>
          <Button variant='outline-info' size='lg'>More info</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={thirdSlideImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Riverside Dining</h3>
          <p>As the sun dips below the horizon, our riverside terrace becomes a haven of serene beauty.</p>
          <Button variant='outline-info' size='lg'>More info</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> <br />

    <div className="accordions-container">
        <div className="accordion-column">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Om oss</Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Totam rerum, inventore atque consequatur repellendus voluptatum,
                  recusandae officiis voluptate et optio eveniet nostrum ipsa fuga consectetur, 
                  asperiores adipisci cum tenetur saepe nulla similique sint sapiente iure ut eius? 
                  Repellendus, iusto nostrum. Facere, laboriosam ipsum dolor dolorem, eius culpa eligendi,
                  quos possimus ipsa expedita sapiente natus sit laborum? Molestiae assumenda qui porro ratione
                  maiores, asperiores ea consequuntur dolorum vero veritatis pariatur ad odio earum repudiandae facere
                  officiis nulla omnis doloribus rerum cumque inventore. Dolorem, nam. Itaque corrupti hic reiciendis repellendus
                  at, dolorem excepturi, sed quisquam quo enim necessitatibus, dolores nesciunt praesentium?
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="accordion-column">
          <Accordion defaultActiveKey="1" flush>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Vår service</Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Eum pariatur voluptate vel eos veniam culpa, similique provident, eaque maxime accusamus saepe laudantium aut. 
                  Esse tempora nulla deserunt quis earum repellat, laudantium alias amet. Aliquid voluptatibus nihil dolorem deleniti adipisci dignissimos temporibus. 
                  Laudantium fugiat dolorum, a vel necessitatibus ea! Dolorem animi error assumenda alias quibusdam quaerat voluptates inventore necessitatibus sint, 
                  nihil excepturi eveniet. Officia veniam, accusantium omnis debitis quod dolor nulla harum error laborum expedita voluptas maiores consectetur, 
                  architecto a esse, optio alias! Voluptatum totam dolorem blanditiis fuga at vero, et, quo, odio repudiandae esse facere? Quae iusto fugiat ea minima?
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Home;
