import PropTypes from 'prop-types'
import './Itemlistcontainer.scss'

const Itemlistcontainer = ({listas})=>{
    return(
        <div id='list' className='list'>
            {
                listas.map((lista)=>{
                    return <p>{lista}</p>
                })
            }
        </div>
    )
}

Itemlistcontainer.prototype = {
    listas: PropTypes.array.isRequired
}

export default Itemlistcontainer;