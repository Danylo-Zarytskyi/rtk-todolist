import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSwapi = createAsyncThunk('todoS/fetchSwapi', async () => {
    const random = Math.floor(Math.random() * 10) + 1;

    const response = await axios.get(`https://swapi.dev/api/people/${random}`);
    return response.data.name;
})