import React from 'react'
import { LanguageLogo } from '../../helpers/Logos'
import './LanguageLogo.scss'
function LanguageLogoContent({...props}: LanguageLogo) {
  return (
    <div className='language__content'>
      <p><b>{props.language}</b> {props.content}</p>
    </div>
  )
}

export default LanguageLogoContent