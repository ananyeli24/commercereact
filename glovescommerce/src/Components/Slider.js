import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel fade className="Carousel-wrapper container">
      <Carousel.Item active>
      
        <img
          className="d-block"
          
          src="assets/images/Glove5.jpeg"
          alt="First slide"
        />
        <Carousel.Caption className= "Carousel-caption">
          <h4>Gold Bond  Mizuno</h4>
          <p>The Mizuno MVP Prime FP series is Gender Engineered.
          specifically for softball players striving to get to the next level. 
          Featuring Center Pocket Designed Patterns that naturally center the pocket under 
          the index finger for the most versatile break-in possible.
          </p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item active >
        <img
          className="d-block"
          src="assets/images/Glove6.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption className= "Carousel-caption" >
          <h4>Gold Bond Rauling</h4>
          <p>The Mizuno MVP Prime FP series is Gender Engineered specifically for softball
             players striving to get to the next level. Featuring Center Pocket Designed Patterns 
             that naturally center the pocket under the index finger for the most versatile break-in possible. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item active>
      
        <img
          className="d-block"
          
          src="assets/images/Glove11.jpeg"
          
          alt="Third slide"
        />

        <Carousel.Caption className= "Carousel-caption">
          <h4>On da Clear Bond Mizuno</h4>
          <p>
          The Mizuno MVP Prime SE series is the ideal glove choice for
           players looking to advance their game, while adding a little 
           swagger with a standout color pop to their glove.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;