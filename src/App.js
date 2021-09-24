import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCitas';
import { Component } from 'react';
import ListasCitas from './componentes/ListaCitas';

class App extends Component {
  state ={
    citas:[]
  }


  crearCita = (nuevaCita) => { 
  const citas = [...this.state.citas, nuevaCita] //copia de mi arreglo
    

  this.setState({
   citas
  });

  }
  
  render(){
  return (
    <div className="container">
     <Header
     titulo={'Administrador de Pacientes de Veterinaria'}
     />
     <div className="row">
       <div className="col-md-6">
         <AgregarCita
         crearCita={this.crearCita}
         />
       </div>
       <div className="col-md-6">
         <ListasCitas
         citas = {this.state.citas}
         />
       </div>
     </div>
    </div>
  );
  }
}
export default App;
