import React, { Component } from 'react';


class ListasCitas extends Component{
    render(){
        const citas = this.props.citas;

        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus Citas Aquí';

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center"> {mensaje} </h2>
                </div>
            </div>
        );
    }
}

export default ListasCitas;