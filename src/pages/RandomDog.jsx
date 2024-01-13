import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";

export const RandomDog = () => {
  const [img, setImg] = useState("https://random.dog/9101ee3d-4686-4a53-8499-36459e5f25af.jpg");
  const [isImgForm, setIsImgForm] = useState(true);

  const getNewDog = async () => {
    const res = await PostService.getDogImg();
    return res.url;
  };

  const newDog = () => {
    getNewDog().then((res) => setImg(res));
  };
  useEffect(() => {
    const fileFormat = img.slice(-4).toLowerCase();
    const map = {
      img: { jpg: ".jpg", png: ".png", jpeg: "jpeg", gif: ".gif" },
      video: { mp4: ".mp4", webm: "webm" },
    };
    if (Object.values(map.video).includes(fileFormat)) {
      setIsImgForm(false);
    } else {
      setIsImgForm(true);
    }
  }, [isImgForm, img]);
  return (
    <div className="App">
      {isImgForm ? (
        <img
          style={{ border: "1px solid blue", width: 800, height: 600, marginBottom: 10 }}
          src={img}
          alt=""
        />
      ) : (
        <div>
          <video
            autoPlay
            loop
            muted
            style={{ border: "1px solid blue", width: 800, height: 600, marginBottom: 10 }}
            controls
            src={img}
            poster={<Loader />}
          />
        </div>
      )}

      <MyButton onClick={newDog}>Weiter</MyButton>
    </div>
  );
};
