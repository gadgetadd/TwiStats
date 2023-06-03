import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, CARD_LIMIT } from '../constants';

axios.defaults.baseURL = BASE_URL;


const fetchUsers = async ({ page, isFollowing = null }, { rejectWithValue }) => {
    const params = { limit: CARD_LIMIT };
    params.page = page;
    if (isFollowing !== null) {
        params.isFollowing = isFollowing;
    }
    try {
        const response = await axios.get("/users", { params });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
}
export const fetchFirst = createAsyncThunk("users/fetchFirst", fetchUsers);
export const fetchMore = createAsyncThunk("users/fetchMore", fetchUsers);

export const toggleFollowing = createAsyncThunk("users/toggleFollowing", async ({ id, isFollowing, followers }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`/users/${id}`, { isFollowing, followers });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
});
