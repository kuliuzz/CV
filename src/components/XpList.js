import React from 'react';
import './CV.scss';
import XpBlock from './XpBlock';
import workXp from '../resources/kolyo-work-experiense.json'

export default function XpList() {
  return <div className='toatal-xp'>
    {workXp ? workXp.experience.reverse().map(company => <XpBlock xp={company} key={company.id} />) : <div>No data available</div>}
  </div>
}
