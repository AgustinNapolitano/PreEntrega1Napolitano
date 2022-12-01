import PropType from 'prop-types'
import Cartwidget from '../CartWidget'

const Navbar = ({menus,children}) =>{
    return(
        <div className='navbar'>
            <div className='navbar__menus'>
            {
                menus.map((menu)=>{
                    return <a href={menu.href} className='navbar__menu'>{menu.name}</a>
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