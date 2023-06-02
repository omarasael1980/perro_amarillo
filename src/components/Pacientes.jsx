
const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const {mascota, propietario, email, fecha, sintomas, id}=paciente
  //pide confirmacion antes de realizar la eliminacion 
  const handleEliminar =()=>{
    const respuesta = confirm("Deseas eliminar este paciente?")
        if (respuesta ){
          eliminarPaciente(id)
        }
  }
  
  return (
        <div className="bg-white shadow-md mt-3 px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:  
              <span className="font-normal normal-case"> { mascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del propietario: 
              <span className="font-normal normal-case"> { propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: 
              <span className="font-normal normal-case"> { email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: 
              <span className="font-normal normal-case"> { fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: 
              <span className="font-normal normal-case"> { sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
              <button type="button" className="
              py-2 px-10
             bg-indigo-600
             hover:bg-slate-400
             rounded-lg
             text-white
             uppercase"
             onClick = {()=>setPaciente(paciente)}>Editar</button>
              <button type="button" 
              className="
              py-2 px-10
             bg-red-600
             hover:bg-red-900
             rounded-lg
             text-white
             uppercase"
             //se puede vincular la funcion directamente
             //onClick={()=>eliminarPaciente(id)}
             //o se puede usar un handle
             onClick={handleEliminar}
             >Eliminar</button>
            </div>
        </div>
  )
}

export default Pacientes
