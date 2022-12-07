import PropType from 'prop-types'
import Cartwidget from '../CartWidget'
import { Link } from 'react-router-dom';

const Navbar = ({menus,categorias,children}) =>{
    return(
        <div className='navbar'>
            <div className='navbar__menus'>
            {
                menus.map((menu)=>{
                    return <Link className='navbar__menu' to={menu.href} >{menu.name}</Link>
                })
            },
            {
                categorias.map((categoria)=>{
                    return <Link className='navbar__category' to={`/category/${categoria.id}`}>
                {categoria.name}</Link>
                })
            }
            </div>
            <div>
                <Cartwidget></Cartwidget>
                {children}
            </div>
        </div>
    )
}

Navbar.proptype ={
    menus: PropType.array.isRequired,
    children: PropType.element
}

export default Navbar