import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

export default function Post({post}) {
    const {titulo, contenido, imagen, url, publishedAt}=post
  return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} alt={`blog guitarra ${post.titulo}`} />
     
      <div className="contenido">
            <h3 className="heading">{titulo}</h3>
            <p className="fecha">Fecha: {formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
      </div>
    
    </article>
  )
}
