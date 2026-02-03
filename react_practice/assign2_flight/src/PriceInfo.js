import React from "react";

function PriceInfo({price}){
    return(
        <div>
            <h3>
                Price Info
            </h3>
            <p>
                Ticket Price : ${price}
            </p>
        </div>
    )
}

export default PriceInfo;