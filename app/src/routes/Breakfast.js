//import react, axios
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW/').then((response) => {
            setBreakfast(response.data);
        });
    }, []);

    const breakfastItems = breakfast.filter((item) => item.category === "Breakfast");

    return (
        <>
        <h1 className="text-center text-color-lb pt-4">Breakfast</h1>
        <div className="row">
        {breakfastItems.map((item) => (
          <div
            key={item.id}
            className="col-4 text-center text-color-lb pt-4 ps-4 pe-4 pb-4"
          >
            <h2 className="card-title">{item.title}</h2>
            <h4>Category: {item.category}</h4>
            <h5>Description: {item.description}</h5>
            <h6>{item.price}</h6>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}