function Header(params) {
  const styleButton = {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div
      style={{
        margin: "20px 20px 20px 21vw",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        borderRadius: "20px"
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
