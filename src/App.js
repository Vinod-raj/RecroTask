import { Provider } from 'react-redux';
import './App.css';
import MainPost from './Components/Main/MainPost'
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <MainCards /> */}
        {/* <Main /> */}
        <MainPost />
      </div>
    </Provider>
    
  );
}

export default App;
