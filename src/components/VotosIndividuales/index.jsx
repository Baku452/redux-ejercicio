import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const VotosIndividuales = () => {
 const dispatch = useDispatch()

 const votos = useSelector((state) => state.votos)
 const isPercentage = useSelector((state) => state.percentage)

 useEffect(() => {}, [isPercentage])
 return (
  <>
   {votos.map((item) => (
    <h2>
     {isPercentage ? "%" + item.cantVotosPer : item.cantVotos} | Votos:{" "}
     {item.label}
    </h2>
   ))}
  </>
 )
}

export default VotosIndividuales
