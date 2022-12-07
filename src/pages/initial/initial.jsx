import Layout from '../../Components/Layout'
import Navbar from '../../Components/NavBar';
import ItemListContainer from '../../Components/ItemListContainer';
import ItemDetailContainer from '../../Components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contacto from '../../Components/Contacto'
import {categorias,menu} from '../../mock'


const Initial=() =>{

    return(
      <BrowserRouter> 
      <Layout>
        <Navbar menus={menu} categorias={categorias}></Navbar>
        <Routes> 
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/contacto' element={<Contacto/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      

      </Layout>
      </BrowserRouter>
    )
}

export default Initial;