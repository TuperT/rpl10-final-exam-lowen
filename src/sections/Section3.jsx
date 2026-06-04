import '../styles/sections/Section3.css';
import CalendarImage from '../assets/sections/section3/Calendar.png';
import MockupImage from '../assets/sections/section3/Mockup.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                }, 
            })

            tl.from('#section3-image', { xPercent: -500, ease: 'power1.inOut' })
            .from('#section3-info', { xPercent: 500, ease: 'power1.inOut' })

        }, sectionRef)

        return () => ctx.revert();
    }, [])

    return (
        <section id="section3" ref={sectionRef}>
            <div id="section3-image">
                <img src={MockupImage} id='section3-mockup' />
                
                <div id="section3-img-calendar">
                    <img src={CalendarImage} />
                </div>
            </div>

            <div id="section3-info">
                <div id="section3-info-content">
                    <h1>Chats for your distributed teams</h1>
                    <p>Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.</p>     
                </div>

                <div id="section3-info-link-btn">
                    <button>Learn More &#8594;</button>
                </div>
            </div>
        </section>
    )
}

export default Section3