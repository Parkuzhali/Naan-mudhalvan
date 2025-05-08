import React, { useState } from 'react'

export default function AddToCartBtn() {
    let [value, setvalue] = useState(0);
    const inc = () => {
        setvalue(value + 1)
        console.log(value)
    }
    const dec = () => {
       value<=0?setvalue(0): setvalue(value-1)
    }
  return (
      <div>
          {
              value > 0 ?
                  <div>
                      <button onClick={inc}>Increment</button>
                      <button >{ value}</button>
                       <button onClick={dec}>deccrement</button>
                  </div> :
                  <button onClick={inc}>Add cart</button>
                  
         }
    </div>
  )
}
