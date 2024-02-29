import { createReducer} from '@reduxjs/toolkit'
import {getCities, filterCities} from '../actions/cityActions'

const initialState = {
    cities: []
}

const cityReducer = createReducer(initialState,
    (builder)=> builder
        .addCase(getCities.fulfilled,(state, action)=>{
            return{
                ...state,
                cities:action.payload.cities
            }
        })
        .addCase(filterCities.fulfilled,(state, action)=>{
            return{
                ...state,
                cities:action.payload.cities
            }
        })
)

export default cityReducer