import React , {useState, useEffect,useMemo} from 'react';

function Product(){

    const[price] = useState(2000);
    const[discount] = useState(20);
    const[quantity,setQuantitiy] = useState(1);

    const finalPrice = useMemo(()=>{                    //this will memorize the value calculated
        console.log("Calculating discounted price.....");
        return price - (price*discount)/100;
    },[price,discount]);

    return (
        <div>
            <h2> Product price before discount : INR. : {price}</h2>
            <h2> Discount: {discount}</h2>
            <h2> Final price after discount: INR. {finalPrice}</h2>
            <h2> Quantity : {quantity}</h2>
            <button onClick={()=> setQuantitiy(quantity+1)}> Add Product </button>
        </div>
    )

}


export default Product;