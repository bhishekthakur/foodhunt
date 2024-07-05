import React from 'react'
import useOnline from './utility/useOnline'
const Footer = () => {
 
  return (
    <div className='footerr'>
    FoodHunt, made by{' '}
    <a
      href='https://abhishek620.netlify.app/'
      target={'_blank'}
      className='text-orange-500'
    >
      Abhishek Thakur
    </a>
  </div>
  )
}

export default Footer;