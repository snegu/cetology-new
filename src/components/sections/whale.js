import React, {useState } from 'react'
import WhaleDetail from './WhaleDetail'


export default function Whale(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
        <div className="whale">
            <div className="whaleImage">
                <img src={props.image} alt={"Drawing of a " + props.title} />
            </div>
            <div className="whaleDescription">
                <h3>{props.title}</h3>
                <p>&#8220;{props.description}&#8221;</p>
            </div>
        </div>
      <WhaleDetail isOpen={isOpen} title={props.title} longdescription1={props.longdescription1} longdescription2={props.longdescription2} longdescription3={props.longdescription3} species={props.species} image={props.image}
      />
  </div>
  )
}

