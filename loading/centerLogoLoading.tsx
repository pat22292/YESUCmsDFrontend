import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const centerLogoLoading = () => {
    return (

        <div className="">
            < SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5" >
                <ul className="flex mt-4 flex-row md:space-x-36 ">
                    <li>
                        <Skeleton height={25} width={80} className='mt-4' style={{ opacity: .75 }} />
                    </li>
                    <li>
                        <Skeleton height={25} width={80} className='mt-4' style={{ opacity: .75 }} />
                    </li>
                    <li>
                        <Skeleton height={25} width={80} className='mt-4' style={{ opacity: .75 }} />
                    </li>
                    <li className=" rounded-full ">
                        <Skeleton circle={true} height={50} width={50} className=" rounded-full " style={{ opacity: .75 }} />
                    </li>
                    <li>
                        <Skeleton height={25} width={80} className='mt-4' style={{ opacity: .75 }} />
                    </li>
                    <li>
                        <Skeleton height={25} width={80} className='mt-4' style={{ opacity: .75 }} />
                    </li>
                    <li>
                        <Skeleton height={25} width={80} className='mt-4' style={{ opacity: .75 }} />
                    </li>
                </ul>







            </SkeletonTheme >

        </div >
    )
}

export default centerLogoLoading;

