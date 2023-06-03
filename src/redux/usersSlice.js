import { createSlice } from '@reduxjs/toolkit'
import { CARD_LIMIT, FILTERS } from '../constants';
import {
    fetchFirst,
    fetchMore,
    toggleFollowing

} from "./operations";

const handlePending = state => {
    state.isLoading = true;
    state.isOver = false
};

const handleRejected = state => {
    state.isLoading = false;
};

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoading: false,
        isToggling: false,
        isOver: false,
        page: 1,
        filter: FILTERS.all
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
            state.page = 1;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(fetchFirst.pending, handlePending)
            .addCase(fetchFirst.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                if (action.payload.length < CARD_LIMIT) {
                    state.isOver = true
                }
            })
            .addCase(fetchFirst.rejected, handleRejected)
            .addCase(fetchMore.pending, handlePending)
            .addCase(fetchMore.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(...action.payload);
                if (action.payload.length < CARD_LIMIT) {
                    state.isOver = true
                }
            })
            .addCase(fetchMore.rejected, handleRejected)
            .addCase(toggleFollowing.pending, state => {
                state.isToggling = true;
            })
            .addCase(toggleFollowing.fulfilled, (state, action) => {
                const index = state.items.findIndex(user => user.id === action.payload.id);
                state.items.splice(index, 1, action.payload)
            }).addCase(toggleFollowing.rejected, state => {
                state.isToggling = false;
            })
    }
})

export const { setFilter, incrementPage } = usersSlice.actions

export default usersSlice.reducer