import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

import { fetchUsers } from './features/users/usersSlice'

import { worker } from './api/server'

async function main() {
  await worker.start({ onUnhandledRequest: 'bypass' })
  store.dispatch(fetchUsers())
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
 main()
