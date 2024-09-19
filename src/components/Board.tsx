import List from './List';
import NewCardForm from './NewCardForm';

const Board = ({ lists }: { lists: { title: string; cards: { title: string; description: string }[] }[] }) => {
  return (
    <div className="flex h-screen w-screen overflow-x-scroll text-center items-center justify-center">
      <div className="flex h-full space-x-4">
        {lists.map((list, index) => (
          <List key={index} title={list.title} cards={list.cards} />
        ))}
        <NewCardForm />
      </div>
    </div>
  );
};

export default Board;