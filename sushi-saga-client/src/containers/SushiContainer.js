import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi) => (
            <Sushi
              key={sushi.id}
              sushi={sushi}
              sushiClick={props.sushiClick}
              sushisEaten={props.eatensushis}
            />
          ))
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton />
      </div>
    </Fragment>
  );
}

export default SushiContainer