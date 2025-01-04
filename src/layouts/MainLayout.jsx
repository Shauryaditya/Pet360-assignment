import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
// import './Layout.css';

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full overflow-hidden">
        <Navbar />
        <div className="">
          {children}
        </div>
      </div> 
    </div>
  );
}

export default MainLayout;
