import React, { useState } from "react";

const AppointmentModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    timeSlot: "",
    petInfo: "",
    petParent: "",
    doctor: "",
    purpose: "",
    status: "In Progress",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      timeSlot: `${e.target.value} ${formData.timeSlot.split(' ')[1] || ""}`,
    });
  };

  const handleTimeChange = (e) => {
    setFormData({
      ...formData,
      timeSlot: `${formData.timeSlot.split(' ')[0] || ""} ${e.target.value}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-lg text-sm">
        <div className="flex justify-between border-b p-2 ">
          <p className="text-lg font-semibold">Schedule Appointment</p>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#10005;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
            {/* Pet Info */}
            <div>
              <label className="block text-sm font-medium">Pet Info</label>
              <input
                type="text"
                name="petInfo"
                value={formData.petInfo}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Pet Parent */}
            <div>
              <label className="block text-sm font-medium">Pet Parent</label>
              <input
                type="text"
                name="petParent"
                value={formData.petParent}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium">Appointment Date</label>
              <input
                type="date"
                name="timeSlot"
                value={formData.timeSlot.split(" ")[0] || ""}
                onChange={handleDateChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Time Picker */}
            <div>
              <label className="block text-sm font-medium">Appointment Time</label>
              <input
                type="time"
                value={formData.timeSlot.split(" ")[1] || ""}
                onChange={handleTimeChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-sm font-medium">Doctor</label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Reason for Visit */}
            <div>
              <label className="block text-sm font-medium">Reason for Visit</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Reason</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Checkup">Checkup</option>
                <option value="Surgery">Surgery</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col-span-2 ">
                <label className="block text-sm font-medium">Primary Complaint <span className="text-xs font-light">(Optional)</span></label>            
                <textarea className="w-full border h-20" name="" id=""></textarea>
            </div>
          </div>

          <div className="flex justify-center my-4">

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-3xl"
            >
              Schedule Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
