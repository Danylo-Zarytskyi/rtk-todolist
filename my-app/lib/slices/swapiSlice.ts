
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSwapi } from '../thunks/swapi';

interface SwapiState {
    name: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: SwapiState = {
    name: null,
    loading: false,
    error: null,
};

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSwapi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSwapi.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.name = action.payload;
            })
            .addCase(fetchSwapi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Помилка отримання даних';
            });
    },
});

export default swapiSlice.reducer;
