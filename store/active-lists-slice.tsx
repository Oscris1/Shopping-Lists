import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

interface ListInterface {
  id: string;
  name: string;
  listItems: string[];
  isArchived: boolean;
  createdAt: number;
}

export const listsAdapter = createEntityAdapter<ListInterface>({
  selectId: list => list.id,
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});

const activeListsSlice = createSlice({
  name: 'activeLists',
  initialState: listsAdapter.getInitialState(),
  reducers: {
    addList: listsAdapter.addOne,

    ArchiveList(state, {payload}) {
      const newPayload = {
        id: payload,
        changes: {isArchived: true},
      };
      listsAdapter.updateOne(state, newPayload);
    },

    AddListItem(state, {payload}) {
      const newState = state.entities[payload.id]?.listItems;
      newState?.push(payload.item);
      const newPayload = {
        id: payload.id,
        changes: {listItems: newState},
      };
      listsAdapter.updateOne(state, newPayload);
    },

    removeListItem(state, {payload}) {
      const newList = state.entities[payload.id]?.listItems.filter(
        item => item !== payload.item,
      );
      const newPayload = {
        id: payload.id,
        changes: {listItems: newList},
      };
      listsAdapter.updateOne(state, newPayload);
    },
  },
});

export const {addList, AddListItem, removeListItem, ArchiveList} =
  activeListsSlice.actions;
export default activeListsSlice.reducer;
