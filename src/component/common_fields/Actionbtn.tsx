import { FC } from "react"

interface Actionbtnprops {
    btnText: string,
    onClick: any
}

const Actionbtn: FC<Actionbtnprops> = ({
    btnText,
    onClick
}) => {
    return (
        <>
            <button
                type="submit"
                onClick={onClick}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {btnText}
            </button>
        </>
    )
}

export default Actionbtn
