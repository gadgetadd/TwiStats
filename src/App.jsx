import { ToastContainer } from 'react-toastify';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Tweets from './pages/Tweets';
import Home from './pages/Home';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
