"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const slides = [
  {
    src: siteConfig.placeholderImage,
    alt: 'Slide 1',
    title: 'Welcome to Kray',
    description: 'Your one-stop shop for everything you need.',
  },
  {
    src: siteConfig.placeholderImage,
    alt: 'Slide 2',
    title: 'Latest Collection',
    description: 'Check out our latest collection of products.',
  },
  {
    src: siteConfig.placeholderImage,
    alt: 'Slide 3',
    title: 'Huge Discounts',
    description: 'Get up to 50% off on selected items.',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.src} alt={slide.alt} fill className="z-0 object-cover" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 text-white">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="mt-2 text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
