import Layout from '../../Components/Layout'
import Navbar from '../../Components/NavBar';
import Itemlistcontainer from '../../Components/ItemListContainer';


const Initial=() =>{
  const menu = ['Inicio','Productos','Contactanos']
  const Productos = ['AGREGAR PRODUCTOS']

    return(
      
      <Layout>
        <Navbar menus={menu}></Navbar>
      <Itemlistcontainer  listas ={Productos}/>

      </Layout>
    )
}

export default Initial;