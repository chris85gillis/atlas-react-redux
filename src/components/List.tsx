import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { RootState } from '../store'; // Ensure this points to your Redux state

interface ListProps {
  listId: string;
  title: string;
}

const List: React.FC<ListProps> = ({ listId, title }) => {
  const cards = useSelector((state: RootState) => state.lists.cards); // Get all cards from Redux store
  const list = useSelector((state: RootState) => state.lists.lists.find(list => list.id === listId));

  return (
    <div className="group/list h-full min-w-96 p-4">
      <h3>{title}</h3>
      {list?.cardIds.map((cardId) => {
        const card = cards[cardId]; // Find the card by ID
        return (
          <Card key={cardId} cardId={cardId} title={card.title} description={card.description} listId={listId} />
        );
      })}
      <NewCardForm listId={listId} />
    </div>
  );
};

export default List;