import './Technology.css'
import { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { motion as m } from 'framer-motion'
import Loading from '../../components/Loading'

export default function Technology({ currentTab ,changeTab}) {

  const {documents, isPending} = useCollection('technology')

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
      <m.main 
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className='grid-container grid-container--technology'>
        <h1 className='numbered-title'><span aria-hidden='true'>03</span>Space launch 101</h1>
    
        <div className="number-indicators flex">
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
            {isPending && <Loading/>}
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
        
      </m.main>
  )
}
