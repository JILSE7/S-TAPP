import React from 'react'
import AppRouter from './Router/AppRouter'
import { StopProvider } from './Store/StoreContext'

const StopAndTrack = () => {
  return (
    <StopProvider>
      <AppRouter/>
    </StopProvider>
  )
}

export default StopAndTrack
