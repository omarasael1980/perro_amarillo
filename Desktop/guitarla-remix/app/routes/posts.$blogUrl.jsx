import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import {formatearFecha} from '../utils/helpers.js'
import styles from "~/styles/blog.css"


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}
export function meta(data){
  if(!data){
    return{
      title:"GuitarraLA -- Entrada no encontrada",
      description:"Entrada no encontrada"
    }
  }else{
    return [
      {
        title: `GuitarraLA ${data.data.data[0].attributes.titulo}`,
        description: `Guitarras, Entrada de Blog,  ${data.data.data[0].titulo}`
      }
    ]
  }
 
 
}

export async function loader(params){
 
  const {blogUrl} =  await params.params;
  const post  = await getPost(blogUrl);
  
  if(post.data.length === 0){
    throw new Response("",{
      status: 404,
      statusText: "Entrada de blog no encontrada"
    })
  }
 
  return post
}

export  default function Blog() {
  const post =  useLoaderData()
  console.log(post)
  const {titulo, contenido, imagen, createdAt}=  post.data[0].attributes
  

  return (
    <article className="contenedor post">
       <img src={imagen.data.attributes.url} alt={`blog entrada ${titulo}`} />
        <div className="contenido">
          <h3 className="heading">{titulo}</h3>
          <p className="texto">{contenido}</p>
          <p className="fecha">{formatearFecha(createdAt)}</p>
        </div>
       
     

    </article>
  )
}
