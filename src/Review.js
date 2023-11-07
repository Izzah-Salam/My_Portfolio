import React from 'react';
import { Container, Carousel, Tab, Tabs } from 'react-bootstrap';

// Arrow function component for BuyReview
const BuyReview = () => {
  return (
    <div className="reviews-container">
      <Tabs
        defaultActiveKey="buyer"
        id="reviews-tabs"
        className="mb-3 justify-content-center" // Added justify-content-center class
      >
        <Tab eventKey="buyer" title="Buyer Review">
          <ReviewsSlider title="Buyer Review" />
        </Tab>
        <Tab eventKey="seller" title="Seller Review">
          <ReviewsSlider title="Seller Review" />
        </Tab>
      </Tabs>
    </div>
  );
};

const ReviewsSlider = ({ title }) => {
  return (
    <section className="reviews-slider">
      <Container>
        <h2 style={{textAlign:"center"}}>{title}</h2>
        <Carousel>
          {/* Buyer Reviews */}
          <Carousel.Item>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fermentum nisi non augue cursus, sit amet volutpat
              libero fermentum. Duis condimentum tortor sit amet dui finibus
              euismod."
            </p>
            <h4>John Doe - Buyer</h4>
          </Carousel.Item>

          {/* Seller Reviews */}
          <Carousel.Item>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo."
            </p>
            <h4>Jane Smith - Seller</h4>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export { BuyReview };
