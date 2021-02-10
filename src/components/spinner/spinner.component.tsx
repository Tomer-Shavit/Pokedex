import "./spinner.styles.scss";

const Spinner: React.FC = () => (
  <div className="spinner">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
