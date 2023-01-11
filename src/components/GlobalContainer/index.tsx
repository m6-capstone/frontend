import React from 'react'
import { GlobalContainer } from './styles'

export default function globalContainer(children:any) {
  return (
    <GlobalContainer>
        {children}
    </GlobalContainer>
  )
}
