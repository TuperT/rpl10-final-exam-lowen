import '../styles/sections/Section2.css';
import MentorImage from '../assets/sections/section2/Mentors 3.png';
import SendImage from '../assets/sections/section2/send.png';
import TaskImage from '../assets/sections/section2/Task Today.png';
import DashboardImage from '../assets/sections/section2/Web - Dashboard.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                }, 
            },)

            tl.from('#section2-img-mentors', { scale: 0, ease: 'bounce.out' })
            .from('#section2-img-task', { scale: 0, ease: 'bounce.out' }, "+=0.1")
            .from('#section2-img-dashboard', { scale: 0, ease: 'bounce.out' }, "+=0.1");
        }, sectionRef)

        return () => ctx.revert();
    }, [])

  return (
    <section id="section2" ref={sectionRef}>
        <div id="section2-offer">
            <div id="section2-offer-content">
                <h1>Chats for your distributed teams</h1>
                <p>Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.</p>
            </div>
            <div id="section2-offer-link-btn">
                <button>Learn More &#8594;</button>
            </div>
        </div>

        <div id="section2-image">
            <div id="section2-img-mentors">
                <img src={MentorImage} className='mentor-img' />
                <img src={SendImage} className='send-img' />
            </div>

            <div id="section2-img-task">
                <img src={TaskImage} alt="" />
            </div>

            <div id="section2-img-dashboard">
                <img src={DashboardImage} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section2