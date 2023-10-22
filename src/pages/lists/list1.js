import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from '../../components/progressBar'; 
import "./list.css";

function Checklist() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const calculateProgress = () => {
    return (currentSlide / 4) * 100; // Si vous avez 3 diapositives (0, 1, 2)
  };

  const progress = calculateProgress();

  const handleNextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const isLastSlide = currentSlide === 4;

  return (
    <div className="list-page">
      <div className="nav-bar">
        <h1>Thématique 1</h1>
        <ProgressBar progress={progress} />
        <Link to="/" className="home-icon">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>

      <h2>Es-tu sûr...</h2>

      <div className="carousel">
        {currentSlide === 0 && (
          <div className="slide">
            <p>... de vouloir valider l'item 1 ? </p>
          </div>
        )}
        {currentSlide === 1 && (
          <div className="slide">
          
            <p>... de vouloir valider l'item 2 ? </p>
          </div>
        )}
        {currentSlide === 2 && (
          <div className="slide">
         <p>... de vouloir valider l'item 3 ? </p>
          </div>
        )}
        {currentSlide === 3 && (
          <div className="slide">
         <p>... de vouloir valider l'item 4 ? </p>
          </div>
        )}
        {currentSlide === 4 && (
          <div className="slide">
         <p>... de vouloir valider l'item 5 ? </p>
          </div>
        )}
      </div>

      <div>
        {!isLastSlide && (
          <button onClick={handleNextSlide} disabled={currentSlide === 4} className="button">
           VALIDER
          </button>
        )}
        {isLastSlide && (
          <div className="congrats">
            <h2>BRAVO !</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checklist;
