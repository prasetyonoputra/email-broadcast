function Header(params) {
  const styleButton = {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#9C6C6C"
  };

  return (
    <div
      style={{
        margin: "20px 13px 20px 16vw",
        backgroundColor: "#D9D9D9",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        borderRadius: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <button style={styleButton}>
        <img style={{ height: "25px", width: "25px" }} />
        <p>US</p>
      </button>
      <button style={styleButton}>
        <div style={{textAlign: "end", paddingRight: "10px", paddingLeft: "15px"}}>
          <p>Your Name</p>
          <p>Trial</p>
        </div>
        <img style={{ height: "40px", width: "40px" }} />
      </button>
    </div>
  );
}

export default Header;
