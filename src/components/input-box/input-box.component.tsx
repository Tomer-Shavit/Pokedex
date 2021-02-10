import "./input-box.styles.scss";
interface Props {
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<Props> = ({ handleChange, placeholder }) => (
  <input
    className="input-box"
    onChange={handleChange}
    placeholder={placeholder}
  ></input>
);

export default InputBox;
