import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

interface Card {
  id: string;
  title: string;
  description: string;
}

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface ListsState {
  lists: List[];
  cards: { [key: string]: Card };
}

const initialState: ListsState = {
  lists: [],
  cards: {}
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      const newList: List = {
        id: nanoid(),
        title: action.payload,
        cardIds: []
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
    addCardToList: (state, action: PayloadAction<{ listId: string; cardId: string; title: string; description: string }>) => {
      const { listId, cardId, title, description } = action.payload;

      // Add card to the global cards object
      state.cards[cardId] = { id: cardId, title, description };

      // Find the list and add the card ID to the list's cardIds array
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds.push(cardId);
      }
    },
    removeCardFromList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
      const { listId, cardId } = action.payload;

      // Remove the card from the list's cardIds array
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.cardIds = list.cardIds.filter(id => id !== cardId);
      }

      // Remove the card data from the cards object
      delete state.cards[cardId];
    },
    moveCard: (state, action: PayloadAction<{ fromListId: string; toListId: string; cardId: string }>) => {
      const { fromListId, toListId, cardId } = action.payload;

      // Remove the card from the source list
      const fromList = state.lists.find(list => list.id === fromListId);
      if (fromList) {
        fromList.cardIds = fromList.cardIds.filter(id => id !== cardId);
      }

      // Add the card to the destination list
      const toList = state.lists.find(list => list.id === toListId);
      if (toList) {
        toList.cardIds.push(cardId);
      }
    },
    clearBoard: (state) => {
      state.lists = [];
      state.cards = {};
    }
  }
});

export const { addList, deleteList, addCardToList, removeCardFromList, moveCard, clearBoard } = listsSlice.actions;

export default listsSlice.reducer;