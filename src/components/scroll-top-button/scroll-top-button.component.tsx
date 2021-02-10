import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./scroll-top-button.styles.scss";

const ScrollToTopButton: React.FC = () => (
  <button
    className="scroll-top-button"
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
  >
    <ArrowUpwardIcon className="arrow-top"></ArrowUpwardIcon>
  </button>
);

export default ScrollToTopButton;
