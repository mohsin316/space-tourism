import { useEffect, useState, useRef } from "react"

import { db } from '../firebase/config'
import { collection, onSnapshot, } from 'firebase/firestore'

export const useCollection = (c, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    setIsPending(true)
    let ref = collection(db,c)

    const unsubscribe = onSnapshot(ref, snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setTimeout(() => {
        setDocuments(results)
        setIsPending(false)
      }, 500);
      setError(null)
    }, error => {
      console.log(error)
      setIsPending(false)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [c, query, orderBy])

  return { documents, error, isPending }
}