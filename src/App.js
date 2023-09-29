import Profile from "./components/profile-component/Profile";
import Header from "./components/header-component/Header";
import Sidebar from "./components/sidebar-component/Sidebar";
import Devices from "./components/devices-component/Devices";
import Message from "./components/message-component/Message";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Profile />
      <Devices />
      <Message />
    </div>
  );
}

export default App;
