import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

interface ShoppingListItem {
  id: string;
  name: string;
  isChecked: boolean;
}

export const listItemsAdapter = createEntityAdapter<ShoppingListItem>({
  selectId: item => item.id,
});

const listItemsSlice = createSlice({
  name: 'listItems',
  initialState: listItemsAdapter.getInitialState(),
  reducers: {
    addItem: listItemsAdapter.addOne,
    removeItem: listItemsAdapter.removeOne,
  },
});

export const {addItem, removeItem} = listItemsSlice.actions;
export default listItemsSlice.reducer;
