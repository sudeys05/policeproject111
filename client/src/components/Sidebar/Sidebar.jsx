import React from 'react';
import { 
  Home, 
  FileText, 
  UserCheck, 
  User, 
  MessageSquare, 
  Camera, 
  Upload, 
  Edit3 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'cases', label: 'Cases', icon: FileText },
    { id: 'occurrence-book', label: 'Occurrence Book (OB)', icon: UserCheck },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'message', label: 'Message', icon: MessageSquare },
    { id: 'evidence', label: 'Evidence', icon: Camera },
    { id: 'media', label: 'Media', icon: Upload },
    { id: 'updates', label: 'Updates', icon: Edit3 },
    { id: 'entry', label: 'Entry', icon: FileText }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Home className="logo-icon" />
          <span>Police Portal</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <IconComponent className="nav-icon" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;