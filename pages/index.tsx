import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { connect } from "react-redux";
import { setProducts, setSelectedProductsNull, showMenus, showSections } from "../redux/actions/product";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { options } from 'next-auth/client';
import { useRouter } from 'next/router'
import { gsap } from "gsap";
import parse, { attributesToProps } from 'html-react-parser';
import product from '../redux/reducers/product';
import CenteredLogoNavBar from '../components/navigation/CenteredLogoNavBar';
import DefaultLogoNavBar from '../components/navigation/DefaultNavBar';
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

function Home(props) {
      const router = useRouter();

      const { section, setSection } = props;
      const _setSelectedProductsNull = (e) => {
            props.setSelectedProductsNull(e);
      }

      useEffect(() => {
            props.showSections();
            props.showMenus()

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
                  {/* {props.product.sections ? parse(props.product.sections[0].section) : null} */}
                  {/* <CenteredLogoNavBar /> */}
                  <DefaultLogoNavBar />

                  <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                              <h2 className="sr-only">Products</h2>

                              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                  </div>
                  {/* {props.product.menuList ? <h1>Meron</h1> : <h1>Wala</h1>  } */}
                  {/* {parse(props.product.sections[0].section)} */}
                  {/* <button onClick={() => { console.log(props.product.sections[0].section) }}>Click</button> */}
            </div>

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