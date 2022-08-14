import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonType: string;
  action: () => void;
}

const Button = ({ buttonType }: ButtonProps): JSX.Element => {
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;
  return (
    <ButtonStyled className={`button--${buttonType}`}>
      <i>{trashIcon}</i>
    </ButtonStyled>
  );
};

export default Button;
