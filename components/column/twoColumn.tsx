
import Components from "../../components/components";

export default props => {
    return <div className={`grid ${props.block.component_styles ? props.block.component_styles : 'h-96'}   text-center grid-cols-2 content-center justify-items-center  place-items-center`}>


        {props.block.content.map(content => {
            return <div className=" w-full px-20 md:col-span-1 col-span-2 " key={content.title}>


                {Components(content)}

            </div>

        })}
        {/* <div className="">first</div>
        <div>second</div> */}
        {/* test */}
    </div>
} 