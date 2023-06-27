import Post from "./post"
import styles from "../styles/blog.css"

export function links(){
    [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function ListadoPosts({posts}) {
  return (
   <>
    <h2 className="heading">Posts</h2>
      <div className="blog">
        {posts.map(post=>(
          <Post
          key = {post.id}
          post = {post.attributes}
          />
        ))}
      </div>
   </>
  )
}

export default ListadoPosts
