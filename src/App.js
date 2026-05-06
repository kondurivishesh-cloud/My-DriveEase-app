import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BookingModal from "./components/BookingModal";
import ConfirmationScreen from "./components/ConfirmationScreen";
import Footer from "./components/Footer";

function App() {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const handleBook = (driver) => {
    setSelectedDriver(driver);
  };

  const handleConfirm = (bookingDetails) => {
    setSelectedDriver(null);
    setConfirmedBooking(bookingDetails);
  };

  const handleCloseConfirmation = () => {
    setConfirmedBooking(null);
  };

  const handleCloseModal = () => {
    setSelectedDriver(null);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <HomePage onBook={handleBook} />
      <Footer />

      {/* Booking Modal */}
      {selectedDriver && (
        <BookingModal
          driver={selectedDriver}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      )}

      {/* Confirmation Screen */}
      {confirmedBooking && (
        <ConfirmationScreen
          booking={confirmedBooking}
          onClose={handleCloseConfirmation}
        />
      )}
    </div>
  );
}

export default App;
