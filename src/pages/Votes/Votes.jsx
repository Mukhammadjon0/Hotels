import React from 'react'
import { language } from '../../data/data'
import './Votes.css'
import VotesComponent from './VotesComponent'
function Votes() {
  return (
    <div className='votes-page'>
        {language.map(item=> <VotesComponent key={item.id} {...item}/>)}
    </div>
  )
}

export default Votes