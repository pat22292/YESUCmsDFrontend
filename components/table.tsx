import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, Thumbs } from 'swiper';
// import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
// import product from '../pages/product';
import Loading from '../loading/loading';
import CircularLoading from '../loading/circularLoading';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Link from 'next/link'
import parse from 'html-react-parser';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, Thumbs]);




export default function Table({ products, setSelectedProductsNull }) {


  return (




    <div>
      {products.length != 0 ? (
        <div >

          {products.map((product, index) => {

            // <li key={index}>{product}</li>

            return <div key={index} >

              {parse(products[0].section)}

            </div>
          })}
        </div>
      ) : (
        <div className=' h-16 pt-4'>
          <CircularLoading />
        </div>

      )}
    </div>




  )
}