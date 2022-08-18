import { useDispatch, useSelector } from "react-redux"
import { percentageVotos, filterEach } from "../../store/actions"

const Filtro = () => {
 const dispatch = useDispatch()
 const votos = useSelector((state) => state.votos)

 function handleChange(value) {
  dispatch(percentageVotos(value))
 }
 function handleChangeIndividual(value) {
  dispatch(filterEach(value))
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
    defaultChecked
    onChange={(e) => handleChange(false)}
    value="numeric"
    name="type"
   />{" "}
   # Numeric
   <div>
    <h4>Filter Individual or All</h4>
    <input
     id={0}
     type="radio"
     defaultChecked
     onChange={(e) => handleChangeIndividual(0)}
     value={"all"}
     name="individual"
    />
    <label for={0}>All</label>

    {votos.map((item) => (
     <>
      <input
       id={item.id}
       type="radio"
       onChange={(e) => handleChangeIndividual(item.id)}
       value={item.label}
       name="individual"
      />
      <label for={item.id}>{item.label}</label>
     </>
    ))}
   </div>
  </>
 )
}

export default Filtro
