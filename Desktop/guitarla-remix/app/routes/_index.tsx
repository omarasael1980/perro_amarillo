import {getGuitarras} from "~/models/guitarras.server"
import {getPosts} from  "~/models/posts.server"
import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from "~/components/listado-posts"




export function meta(){


}

export async function loader(){
  const [ guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])

console.log(guitarras)
console.log(posts)

  return {guitarras: guitarras.data, posts: posts.data}
}
function Index() {
  const {guitarras, posts} = useLoaderData()

  return (
  <>
    <main className="contenedor">
    <ListadoGuitarras
    guitarras ={guitarras}
    />
    <ListadoPosts
    posts ={posts}
    />

    </main>
  </>
  )
}

export default Index

  