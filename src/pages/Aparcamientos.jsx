import React, {useEffect} from 'react'
import { allAparcamientos } from '../components/funciones/getAparacamientos'

const Aparcamientos = () => {
  useEffect(()=> {
    allAparcamientos()
  },[])

    return (
      <div className='aparcamientos'>Aparcamientos</div>
    )
}

export default Aparcamientos