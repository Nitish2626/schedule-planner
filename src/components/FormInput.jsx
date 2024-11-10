import React from "react";

const FormInput=({label, inputRef, inputType})=>{
    return(
        <section className="flex flex-col gap-1">
            <label className="text-gray-400">
                {label}
            </label>
            <input
                ref={inputRef}
                type={inputType}
                className="w-60 rounded-md py-1 px-2 text-lg outline-none hover:bg-[#424242]"
            />
        </section>
    );
};

export default FormInput;