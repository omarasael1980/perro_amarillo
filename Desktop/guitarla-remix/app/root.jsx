import {
Meta, 
Links, 
Outlet,
Scripts, 
LiveReload,
useRouteError,
isRouteErrorResponse,
Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta(){
    return(
        [{
            charset: 'utf8',
            title: 'GuitarLa-Remix',
            viewport: "width=device-width, initial-scale=1"
        }]
    )
}


export function links(){
    return [
        {
            rel:'stylesheet',
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect", 
            href:"https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" 
            
        },
        {
            rel: 'stylesheet',
            href: styles
        }
]
}
export default function App(){
    return <Document>
            <Outlet/>

       

            </Document>

}
function Document({children}){
    return(
        <html
        lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header></Header>
                {children}
                <Scripts/>
                <LiveReload/>
                <Footer/>
                
            </body>

        </html>
    )
}

/*=======    Manejo de Errores    ===================== */
export function ErrorBoundary() {
    const error = useRouteError();
  
    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
      return (
        <Document>
            <div>
                <h1 className='heading'>Lo siento, ocurrio un error</h1>
                <p className='error'>Status: {error.status}</p>
                <p className='error'>Mensaje: {error.statusText}</p>
                <Link className="error-enlace" to= "/">Tal vez quieras regresar a la página principal</Link>
            </div>
        </Document>
      );
    }
  
    // Don't forget to typecheck with your own logic.
    // Any value can be thrown, not just errors!
    let errorMessage = "Unknown error";
    if (isDefinitelyAnError(error)) {
      errorMessage = error.message;
    }
  
    return (
        <Document>
            <div>
                <h1 className='heading'>Uh oh ...</h1>
                <p className='error'>Something went wrong.</p>
                <p className='error'>{errorMessage}</p>
                <Link className="error-enlace" to= "/">Tal vez quieras regresar a la página principal</Link>
            </div>
        </Document>
    );
  }
  