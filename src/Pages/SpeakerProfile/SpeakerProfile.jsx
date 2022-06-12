import { useParams } from "react-router-dom";
import { LoginPopup } from "../../Containers/LoginPopup/LoginPopup";

export const SpeakerProfile = (props) => {
  let { speakerId } = useParams();

  if (!speakerId === undefined) {
    speakerId = "";
  }

  const container = <LoginPopup></LoginPopup>;

  return <div className="speaker-profile">{container}</div>;
};
