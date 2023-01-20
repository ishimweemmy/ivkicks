const JoinOthers = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 relative lsm:py-10 "
      style={{
        background: "linear-gradient(270deg, #5479fc 0%, #8AA8F8 100%)",
      }}
    >
      <div
        className="w-[2rem] h-[2rem] rounded-full absolute top-0 left-0 mt-5 z-0"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div
        className="w-[1rem] h-[1rem] rounded-full absolute top-0 left-0 ml-10 mt-12 z-0"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div
        className="w-[1rem] h-[1rem] rounded-full absolute bottom-0 right-0 mr-12 mb-12"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div className="flex flex-col z-50">
        <span className="text-white text-xl text-center font-bold">
          Join our customers club.
        </span>
        <span className="text-white text-xl text-center whitespace-nowrap font-bold">
          Get 25% sale discount now.
        </span>
      </div>
      <button className="text-white text-sm bg-[#3661FE] p-3 rounded-md shadow-xl transition duration-300 hover:bg-white hover:text-[#3661FE]">
        Sign up for free
      </button>
      <div
        className="w-[2rem] h-[2rem] rounded-full absolute bottom-0 right-0 mr-4 mb-5 z-0"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
      <div
        className="w-[1rem] h-[1rem] rounded-full absolute bottom-0 right-0 mr-12 mb-12 z-0"
        style={{
          background: `linear-gradient(270deg, #315BFF 0%, #8AA8F8 100%)`,
        }}
      ></div>
    </div>
  );
};

export default JoinOthers;
  