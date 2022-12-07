import React, { useRef } from "react";

import teamStyle from "./team.module.css"
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css"
import 'swiper/css/pagination';

import manOne from "../../images/manOne.webp"
import arrowDefault from "../../images/icons/arrowDefault.svg"
import arrowActive from "../../images/icons/arrowActive.svg"

const Team = () => {
  const swiperRef = useRef()

  return ( 
    <section className={teamStyle.team}>
      <Swiper 
        className={teamStyle.team__swiper} 
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => swiperRef.current = swiper}
        navigation={true} 
        pagination={{
          el: ".swiper__pagination",
          clickable: true
        }}>
        <SwiperSlide className={teamStyle.team__slider}>
          <div className={teamStyle.team__image__block}>
            <img src={manOne} alt="humanImage" className={teamStyle.team__worker__image}/>
            <div className={teamStyle.team__worker__info}>
              <h3 className={teamStyle.team__worker__name}>Ronald Richards</h3>
              <p className={teamStyle.team__worker__position}>Product Manager</p>
            </div>
          </div>
          <blockquote className={teamStyle.team__quote}>
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. 
            Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat 
            do deserunt Lorem magna officia incididunt consectetur amet
            . Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
          </blockquote>
        </SwiperSlide>
        <SwiperSlide className={teamStyle.team__slider}>
          <div className={teamStyle.team__image__block}>
            <img src={manOne} alt="humanImage" className={teamStyle.team__worker__image}/>
            <div className={teamStyle.team__worker__info}>
              <h3 className={teamStyle.team__worker__name}>Ronald Richards</h3>
              <p className={teamStyle.team__worker__position}>Product Manager</p>
            </div>
          </div>
          <blockquote className={teamStyle.team__quote}>
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. 
            Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat 
            do deserunt Lorem magna officia incididunt consectetur amet
            . Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
          </blockquote>
        </SwiperSlide>
        <SwiperSlide className={teamStyle.team__slider}>
          <div className={teamStyle.team__image__block}>
            <img src={manOne} alt="humanImage" className={teamStyle.team__worker__image}/>
            <div className={teamStyle.team__worker__info}>
              <h3 className={teamStyle.team__worker__name}>Ronald Richards</h3>
              <p className={teamStyle.team__worker__position}>Product Manager</p>
            </div>
          </div>
          <blockquote className={teamStyle.team__quote}>
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. 
            Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat 
            do deserunt Lorem magna officia incididunt consectetur amet
            . Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
          </blockquote>
        </SwiperSlide>
      </Swiper>
      <div className="swiper__pagination"></div>
      <button className={teamStyle.team__button__prev} 
        type="button"
        onClick={() => swiperRef.current.slidePrev()} >
        <img src={arrowDefault} alt="prevButton" />
      </button>
      <button className={teamStyle.team__button__next}
        type="button"
        onClick={() => swiperRef.current.slideNext()} >
        <img src={arrowActive} alt="nextButton" />
      </button>
    </section>
  );
}
 
export default Team;