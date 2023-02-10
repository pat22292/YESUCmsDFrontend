import React, { useEffect, useState } from "react";
import CircularLoading from '../../loading/circularLoading';
import { connect } from "react-redux";
import { setProducts, setSelectedProductsNull, showMenus, showSections } from "../../redux/actions/product";


function CenteredLogoNavBar(props) {

  // const [navData, setNavData ] = useState(Logo);
  const { nav, setNav } = props;
  const [navList, setNavList] = useState([]);




  useEffect(() => {

  }, []);
  return (

    <div>
      {props.product.menus.length != 0 ? (
        <div >
          {props.product.menus.map((menus, index) => {

            // <li key={index}>{product}</li>

            return <div key={index} >

              <nav className="bg-white  py-2  ">

                <div className="  mx-auto">
                  <div className="hidden w-full  md:grid justify-items-center" id="navbar-default">

                    <ul className="flex mt-4 flex-row md:space-x-36 ">

                      {menus.list.map((menu, indx) => {
                        // {indx < props.product.menus[0].list.length / 2  ? 

                        return (
                          indx < props.product.menus[0].list.length / 2 ?
                            <a href="#" className="">  <li key={indx} className={`h-16 pt-4`}>{menu.name}</li> </a> : null

                        )
                      })}
                      <li className='h-16 '>
                        <a href="#" className="flex  items-center w-full">
                          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" className="h-6 sm:h-16 " alt="Flowbite Logo" />

                        </a>
                      </li>
                      {menus.list.map((menu, indx) => {
                        return (
                          indx > props.product.menus[0].list.length / 2 - 1 ?
                            <a href="#" className="">
                              <li key={indx} className={`h-16 pt-4`}>{menu.name}</li> </a> : null

                        )
                      })}


                    </ul>
                  </div>
                </div>
              </nav>
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

// export default CenteredLogoNavBar;
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

export default connect(mapStateToProps, mapDispatchToProps)(CenteredLogoNavBar)