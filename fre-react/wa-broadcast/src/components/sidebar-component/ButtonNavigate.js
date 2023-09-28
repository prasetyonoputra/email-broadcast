function ButtonNavigate(params) {
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
          alignItems: "center"
        }}

        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "blue";
            e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "black";
        }}
      >
        <img style={{width: "20px", height: "20px", padding: "0px 10px 0px 10px"}}/>
        {params.text}
      </button>
    </div>
  );
}

export default ButtonNavigate;
