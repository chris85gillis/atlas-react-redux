import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, clearBoard } from '../slices/listsSlice';

const Footer: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      dispatch(addList(title));
      setTitle(''); // Clear input after adding
    }
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleAddList}>
        <input
          type="text"
          placeholder="List title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-6 py-4 mr-4 text-xl font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => dispatch(clearBoard())}
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
};

export default Footer;