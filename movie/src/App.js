import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<ListPage />} />
            <Route path='/details/:movieId' element={<DetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
