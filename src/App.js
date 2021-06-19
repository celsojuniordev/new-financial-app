import React from 'react'
import Navbar from './components/navbar';
import { ToastContainer } from 'react-toastify'
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/lumen/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './custom.css'

class App extends React.Component {

  render() {
    return (
      <>
        <ToastContainer />
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </>
    )
  }
}

export default App;
