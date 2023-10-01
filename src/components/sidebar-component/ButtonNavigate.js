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
          width: "90%",
          height: "35px",
          backgroundColor: "#D1EEE5",
          border: "none",
          outline: "none",
          cursor: "pointer",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          color: "#9C8484",
          marginBottom: "7px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#C79090";
          e.currentTarget.style.color = "#E4D1D1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#D1EEE5";
          e.currentTarget.style.color = "#9C8484";
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
