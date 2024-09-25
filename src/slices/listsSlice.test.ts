import { describe, it, expect } from 'vitest';
import listsReducer, {
  addList,
  deleteList,
  addCardToList,
  removeCardFromList,
  clearBoard,
} from './listsSlice';

describe('listsSlice', () => {
  const initialState = {
    lists: [],
    cards: {},
  };

  // Test for adding a list
  it('should handle adding a list', () => {
    const newState = listsReducer(initialState, addList('Test List'));
    expect(newState.lists.length).toBe(1);
    expect(newState.lists[0].title).toBe('Test List');
  });

  // Test for deleting a list
  it('should handle deleting a list', () => {
    const stateWithList = {
      lists: [{ id: '1', title: 'Test List', cardIds: [] }],
      cards: {},
    };
    const newState = listsReducer(stateWithList, deleteList('1'));
    expect(newState.lists.length).toBe(0);
  });

  // Test for adding a card to a list
  it('should handle adding a card to a list', () => {
    const stateWithList = {
      lists: [{ id: '1', title: 'Test List', cardIds: [] }],
      cards: {},
    };
    const newState = listsReducer(
      stateWithList,
      addCardToList({ listId: '1', cardId: '101', title: 'New Card', description: 'Card Description' })
    );
    expect(newState.lists[0].cardIds.length).toBe(1);
    expect(newState.cards['101']).toEqual({
      id: '101',
      title: 'New Card',
      description: 'Card Description',
    });
  });

  // Test for removing a card from a list
  it('should handle removing a card from a list', () => {
    const stateWithCard = {
      lists: [{ id: '1', title: 'Test List', cardIds: ['101'] }],
      cards: { '101': { id: '101', title: 'New Card', description: 'Card Description' } },
    };
    const newState = listsReducer(
      stateWithCard,
      removeCardFromList({ listId: '1', cardId: '101' })
    );
    expect(newState.lists[0].cardIds.length).toBe(0);
    expect(newState.cards['101']).toBeUndefined();
  });

  // Test for clearing the board
  it('should handle clearing the board', () => {
    const stateWithCards = {
      lists: [{ id: '1', title: 'Test List', cardIds: ['101'] }],
      cards: { '101': { id: '101', title: 'Card', description: 'Desc' } },
    };
    const newState = listsReducer(stateWithCards, clearBoard());
    expect(newState.lists.length).toBe(0);
    expect(newState.cards).toEqual({});
  });
});