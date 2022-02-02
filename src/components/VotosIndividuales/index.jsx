import { useEffect } from "react"
import { useSelector } from "react-redux"

const VotosIndividuales = () => {
 const votos = useSelector((state) => state.votos)
 const isPercentage = useSelector((state) => state.percentage)

 useEffect(() => {}, [isPercentage])
 return (
  <>
   {votos.map((item) => (
    <h2>
     {isPercentage ? "%" + item.cantVotosPer.toFixed(2) : item.cantVotos} |
     Votos: {item.label}
    </h2>
   ))}
  </>
 )
}

export default VotosIndividuales
