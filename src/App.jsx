import { Switch, Route } from 'react-router-dom'
import Navbar  from './components/Navbar'
import {useState} from 'react'

import FormularioDeCreacion from './view/FormularioDeCreacion'
import Home from './view/Home'
import Detalles from './view/Detalles'
import Eliminar from './view/Eliminar'
import FormularioDeEdicion from './view/FormularioEdicion'
import Alert from './components/Alert'

function App() {

  const [showingAlert, setShowingAlert] = useState(false)
  const [message, setMessage] = useState({
    color:'',
    message:''
  })

  return (
    <div className="">
      {showingAlert ? <Alert setShowingAlert={setShowingAlert} message={message} /> : null}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detalle/:id" component={(props) => <Detalles props={props} setShowingAlert={setShowingAlert} setMessage={setMessage}/>} />
        <Route exact path="/formulariodecreacion" component={() => <FormularioDeCreacion setShowingAlert={setShowingAlert} setMessage={setMessage}/>} />
        <Route exact path="/formulariodeedicion/:id" component={(props) => <FormularioDeEdicion props={props} setShowingAlert={setShowingAlert} setMessage={setMessage} />} />
        <Route exact path="/eliminar/:id" component={(props)=><Eliminar props={props} setShowingAlert={setShowingAlert} setMessage={setMessage} />} />
      </Switch>
    </div>
  );
}

export default App