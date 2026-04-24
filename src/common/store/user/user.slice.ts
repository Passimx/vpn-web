import { createSlice } from '@reduxjs/toolkit';
import { StateType } from './types/state.type.ts';

const initialState: StateType | null = null;

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const UserActions = UserSlice.actions;
export const UserReducers = UserSlice.reducer;
