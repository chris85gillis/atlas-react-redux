import DeleteListButton from './DeleteListButton';
import Card from './Card';
import NewCardForm from './NewCardForm';

const List = ({ title, cards }: { title: string; cards: { title: string; description: string }[] }) => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      <NewCardForm />
    </div>
  );
};

export default List;