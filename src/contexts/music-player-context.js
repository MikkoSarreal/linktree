import * as React from 'react'

const MusicPlayerContext = React.createContext()

function musicPlayerReducer(state, action) {
  switch (action.type) {
    case 'set': {
      return {active: action.payload}
    }
    case 'remove': {
      return {active: {}}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function MusicPlayerProvider({children}) {
  const [state, dispatch] = React.useReducer(musicPlayerReducer, {active: {}})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <MusicPlayerContext.Provider value={value}>{children}</MusicPlayerContext.Provider>
}

function useMusicPlayer() {
  const context = React.useContext(MusicPlayerContext)
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider')
  }
  return context
}

export {MusicPlayerProvider, useMusicPlayer}