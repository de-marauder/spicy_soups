import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import Site from './components/Site';


function App() {
  return (
    <Provider store={store} >
      <BrowserRouter 
      basename='spicy_soups'
      >
        <Site />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
