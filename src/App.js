import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Navbar';
import Login from './Login';
import Card from './Card';
import PlaceDetail from './PlaceDetail';
import places from './Data/Places';
import PlaceModal from './PlaceModal';
import FilterSidebar from './FilterSidebar';
import './App.css';

const RequireAuth = ({ userName, children }) => {
  const location = useLocation();
  if (!userName && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Layout = ({ userName, onPostClick, children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isDetailPage = location.pathname.startsWith('/place/');

  return (
    <>
      {!isLoginPage && !isDetailPage && <Navbar userName={userName} onPostClick={onPostClick} />}
      <div style={{ paddingTop: !isLoginPage && !isDetailPage ? '60px' : '0' }}>
        {children}
      </div>
    </>
  );
};

const App = () => {
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');
  const [allPlaces, setAllPlaces] = useState([]);
  const [selectedStates, setSelectedStates] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [filterStates, setFilterStates] = useState(["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Kerala"]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Initial load
  useEffect(() => {
    setAllPlaces(places);
  }, []);

  // Save userName to localStorage
  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    } else {
      localStorage.removeItem('userName');
    }
  }, [userName]);

  const handleAddOrUpdatePlace = (place) => {
    const isEditing = allPlaces.some((p) => p.id === place.id);
    const normalizedState = place.state.trim().toLowerCase();
    const formattedState = normalizedState
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const newPlace = isEditing
      ? { ...place, state: formattedState }
      : { ...place, id: Date.now(), isUser: true, state: formattedState };

    setAllPlaces((prev) =>
      isEditing ? prev.map((p) => (p.id === place.id ? newPlace : p)) : [...prev, newPlace]
    );

    // Update filterStates list
    setFilterStates((prevStates) => {
      if (!prevStates.map(s => s.toLowerCase()).includes(formattedState.toLowerCase())) {
        return [...prevStates, formattedState];
      }
      return prevStates;
    });

    setShowModal(false);
    setEditingPlace(null);

    setTimeout(() => {
      toast.success(isEditing ? 'Place updated successfully!' : 'Place added successfully!');
    }, 100);
  };

  const handleEdit = (place) => {
    setEditingPlace(place);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setAllPlaces((prev) => prev.filter((p) => p.id !== id));
    toast.success('Place deleted successfully!');
  };

  const filteredPlaces = selectedStates === "All"
    ? allPlaces
    : allPlaces.filter((place) => selectedStates.includes(place.state));

  return (
    <Router>
      <Layout userName={userName} onPostClick={() => setShowModal(true)}>
        <Routes>
          <Route path="/login" element={<Login setUserName={setUserName} />} />
          <Route path="/" element={userName ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
          <Route
            path="/home"
            element={
              <RequireAuth userName={userName}>
                <div style={{ display: 'flex' }}>
  <FilterSidebar 
    onSelectStates={setSelectedStates} 
    stateOptions={filterStates} 
    isSidebarOpen={isSidebarOpen}
    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
  />

  <div className="card-container" 
    style={{ 
      flex: 1, 
      padding: '20px', 
      transition: 'margin-left 0.3s ease', 
      marginLeft: isSidebarOpen ? '0' : '0'  
    }}>
    {filteredPlaces.map((place) => (
      <Card
        key={place.id}
        place={place}
        onEdit={() => handleEdit(place)}
        onDelete={() => handleDelete(place.id)}
      />
    ))}
  </div>
</div>
              </RequireAuth>
            }
          />
          <Route
            path="/place/:id"
            element={
              <RequireAuth userName={userName}>
                <PlaceDetail allPlaces={allPlaces} />
              </RequireAuth>
            }
          />
        </Routes>

        {showModal && (
          <PlaceModal
            initialData={editingPlace}
            onClose={() => {
              setShowModal(false);
              setEditingPlace(null);
            }}
            onSave={handleAddOrUpdatePlace}
            existingStates={filterStates}
          />
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Layout>
    </Router>
  );
};

export default App;
