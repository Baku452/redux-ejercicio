import {
 ADD_VOTO,
 TOTAL_VOTOS,
 PERCENTAGE_VOTOS,
 INDIVIDUAL_ALL,
} from "./types"

export const addVotos = (id) => ({
    type: ADD_VOTO,
    payload: {id: id},
})

export const totalVotos = () => ({
    type: TOTAL_VOTOS,
})
export const percentageVotos = (value) => ({
    type: PERCENTAGE_VOTOS,
    payload: value,
})

export const filterEach = (value) => ({
 type: INDIVIDUAL_ALL,
 payload: value,
})
