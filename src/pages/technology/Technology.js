import './Technology.css'
import { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'

export default function Technology({ currentTab ,changeTab}) {

  const {documents, error, isPending} = useCollection('technology')

  const [tech, setTech] = useState('capsule')


  const data = documents ? documents.filter(document => {
    switch (tech){
      case 'capsule':
        return document.id === tech
      case 'spaceport':
        return document.id === tech
      case 'vehicle':
        return document.id === tech
      default:
        console.log(tech)
        return true

    }
  }): null

  useEffect(() => {
    changeTab('technology')
  },[changeTab])

  if(data){
    console.log(data[0].id)
  }


  return (
      <main className='grid-container grid-container--technology'>
        <h1 className='numbered-title'><span aria-hidden='true'>03</span>Space launch 101</h1>
    
        <div className="number-indicators flex">
          {isPending && <div>Loading..</div>}
          {documents && documents.map((document, index) => (
            <button
            key={document.id} 
            onClick={e => setTech(document.id)}
            // aria-selected={tech === document.id ? 'true' : 'false'}
          >
            <span>{index + 1}</span>
      </button>
          ))}
        </div>
        
        <article className='crew-details flow'>
            {isPending && <div>Loading..</div>}
            {data && (<>
              <header>
                <h2 className="fs-300 ff-serif uppercase">The terminology...</h2>
                <p className="fs-700 uppercase ff-serif">{data[0].name}</p>
                </header>
              <p>{data[0].description}</p>
            </>)}
        </article>

        {data && (<>
            <picture>
            <source media="(min-width: 45em)" srcSet={`./assets/technology/image-${data[0].id}-portrait.jpg`} />
            <source media="(max-width: 45em)" srcSet={`./assets/technology/image-${data[0].id}-landscape.jpg`} />
            <img src={`./assets/technology/image-${data[0].id}-portrait.jpg`} alt="the technology" />
          </picture>
            </>)}
        
      </main>
  )
}
