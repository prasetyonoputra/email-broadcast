import ButtonNavigate from "./ButtonNavigate";

function Sidebar() {
  return (
    <div
      style={{
        width: "15vw",
        height: "100vh",
        backgroundColor: "#D9D9D9",
        position: "fixed",
        top: "0",
        fontFamily: "sans-serif",
        color: "#715959"
      }}
    >
      <div style={{ display: "flex", height: "40px", alignItems: "center", justifyContent: "center" }}>
        <img
          style={{
            width: "20px",
            height: "20px",
            padding: "0px 10px 0px 10px",
          }}
        />
        BROADCASTER
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
