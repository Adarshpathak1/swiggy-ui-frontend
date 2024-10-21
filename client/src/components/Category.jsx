import { useEffect, useState } from "react";
import SliderBtn from "./SliderBtn";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [slide, setSlide] = useState(0);

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []); 

  
  return (
    <div className="max-w-[950px] mx-auto">
      <SliderBtn slide={slide} setSlide={setSlide}
        categoriesLength={categories.length}
        text="What's on your Mind?" />

      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`, // Adjust sliding based on slide state
              }}
              key={index}
              className="w-[160px] shrink-0 duration-500 cursor-pointer"
            >
            
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-4 w-full border-[1px]" />
    </div>
  );
};

export default Category;
