import '../styles/sections/Section6.css'
import TestimonialCard from '../components/TestimonialCard'
import Avatar1 from '../assets/components/TestimonialCard/Avatar1.jpg'
import Avatar2 from '../assets/components/TestimonialCard/Avatar2.jpg'
import Avatar3 from '../assets/components/TestimonialCard/Avatar3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Section6 = () => {
    const testimonials = [
    {
        id: 1,
        review: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
        name: "Chealsea Morgan",
        role: "CEO at Subway",
        avatar: Avatar1,
    },
    {
        id: 2,
        review: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
        name: "Nick Cave",
        role: "CMO at Nokia",
        avatar: Avatar2,
    },
    {
        id: 3,
        review: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        name: "Lana Rosenfeld",
        role: "Senior VP at Pinterest",
        avatar: Avatar3,
    },
    {
        id: 4,
        review: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
        name: "Chealsea Morgan",
        role: "CEO at Subway",
        avatar: Avatar1,
    },
    {
        id: 5,
        review: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
        name: "Nick Cave",
        role: "CMO at Nokia",
        avatar: Avatar2,
    },
    {
        id: 6,
        review: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        name: "Lana Rosenfeld",
        role: "Senior VP at Pinterest",
        avatar: Avatar3,
    },
    {
        id: 7,
        review: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        name: "Lana Rosenfeld",
        role: "Senior VP at Pinterest",
        avatar: Avatar3,
    },
    {
        id: 8,
        review: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
        name: "Chealsea Morgan",
        role: "CEO at Subway",
        avatar: Avatar1,
    },
    {
        id: 9,
        review: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
        name: "Nick Cave",
        role: "CMO at Nokia",
        avatar: Avatar2,
    },
    {
        id: 10,
        review: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        name: "Lana Rosenfeld",
        role: "Senior VP at Pinterest",
        avatar: Avatar3,
    },
    ]

    return (
        <section id="section6">
            <h1 id="section6-title">
                What people say about Team
            </h1>

            <div className="testimonials-wrapper">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.swiper-btn-prev',
                        nextEl: '.swiper-btn-next',
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3.2,
                        },
                    }}
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id}>
                            <TestimonialCard
                                review={t.review}
                                name={t.name}
                                role={t.role}
                                avatar={t.avatar}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
 
                <div className="swiper-navigation">
                    <button className="swiper-btn-prev" aria-label="Previous slide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="swiper-btn-next" aria-label="Next slide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section6