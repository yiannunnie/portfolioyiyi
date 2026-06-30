import { useState } from "react";

export const About = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  const [imageAbout, setImageAbout] = useState('yob.png');

  return (
    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center"style={{
        background: 'linear-gradient(to bottom, var(--color-yellow) 10%, white 45%)'
        }}>
      <section
      id="about"
      className="flex flex-col mb-44 lg:flex-row lg:justify-center items-center w-full md:mx-auto gap-8 lg:gap-30 px-5 md:px-20 lg:px-40 min-h-screen "
      >
      <div className="flex flex-col gap-4 pt-65 md:pt-65 lg:pt-55">
        <div className="flex justify-center w-full ">
        <div className="w-40 h-44 md:w-50 md:h-54 lg:w-62 lg:h-70 rounded-full overflow-hidden bg-white border-3">
        <figure className="flex justify-center min-w-min">
        <img 
        className="object-cover w-full h-full pt-4" 
        src={`${BASE_URL}icons/${imageAbout}`}
        onMouseOver={() => setImageAbout('yobh.png')}
        onMouseOut={() => setImageAbout('yob.png')}
        />
        </figure>
      
        </div>
      </div>
      </div>

    <section className="lg:mt-40">
    <div className="flex justify-center w-full text-left">
      <p className="text-base md:text-lg lg:text-lg leading-relaxed pt-15 px-4 md:px-12 lg:text-left lg:ml-[-30px]">
          Hi there! I’m Yixuan, but you can call me Yiyi. I’m a design student with a big passion for learning and creating. 
          I think that every project is an opportunity to grow, experiment, and bring ideas to life so I always try to do my best.
          <span className="block mt-5"></span>
          I love working in Graphic Design, UI/UX, and Illustration, crafting pieces that are not just visually appealing, but meaningful and purposeful.
          For me, design is more than just what meets the eye, it’s about creating experiences that can inspire, connect, and leave a little mark in people’s lives.
          <span className="block mt-5"></span>
          Here, you’ll get a glimpse of my creativity, my curiosity, and the joy I find in every piece I create. 
          Take a look around, enjoy my work, and if you have any questions, please get in touch, I’d love to hear from you!
        </p>
        
      </div>

      
    </section>
      
    </section>
    </div>
    

  );
};


