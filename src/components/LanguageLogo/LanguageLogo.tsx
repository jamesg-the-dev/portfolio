import React from 'react'
import { LanguageLogo as _LanguageLogo } from '../../helpers/Logos';
import './LanguageLogo.scss'
function LanguageLogo({ ...props }: _LanguageLogo) {
  return (
    <div className='language'>
      <div className='language__container'>
        <img src={props.logo} alt="" />
        <p>{props.language}</p>
      </div>
    </div>
  )
}

export default LanguageLogo