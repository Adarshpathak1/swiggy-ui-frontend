import { useEffect, useState } from "react";
import Card from "./Card";
import SliderBtn from "./SliderBtn";

const TopRest = () => {
  const [restaurents, setRestorents] = useState([]);
  const [slide, setSlide] = useState(0);

  const fetchRestorents = async () => {
    const resp = await fetch("http://localhost:5000/top-restaurant-chains");
    const apidata = await resp.json();
    setRestorents(apidata);
  };

  useEffect(() => {
    fetchRestorents();
  }, []);

  return (
    <div className="max-w-[950px]  mx-auto">
      <SliderBtn
        slide={slide}
        setSlide={setSlide}
        slideLength={restaurents.length}
        text="Top restaurant chains in Mumbai"
      />
      <div className="flex gap-3 overflow-hidden">
        
          {restaurents.map((resto, index) => {
            return <>
              <div 
            style={{
              transform: `translateX(-${slide * 100}%)`, // Adjust sliding based on slide state
            }}
            key={index}
            className="w-fit  shrink-0 duration-500"
              >
              
                <Card {...resto} key={index} />
            </div>
            </>
          })}
      </div>
      <hr className="my-4 w-full border-[1px]" />
    </div>
  );
};

export default TopRest;
