function Profile(params) {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "20px 20px 20px 27vw",
        backgroundColor: "white",
        display: "inline-block",
        display: "flex",
        padding: "30px",
      }}
    >
      <div style={{ textAlign: "center", padding: "30px" }}>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <img style={{ height: "110px", width: "110px" }} />
          </div>
          Your Name <br />
          Trial
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "start",
              padding: "10px 20px",
            }}
          >
            <div>
              <img style={{ height: "38px", width: "38px" }} />
            </div>
            <div>
              95 <br />
              Current Send
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "start",
              padding: "10px 20px",
            }}
          >
            <div>
              <img style={{ height: "38px", width: "38px" }} />
            </div>
            <div>
              95 <br />
              Total Send
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "400px" }}>
        Details
        <hr />
        <table>
          <tr>
            <td>Name</td>
            <td>: Your Name</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>: Your Name</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>: Your Name</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: Your Name</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>: Your Name</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>: Your Name</td>
          </tr>
          <tr>
            <td>Panel theme</td>
            <td>: Your Name</td>
          </tr>
        </table>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default Profile;
