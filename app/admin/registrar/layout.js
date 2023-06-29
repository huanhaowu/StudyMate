'use client'
import BackButton from "@/app/components/BackButton"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Layout = ({ children }) => {
  const currentRoute = usePathname();
  const usuariosActive = currentRoute.includes('/admin/registrar/usuarios');
  const asignaturasActive = currentRoute.includes('/admin/registrar/asignaturas');
  const seccionesActive = currentRoute.includes('/admin/registrar/secciones');
  const aulasActive = currentRoute.includes('/admin/registrar/aulas');

  var ruta = "", titulo="";
  if (usuariosActive) {
    ruta = "/admin/administrar/usuarios"
    titulo = "Registrar usuario"
  } else if (asignaturasActive){
    ruta = "/admin/administrar/asignaturas"
    titulo = "Registrar asignatura"
  } else if (seccionesActive){
    ruta = "/admin/administrar/secciones"
    titulo = "Registrar seccion"
  } else if (aulasActive){
    ruta = "/admin/administrar/aulas"
    titulo = "Registrar aula"
  };

  return (
    <>
        <div className="backbutton">
            <Link href={ruta}>
              <BackButton/>
            </Link>
        </div>

    <div className="flex flex-col absolute left top-20">
        <h1 className="titulo">{titulo}</h1>
    </div>
 
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;