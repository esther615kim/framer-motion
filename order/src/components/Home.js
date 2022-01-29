import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h2>
        Private London Clinic
      </h2>
      <Link to="/base">
        <button>
          Book your appointment
        </button>
      </Link>
    </div>
  )
}

export default Home;