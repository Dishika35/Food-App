import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <Carousel>
      <div>
        <img src="https://source.unsplash.com/random/1920x1080/?travel#,travel" alt="Image 1" />
        <p className="legend">"We don't need objects; we need adventures."</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/random/1920x1080/?adventure#,adventure" alt="Image 2" />
        <p className="legend">"Travel is the only thing you buy that makes you richer."</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/random/1920x1080/?monuments#,monuments" alt="Image 3" />
        <p className="legend">"Jobs fill your pockets, adventures fill your soul."</p>
      </div>
    </Carousel>
  );
};

export default Home;
