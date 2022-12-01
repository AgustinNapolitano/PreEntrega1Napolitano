import Layout from '../../Components/Layout'
import Navbar from '../../Components/NavBar';
import Itemlistcontainer from '../../Components/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../../Components/Home';
import Contacto from '../../Components/Contacto'


const Initial=() =>{
  const menu = [{
    name:'Inicio',
    href:'/'
  },
  {
    name:'Productos',
    href:'/productos'
  },
  {
    name:'Contacto',
    href:'/contacto'
  }
]
  const Productos = ['AGREGAR PRODUCTOS']

    return(
      <BrowserRouter> 
      <Layout>
        <Navbar menus={menu}></Navbar>
        <Routes> 
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/productos' element={<Itemlistcontainer/>}/>
          <Route exact path='/contacto' element={<Contacto/>}/>
        </Routes>
      

      </Layout>
      </BrowserRouter>
    )
}

export default Initial;