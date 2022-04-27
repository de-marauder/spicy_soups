import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import Site from './components/Site';
import ScrollToTop from './components/UI/utilities/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <ScrollToTop />
        <Site />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
