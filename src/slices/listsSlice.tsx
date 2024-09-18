import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Define the List type
interface List {
  id: string;
  title: string;
  cardIds: string[];
}

// Define the initial state as an array of lists
interface ListsState {
  lists: List[];
}

const initialState: ListsState = {
  lists: []
};

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    // Action to add a new list
    addList: (state, action: PayloadAction<string>) => {
      const newList: List = {
        id: uuidv4(),
        title: action.payload,
        cardIds: []
      };
      state.lists.push(newList);
    },
    
    // Action to delete a list by ID
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
    
    // Action to add a card ID to a list
    addCardToList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
      const { listId, cardId } = action.payload;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds.push(cardId);
      }
    },
    
    // Action to clear/reset the board
    clearBoard: (state) => {
      state.lists = [];
    }
  }
});

export const { addList, deleteList, addCardToList, clearBoard } = listsSlice.actions;

export default listsSlice.reducer;