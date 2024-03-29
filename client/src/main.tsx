import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/store'

import { initDevCookies } from '@/features/app'
import { startMockBrowserIfEnable } from '@/msw/startMockBrowserIfEnable'

const render = async () => {
  await initDevCookies()
  await startMockBrowserIfEnable()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  )
}

render()
