import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { VehicleList } from './pages/VehicleList';
import { EquipmentCheck } from './pages/EquipmentCheck';
import { PersonnelManagement } from './pages/PersonnelManagement';
import { EquipmentManagement } from './pages/EquipmentManagement';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<VehicleList />} />
            <Route path="/vehicle/:vehicleId" element={<EquipmentCheck />} />
            <Route path="/personnel" element={<PersonnelManagement />} />
            <Route path="/equipment-management" element={<EquipmentManagement />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
