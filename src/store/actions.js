import { ADD_VOTO, TOTAL_VOTOS, PERCENTAGE_VOTOS } from "./types"

export const addVotos = (id) => ({
 type: ADD_VOTO,
 payload: id,
})

export const totalVotos = () => ({
 type: TOTAL_VOTOS,
})
export const percentageVotos = (value) => ({
 type: PERCENTAGE_VOTOS,
 payload: value,
})
