import React, { useEffect, useRef, useState, useContext } from "react";
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgrating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo, 
    title, 
    desc, 
    price, 
    reviews, 
    destinations, 
    distance,
    duration,
    inclusions, 
    maxGroupSize
  } = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = {day: "numeric", month: "long", year: "numeric"};

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
        if (!user || user === undefined || user === null) {
            alert("Please Sign in");
            return;
        }

        if (!tourRating) {
            alert("Please provide a rating before submitting the review.");
            return;
        }

        const reviewObj = {
            username: user?.username,
            reviewText,
            rating: tourRating,
        };

        const res = await fetch(`${BASE_URL}/review/${id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(reviewObj),
        });

        if (!res.ok) {
            const errorMessage = await res.text();
            throw new Error(errorMessage);
        }

        const result = await res.json();
        alert("Review posted successfully!");
        console.log(result);
    } catch (error) {
        console.error("Error:", error.message);
        alert(`An error occurred: ${error.message}`);
    }
};


  useEffect(() => {
    window.scrollTo(0,0);
  }, [tour]);

  return (
    <>
     <section>
      <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill" style={{'color' : "var(--secondary-color)"}}></i> {avgRating === 0 ? null : avgRating} 
                    {totalRating === 0 ? (
                      "Not Rated" 
                    ) : (
                    <span>({reviews?.length})</span>
                    )}
                  </span>
                  <span>
                    <i className="ri-map-pin-line"></i>{destinations}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i class="ri-money-rupee-circle-line"></i>₹{price} / per person
                  </span>
                  <span>
                    <i class="ri-treasure-map-line"></i>{distance} km
                  </span>
                  <span>
                    <i class="ri-group-line"></i>{maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
                <h5>Duration</h5>
                <p>{duration}</p>
                <h5>Inclusions</h5>
                <p>{inclusions}</p>
              </div>
              {/*===========tour reviews section===========*/}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={()=> setTourRating(1)}>
                      1 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(2)}>
                      2 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(3)}>
                      3 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(4)}>
                      4 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=> setTourRating(5)}>
                      5 <i class="ri-star-s-fill"></i>
                    </span>
                  </div>

                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required/>
                    <button className="btn primary__btn text-white" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user__reviews">
                  {
                    reviews?.map(review=>(
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(
                                review.createdAt
                                ).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating} 
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
        )}
      </Container>
      </section> 
      <Newsletter />
    </>
  );
};

export default TourDetails;