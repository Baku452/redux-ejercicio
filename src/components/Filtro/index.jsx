import { useDispatch, useSelector } from "react-redux"
import { percentageVotos } from "../../store/actions"

const Filtro = () => {
 const dispatch = useDispatch()

 function handleChange(value) {
  dispatch(percentageVotos(value))
 }
 return (
  <>
   <input
    type="radio"
    onChange={(e) => handleChange(true)}
    value="percentage"
    name="type"
   />{" "}
   % Percentage
   <input
    type="radio"
    onChange={(e) => handleChange(false)}
    value="numeric"
    name="type"
   />{" "}
   # Numeric
  </>
 )
}

export default Filtro
