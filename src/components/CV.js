import React from 'react';
import me from '../resources/me.jpg';
import './CV.scss';
import XpList from './XpList';
import Contacts from './Contacts';
import Education from './Education'
import Hobbies from './Hobbies'

export default function CV() {

  return <div className='CV'>
    <div className='CV__col'>
      <h1>Kolyo Peev</h1>
      <div className='CV__title'>A <span className='js-highlight'>WEB Developer</span> with with passion for adventures. <br />Be it in the world of software or the great outdoors - count me in!</div>
      <br />
      <hr />
      <XpList />
    </div>
    <div className='CV__col dark-bg'>
      <img src={me} className="me" alt="Kolyo Peev" />
      <Contacts />
      <hr />
      <Education />
      <hr />
      <Hobbies />
    </div>
  </div>
}
