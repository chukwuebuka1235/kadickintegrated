import React  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,           // <-- this enables autoplay
  autoplaySpeed: 2000,      // <-- delay between slides (in ms)
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 700, // Below this width
      settings: {
        slidesToShow: 1, // Show only 1 card
        dots: true,

      },
    },
  ]}
const Testimonialcarousel = () => {
    const testimonials = [
        {
            id: "testimonial-1" ,
            src:"testimonialimg1.png",
            name: "Solomon Ilesha" ,
            company: "solo B enterprise",
            testimony: "Since I became an agent with Kadick, I have never experienced any issues at all. My Transactions have been smooth and my customers are happy. Resolving complaints has been fast and I hope Kadick becomes the best in Nigeria."
        },
        {
            id: "testimonial-2" ,
            src:"testimonialimg2.png",
            name: "Solomon Ilesha" ,
            company: "solo B enterprise",
            testimony: "When I started agency banking with Kadick, it seemed like it would be tough but in no time things got better. Now I am doing well with my business and in my community."
        },
        {
            id: "testimonial-3" ,
            src:"testimonialimg3.png",
            name: "Solomon Ilesha" ,
            company: "solo B enterprise",
            testimony: "Kadick is trying, Kadick integrated has added value to my business because it has made banking services easily accessible in my community and their consistency has made Kadick unique compared to others."
        },
        {
            id: "testimonial-4" ,
            src:"testimonialimg4.png",
            name: "Solomon Ilesha" ,
            company: "solo B enterprise",
            testimony:"Since I became an agent with Kadick, I have never experienced any issues at all. My Transactions have been smooth and my customers are happy. Resolving complaints has been fast and I hope Kadick becomes the best in Nigeria."
        },
        {
            id: "testimonial-5" ,
            src:"testimonialimg2.png",
            name: "Solomon Ilesha" ,
            company: "solo B enterprise",
            testimony: "Since I became an agent with Kadick, I have never experienced any issues at all. My Transactions have been smooth and my customers are happy. Resolving complaints has been fast and I hope Kadick becomes the best in Nigeria."
        },
        {
            id: "testimonial-6" ,
            src:"testimonialimg1.png",
            name: "Solomon Ilesha" ,
            company: "solo B enterprise",
            testimony: "Since I became an agent with Kadick, I have never experienced any issues at all. My Transactions have been smooth and my customers are happy. Resolving complaints has been fast and I hope Kadick becomes the best in Nigeria."
        }
    ]

  return (
    
    <div>
        <div className="testimonial-container">
            <div  className='main-testimony'>
                <p>TESTIMONIALS</p>
                <h2>Read the Testimonials of Kadick Agents</h2>
            </div>
        
            <div className="testimonial-carousel">
              <Slider {...settings}>
                  {testimonials.map((feature) => (
                    <div  key={feature.id} className="slide-container">
                      <div className="testimonial-card">
                        <img src={feature.src} alt="" />
                        <h2 className="testimonial-name">{feature.name}</h2>
                        <p className="testimonial-company">{feature.company}</p>
                        <p className="testimonial-text">"{feature.testimony}"</p>
                       </div>
                    </div>
                  ))}
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonialcarousel