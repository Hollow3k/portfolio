import React, { useEffect, useRef } from 'react';
import './Projects.css';
import Card from '../Card/Card.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const contents = gsap.utils.toArray("#container .content");
    
    // Kill any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".projects",
        start: "top top",
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (contents.length - 1),
          duration: { min: 0.1, max: 0.3 },
          delay: 0,
          ease: "power1.inOut",
          inertia: false
        },
        end: () => "+=" + (containerRef.current.scrollWidth - window.innerWidth),
        anticipatePin: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className='projects'>
      <div className='heading'>
        <div className='red-dot'></div>
        <h1>Projects</h1>
      </div>

      <div id="container" ref={containerRef}>
        <div className="content"><Card
        src="/ge.png"
        title="Gemini Clone"
        description="Lorem Ipsum Lorem Ipsum Lorem IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem IpsuLorem IpsumLorem Ipsum Lorem Ipsum IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem"
        techStack="ReactJS"
        icon="/react.png"
        link="https://geminiclone-beryl.vercel.app/"/>
        </div>
        <div className="content"><Card
        src="/gt3rs.png"
        title="Porsche 3D Viewer"
        description="Lorem Ipsum Lorem Ipsum Lorem IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem IpsuLorem IpsumLorem Ipsum Lorem Ipsum IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem"
        techStack="ReactJS Three.js"
        icon="/react.png"
        link="https://gt3rshex.vercel.app/"/>
        </div>
        <div className="content"><Card
        src="/alore.png"
        title="Alore : An ecommerce website"
        description="Lorem Ipsum Lorem Ipsum Lorem IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem IpsuLorem IpsumLorem Ipsum Lorem Ipsum IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem"
        techStack="ReactJS"
        icon="/react.png"
        link="https://alore-lemon.vercel.app/"/>
        </div>
        <div className="content"><Card
        src="/poke.png"
        title="Pokedex"
        description="Lorem Ipsum Lorem Ipsum Lorem IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem IpsuLorem IpsumLorem Ipsum Lorem Ipsum IpsumLoremIpsumvLorem Ipsum Lorem IpsumLorem IpsLorem Ipsum Lorem Ipsum Lorem IpsumvLorem"
        techStack="HTML CSS JavaScript"
        icon="/react.png"
        link="https://hollow3k.github.io/Pokedex/"/>
        </div>
      </div>
    </section>
  );
}

export default Projects;