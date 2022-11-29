const Promo = () => {
    return (<div
        className="w-full pb-[4rem] mt-[4rem] h-fit flex flex-col md:flex-row md:items-center xs:mt-0 overflow-hidden lg:pl-[5rem]"
    >
        <div className="w-full flex flex-col gap-5 md:pl-[2rem] md:gap-[3rem]">
            <h1 className="text-3xl font-bold text-center text-[#0A083A] md:text-start lg:text-5xl xl:text-6xl 2xl:text-7xl xl:tracking-tighter">
                <span className="whitespace-nowrap">Built for speed</span>{" "}
            </h1>
            <p className="text-sm text-center text-gray-800 leading-5 tracking-wide px-9 md:text-start md:px-0 md:text-base md:text-gray-700 md:pr-[1rem] xl:text-base xl:font-medium xl:pr-[20rem]">
                We offer the best deals in our shop.check them out now. We have
                awesome on sale for you.
            </p>
            <button
                className="w-[8rem] h-[2.7rem] px-4 rounded-[.3rem] bg-[#FF3C78] text-white text-sm text-center xl:w-[15rem] xl:h-[3rem]"
                style={{ boxShadow: "hwb(0deg 0% 0% / 41%) 0px 25px 50px -10px" }}
            >
                Shop now
            </button>
        </div>
    </div>)
}

export default Promo;
