import ButtonNavigate from "./ButtonNavigate";

function Sidebar() {
  return (
    <div
      style={{
        width: "20vw",
        height: "100vh",
        backgroundColor: "white",
        position: "fixed",
        top: "0",
      }}
    >
      <div style={{ display: "flex", height: "40px", alignItems: "center" }}>
        WA SENDER
      </div>
      <div>
        <ButtonNavigate text="Profile" />
        <ButtonNavigate text="Devices" />
        <ButtonNavigate text="Send Message" />
        <ButtonNavigate text="Autoreply" />
        <ButtonNavigate text="Outbox" />
        <ButtonNavigate text="Reccuring" />
        <ButtonNavigate text="Phonebooks" />
        <ButtonNavigate text="Templates" />
        <ButtonNavigate text="Captures" />
        <ButtonNavigate text="Messages" />
        <ButtonNavigate text="Subscribers" />
        <ButtonNavigate text="REST API" />
      </div>
    </div>
  );
}

export default Sidebar;
