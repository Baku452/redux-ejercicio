import deepFreeze from "deep-freeze"
import { ADD_VOTO, TOTAL_VOTOS } from "../types"
import { voteReducer } from "./votesReducer"

describe("voteReducer", () => {

        test('returns new state after action', () =>{
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
                percentage: false,
            }

            const action = {
                type: ADD_VOTO,
                payload: {
                    id:1
                }
            }

            deepFreeze(initialState)
            const newState = voteReducer(initialState, action);
            expect(newState.votos).toContainEqual({
                id: 1,
                label: "A",
                cantVotos: 1,
            })

        })

        test('Get Sum of all votes', () => {
            const initialState = {
                votos: [
                {
                    id: 1,
                    label: "A",
                    cantVotos: 4,
                },
                {
                    id: 2,
                    label: "B",
                    cantVotos: 3,
                },
                {
                    id: 3,
                    label: "C",
                    cantVotos: 2,
                },
                {
                    id: 4,
                    label: "D",
                    cantVotos: 5,
                },
                ],
                suma: 0,
                percentage: false,
                
            }
            
            const action = {
                type: TOTAL_VOTOS,
            }

            deepFreeze(initialState)
            const newState = voteReducer(initialState, action);
            expect(newState.suma).toBe(14)
        })

        test('Get Percentage', () => {
            const initialState = {
                votos: [
                {
                    id: 1,
                    label: "A",
                    cantVotos: 4,
                },
                {
                    id: 2,
                    label: "B",
                    cantVotos: 3,
                },
                {
                    id: 3,
                    label: "C",
                    cantVotos: 2,
                },
                {
                    id: 4,
                    label: "D",
                    cantVotos: 5,
                },
                ],
                suma: 0,
                percentage: false,
                
            }
            
            const action = {
                type: TOTAL_VOTOS,
            }

            deepFreeze(initialState)
            const newState = voteReducer(initialState, action);
            expect(newState.suma).toBe(14)
        })
}) 