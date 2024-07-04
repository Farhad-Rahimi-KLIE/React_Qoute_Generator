import React from 'react'
import './NetflexCard.css'
const NetflexCard = ({actualData}) => {
    const {jawSummary} = actualData;
  return (
    <div>
            <div className="container">
                <div className="wrapper">
                    <div className="banner-image">
                        <figure>
                            <img src={jawSummary.backgroundImage.url} alt={jawSummary.title} />
                        </figure>
                    </div>
                </div>
                <h1>{jawSummary.title}</h1>
                <p>{jawSummary.synopsis}</p>
            </div>
    </div>
  )
}

export default NetflexCard
