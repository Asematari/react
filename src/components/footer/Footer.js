//rafce
import React from 'react'
import Styles from './Footer.module.scss'

const date =new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <div className={Styles.footer}>
      &copy;{year} All Rights Reserved
    </div>
  )
}

export default Footer