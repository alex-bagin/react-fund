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
    console.log(fileFormat);
    const map = {
      img: { jpg: ".jpg", png: ".png", jpeg: "jpeg", gif: ".gif" },
      video: { mp4: ".mp4", webm: "webm" },
    };
    if (Object.values(map.video).includes(fileFormat)) {
      console.log("VIDEO");
      setIsImgForm(false);
    } else {
      console.log("IMG");
      setIsImgForm(true);
    }
  }, [isImgForm, img]);

  console.log(isImgForm, img);
  return (
    <div className="App">
      {isImgForm ? (
        <img style={{ border: "1px solid teal", width: 800, height: 600 }} src={img} alt="" />
      ) : (
        <div>
          <video
            autoPlay
            loop
            muted
            style={{ border: "1px solid teal", width: 800, height: 600 }}
            controls
            src={img}
            poster={<Loader />}
          />
        </div>
      )}

      <MyButton onClick={newDog}>Neus Bild</MyButton>
    </div>
  );
};
