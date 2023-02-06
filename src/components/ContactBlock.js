import React, { useEffect, useState } from 'react';
import PhoneIcon from './PhoneIcon';
import MailIcon from './MailIcon';
import InstagramIcon from './InstagramIcon';
import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';

export default function ContactBlock({ data }) {
  const [icon, setIcon] = useState();

  useEffect(() => {
    switch (data.icon) {
      case 'phone':
        setIcon(<PhoneIcon />)
        break;
      case 'mail':
        setIcon(<MailIcon />)
        break;
      case 'github':
        setIcon(<GithubIcon />)
        break;
      case 'instagram':
        setIcon(<InstagramIcon />)
        break;
      case 'linkedin':
        setIcon(<LinkedInIcon />)
        break;
      default:
        break;
    }
  }, [])
  return <div className='contact-block' key={data.id} >
    {icon}
    {data.icon == 'phone' || data.icon == 'mail' ?
      <span className='no-link'>{data.linkName}</span>
      :
      <a href={data.link} alt={data.alt} target="_blank">{data.linkName}</a>}
  </div>

}
