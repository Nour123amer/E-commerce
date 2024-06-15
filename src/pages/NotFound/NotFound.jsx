import React from 'react'
import NotFoundImg from "../../assets/images/error.svg"

export default function NotFound() {
  return (
    <div>
      <img src={NotFoundImg} className='mx-auto' />
    </div>
  )
}
