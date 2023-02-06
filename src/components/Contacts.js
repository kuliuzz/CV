import React from 'react';
import ContactBlock from './ContactBlock';
import data from '../resources/kolyo-contacts.json'

export default function Contacts() {
  return <div className='total-xp'>
    <div>
      <h2>Contacts</h2>
    </div>
    {data ? data.contacts.map(itm => <ContactBlock data={itm} key={itm.id} />) : <div>No data available</div>}
  </div>
}
