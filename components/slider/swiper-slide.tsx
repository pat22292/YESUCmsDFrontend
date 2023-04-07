import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, Thumbs, EffectFade, EffectCards, EffectCube, EffectCoverflow, EffectFlip } from 'swiper';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, Thumbs, EffectFade, EffectCards, EffectCube, EffectCoverflow]);
export default props => {

      const [firstSwiper, setFirstSwiper] = useState(null);
      const [thumbsSwiper, setThumbsSwiper] = useState(null);


      return <div className={`${props.block.component_styles} md:pt-0  pt-24 z-0`}>
            {/* <h1>{props.block.library_settings ? props.block.library_settings[0].className : null}</h1> */}
            {/* <h1>{props.block.library_settings ? props.block.library_settings[0].className : null}</h1> */}
            {/* <h1>{props.block.library_settings[0].className}</h1> */}
            <Swiper
                  className={`h-full ${props.block.library_settings ? props.block.library_settings[0].className : null}`}
                  //   style={{ height: "50%", width:"50%"}}
                  controller={{ control: firstSwiper }}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  slidesPerView={3}
                  navigation={false}
                  thumbs={{ swiper: props.title }}
                  // pagination={{ clickable: true }}
                  modules={[EffectCoverflow, EffectCube, EffectFade, EffectFlip]}
                  effect={props.block.library_settings[0].effect ? props.block.library_settings[0].effect : 'flip'}
                  loop={true}
            >
                  {props.block.content.map(content => {
                        return <SwiperSlide key={content.title} className="bg-no-repeat bg-cover bg-center shadow-md grid text-center place-items-center" style={{ backgroundImage: `url(${content.imgUrl})` }}>{content.title}</SwiperSlide>
                  })}
                  {/* <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>1</SwiperSlide>
                  <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>2</SwiperSlide>
                  <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>3</SwiperSlide>
                  <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>4</SwiperSlide> */}



            </Swiper>
      </div>

}
