import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Consultations from './pages/Consultations';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Consultations />} />
          {/* Add more routes if needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
