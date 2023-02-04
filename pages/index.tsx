import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import axios from 'axios';
import { connect } from "react-redux"
import { setProducts, setSelectedProductsNull, showMenus, showSections } from "../redux/actions/product"
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { options } from 'next-auth/client';
import { useRouter } from 'next/router'
import { gsap } from "gsap";
import parse from 'html-react-parser';
import product from '../redux/reducers/product';
import CenteredLogoNavBar from '../components/navigation/CenteredLogoNavBar';

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

      return (
            <div >
                  {/* {props.product.sections ? parse(props.product.sections[0].section) : null} */}

                  {/* <DynamicTable products={props.product.sections} setSelectedProductsNull={_setSelectedProductsNull} /> */}

                  <DynamicCenteredMenubar Logo={props.product.menus} style={''} menus={props.product.menus} />
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