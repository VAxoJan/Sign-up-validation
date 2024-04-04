import React from 'react';

const MainPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col md:flex-row w-full max-w-[1200px] h-auto md:h-[600px] border border-black justify-between">
                <div className="flex flex-col justify-center items-center w-full md:w-[500px] my-8 md:my-0 md:ml-[50px] font-mainFont">
                    <h1 className="text-white font-bold text-[50px] md:text-[60px] leading-[50px] md:leading-[60px] text-center">Learn to code by watching others</h1>
                    <p className="text-white font-medium mt-6 text-center">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>
                <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[540px]">
                    <div className="flex w-[540px] justify-center flex-col md:flex-row  bg-[#5E54A4] font-mainFont text-white gap-2 py-4">
                        <h1 className="font-bold text-center md:text-left">Try it free for 7 days</h1>
                        <p className="font-med text-center md:text-left">then $20/mo. thereafter</p>
                    </div>
                    <div className="w-full bg-white rounded-md my-[20px] px-[40px]">
                        <form className="grid gap-[20px] py-[40px]">
                            <input className="border shadow-xl w-full h-[56px] outline-none px-[32px]" type="text" placeholder="First Name" />
                            <input className="border shadow-xl w-full h-[56px] outline-none px-[32px]" type="text" placeholder="Last Name"/>
                            <input className="border shadow-xl w-full h-[56px] outline-none px-[32px]" type="email" placeholder="Email Address"/>
                            <input className="border shadow-xl w-full h-[56px] outline-none px-[32px]" type="password" placeholder="Password"/>
                            <button className="border shadow-xl w-full h-[56px] rounded-md bg-[#38CC8B] text-white font-semibold font-mainFont" type="submit">CLAIM YOUR FREE TRIAL</button>
                            <div className="flex text-[11px] justify-center gap-1">
                                <p className="text-[#BAB7D4]">By clicking the button, you are agreeing to our </p>
                                <p className="text-[#FF7979]"> Terms and Services</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
