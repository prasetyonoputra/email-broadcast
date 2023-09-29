function ButtonNavigate(params) {
  console.log(params);

  const arrayIdDiv = {
    Profile: "divProfile",
    Devices: "divDevices",
    "Send Message": "divSendMessage",
    Autoreply: "divAutoreply",
    Outbox: "divOutbox",
    Reccuring: "divReccuring",
    Phonebooks: "divPhonebooks",
    Templates: "divTemplates",
    Captures: "divCaptures",
    Messages: "divMessages",
    Subscribers: "divSubscribers",
    "REST API": "divRESTAPI",
  };

  function onClickHadler() {
    setNoneAllDivContent();
    switch (params.text) {
      case "Profile":
        document.getElementById("divProfile").style.display = "inline-flex";
        break;
      case "Devices":
        document.getElementById("divDevices").style.display = "flex";
        break;
        case "Send Message":
          document.getElementById("divSendMessage").style.display = "flex";
          break;

      default:
        break;
    }
  }

  function setNoneAllDivContent() {
    for (const key in arrayIdDiv) {
      if (arrayIdDiv.hasOwnProperty(key)) {
        const value = arrayIdDiv[key];
        const div = document.getElementById(value);
        if (div) {
          div.style.display = "none";
        }
      }
    }
  }

  return (
    <div>
      <button
        style={{
          width: "100%",
          height: "35px",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          borderRadius: "10px",
          textAlign: "start",
          display: "flex",
          alignItems: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "blue";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "black";
        }}
        onClick={onClickHadler}
      >
        <img
          style={{
            width: "20px",
            height: "20px",
            padding: "0px 10px 0px 10px",
          }}
        />
        {params.text}
      </button>
    </div>
  );
}

export default ButtonNavigate;
