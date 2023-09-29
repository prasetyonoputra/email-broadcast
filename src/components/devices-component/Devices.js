function Devices(params) {
  const styleBoxTop = {
    backgroundColor: "white",
    display: "flex",
    padding: "20px",
    width: "20%"
  };

  return (
    <div
      id="divDevices"
      style={{
        margin: "20px 20px 20px 21vw",
        display: "flex",
        padding: "30px",
        justifyContent: "space-around",
        display: "none"
      }}
    >
      <div style={styleBoxTop}>
        <div>
          1 <br />
          Total Devices
        </div>
        <div>
          <img style={{ height: "46px", width: "46px" }} />
        </div>
      </div>
      <div style={styleBoxTop}>
        <div>
          1 <br />
          Total Devices
        </div>
        <div>
          <img style={{ height: "46px", width: "46px" }} />
        </div>
      </div>
      <div style={styleBoxTop}>
        <div>
          1 <br />
          Total Devices
        </div>
        <div>
          <img style={{ height: "46px", width: "46px" }} />
        </div>
      </div>
      <div style={styleBoxTop}>
        <div>
          1 <br />
          Total Devices
        </div>
        <div>
          <img style={{ height: "46px", width: "46px" }} />
        </div>
      </div>
    </div>
  );
}

export default Devices;
