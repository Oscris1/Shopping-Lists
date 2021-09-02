import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  nanoid,
} from '@reduxjs/toolkit';

interface Ingredients {
  id?: string;
  name?: string;
}

interface ListsInterface {
  id: string;
  name: string;
  ingredients: Ingredients[];
}

interface ActiveLists {
  lists: ListsInterface[];
}

const initialState = {
  lists: [],
} as ActiveLists;

const activeListsSlice = createSlice({
  name: 'activeLists',
  initialState,
  reducers: {
    addNewList: {
      reducer: (state, action: PayloadAction<ListsInterface>) => {
        //photo state
        state.lists.push(action.payload);
      },
      prepare: (name: string) => {
        const id = nanoid();
        return {payload: {id, name, ingredients: []}};
      },
    },
  },
  extraReducers: builder => {},
});

export const {addNewList} = activeListsSlice.actions;

export default activeListsSlice.reducer;
