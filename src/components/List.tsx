import React from 'react';
import { useSelector } from 'react-redux';
import { useDroppable } from '@dnd-kit/core';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { RootState } from '../store';
import DeleteListButton from './DeleteListButton';
import { useDispatch } from 'react-redux';
import { deleteList } from '../slices/listsSlice';

interface ListProps {
  listId: string;
  title: string;
}

const List: React.FC<ListProps> = ({ listId, title }) => {
  const cards = useSelector((state: RootState) => state.lists.cards);
  const list = useSelector((state: RootState) => state.lists.lists.find(list => list.id === listId));
  const dispatch = useDispatch();

  // Set up droppable behavior for the list
  const { setNodeRef } = useDroppable({
    id: listId,
    data: { listId }
  });

  const handleDeleteList = () => {
    dispatch(deleteList(listId));
  };

  return (
    <div ref={setNodeRef} className="group/list h-full min-w-96 p-4"> {/* Make the list droppable */}
      <DeleteListButton onClick={handleDeleteList} />
      <h3>{title}</h3>
      {list?.cardIds.map((cardId) => {
        const card = cards[cardId];
        return (
          <Card key={cardId} cardId={cardId} title={card.title} description={card.description} listId={listId} />
        );
      })}
      <NewCardForm listId={listId} />
    </div>
  );
};

export default List;