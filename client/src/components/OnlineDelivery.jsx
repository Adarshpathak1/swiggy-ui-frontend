import { useEffect, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
    const [data, setData] = useState([]);

  const fetchRestorents = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const apidata = await res.json();
    setData(apidata);
  };

  useEffect(() => {
    fetchRestorents();
  }, []);

  return (
      <div className="max-w-[950px] mx-auto">
          <div className="flex my-5 items-center justify-between">
              <div className="text-[25px] font-bold">Restaurants with online food delhivery in Dadar</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
              {
                  data.map((detail,index) => {
                      return (
                        <Card {...detail} key={ index} />
                      )
                  })
              }
          </div>
    </div>
  )
}

export default OnlineDelivery