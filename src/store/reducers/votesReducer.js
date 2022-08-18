import { ADD_VOTO, PERCENTAGE_VOTOS, TOTAL_VOTOS } from "../types"

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
      cantPercentage: 0 
  },
  {
      id: 3,
      label: "C",
      cantVotos: 0,
      cantPercentage: 0 
  },
  {
      id: 4,
      label: "D",
      cantVotos: 0,
      cantPercentage: 0 
  },
  ],
  suma: 0,
  percentage: false,
}


export const voteReducer = (state = initialState, action) => {
    switch (action.type) {
     case ADD_VOTO:
        const { id } = action.payload;
        const counts = state.votos.map(candidate => {
            if(candidate.id ===  Number(id)){
              return{
                ...candidate,
                cantVotos: candidate.cantVotos +1,
                // cantPercentage: candidate.cantVotos +1 / (state.suma + 1 ) * 100
              }
            }

            return candidate;
        })
        return { ...state, votos: counts}
     case TOTAL_VOTOS:
       const sumState = state.votos.reduce((suma, item) => {
       return suma + item.cantVotos
       }, 0)
       return {
         ...state,
         suma: sumState,
      }
      
     case PERCENTAGE_VOTOS:
       return {
       ...state,
       percentage: action.payload,
      }
     default:
      return state;
    }
}