import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader(params){

  const {guitarraUrl} = await params.params
  
  const guitarra = await getGuitarra(guitarraUrl)
  if(guitarra.data.length === 0){
    throw new Response("",{
      status:404,
      statusText: "Guitarra no encontrada"
    })
  }
  
return guitarra
}

export function meta(data){
  if(!data){
    return{
      title:"GuitarraLA -- Guitarra no encontrada",
      description:"Guitarra no encontrada"
    }
  }else{
    return [
      {
        title: `GuitarraLA ${data.data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras,  ${data.data.data[0].nombre}`
      }
    ]
  }
 
 
}
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


function Guitarra() {
  const guitarraUrl = useLoaderData()
  
  const {nombre, precio, descripcion, imagen} = guitarraUrl.data[0].attributes
 
    return (
      <main className='contenedor guitarra'>
        <img src={imagen.data.attributes.formats.medium.url} alt={`imagen de la guitarra ${nombre}`} />
        <div className='contenido'>
          <h3 className='heading'>{nombre}</h3>
          <p className='texto'>{descripcion}</p>
          <p className="precio">${precio}</p>
        </div>

       
      </main>
    )
  }
  
  export default Guitarra