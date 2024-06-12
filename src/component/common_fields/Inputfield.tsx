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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onChange}
            />
        </>
    )
}

export default Inputfield
