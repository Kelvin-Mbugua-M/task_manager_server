import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const RouteCatcherAll= () => {
    const navigate = useNavigate()
  useEffect(()=>{setTimeout(()=>{
    navigate('/error',{replace:true})
  },2000)},[])
  return(<article className='text-white text-xl'> You are being redirected</article>)
}

export default RouteCatcherAll