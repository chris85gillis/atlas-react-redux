import React from 'react';

interface DeleteListButtonProps {
  onClick: () => void;
}

const DeleteListButton: React.FC<DeleteListButtonProps> = ({ onClick }) => {
  return (
    <button className="h-[30px]" onClick={onClick}>
      <svg className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z" />
      </svg>
    </button>
  );
};

export default DeleteListButton;