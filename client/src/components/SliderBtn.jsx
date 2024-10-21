import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderBtn = ({ slide, setSlide, slideLength, text }) => {
  const maxSlides = Math.ceil(slideLength / 1) - 1;
  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide >= maxSlides - 1 ? prevSlide - prevSlide : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };
  return (
    <>
      <div className="flex w-full m-4 items-center justify-between">
        <div className="font-bold text-2xl">{text}</div>
        <div className="gap-2 flex">
          <div
            onClick={prevSlide}
            className="bg-[#e2e2e7] h-[30px] w-[30px] rounded-full mx-2 flex items-center justify-center cursor-pointer"
          >
            <FaArrowLeft className="" />
          </div>
          <div
            onClick={nextSlide}
            className="bg-[#e2e2e7] h-[30px] w-[30px] rounded-full mx-2 flex items-center justify-center cursor-pointer"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderBtn;
