import { useSelector } from "react-redux";
import "./LoadingAnimation.css";
import store from "../../app/store";

const LoadingAnimation = () => {
  const { isVisible, message } = useSelector((state) => state.loader);


  if (!isVisible) {
    return null; // If not loading, don't render anything
  }

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
      </div>
      <div>{message}</div>
    </div>
  );
};

export default LoadingAnimation;
