import React from 'react';
import { useDispatch } from 'react-redux';
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
    dispatch(removeCardFromList({ listId, cardId }));
  };

  return (
    <div className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{title}</span>
        <DeleteCardButton onClick={handleDeleteCard} />
      </h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
};

export default Card;