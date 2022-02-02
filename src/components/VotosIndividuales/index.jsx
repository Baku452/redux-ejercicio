import { useSelector, useDispatch } from "react-redux"

const VotosIndividuales = () => {
 const votos = useSelector((state) => state.votos)

 return (
  <>
   {votos.map((item) => (
    <h2>
     {item.cantVotos} | {item.label}
    </h2>
   ))}
  </>
 )
}

export default VotosIndividuales
