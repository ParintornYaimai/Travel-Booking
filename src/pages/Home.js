import React from "react";
import "../style/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../component/Feature-tours/FeaturedTourList";
import MasonraImagesGallery from "../component/Image-gallery/MasonraImagesGallery";
import Testimonial from "../component/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content ">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  {" "}
                  Traveling opens the door to creating
                  <span className="highlight"> meories </span>
                </h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. It usually
                  begins
                </p>
              </div>
            </Col>

            <Col lg="6">
              <div className="worldImg">
                <img src={worldImg} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*---------------- hero section start-----------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*---------------- featured tour section start-----------------*/}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
      {/*---------------- featured tour section end-----------------*/}

      {/*---------------- exprience section start -----------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience
                  <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years exprience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={worldImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*---------------- exprience section end -----------------*/}

      {/*---------------- gallery section start  -----------------*/}
      <section className="gallery-box">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonraImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*---------------- gallery section end  -----------------*/}

      {/*---------------- testimonial section start  -----------------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/*---------------- testimonial section end  -----------------*/}
      <Newsletter />
    </>
  );
};

export default Home;
