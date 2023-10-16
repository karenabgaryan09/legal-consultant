import React from 'react'
import {Header} from '@/components'

const layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default layout