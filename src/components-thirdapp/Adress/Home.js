
import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const a = [
    {
      title: 'Silent Suffering: The Devastating Impact of Hunger on Communities Worldwide',
      description: 'Hunger silently devastates millions, causing malnutrition and societal strain. Families must choose between food, healthcare, and education. Solutions include better food access and addressing inequalities for a healthier world',
      image: 'https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.jpg?s=612x612&w=0&k=20&c=uAUDyZRdpReAW51hD29W7fOCTDzNrOdHkAdKXErbapU='
    },
    {
      title: '"Feed the Hungry: A Stall of Hope Providing Excess Food to Those in Need"',
      description: '"Aiming to reduce food waste, our stall offers excess food to those in need, promoting community support and sustainability."',
      image: 'https://img.freepik.com/free-psd/3d-kawaii-elements-podium-background_23-2150676183.jpg'
    },
    {
      title: 'Hunger Heroes: Stories of Resilience and Hope Amidst Food Insecurity',
      description: 'Profiles of individuals facing food insecurity, highlighting their resilience and the impact of community support in their lives.',
      image: 'https://w0.peakpx.com/wallpaper/313/739/HD-wallpaper-harshness-of-the-world-hunger-poor-child-food.jpg'
    },
    {
      title: 'Food Waste Hotspots: Addressing Excess Food Disposal in Function Halls and Hostels',
      description: 'Exploring food waste in function halls and hostels, highlighting challenges and solutions for more sustainable practices.',
      image: 'https://www.shutterstock.com/image-illustration/3d-isometric-flat-conceptual-illustration-260nw-2168995835.jpg'
    }
  ];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const increment = () => {
    if (index < a.length - 1) {
      setIndex(index + 1);
    }
  };

  const decrement = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };


  return (
    <div className="" style={{ position: 'relative' }}>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{  }}>
        {a.map((item, idx) => (
          <Carousel.Item key={idx} style={{}}>
            <div className='p-3 text-center row' style={{ width: '100%', marginTop: '100px' }}>
              <div className='col-lg-8' >
                <img src={item.image} width='100%' alt=""  />
              </div>
              <div className='col-lg-4' style={{ marginTop: '10%' }}>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
  
    
    </div>
  );
 
    }
export default Home;