import { FC } from "react"

interface Actionbtnprops {
    btnText: any,
    onClick: any,
    disabled?: boolean
}

const Actionbtn: FC<Actionbtnprops> = ({
    btnText,
    onClick,
    disabled
}) => {
    return (
        <>
            <button
                type="submit"
                onClick={onClick}
                className={`${disabled ? 'opacity-50 pointer-events-none' : 'opacity-100'} flex w-full justify-center rounded-3xl
                bg-[#FFBB38] px-[20px] py-[12px] text-base font-semibold 
                 leading-6 text-black shadow-md overflow-hidden relative  
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
             
                `}
                disabled={disabled}
            >
                <span className=" relative z-[2]">{btnText}</span>

            </button>
        </>
    )
}

export default Actionbtn
