import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

interface ShoppingListItem {
  id: string;
  name: string;
}

export const listItemsAdapter = createEntityAdapter<ShoppingListItem>({
  selectId: item => item.id,
});

const listItemsSlice = createSlice({
  name: 'listItems',
  initialState: listItemsAdapter.getInitialState(),
  reducers: {
    addItem: listItemsAdapter.addOne,
  },
});

export const {addItem} = listItemsSlice.actions;
export default listItemsSlice.reducer;
