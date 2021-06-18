import { Switch, Route } from 'react-router-dom'
import Navbar  from './components/Navbar'

import FormularioDeCreacion from './view/FormularioDeCreacion'
import Home from './view/Home'
import Detalles from './view/Detalles'
import Eliminar from './view/Eliminar'
import FormularioDeEdicion from './view/FormularioEdicion'

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detalle/:id" component={Detalles} />
        <Route exact path="/formulariodecreacion" component={FormularioDeCreacion} />
        <Route exact path="/formulariodeedicion/:id" component={FormularioDeEdicion} />
        <Route exact path="/eliminar/:id/:titulo" component={Eliminar} />
      </Switch>
    </div>
  );
}

export default App