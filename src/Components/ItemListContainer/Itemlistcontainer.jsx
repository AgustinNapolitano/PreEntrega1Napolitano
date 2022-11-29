import PropTypes from 'prop-types'

const Itemlistcontainer = ({listas})=>{
    return(
        <div className='list'>
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