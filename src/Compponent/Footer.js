import React from "react";

function Footer() {
  return (
    <>
      <footer id="Ftr">
        <div className="footerText">
          <h2 color="red">Dominos,pizza</h2>
          <p>Services</p>
          <p>Coustmer</p>
          <p>Satisfaction</p>
        </div>
        <div className="about">
          <h2 color="red">About us</h2>
          <p>
            Addres: Lorem ipsum dolor, sit amet consectetur adipisicing elit{" "}
            <br />
            Ducimus minus officiis quia. <br />
            Mandsaur:458001 <br />
          </p>
          <p className="pi">Coustmer</p>
          <p>Satisfaction</p>
        </div>
        <div className="footerText">
          <h2 color="red">Dominos,pizza</h2>
          <p>Services</p>
          <p>Coustmer</p>
          <p>Satisfaction</p>
        </div>
        <div className="Gola">
          <br />
          <img
            src="https://th.bing.com/th/id/OIP.bunaS66ffbWpSc5Bth3wFwHaHs?pid=ImgDet&w=524&h=544&rs=1"
            alt=""
            height="50px"
            id="imgs"
          />
          <img
            src="https://th.bing.com/th/id/R.39a1d68aec01e3a9ce7c0ad7b9a9c6b2?rik=fvudu3UHrxOzGA&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19759.png&ehk=lxMHxgrLx0aXG6IO729Vd39tXLoekOxoiFN7goNPdEE%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            height="50px"
            id="imgs"
          />
          <img
            src="https://clipartcraft.com/images/twitter-logo-transparent-background-8.png"
            alt=""
            height="50px"
            id="imgs"
          />
        </div>
        {/* <h2>@CopyRight MANDAUR M.P 458001</h2> */}
      </footer>
    </>
  );
}

export default Footer;
