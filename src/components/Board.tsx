import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import NewCardForm from './NewCardForm';
import { RootState } from '../store';

const Board = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="flex h-screen w-screen overflow-x-scroll text-center items-center justify-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => (
          <List key={list.id} listId={list.id} title={list.title} cards={list.cardIds} />
        ))}
        <NewCardForm />
      </div>
    </div>
  );
};

export default Board;