import sneakers from "../../assets/video/sneakers.mp4";

const VidBG = () => {
  return <video src={sneakers} autoPlay loop muted />;
};

export default VidBG;
