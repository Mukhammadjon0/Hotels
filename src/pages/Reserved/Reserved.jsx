import React, { useContext } from 'react'
import { StateContext } from '../../context/Context'
import ReservedComponent from './ReservedComponent'
import './Reserved.css'
function Reserved() {
  const {state}=useContext(StateContext)
  console.log(state)
  return (
    <div className='reserved'>
      {state.reserve.map(item=> <ReservedComponent key={item.id} {...item}/>)}
    </div>
  )
}

export default Reserved