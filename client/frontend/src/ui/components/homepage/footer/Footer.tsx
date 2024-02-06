import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import getYear from '../../../../lib/utils/getYear';

interface FooterProps {
    footerText: string;
}
export default function Footer({footerText}: FooterProps) {
  return (
      <div className='pt-12 bg-neutral-300 w-full' id='footer'>
        <p className="text-purple-900 text-center font-bold">©{String(getYear())}, {footerText}</p>
          <ul className="flex flex-auto">
              <li className='list-none'><a title="link" href="https://www.linkedin.com/in/henriquecosta05/"><FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#2e1065", }} /></a></li>
              <li className='list-none'><a title="link" href="https://github.com/HenriqueCosta05"><FontAwesomeIcon icon="fa-brands fa-github" style={{color: "#2e1065",}} /></a></li>
          </ul>
    </div>
  )
}
