import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="hero min-h-screen bg-base-200" id='Hero'>
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Syed Husban Ali</h1>
          <p className="py-6">
            Welcome to our software house! We specialize in delivering high-quality, custom software solutions tailored to your business needs. Our team of experienced developers, designers, and project managers work collaboratively to turn your ideas into reality. Whether it's web development, mobile applications, or enterprise software, we are committed to excellence and innovation.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src="./Ecommerce.jpg" className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
}

export default HeroSection;
