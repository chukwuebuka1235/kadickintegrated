import React , { useRef } from 'react'

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
const  carouselRef = useRef(null)
// const scrollLeft = () => {
//     console.log("left scroll" , carouselRef.current)
//     carouselRef.current.ScrollBy({
//         left: -300 , 
//         behaviour: "smooth"
//     })
// }
// const scrollRight = () => {
//     console.log("right scroll" , carouselRef.current)
//     carouselRef.current.ScrollBy({
//         left: -300 ,
//         behaviour: "smooth"
//     })
// }

const scrollLeft = () => {
    console.log("carouselRef.current:", carouselRef.current);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    } else {
      console.log("carouselRef.current is null or undefined");
    }
  };
  
  const scrollRight = () => {
    console.log("carouselRef.current:", carouselRef.current);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    } else {
      console.log("carouselRef.current is null or undefined");
    }
  };



  return (
    <div>
        <div className="testimonial-container">
            <div  className='main-testimony'>
                <p>TESTIMONIALS</p>
                <h2>Read the Testimonials of Kadick Agents</h2>
            </div>
        
        <div className="testimonial-carousel" ref={carouselRef}>
            { testimonials.map(( feature ) => {
                return(
                    <div className="testimonial-card" key={feature.id}>
                        <img src={feature.src} alt='' />
                        <h2 className="testimonial-name">{feature.name}</h2>
                        <p className="testimonial-company">{feature.company}</p>
                        <p className="testimonial-text">"{feature.testimony}"</p>
                    </div>
                )
            })}
        </div>
        <div className='carousel-btns'>
            <button onClick={scrollLeft} className='scroll-button left-scroll-btn'></button>
            <button onClick={scrollRight} className='scroll-button right-scroll-btn'></button>
        </div>
    </div>
    </div>
  )
}

export default Testimonialcarousel