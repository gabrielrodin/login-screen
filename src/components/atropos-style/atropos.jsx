import React from "react";
import Atropos from "atropos";
import "atropos/css";

const Tilt = () => {
   const myAtropos = Atropos({
      el: '.my-atropos',
   })
   return(
      <div className="atropos my-atropos">
         <div className="atropos-scale">
            <div className="atropos-rotate">
               <div className="atropos-inner"><h1>Olá</h1></div>
            </div>
         </div>
      </div>
      
   );
};

export default Tilt;
