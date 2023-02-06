import React from 'react';
import './CV.scss';

function printXpList(list) {
  return list.map(itm => { <li>{itm}</li> })
}

export default function XpBlock({ xp }) {
  return <div className='xp-block' >
    <div>
      <h2>{xp.position}</h2>
      <div>
        <span className='js-highlight'>{xp.contractSpan}</span> | <span className='js-highlight'>{xp.companyName}</span>
      </div>
      <p>{xp.location}</p>
    </div>
    <div>
      <p className='xp-block__summary'>{xp.summary}</p>

      {xp.workDetails.length > 0 &&
        <section>
          <h3>Responsibilities and accomplishments:</h3>
          <ul>{printXpList(xp.workDetails)}</ul>
        </section>
      }
      <h3>Technologies and Tools used:</h3>
      <p>{xp.techAndTools.join(', ')}</p>

    </div>
  </div>

}
