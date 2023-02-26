import React, { useEffect } from 'react';
import Link from "next/link";
import { connect } from "react-redux";
import { setProducts, setSelectedProductsNull, showMenus, showSections } from "../redux/actions/product";
import CenteredLogoNavBar from '../components/navigation/CenteredLogoNavBar';
import DefaultLogoNavBar from '../components/navigation/DefaultNavBar';
import CircularLoading from '../loading/circularLoading';

const Product = (props) => {
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
        <div>
            {props.product.sectionError != "Network Error" ? <div>
                {props.product.sections.length != 0 ?
                    <div className='  w-full '>

                        {props.product.sections.map((section, index) => {

                            return (
                                section.name == "DefaultLogoNavBar" ? <DefaultLogoNavBar /> : <CenteredLogoNavBar />

                            )

                        })}


                    </div>
                    :
                    <div className=' grid justify-items-center '>
                        <CircularLoading position={'absolute'} />
                    </div>

                }
                {/* <h1>Next js 2nd page.</h1> */}
                <div className=" grid grid-cols-2 gap-4 place-items-center  w-full h-screen z-50">
                    <Link href={{

                        pathname: '/',
                        // query: {
                        //   name: product.product_name,
                        //   id: product.id,
                        //   img: product.img_id
                        // },

                    }} passHref
                    >

                        <button className=' col-span-3 pt-96  z-50'>Go back</button>


                    </Link>
                    <div className="col-span-3 mx-auto  max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
            </div> :
                <h1>
                    Please Check your API connection.
                </h1>
            }
        </div>
    )
}

// export default Product;


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

export default connect(mapStateToProps, mapDispatchToProps)(Product)