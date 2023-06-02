import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect} from "react"
import Pacientes from "./components/Pacientes"
function App() {
  //estado de pacientes
    //los useEfecc se colocan en el orden de ejecucion
  //se revisa el estado de localstorage para ver si hay datos que cargar a pacientes
  //en las ultimas versiones de react ya no se requiere useEffect para llamar el localstorage, 
  //sino sque se pasa directo al useState

  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  //estado paciente para llenar edicion de formulario
  const [paciente, setPaciente] = useState({})

  //cada que haya un cambio en paciente se ejecuta este codigo
  useEffect (()=>{
   //se usa local storage aprovechando que se capata todos los cambios en pacientes
   localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

//funcion para eliminar el paciente
  const eliminarPaciente = (id)=>{
    //trae los pacientes que no tienen el id buscado
    const pacientesActualizados = pacientes.filter(paciente=>paciente.id !== id);
    //se cambia la lista por la lista actualizada
    setPacientes(pacientesActualizados)
   
   
  }

  return (
    <div className="container mx-auto mt-10">
     <Header  />
      <div className="mt-12 md:flex">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente} 
        eliminarPaciente={eliminarPaciente}
        />
        

      </div>
    </div>
  )
}

export default App
