import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCitas';
import { Component } from 'react';

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
     </div>
    </div>
  );
  }
}
export default App;
