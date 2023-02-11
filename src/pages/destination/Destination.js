import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'

import './Destination.css'

export default function Destination({ currentTab ,changeTab}) {

  const {documents, error, isPending} = useCollection('destinations')

  const [planet, setPlanet] = useState('europa')


  const data = documents ? documents.filter(document => {
    switch (planet){
      case 'moon':
        return document.id === planet
      case 'mars':
        return document.id === planet
      case 'europa':
        return document.id === planet
      case 'titan':
        return document.id === planet
      default:
        console.log(planet)
        return true

    }
  }): null

  useEffect(() => {
    changeTab('destination')
  },[changeTab])

  // if(data){
  //   console.log(data)
  // }


  return (
        <main className='grid-container grid-container--destination flow'>
        <h1 className='numbered-title'><span aria-hidden='true'>01</span>Pick your destination</h1>
    
        <img src={`./assets/destination/image-${planet}.png`} alt="the moon" />

        
        <div className="tab-list underline-indicators flex">
        {isPending && <div>Loading..</div>}
        {documents && documents.map(document => (
            <button 
              key={document.id} 
              onClick={e => setPlanet(e.target.textContent.toLowerCase())} 
               
              className={`uppercase ff-sans-cond text-accent letter-spacing-2 ${planet === document.id ? 'active' : ''}`}>{document.name}
            </button>
          ))}
        </div>

        <article className='destination-info'>
        {isPending && <div>Loading..</div>}
          {data && (<>
            <h2 className='fs-800 uppercase ff-serif'>{data[0].name}</h2>
            <p>{data[0].description}</p>
            <div className='destination-meta flex'>
            <div>
              <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
              <p className='ff-serif uppercase'>{data[0].distance}</p>
            </div>

            <div>
              <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
              <p className='ff-serif uppercase'>{data[0].travel}</p>
            </div>
            </div>
          </>)}
        </article>

      </main>
  )
}
