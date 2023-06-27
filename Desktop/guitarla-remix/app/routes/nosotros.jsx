import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function links(){
  return [
    {
      rel:"stylesheet",
      href:styles
    }
  ]
}
export function meta(){
  return(
      [{
          
          title: 'GuitarLA-Nosotros',
          description: "Guitarras, música, ventas"
      },
      {
        rel: 'preload',
        href: imagen, 
        as: 'image'
      }
    ]
  )
}
function Nosotros() {
  return (
   <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="imagen sobre nosotros"/>
       
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan ultricies viverra. 
              Vestibulum dapibus nibh in tellus lobortis, a hendrerit metus iaculis. Pellentesque laoreet
              orci nunc, non accumsan velit scelerisque at. Proin gravida id ligula sit amet auctor. 
              Phasellus vulputate leo at dignissim faucibus. Aliquam placerat nec metus ac molestie. 
            
              </p>
            </div>
        </div>
   </main>
  )
}

export default Nosotros
