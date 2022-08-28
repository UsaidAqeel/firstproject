const Footer1 = () => {
  return (
    <>
      <div className="sub">
        <div className="parent">
          <i className="fa-solid fa-at" />
          <p>
            {" "}
            <span
              style={{ color: "#0073b5", fontWeight: "700", fontSize: "20px" }}
            >
              SUBSCRIBE
            </span>{" "}
            <br />
            GET NEWSLETTERS
          </p>
        </div>
        <input type="text" />
        <p className="cus-btn">Subscribe</p>
      </div>
    </>
  );
};
const Footer2 = () => {
  return (
    <>
      <div className="sub">
        <div className="parent">
          <i className="fa-solid fa-user-plus" />
          <p>
            {" "}
            <span
              style={{ color: "#0073b5", fontWeight: "700", fontSize: "20px" }}
            >
              {" "}
              FOLLOW US
            </span>{" "}
            <br />
            ON SOCIAL NETWORKS
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </>
  );
};

const Footer3 = () => {
  return (
    <>
      <div className="sub">
        <div className="parent">
          <i className="fa-solid fa-envelope" />
          <p>
            <span
              style={{ color: "#0073b5", fontWeight: "700", fontSize: "20px" }}
            >
              EMAIL
            </span>{" "}
            <br />
            CONTACT US
          </p>
        </div>
        <p>
          {" "}
          <span style={{ color: "#0073b9" }}>Email :</span>
          Infomail@dot.com
        </p>
        <p>
          <span style={{ color: "#0073b9" }}>Tel :</span>
          +31(0)xx xxx xx xx
        </p>
        <p>
          <span style={{ color: "#0073b9" }}>Address :</span>
          Phasellus pellenteque 88hs 6000 Lobortis vehicula, Mauris
        </p>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="main">
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
    </>
  );
};

export default Footer;
