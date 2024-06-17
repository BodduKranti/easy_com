import { FC } from "react"

interface Inputfieldprops {
    name: string,
    type: string,
    autoComplete: string,
    value: any,
    required: boolean,
    placeholder: string,
    onChange: (e: any) => void
}

const Inputfield: FC<Inputfieldprops> = ({
    name, type, autoComplete, value, required, placeholder, onChange
}) => {
    return (
        <>
            <input
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={required}
                value={value}
                placeholder={placeholder}
                className="block w-full rounded-3xl px-[20px] border-0 py-[12px]  text-gray-900 shadow-sm 
                    ring-1 
                    ring-inset 
                    ring-[#FFBB38]
                    placeholder:text-[#E9C5E4]
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-[#ae1c9a] 
                    sm:text-sm 
                    sm:leading-6"
                onChange={onChange}
            />
        </>
    )
}

export default Inputfield
