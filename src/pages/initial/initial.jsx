import Layout from '../../Components/Layout'
import Navbar from '../../Components/NavBar';
import List from '../../Components/List';
import Cartwidget from '../../Components/CartWidget';


const Initial=() =>{
  const menu = ['Inicio','Productos','Contactanos']
  const Productos = ['BIENVENIDO AGUSTÍN NAPOLITANO']

    return(
      
      <Layout>
        <Navbar menus={menu}><Cartwidget></Cartwidget></Navbar>
      <List  listas ={Productos}/>

      </Layout>
    )
}

export default Initial;