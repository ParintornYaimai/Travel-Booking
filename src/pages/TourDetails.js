import React,{useRef,useState} from "react";
import "../style/tour-detail.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import avgRating from "../util/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../component/Booking/Booking";
import Newsletter from "../shared/Newsletter";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating,setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;
  
  console.log(photo);

  const { avgRation, totalRating } = avgRating(reviews);

  const options ={
    day:'numeric',
    month:'long',
    year:'numeric'
  }

  const handleSubmi=(e)=>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    console.log(reviewText,tourRating);
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRation === 0 ? null : avgRation}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-line"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>${price} /per
                      person
                    </span>
                    <span>
                    <i class="ri-map-pin-time-line"></i>{distance} k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/*tour reviews section*/}
                <div className="tour__reviews mt-4">
                  <h4>Reviewas({reviews.length} reviews)</h4>
                  <Form onSubmit={handleSubmi}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={()=>setTourRating(1)}>
                        1 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(2)}>
                        2 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(3)}>
                        3 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(4)}>
                        4 <i class="ri-star-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(5)}>
                        5 <i class="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        placeholder="share you thoughts"
                        ref={reviewMsgRef}
                        required
                      ></input>
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews.map((reviews) => (
                      <div className="review__item">
                        <img src={avatar} />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Jack</h5>
                              <p>
                                {
                                  new Date('01-18-2023').toLocaleDateString('en-US')
                                }
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                      
                    ))}
                  </ListGroup>

                </div>
                {/*tour reviews section end*/}
              </div>
            </Col>

            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>

          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default TourDetails;
