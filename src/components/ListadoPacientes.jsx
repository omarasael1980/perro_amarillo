

import Pacientes from "./Pacientes"
const ListadoPacientes = ({pacientes,setPaciente, eliminarPaciente}) => {


  return (
      <div className="mb-10 mx-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="text-black text-center text-4xl font-bold">Listado Pacientes</h2>
            <p className="text-center mt-5 mb-10 text-xl">Administra tus {''}
                <span className="text-blue-700 font-bold">
                  Pacientes y Citas
                </span>
              </p>
             {pacientes.map((paciente )=>(
              
              <Pacientes 
              key = {paciente.id}
              paciente ={paciente}
              setPaciente={setPaciente}
              eliminarPaciente ={eliminarPaciente}
              />

              
            ))}
          </>
        )
        
        : (
          <>
           <h2 className="text-black text-center text-4xl font-bold">No hay pacientes</h2>
            <p className="text-center mt-5 mb-10 text-xl">Comienza agregando pacientes {''}
                <span className="text-blue-700 font-bold">
                  Y apareceran en este lugar
                </span>
              </p>
             {pacientes.map((paciente )=>(
              
              <Pacientes 
              key = {paciente.id}
              paciente ={paciente}/>
              
            ))}
          </>
        ) }
        
        
        
        
      </div>
  )
}

export default ListadoPacientes
