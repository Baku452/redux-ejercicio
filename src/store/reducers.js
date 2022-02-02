import { ADD_VOTO, TOTAL_VOTOS, PERCENTAGE_VOTOS } from "./types"

const initialState = {
 votos: [
  {
   id: 1,
   label: "A",
   cantVotos: 0,
   cantVotosPer: 0,
  },
  {
   id: 2,
   label: "B",
   cantVotos: 0,
   cantVotosPer: 0,
  },
  {
   id: 3,
   label: "C",
   cantVotos: 0,
   cantVotosPer: 0,
  },
  {
   id: 4,
   label: "D",
   cantVotos: 0,
   cantVotosPer: 0,
  },
 ],
 suma: 0,
 percentage: false,
}

function reducer(state = initialState, action) {
 switch (action.type) {
  case ADD_VOTO:
   const candidateId = state.votos.findIndex(
    (item) => item.id == action.payload
   )
   const newVotos = [...state.votos]
   newVotos[candidateId].cantVotos += 1
   const sumaState = (state.suma += 1)
   newVotos.map((item) => {
    return (item.cantVotosPer = (item.cantVotos / sumaState) * 100)
   })
   //  newVotos[candidateId].cantVotosPer =
   //   (newVotos[candidateId].cantVotos / addSuma) * 100

   return {
    ...state,
    votos: newVotos,
    // suma: (state.suma += 1),
   }
  case TOTAL_VOTOS:
   const sumState = state.votos.reduce(function (suma, item) {
    return suma + item.cantVotos
   }, 0)
   return {
    ...state,
    suma: sumState,
   }
  case PERCENTAGE_VOTOS:
   const arrPercentage = state.votos.map((item) => {
    return (item.cantVotosPer = (item.cantVotos / state.suma) * 100)
   })
   console.log(arrPercentage)
   return {
    ...state,
    // votos: arrPercentage,
    percentage: action.payload,
   }
  default:
   return {
    ...state,
   }
 }
}

export default reducer
