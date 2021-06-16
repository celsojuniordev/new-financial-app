import React from 'react'
import Navbar from './components/navbar';

import 'bootswatch/dist/lumen/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="container">

        </div>
      </>
    )
  }
}

export default App;
