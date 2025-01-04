import { useEffect, useState } from "react";
import Table from "../components/Table";
import data from "../data.json";
import AppointmentModal from "../components/AppointmentModal";

function Consultations() {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    timeSlot: "",
    petInfo: "",
    petParent: "",
    doctor: "",
    purpose: "",
    status: "",
  });

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Load data initially
  useEffect(() => {
    setAppointments(data);
  }, []);

  // Handle form submission
  const handleSubmit = (formData) => {
    if (
      !formData.petInfo ||
      !formData.petParent ||
      !formData.doctor ||
      !formData.status
    ) {
      alert("All fields are required!");
      return;
    }

    // Generate a new unique ID
    const newId = appointments.length
      ? appointments[appointments.length - 1].id + 1
      : 1;

    // Add the new appointment
    const updatedAppointments = [
      ...appointments,
      { ...formData, id: newId },
    ];
    setAppointments(updatedAppointments);

    // Reset the form and close the modal
    setNewAppointment({
      timeSlot: "",
      petInfo: "",
      petParent: "",
      doctor: "",
      purpose: "",
      status: "",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-semibold uppercase">Consultations</h1>
        <button
          className="bg-blue-500 rounded-3xl px-4 py-2 text-white text-sm"
          onClick={() => setIsModalOpen(true)}
        >
          Schedule Now
        </button>
      </div>
      {isModalOpen && (
        <AppointmentModal
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
      {/* Table to display appointments */}
      <Table data={appointments} />
    </div>
  );
}

export default Consultations;
