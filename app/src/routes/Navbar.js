import React from 'react';
import {  Link } from "routes";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="./routes/Apppetizers">Appetizers</Link>
    </li>
    <li>
      <Link to="./routes/Breakfast">Breakfast</Link>
    </li>
    <li>
      <Link to="./routes/Lunch">Lunch</Link>
    </li>
    <li>
      <Link to="./routes/Dinner">Dinner</Link>
    </li>
  </div>
  );
}
export default navbar;