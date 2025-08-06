import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Cases from './components/Cases/Cases';
import OccurrenceBook from './components/OccurrenceBook/OccurrenceBook';
import AddCaseModal from './components/AddCaseModal/AddCaseModal';
import AddOBModal from './components/AddOBModal/AddOBModal';
import LicensePlateModal from './components/LicensePlateModal/LicensePlateModal';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isAddCaseModalOpen, setIsAddCaseModalOpen] = useState(false);
  const [isAddOBModalOpen, setIsAddOBModalOpen] = useState(false);
  const [isLicensePlateModalOpen, setIsLicensePlateModalOpen] = useState(false);
  const [cases, setCases] = useState([
    { id: 'CASE-2024-001', title: 'Burglary at 5th Ave', officer: 'Officer Jane', status: 'In Progress', priority: 'High', lastUpdate: '2025-07-28' },
    { id: 'CASE-2024-002', title: 'Missing Person', officer: 'Officer Lee', status: 'Open', priority: 'Medium', lastUpdate: '2025-07-27' },
    { id: 'CASE-2024-003', title: 'Assault Investigation', officer: 'Officer Smith', status: 'Closed', priority: 'Low', lastUpdate: '2025-07-27' },
    { id: 'CASE-2024-004', title: 'Vandalism Report', officer: 'Officer Kim', status: 'Closed', priority: 'Low', lastUpdate: '2025-07-26' },
    { id: 'CASE-2024-005', title: 'Robbery Case', officer: 'Officer Patel', status: 'Closed', priority: 'Low', lastUpdate: '2025-07-25' }
  ]);

  const [licensePlates, setLicensePlates] = useState([
    {
      id: 'LP-1',
      plateNumber: 'ABC123',
      ownerName: 'John Smith',
      fatherName: 'Robert Smith',
      motherName: 'Mary Smith',
      idNumber: 'ID123456789',
      passportNumber: 'P987654321',
      ownerImage: null,
      dateAdded: '2025-01-15'
    }
  ]);

  const [obEntries, setOBEntries] = useState([
    {
      id: 'OB-2024-001',
      obNumber: 'OB/2024/0001',
      dateTime: '2025-01-15 14:30',
      type: 'Incident',
      description: 'Traffic accident at Main Street intersection',
      reportedBy: 'John Doe',
      recordingOfficer: 'Officer Smith',
      location: 'Main Street & 5th Ave',
      status: 'Under Investigation'
    }
  ]);

  const handleAddCase = (newCase) => {
    setCases(prev => [newCase, ...prev]);
  };

  const handleUpdateCase = (updatedCase) => {
    setCases(prev => prev.map(c => c.id === updatedCase.id ? { ...updatedCase, lastUpdate: new Date().toISOString().split('T')[0] } : c));
  };

  const handleDeleteCase = (caseId) => {
    setCases(prev => prev.filter(c => c.id !== caseId));
  };

  const handleAddOB = (newOBEntry) => {
    setOBEntries(prev => [newOBEntry, ...prev]);
  };

  const handleUpdateOB = (updatedOB) => {
    setOBEntries(prev => prev.map(ob => ob.id === updatedOB.id ? updatedOB : ob));
  };

  const handleDeleteOB = (obId) => {
    setOBEntries(prev => prev.filter(ob => ob.id !== obId));
  };

  const handleAddPlate = (newPlate) => {
    setLicensePlates(prev => [newPlate, ...prev]);
  };

  const handleAddCaseClick = () => {
    setIsAddCaseModalOpen(true);
  };

  const handleAddOBClick = () => {
    setIsAddOBModalOpen(true);
  };

  const handleLicensePlateClick = () => {
    setIsLicensePlateModalOpen(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onAddCaseClick={handleAddCaseClick} onLicensePlateClick={handleLicensePlateClick} cases={cases} />;
      case 'cases':
        return <Cases onAddCaseClick={handleAddCaseClick} cases={cases} onUpdateCase={handleUpdateCase} onDeleteCase={handleDeleteCase} />;
      case 'occurrence-book':
        return <OccurrenceBook onAddOBClick={handleAddOBClick} obEntries={obEntries} onUpdateOB={handleUpdateOB} onDeleteOB={handleDeleteOB} />;
      case 'profile':
      case 'message':
      case 'evidence':
      case 'media':
      case 'updates':
      case 'entry':
        return (
          <div style={{ padding: '30px', color: '#ffffff' }}>
            <h1 style={{ textTransform: 'capitalize' }}>{activeSection}</h1>
            <p>This section is coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        {renderContent()}
      </div>
      <AddCaseModal 
        isOpen={isAddCaseModalOpen}
        onClose={() => setIsAddCaseModalOpen(false)}
        onAddCase={handleAddCase}
      />
      <AddOBModal 
        isOpen={isAddOBModalOpen}
        onClose={() => setIsAddOBModalOpen(false)}
        onAddOB={handleAddOB}
      />
      <LicensePlateModal 
        isOpen={isLicensePlateModalOpen}
        onClose={() => setIsLicensePlateModalOpen(false)}
        onAddPlate={handleAddPlate}
        onSearchPlate={() => {}}
        plates={licensePlates}
      />
    </div>
  );
}

export default App;