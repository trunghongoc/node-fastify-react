import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ICounterSliceState } from './typed'

const initialState: ICounterSliceState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: ICounterSliceState, action: PayloadAction<{ step: number }>): void => {
      state.count += action.payload.step
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export const counterReducer = counterSlice.reducer

export * from './typed'
