import Header from './Header';
import Footer from './Footer';
import Board from './Board';

const App = () => {
  const lists = [
    { title: 'To Do', cards: [{ title: 'Task 1', description: 'Description 1' }, { title: 'Task 2', description: 'Description 2' }] },
    { title: 'In Progress', cards: [{ title: 'Task 3', description: 'Description 3' }] },
    { title: 'Done', cards: [{ title: 'Task 4', description: 'Description 4' }] }
  ];

  return (
    <div>
      <Header />
      <Board lists={lists} />
      <Footer />
    </div>
  );
};

export default App;