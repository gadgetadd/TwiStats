import { createSlice } from '@reduxjs/toolkit'
import { CARD_LIMIT, FILTERS } from '../constants';
import {
    fetchFirst,
    fetchMore,
    toggleFollowing

} from "./operations";

const handlePending = state => {
    // state.isLoading = true;
    state.isOver = false
};

// const handleRejected = (state, action) => {
//     // state.isLoading = false;
//     // state.error = action.payload;
// };

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        // isLoading: false,
        // error: null,
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
                // state.isLoading = false;
                // state.error = null;
                state.items = action.payload;
                if (action.payload.length < CARD_LIMIT) {
                    state.isOver = true
                }
            })
            // .addCase(fetchFirst.rejected, handleRejected)
            .addCase(fetchMore.pending, handlePending)
            .addCase(fetchMore.fulfilled, (state, action) => {
                // state.isLoading = false;
                // state.error = null;
                state.items.push(...action.payload);
                if (action.payload.length < CARD_LIMIT) {
                    state.isOver = true
                }
            })
            // .addCase(fetchMore.rejected, handleRejected)
            .addCase(toggleFollowing.pending, handlePending)
            .addCase(toggleFollowing.fulfilled, (state, action) => {
                const index = state.items.findIndex(user => user.id === action.payload.id);
                state.items.splice(index, 1, action.payload)
            })


           }
})

export const { setFilter, incrementPage } = usersSlice.actions

export default usersSlice.reducer