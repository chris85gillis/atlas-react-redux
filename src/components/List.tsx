import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteListButton from './DeleteListButton';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { deleteList } from '../slices/listsSlice';

interface ListProps {
  listId: string;
  title: string;
  cards: { title: string; description: string }[];
}

const List: React.FC<ListProps> = ({ listId, title, cards }) => {
  const dispatch = useDispatch();

  const handleDeleteList = () => {
    dispatch(deleteList(listId));
  };

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton onClick={handleDeleteList} />
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      <NewCardForm />
    </div>
  );
};

export default List;