import { useSelector, useDispatch } from "react-redux"
import { addVotos } from "../../store/actions"

const ListaBoton = () => {
 const dispatch = useDispatch()
 const votos = useSelector((state) => state.votos)

 const handleClick = (e) => {
    dispatch(addVotos(e.target.value))
 }

 return (
        <>
            <h1>Vote</h1>
                {votos.map((item) => (
                    <button 
                        onClick={(e) => handleClick(e)} 
                        key={item.id} 
                        value={item.id}>
                        {item.label}
                    </button>
            ))}
        </>
    )
}

export default ListaBoton
