import React from 'react';
import { useDispatch } from 'react-redux';
import { useDraggable } from '@dnd-kit/core';
import DeleteCardButton from './DeleteCardButton';
import { removeCardFromList } from '../slices/listsSlice';

interface CardProps {
  cardId: string;
  title: string;
  description: string;
  listId: string;
}

const Card: React.FC<CardProps> = ({ cardId, title, description, listId }) => {
  const dispatch = useDispatch();

  const handleDeleteCard = () => {
    console.log(`Deleting card with ID: ${cardId} from list: ${listId}`);
    dispatch(removeCardFromList({ listId, cardId }));
  };

  // Make the card draggable, but allow exceptions (delete button)
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: cardId,
    data: { listId },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue"
    >
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span {...listeners}>{title}</span> {/* Only make this span draggable */}
        <DeleteCardButton onClick={handleDeleteCard} />
      </h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;