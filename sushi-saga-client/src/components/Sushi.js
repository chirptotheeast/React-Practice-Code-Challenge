import React, { Fragment } from 'react'

const Sushi = ({sushi, sushiClick, sushisEaten}) => {
  console.log(sushi)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => sushiClick(sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          sushisEaten.includes(sushi) ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi