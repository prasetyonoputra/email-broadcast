import Profile from "./components/profile-component/Profile";
import Header from "./components/header-component/Header";
import Sidebar from "./components/sidebar-component/Sidebar";
import Devices from "./components/devices-component/Devices";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Profile />
      <Devices />
    </div>
  );
}

export default App;
