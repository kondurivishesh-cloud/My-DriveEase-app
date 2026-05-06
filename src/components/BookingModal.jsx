import React, { useState, useEffect } from "react";
import { bookingTypes } from "../data/drivers";
import { getBadgeStyle } from "../utils/helpers";

const BookingModal = ({ driver, onClose, onConfirm }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1); // 1 = select type, 2 = details

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleNext = () => {
    if (selectedType) setStep(2);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm({ driver, bookingType: selectedType, date: selectedDate, notes });
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content bg-slate-900 border border-white/10 rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Handle bar (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-5 border-b border-white/5">
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              Book a Driver
            </h2>
            <p className="text-slate-500 text-sm">Step {step} of 2</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center justify-center text-lg"
          >
            ✕
          </button>
        </div>

        {/* Driver summary */}
        <div className="flex items-center gap-4 mx-6 mt-5 p-4 glass-card rounded-2xl">
          <img
            src={driver.photo}
            alt={driver.name}
            className="w-14 h-14 rounded-xl object-cover border border-white/10"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display font-semibold text-white">
                {driver.name}
              </h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border ${getBadgeStyle(
                  driver.badge
                )}`}
              >
                {driver.badge}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
              <span className="text-yellow-400">★ {driver.rating}</span>
              <span>·</span>
              <span>{driver.experience} yrs exp</span>
              <span>·</span>
              <span>{driver.trips} trips</span>
            </div>
          </div>
        </div>

        {/* Step 1: Select booking type */}
        {step === 1 && (
          <div className="px-6 py-5">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">
              Select Booking Type
            </h3>
            <div className="space-y-3">
              {bookingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left p-4 rounded-2xl border bg-gradient-to-r transition-all duration-200 ${
                    selectedType?.id === type.id
                      ? type.color + " scale-[1.01] shadow-lg"
                      : "bg-white/3 border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <div className="font-semibold text-white">
                          {type.label}
                        </div>
                        <div className="text-slate-400 text-sm">
                          {type.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-500">
                        {type.duration}
                      </span>
                      {selectedType?.id === type.id && (
                        <span className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs">
                          ✓
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!selectedType}
              className={`w-full mt-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                selectedType
                  ? "btn-primary shadow-lg shadow-brand-500/20"
                  : "bg-white/5 text-slate-600 cursor-not-allowed border border-white/5"
              }`}
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2: Date & Notes */}
        {step === 2 && (
          <div className="px-6 py-5">
            {/* Back */}
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1 text-slate-400 hover:text-white text-sm mb-5 transition-colors"
            >
              ← Back
            </button>

            {/* Selected type recap */}
            <div
              className={`flex items-center gap-3 p-3 rounded-xl border bg-gradient-to-r mb-5 ${selectedType?.color}`}
            >
              <span className="text-xl">{selectedType?.icon}</span>
              <div>
                <div className="font-semibold text-white text-sm">
                  {selectedType?.label}
                </div>
                <div className="text-slate-400 text-xs">
                  {selectedType?.description}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 font-medium mb-2">
                  Select Date *
                </label>
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="input-field w-full"
                  style={{ colorScheme: "dark" }}
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 font-medium mb-2">
                  Pickup Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your pickup location..."
                  className="input-field w-full"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 font-medium mb-2">
                  Additional Notes{" "}
                  <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Any special instructions for the driver..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-field w-full resize-none"
                />
              </div>
            </div>

            {/* Availability check */}
            <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2">
              <span className="text-emerald-400 text-lg">✓</span>
              <div>
                <p className="text-emerald-300 text-sm font-medium">
                  Driver Available
                </p>
                <p className="text-slate-500 text-xs">
                  Available on: {driver.availability.join(", ")}
                </p>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              disabled={!selectedDate}
              className={`w-full mt-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                selectedDate
                  ? "btn-primary shadow-lg shadow-brand-500/20"
                  : "bg-white/5 text-slate-600 cursor-not-allowed border border-white/5"
              }`}
            >
              Confirm Booking →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
