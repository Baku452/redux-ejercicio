import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { totalVotos } from "../../store/actions"

const TotalVotos = () => {
 const dispatch = useDispatch()

 const suma = useSelector((state) => state.suma)
 const votos = useSelector((state) => state.votos)

 useEffect(() => {
  dispatch(totalVotos())
 }, [dispatch, votos])

 return (
  <>
   <h3>Total de Votos: {suma}</h3>
  </>
 )
}

export default TotalVotos
