import { ADD_VOTO, TOTAL_VOTOS, PERCENTAGE_VOTOS } from "./types"

const initialState = {
 votos: [
  {
   id: 1,
   label: "A",
   cantVotos: 0,
  },
  {
   id: 2,
   label: "B",
   cantVotos: 0,
  },
  {
   id: 3,
   label: "C",
   cantVotos: 0,
  },
  {
   id: 4,
   label: "D",
   cantVotos: 0,
  },
 ],
 suma: 0,
}

function reducer(state = initialState, action) {
 switch (action.type) {
  case ADD_VOTO:
   const candidateId = state.votos.findIndex(
    (item) => item.id == action.payload
   )
   const newVotos = [...state.votos]
   newVotos[candidateId].cantVotos += 1
   return {
    ...state,
    votos: newVotos,
   }
  case TOTAL_VOTOS:
   const sumState = state.votos.reduce(function (suma, item) {
    return suma + item.cantVotos
   }, 0)
   console.log(sumState)
   return {
    ...state,
    suma: sumState,
   }
  default:
   return {
    ...state,
   }
 }
}

export default reducer
