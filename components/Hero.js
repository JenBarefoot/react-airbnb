import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="https://github.com/JenBarefoot/react-airbnb/blob/main/images/photo-grid.png?raw=true"
        className="hero--photo"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
