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
  
  borrarCita = id => {
    //Leer el state
    const citasActuales = [...this.state.citas];
    //Borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id); 
    //Actualizar el state
    this.setState({
      citas
    })
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
         borrarCita={this.borrarCita}
         />
       </div>
     </div>
    </div>
  );
  }
}
export default App;
