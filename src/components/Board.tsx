import React, { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import NewCardForm from './NewCardForm';
import { RootState } from '../store';
import Card from './Card';
import { removeCardFromList, addCardToList } from '../slices/listsSlice';

const Board = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const cards = useSelector((state: RootState) => state.lists.cards);
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState<string | null>(null); // Track the active card ID

  const handleDragStart = (event) => {
    setActiveId(event.active.id); // Set the active card ID when dragging starts
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      // If the card wasn't dropped over any list, do nothing
      setActiveId(null);
      return;
    }

    const sourceListId = active.data.current.listId;
    const destinationListId = over.id;

    if (sourceListId !== destinationListId) {
      // Move the card from the source list to the destination list
      dispatch(removeCardFromList({ listId: sourceListId, cardId: active.id }));
      dispatch(addCardToList({ listId: destinationListId, cardId: active.id, title: cards[active.id].title, description: cards[active.id].description }));
    }

    setActiveId(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-screen overflow-x-scroll text-center items-center justify-center">
        <div className="flex h-full space-x-4">
          {lists.map((list) => (
            <List key={list.id} listId={list.id} title={list.title} cards={list.cardIds} />
          ))}
          <NewCardForm />
        </div>
      </div>

      {/* Use DragOverlay to show the card while dragging */}
      <DragOverlay>
        {activeId ? (
          <Card
            cardId={activeId}
            title={cards[activeId].title}
            description={cards[activeId].description}
            listId="exampleListId"
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;