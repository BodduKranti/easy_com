import { FC } from "react"

interface ActionBtnborderprops {
    btnText: any,
    onClick: any
}

const ActionBtnborder: FC<ActionBtnborderprops> = ({
    btnText,
    onClick
}) => {
    return (
        <>
            <button
                type="submit"
                onClick={onClick}
                className="flex w-full justify-center rounded-3xl border
                border-[#AE1C9A] px-[20px] py-[12px] text-base font-semibold 
                 leading-6 text-[#AE1C9A] shadow-md overflow-hidden relative  
                 transition-[all_0.15s_ease-in-out]
                 duration-300
                hover:text-white
                after:w-0                 
                after:transition-[all_0.15s_ease-in-out]
                after:bg-[#AE1C9A]
                after:absolute
                after:right-0
                after:top-0
               
                after:h-full

                hover:after:right-auto
                hover:after:left-0
                hover:after:w-full
             
                "
            >
                <span className=" relative z-[2]">{btnText}</span>

            </button>
        </>
    )
}

export default ActionBtnborder
