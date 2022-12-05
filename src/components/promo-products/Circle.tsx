import { useState } from "react";

const Circle = () => {
    const [hover, setHovered] = useState(false);

    return (<div className="w-[18rem] h-[10rem] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 flex items-end justify-center pb-[1rem] relative lsm:scale-[2.1] ">
        {/* dots around the circleShoe  */}
        <div className="h-2 w-2 rounded-full border absolute left-[2rem] top-[2.5rem] bg-[#0A083A]"></div>
        <div className="h-2 w-2 rounded-full border absolute translate-x-[50%] top-[-.4rem] bg-[#0A083A]"></div>
        <div
            className="h-2 w-2 rounded-full border absolute right-[2rem] top-[2.5rem] bg-[#0A083A] hover:border-none hover:bg-[#FF3C78]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ cursor: `pointer` }}
        ></div>

        {/* dots on the left part of the circle */}
        <div
                className={`h-1 w-1 rounded-full ${!hover && "border"
                  } absolute right-[1.7rem] top-[3.1rem] bg-[${hover ? "#FF3C78" : "#0A083A"
                  }] `}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${!hover && "border"
                  } absolute right-[1.4rem] top-[3.5rem] bg-[${hover ? "#FF3C78" : "#0A083A"
                  }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${!hover && "border"
                  } absolute right-[1.1rem] top-[3.9rem] bg-[${hover ? "#FF3C78" : "#0A083A"
                  }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${!hover && "border"
                  } absolute right-[2.7rem] top-[2rem] bg-[${hover ? "#FF3C78" : "#0A083A"
                  }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${!hover && "border"
                  } absolute right-[3rem] top-[1.7rem] bg-[${hover ? "#FF3C78" : "#0A083A"
                  }]`}
              ></div>
              <div
                className={`h-1 w-1 rounded-full ${!hover && "border"
                  } absolute right-[3.4rem] top-[1.4rem] bg-[${hover ? "#FF3C78" : "#0A083A"
                  }]`}
              ></div>


        {/* inner circleShoe */}
        <div className="w-[85%] h-[85%] rounded-t-full border-4 border-[#ffffff94] border-dotted border-b-0 border-l-[#fa9358]"></div>

        {/* bottom circles */}
        <div className="h-2 w-2 rounded-full border absolute right-[-.3rem] bottom-[-.4rem]"></div>
        <div className="h-2 w-2 rounded-full border absolute left-[-.3rem] bottom-[-.4rem]"></div>
    </div>)
}

export default Circle;