import React from "react";

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <div className="neContainer">
          <div className="wrapper">
            <div className="wrapper__left">
              <h1>Shaimirdin</h1>
              <p>WELL DONE DEVELOPER</p>
            </div>
            <div className="wapper__right">
              <a
                href="https://www.youtube.com/shorts/wIDUbZHuDTE"
                target="_blank"
              >
                <img
                  className="hero__box"
                  src="https://avatars.mds.yandex.net/i?id=f9da5bb6299dea8c5ddc248e3bfeb0009b7796d0-9068872-images-thumbs&n=13"
                  alt="Hero img"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
