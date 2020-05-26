import React from 'react'
import SuperMarketPage from './pages/super-market.page'
import DevTools from 'mobx-react-devtools'

function App() {
  return (
    <div>
      <SuperMarketPage />
      {/*{process.env.NODE_ENV === 'development' && <DevTools />}*/}
    </div>
  )
}

export default App
