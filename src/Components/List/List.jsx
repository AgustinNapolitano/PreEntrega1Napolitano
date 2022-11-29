import PropTypes from 'prop-types'

const List = ({listas})=>{
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

List.prototype = {
    listas: PropTypes.array.isRequired
}

export default List;