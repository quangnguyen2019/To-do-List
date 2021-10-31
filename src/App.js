import './App.scss';

import TodoList from 'components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className="h1-todos">todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
