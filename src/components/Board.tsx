import React from 'react';
import { DndContext } from '@dnd-kit/core';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import NewCardForm from './NewCardForm';
import { RootState } from '../store';
import { moveCard } from '../slices/listsSlice';

const Board = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const dispatch = useDispatch();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const cardId = active.id;
    const fromListId = active.data.current.listId;
    const toListId = over.data.current.listId;

    if (fromListId !== toListId) {
      dispatch(moveCard({ fromListId, toListId, cardId }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-screen overflow-x-scroll text-center items-center justify-center">
        <div className="flex h-full space-x-4">
          {lists.map((list) => (
            <List key={list.id} listId={list.id} title={list.title} cards={list.cardIds} />
          ))}
          <NewCardForm />
        </div>
      </div>
    </DndContext>
  );
};

export default Board;