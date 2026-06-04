import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import '../styles/sections/HeroSection.css';

const HeroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        

        const ctx = gsap.context(() => {
            gsap.timeline()
                .from('#hero-offer-content', { duration: 0.5, y: 50, opacity: 0 })
                .from('#hero-input', { duration: 0.5, y: 50, opacity: 0 });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={sectionRef}>
            <div id="hero-offer">
                <div id="hero-offer-content">
                    <h1>Instant collaboration for remote teams</h1>
                    <p>All-in-one place for your remote team to chat, collaborate and track project progress.</p>
                </div>
                <div id="hero-input">
                    <input type="email" placeholder='Email'></input>
                    <button id='hero-input-btn-enter'>&#8594;</button>
                    <button id='hero-input-btn'>Get Early Access</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection