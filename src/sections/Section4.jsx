import "../styles/sections/Section4.css";
import MockupImage from "../assets/sections/section4/mockup.jpg";
import MentorImage from "../assets/sections/section4/mentor.png";
import TaskImage from "../assets/sections/section4/task.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }, 
            })

            tl.from('#section4-image', { xPercent: 500, ease: 'power2.out' })
            .from('#section4-offer', { xPercent: -500, ease: 'power2.out' }, "-=0.2")

        }, sectionRef)

        return () => ctx.revert();
    }, [])

    return (
        <section id="section4" ref={sectionRef}>
        <div id="section4-offer">
            <div id="section4-offer-content">
            <h1>Choose how you want to work</h1>
            <p>
                In Team, you’ve got all the flexibility to work when, where and how
                it’s best for you. You can easily chat, send audio and video clips,
                or hop on a huddle to talk things out live.
            </p>
            </div>

            <div id="section4-offer-link-btn">
            <button>Learn More &#8594;</button>
            </div>
        </div>

        <div id="section4-image">
            <img src={MockupImage} id="section4-mockup" />

            <div id="section4-img-mentor">
            <img src={MentorImage} />
            </div>

            <div id="section4-img-task">
            <img src={TaskImage} />
            </div>
        </div>
        </section>
    );
};

export default Section4;
