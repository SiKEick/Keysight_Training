import React from "react";

function RouteInfo({source,destination}){
    return(
        <div>
            <h3>
                Route Info
            </h3>
            <p>
                Source City : {source}
            </p>
            <p>
                destination City : {destination}
            </p>

        </div>
    )
}

export default RouteInfo;