import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/posts.server"

import styles from "../styles/blog.css"
import ListadosPosts from "../components/listado-posts"


export async function loader(){
  const posts = await getPosts()
  return posts.data
}
export function links(){
return ([
  {
    rel: "stylesheet",
    href: styles
  }
])
}

function Blog() {
  const posts  = useLoaderData()
 
  return (
    <main className="contenedor">
      <ListadosPosts
      posts={posts}
      />
    </main>
  )
}

export default Blog

