import './Crew.css'
import { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'


export default function Crew({ currentTab ,changeTab}) {

  const {documents, error, isPending} = useCollection('crew')

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
      <main className='grid-container grid-container--crew flow'>
        <h1 className='numbered-title'><span aria-hidden='true'>02</span>Meet your crew</h1>
    
        <div className="dot-indicators flex">
          {isPending && <div>Loading..</div>}
          {documents && documents.map(document => (
            <button
              key={document.id} 
              onClick={e => setPosition(document.id)}
              aria-selected={position === document.id ? 'true' : 'false'}
            >
              <span className="sr-only">{`The ${document.role}`}</span>
            </button>
          ))}

        </div>
        
        <article className='crew-details flow'>
            {isPending && <div>Loading..</div>}
            {data && (<>
              <header>
                <h2 className="fs-600 ff-serif uppercase">{data[0].id}</h2>
                <p className="fs-700 uppercase ff-serif">{data[0].name}</p>
                </header>
              <p>{data[0].bio}</p>
            </>)}
        </article>

        <img src={`./assets/crew/image-${position}.png`} alt="the moon" />
      </main>
  )
}
