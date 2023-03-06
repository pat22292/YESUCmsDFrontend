import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { connect } from "react-redux";
import { setProducts, setSelectedProductsNull, showMenus, showSections } from "../redux/actions/product";
import CircularLoading from '../loading/circularLoading';
import CenteredLogoNavBar from '../components/navigation/CenteredLogoNavBar';
import DefaultLogoNavBar from '../components/navigation/DefaultNavBar';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, Thumbs, EffectFade, EffectCards, EffectCube, EffectCoverflow } from 'swiper';
// import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';


const spring = {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 10
};


const DynamicTable = dynamic(() => import('../components/table'),
      { loading: () => <p>...</p> }
)

const DynamicCenteredMenubar = dynamic(() => import('../components/navigation/CenteredLogoNavBar'),
      { loading: () => <p>...</p> }
)
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, Thumbs, EffectFade, EffectCards, EffectCube, EffectCoverflow]);

function Home(props) {
      const [firstSwiper, setFirstSwiper] = useState(null);
      const [thumbsSwiper, setThumbsSwiper] = useState(null);

      // const { section, setSection } = props.product.sections;
      const _setSelectedProductsNull = (e) => {
            props.setSelectedProductsNull(e);
      }

      useEffect(() => {
            props.showSections();
            // props.showMenus()

      }, []);

      const products = [
            {
                  id: 1,
                  name: 'Earthen Bottle',
                  href: '#',
                  price: '$48',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
                  imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                  id: 2,
                  name: 'Nomad Tumbler',
                  href: '#',
                  price: '$35',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
                  imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                  id: 3,
                  name: 'Focus Paper Refill',
                  href: '#',
                  price: '$89',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
                  imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
            {
                  id: 4,
                  name: 'Machined Mechanical Pencil',
                  href: '#',
                  price: '$35',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
                  imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            {
                  id: 5,
                  name: 'Earthen Bottle',
                  href: '#',
                  price: '$48',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
                  imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
            },
            {
                  id: 6,
                  name: 'Nomad Tumbler',
                  href: '#',
                  price: '$35',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
                  imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                  id: 7,
                  name: 'Focus Paper Refill',
                  href: '#',
                  price: '$89',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
                  imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            },
            {
                  id: 8,
                  name: 'Machined Mechanical Pencil',
                  href: '#',
                  price: '$35',
                  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
                  imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
            },
            // More products...
      ]

      return (
            <div >
                  {props.product.sectionError != "Network Error" ?
                        <div>
                              
                              {props.product.sections.length != 0 ?
                                    <div className='  w-full '>

                                          {props.product.sections.map((section, index) => {

                                                return (
                                                      section.component_name == "DefaultLogoNavBar" ? <DefaultLogoNavBar key={index} /> : <CenteredLogoNavBar key={index} />
                                                )

                                          })}


                                    </div>
                                    :
                                    <div className=' flex h-screen justify-center items-center z-50'>
                                          <CircularLoading  position={' absolute'} />
                                    </div>

                              }




                              <div className='md:h-screen h-96 md:pt-0 pt-24 z-0'>
                                    <Swiper
                                          className=" h-full  "
                                          // style={{ height: '900px' }}
                                          controller={{ control: firstSwiper }}
                                          autoplay={{ delay: 3500, disableOnInteraction: false }}
                                          slidesPerView={3}
                                          navigation
                                          thumbs={{ swiper: thumbsSwiper }}
                                          pagination={{ clickable: true }}
                                          modules={[EffectCoverflow, EffectCube]}
                                          effect="coverflow"
                                          loop={true}
                                    >
                                          <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>1</SwiperSlide>
                                          <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>2</SwiperSlide>
                                          <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>3</SwiperSlide>
                                          <SwiperSlide className="bg-no-repeat bg-cover bg-center shadow-md grid text-center  place-items-center" style={{ backgroundImage: "url(https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>4</SwiperSlide>



                                    </Swiper>
                              </div>
                              {/* <p className="font-shrikhand text-9xl">The quick brown fox ...</p>
<p className="font-serif">The quick brown fox ...</p>
<p className="font-mono">The quick brown fox ...</p> */}
                              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                    <h2 className="sr-only">Products</h2>
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-6  xl:grid-cols-4 xl:gap-x-8">
                                          {products.map((product) => (
                                                <a key={product.id} href={product.href} className="group">
                                                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                                            <img
                                                                  src={product.imageSrc}
                                                                  alt={product.imageAlt}
                                                                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                            />
                                                      </div>
                                                      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                                      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                                </a>
                                          ))}
                                    </div>
                              </div>


                        </div> :
                        <h1>
                              Please Check your API connection.
                        </h1>
                  }

            </div >

      )
}

const mapStateToProps = state => ({
      userInfo: state.main,
      error: state.main,
      product: state.product,
})

const mapDispatchToProps = {
      setProducts: setProducts,
      setSelectedProductsNull: setSelectedProductsNull,
      showSections: showSections,
      showMenus: showMenus
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
