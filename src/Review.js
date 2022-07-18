import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const previousPerson = () => {
    index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      if (index === people.length - 1) {
        randomNumber = index - 1;
        console.log(index, randomNumber);
      }
      if (index === 0) {
        randomNumber = index + 1;
        console.log(index, randomNumber);
      }
    }
    setIndex(randomNumber);
  };

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img
            className="person-img"
            src={people[`${index}`].image}
            alt={people[`${index}`].name}
          />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{people[`${index}`].name}</h4>
        <p className="job">{people[`${index}`].job}</p>
        <p>{people[`${index}`].text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </>
  );
};

export default Review;
