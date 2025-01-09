import React from "react";

// import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const ErrorPage = () => {
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('/');

    // }
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="h-[450px]" src={"notFound.png"} alt="" />
            <p className="text-[#00227A] text-[40px] text-[Noto Sans] font-[500] relative">
                Page Not Found!
            </p>
            <div>
                <button 
                // onClick={handleClick}
                 className="bg-[#0041E9] rounded-[10px] text-[white] py-[16px] px-[34px] mt-[39px]">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;