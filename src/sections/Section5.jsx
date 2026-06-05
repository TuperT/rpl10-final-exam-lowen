import '../styles/sections/Section5.css';
import MockupImage from '../assets/sections/section5/mockup.jpg';
import MentorImage from '../assets/sections/section5/mentor.png';
import TaskImage from '../assets/sections/section5/task.png';
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
                    start: 'top 70%',
                }, 
            })

            tl.from('#section5-image', { xPercent: -500, ease: 'power2.out' })
            .from('#section5-offer', { xPercent: 500, ease: 'power2.out' }, "-=0.2")

        }, sectionRef)

        return () => ctx.revert();
    }, [])

    return (
        <section id="section5" ref={sectionRef}>
            <div id="section5-image">
                <img src={MockupImage} id='section5-mockup' />
                
                <div id="section5-img-mentor">
                    <img src={MentorImage} />
                </div>

                <div id="section5-img-task">
                    <img src={TaskImage} />
                </div>
            </div>

            <div id="section5-offer">
                <div id="section5-offer-content">
                    <h1>Move faster with your Team tools</h1>
                    <p>With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</p>     
                </div>

                <div id="section5-offer-link-btn">
                    <button>Learn More &#8594;</button>
                </div>
            </div>
        </section>
    )
}

export default Section3