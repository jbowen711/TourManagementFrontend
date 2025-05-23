import React, { useState } from 'react';
import { User, CreditCard, Clock, Settings, LogOut } from 'lucide-react';
import { Header } from '../components/Header'; // Import the Header component
import { Footer } from '../components/Footer';
import CardDetails from '../components/CardDetails';

const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  phone: "+1 234 567 8900",
  address: "123 Main St, New York, NY 10001",
};

const mockBookings = [
  {
    id: 1,
    place: "Luxury Hotel & Spa",
    date: "Mar 15 - Mar 20, 2024",
    status: "Upcoming",
    price: 1495,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  // Add more mock bookings as needed
];



export const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUser);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Handle save to backend
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                    disabled={!isEditing}
                    className="w-full p-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Your Bookings</h3>
            <div className="space-y-4">
              {mockBookings.map((booking) => (
                <div key={booking.id} className="flex items-center p-4 border rounded-lg">
                  <img
                    src={booking.image}
                    alt={booking.place}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{booking.place}</h4>
                    <p className="text-gray-600">{booking.date}</p>
                    <span className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded mt-2">
                      {booking.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${booking.price}</p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm mt-2">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Payment Methods</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="text-gray-400 mr-3" size={24} />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/24</p>
                  </div>
                </div>
                <button
                  onClick = {() => setShowCardDetails(true)}
                  className="text-blue-600 hover:text-blue-700">
                  Edit</button>
              </div>
              <button 
              onClick = {() => setShowCardDetails(true)}
              className="w-full p-4 border rounded-lg text-center text-blue-600 hover:bg-blue-50">
                + Add New Card
              </button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Account Settings</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Email Notifications</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 mr-2" />
                    Booking confirmations
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 mr-2" />
                    Special offers
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600 mr-2" />
                    Travel tips
                  </label>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Account Security</h4>
                <button className="text-blue-600 hover:text-blue-700">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Added Header here */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-20 h-20 rounded-full mb-3"
                />
                <h2 className="font-semibold">{userData.name}</h2>
                <p className="text-sm text-gray-600">{userData.email}</p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg ${
                    activeTab === 'profile'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User size={20} className="mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg ${
                    activeTab === 'bookings'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Clock size={20} className="mr-3" />
                  Bookings
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg ${
                    activeTab === 'payment'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard size={20} className="mr-3" />
                  Payment
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg ${
                    activeTab === 'settings'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings size={20} className="mr-3" />
                  Settings
                </button>
                <button
                  onClick={() => alert('Logged out')}
                  className="w-full flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <LogOut size={20} className="mr-3" />
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
      <Footer />


      <CardDetails
          show={showCardDetails}
          handleClose={() => setShowCardDetails(false)}
          handleConfirm={() => {
          setShowCardDetails(false);
          }}
      />
    </div>
  );
};
