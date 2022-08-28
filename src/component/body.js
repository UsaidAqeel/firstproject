let Card1 = () => {
  return (
    <>
      <div className="cus-card">
        <h5 className="text-center title">Card title</h5>
        <div className="sub-image">
          <i className="fa-solid fa-screwdriver-wrench icon" />
        </div>
        <p className="cus-par">
          Supendisse Sollicitudin Duis vitae semper turpis
        </p>
        <p className="cus-subtext">Sodales farmentum</p>
        <p className="cus-subtext">Qquam integer</p>
        <p className="cus-subtext">Nibh arcu</p>
      </div>
    </>
  );
};

let Card2 = () => {
  return (
    <>
      <div className="cus-card">
        <h5 className="text-center title">Card title</h5>
        <div className="sub-image">
          <i
            className="fa-solid fa-folder-open icon"
            style={{ color: "#D4AD81" }}
          />
        </div>
        <p className="cus-par">Tempus Sapien Nunc vestibulum libero</p>
        <p className="cus-subtext">Sed aliquam</p>
        <p className="cus-subtext">Nisi aenean</p>
        <p className="cus-subtext">Faucibus eu</p>
      </div>
    </>
  );
};

let Card3 = () => {
  return (
    <>
      <div className="cus-card">
        <h5 className="text-center title">Card title</h5>
        <div className="sub-image">
          <i className="fa-solid fa-envelope icon" style={{ color: "gray" }} />
        </div>
        <p className="cus-par">Aliquam Massa Nam at rhoncus odio</p>
        <p className="cus-subtext">Varius sit amet</p>
        <p className="cus-subtext">Cursus lacinia</p>
        <p className="cus-subtext">Metus phaselius</p>
      </div>
    </>
  );
};

let Card4 = () => {
  return (
    <>
      <div className="cus-card">
        <h5 className="text-center title">Card title</h5>
        <div className="sub-image">
          <i className="fa-solid fa-video icon" style={{ color: "#417CA9" }} />
        </div>
        <p className="cus-par">
          Supendisse Sollicitudin Duis vitae semper turpis
        </p>
        <p className="cus-subtext">Sodales farmentum</p>
        <p className="cus-subtext">Qquam integer</p>
        <p className="cus-subtext">Nibh arcu</p>
      </div>
    </>
  );
};

let Para1 = () => {
  return (
    <>
      <div className="para">
        <p className="con-para">
          <span style={{ color: "#0078B5", fontWeight: "600" }}>Commited</span>{" "}
          to our Clients
        </p>
        <div className="i-center">
          <i class="fa-solid fa-handshake"></i>
        </div>
        <p>
          Lorem ipsum dolor sunt in culpa qui officia deserunt mollit anim id
          est laborum. sit amet consectetur adipisicing elit. Omnis vel nulla
          saepe perferendis sed, quidem vero qui commodi, eius cumque, officiis
          laudantium labore reiciendis doloremque ducimus enim non nihil a?
        </p>
      </div>
    </>
  );
};

let Para2 = () => {
  return (
    <>
      <div className="para">
        <p className="con-para">
          <span style={{ color: "#0078B5", fontWeight: "600" }}>
            Solutions{" "}
          </span>{" "}
          for Bottom Line
        </p>
        <div className="i-center">
          <i className="fa-solid fa-lightbulb" />
        </div>
        <p>
          Lorem ipsum dolor sunt in culpa qui officia deserunt mollit anim id
          est laborum. sit amet consectetur adipisicing elit. Omnis vel nulla
          saepe perferendis sed, quidem vero qui commodi, eius cumque, officiis
          laudantium labore reiciendis doloremque ducimus enim non nihil a?
        </p>
      </div>
    </>
  );
};

let Body = () => {
  return (
    <>
      <div className="cus-row">
        <div className="cus-parent">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
        <div className="paras">
          <Para1 />
          <Para2 />
          <img
            src="https://images.pexels.com/photos/7788004/pexels-photo-7788004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="img"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
