import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useMainActions } from './hooks/useMainActions';
import Main from './containers/Main/Main';
import Favorites from './containers/Favorites/Favorites';
import TopNavigation from './components/Navigation/TopNavigation/TopNavigation';

const App: FC = () => {
  const { fetchPhotoCollection } = useMainActions();
  const routes = (
    <Routes>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  useEffect(() => {
    fetchPhotoCollection();
  }, []);

  return (
    <div className="App">
      <TopNavigation />
      {routes}
    </div>
  );
};

export default App;
