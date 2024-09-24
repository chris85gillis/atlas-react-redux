import React from 'react';

interface DeleteCardButtonProps {
  onClick: () => void;
}

const DeleteCardButton: React.FC<DeleteCardButtonProps> = ({ onClick }) => {
  return (
    <button className="hidden group-hover/card:block" onClick={onClick}>
      <svg className="h-[20px] w-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00003c">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9L14.4 18H9.26L9 9M18 6V4.5C18 3.67 17.33 3 16.5 3H7.5C6.67 3 6 3.67 6 4.5V6M19.22 6C19.56 6.06 19.9 6.11 20.24 6.17M3.76 6.17C4.1 6.11 4.44 6.06 4.78 6M3.76 6.17A47.16 47.16 0 0 1 4.78 6M4.78 6A47.16 47.16 0 0 1 19.22 6" />
      </svg>
    </button>
  );
};

export default DeleteCardButton;