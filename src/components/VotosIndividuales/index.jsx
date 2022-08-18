import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const VotosIndividuales = () => {

 const votos = useSelector((state) => state.votos)
 const filterState = useSelector((state) => state.filter)
 const isPercentage = useSelector((state) => state.percentage)

 const [listVotos, setListVotos] = useState([...votos])

 useEffect(() => {}, [isPercentage])
 useEffect(() => {
  console.log(filterState)
  let filtered
  switch (filterState) {
   case 0:
    setListVotos(votos)
    break
   case 1:
    filtered = votos.filter((item) => item.id == filterState)
    console.log(filtered)
    setListVotos(filtered)
    break

   case 2:
    filtered = votos.filter((item) => item.id == filterState)
    console.log(filtered)
    setListVotos(filtered)
    break

   case 3:
    filtered = votos.filter((item) => item.id == filterState)
    console.log(filtered)
    setListVotos(filtered)
    break

   case 4:
    filtered = votos.filter((item) => item.id == filterState)
    console.log(filtered)
    setListVotos(filtered)
    break
   default:
    break
  }
 }, [filterState])
 return (
        <>
            {votos.map((item) => (
                <h2 key={item.id}>
                    {isPercentage ? "%" + item.cantVotosPer : item.cantVotos} | Votos:{" "}
                    {item.label}
                </h2>
            ))}
        </>
    )
}

export default VotosIndividuales
