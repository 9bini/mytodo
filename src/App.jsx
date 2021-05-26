import Form from './Form';
import Header from './Header';
import List from './List';
import TodoStore from './TodoStore';
import './App.css';
const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
};
export default App;
