
import { useState, useEffect}from 'react';
import Error from './Error';

//pacientes == todos los pacientes, setPaciente agrega datos al formulario, paciente un paciente para editar
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)
    useEffect(() => {
     if(Object.keys(paciente).length > 0){
      //al presionar editar se cargan los datos en el formulario
      setMascota(paciente.mascota)
      setEmail (paciente.email)
      setFecha(paciente.fecha)
      setPropietario(paciente.propietario)
      setSintomas(paciente.sintomas)
     }else{
      console.log('formulario vacio');
     }
    },[paciente])
    const generarId =()=>{
      const fecha = Date.now();
      const random = Math.random().toString(36).substring(2);
      return (random + fecha)
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      //validando el formulario
      if([mascota,propietario,email,fecha,sintomas].includes('')){
        console.log('hay un campo vacio')
        setError(true)
        return;

      }else{
        
        setError(false)
        // objeto de paciente leyendo campos del state
        const objetoPaciente ={
          mascota,
          propietario,
          email,
          fecha,
          sintomas,
          
        }
        //SI EXISTE EN PACIENTE ID ENTONCES SE EDITA
        if(paciente.id){
          //editando registro
          objetoPaciente.id =paciente.id
          const pacientesActualizados =pacientes.map(pacienteState =>pacienteState.id === 
          paciente.id ? objetoPaciente : pacienteState)
          setPacientes(pacientesActualizados)
          //limpiar el dom
          setPaciente =({})

        }else{
          //nuevo registro
          //se le agrega id a objeto paciente para nuevo registro
          objetoPaciente.id =  generarId()
          setPacientes([...pacientes, objetoPaciente])
          
        }
        
        // reiniciar el form
        setMascota ("")
        setEmail ("")
        setFecha ("")
        setPropietario ("")
        setSintomas ("")
      }

    }
 
  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="text-black text-center text-4xl font-bold">Seguimiento de Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Agregar pacientes y {''}
          <span className="text-indigo-500 font-bold"> Administralos</span>
        </p>
        <form 
          onSubmit = {handleSubmit}
          autoComplete="off" 
          className="bg-white shadow-md rounded-lg py-5 px-5"
        >
          {error && <Error>
            <p>Todos los campos son obligatorios</p>
            </Error>}
          <div>
            <label 
              htmlFor="mascota" 
              className="block font-bold p-2 text-gray-700 uppercase">
              Mascota
            </label>
            <input 
              type="text" 
              name="mascota" 
              id="mascota"
              placeholder="Nombre de la mascota" 
              className="border-2 w-full p-2 m-2 placeholder-sky-800 rounded-lg"
              value ={mascota}
              onChange={(e)=> setMascota(e.target.value)}
            />
              
          </div>
          <div>
            <label 
              htmlFor="propietario"
              className="block font-bold p-2 text-gray-700 uppercase">
              Nombre del propietario
            </label>
            <input 
              type="text" 
              name="propietario" 
              id="propietario"
              placeholder="Nombre del propietario" 
              className="border-2 w-full p-2 m-2 placeholder-sky-800 rounded-lg"
              value ={propietario}
              onChange={(e)=> setPropietario(e.target.value)}
               />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block font-bold p-2 text-gray-700 uppercase">
                Email
            </label>
            <input 
              type="text" 
              name="email" 
              id="email"
              placeholder="Email del propietario" 
              className="border-2 w-full p-2 m-2 placeholder-sky-800 rounded-lg"
              value ={email}
              onChange={(e)=> setEmail(e.target.value)}
               />
          </div>
          <div>
            <label 
              htmlFor="alta" 
              className="block font-bold p-2 text-gray-700 uppercase">
                Alta
            </label>
            <input 
              type="date" 
              name="alta" 
              id="alta"
              className="border-2 w-full p-2 m-2 placeholder-sky-800 rounded-lg"
              value ={fecha}
              onChange={(e)=> setFecha(e.target.value)}
               />
          </div>
          <div>
            <label 
              htmlFor="sintomas" 
              className="block font-bold p-2 text-gray-700 uppercase">
                Síntomas
            </label>
            <textarea 
              type="date" 
              name="sintomas" 
              id="sintomas"
              placeholder="Desribe los síntomas" 
              className="border-2 w-full p-2 m-2 placeholder-sky-800 rounded-lg"
              value ={sintomas}
              onChange={(e)=> setSintomas(e.target.value)}
               />
          </div>
            <input 
              type="submit" 
              value={paciente.id ? "Editar paciente" : "Agregar paciente" }
              className="bg-indigo-800 w-full rounded-2xl p-2 mb-10 shadow-xl hover:bg-indigo-950 cursor-pointer text-white uppercase font-bold" />
        </form>
    </div>
  )
}

export default Formulario


