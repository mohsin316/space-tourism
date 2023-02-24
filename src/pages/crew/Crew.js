import './Crew.css'
import { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { motion as m } from 'framer-motion'
import Loading from '../../components/Loading'

export default function Crew({ currentTab ,changeTab}) {

  const {documents, isPending} = useCollection('crew')

  const [position, setPosition] = useState('commander')


  const data = documents ? documents.filter(document => {
    switch (position){
      case 'commander':
        return document.id === position
      case 'engineer':
        return document.id === position
      case 'pilot':
        return document.id === position
      case 'specialist':
        return document.id === position
      default:
        console.log(position)
        return true

    }
  }): null

  useEffect(() => {
    changeTab('crew')
  },[changeTab])

  // if(data){
  //   console.log(data)
  // }


  return (
      <m.main 
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className='grid-container grid-container--crew flow'>
        <h1 className='numbered-title'><span aria-hidden='true'>02</span>Meet your crew</h1>
    
        <div className="dot-indicators flex">
          {documents && documents.map(document => (
            <button
              key={document.id} 
              onClick={e => setPosition(document.id)}
            >
              <span className="sr-only">{`The ${document.role}`}</span>
            </button>
          ))}

        </div>
        
        <article className='crew-details flow'>
            {isPending && <Loading/>}
            {data && (<>
              <header>
                <h2 className="fs-600 ff-serif uppercase">{data[0].id}</h2>
                <p className="fs-700 uppercase ff-serif">{data[0].name}</p>
                </header>
              <p>{data[0].bio}</p>
            </>)}
        </article>

        <img src={`./assets/crew/image-${position}.png`} alt="the moon" />
      </m.main>
  )
}
