# Pet-360

This is a simple React-based application that allows users to schedule and view appointments. The application includes a table for listing appointments and a modal for scheduling new ones.

## Features
- Add appointments via a modal form.
- View appointments in a tabular format.
- Dynamically styled status indicators for appointments (e.g., "In Progress" and "Completed").

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn** (package managers)

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd consultations-application
   ```

2. **Install Dependencies**
   Install the required packages using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**
   Run the following command to start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`.

4. **Build for Production** (Optional)
   If you want to create a production build, use the following command:
   ```bash
   npm run build
   # or
   yarn build
   ```

---

## Usage

1. Open the application in your browser at `http://localhost:5173`.
2. Click the **Schedule Now** button to open the modal form.
3. Fill in the form fields to add an appointment:
   - Time Slot (date and time)
   - Pet Info
   - Pet Parent
   - Doctor
   - Status
4. Submit the form to add the appointment to the table.
5. View all scheduled appointments in the table.

---

## Project Structure
```
consultations-application/
├── public/
├── src/
│   ├── components/
│   │   ├── AppointmentModal.js  # Modal component for adding appointments
│   │   ├── Table.js             # Table component for displaying appointments
│   ├── data/
│   │   ├── data.json            # Sample data for initial appointments
│   ├── App.js                   # Root application component
│   ├── index.js                 # Entry point of the app
├── package.json                 # Dependencies and scripts
```

## Dependencies
- **React**: Frontend library for building the UI.
- **Tailwind CSS**: For styling components.

---

## Future Enhancements
- Integrate a backend for persistent data storage.
- Add search and filter functionality for appointments.
- Implement authentication for secure access.

---

## License
This project is licensed under the MIT License.

---

## Contributors
- [Shauryaditya Bardhan](shauryadityab@gmail.com)

---

Feel free to customize the README as per your project's specifics and requirements.

