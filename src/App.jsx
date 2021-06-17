import { Switch, Route } from 'react-router-dom'
import Navbar  from './components/Navbar'

import FormularioDeCreacion from './view/FormularioDeCreacion'

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/detalle" component={Detalle} /> */}
        <Route exact path="/formulariodecreacion" component={FormularioDeCreacion} />
        {/* <Route exact path="/formulariodeedicion" component={FormularioDeEdicion} /> */}
        {/* <Route exact path="/eliminar/:id/:titulo" component={Eliminar} /> */}
      </Switch>
    </div>
  );
}

export default App