import SvgComponent from "./SvgComponent";

const Card = (props) => {
 
  return (
    <div className="w-[273px] shrink-0 cursor-pointer grow z-10">
      <div className="group h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className=" group-hover:scale-110 duration-150  object-cover w-full h-full"
          src={"http://localhost:5000/images/" + props.image}
          alt=""
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end font-bold text-white text-[20px]">
          {props.offer}
        </div>
      </div>
      <div className="mt-3 text-xl font-bold">{props.title}</div>
      <div>
        <div className="flex">
          <SvgComponent />
          {props.rating} <span className="mx-2"> </span>
          <div>
            {props.minTime}-{props.maxTime} min
          </div>
          
        </div>
        <div className="flex text-slate-500">
            {props.name} <br />
            {props.place}
          </div>
      </div>
    </div>
  );
};

export default Card;
