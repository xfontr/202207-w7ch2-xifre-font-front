import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  buttonType: string;
  action: () => void;
}

const Button = ({ buttonType, action }: ButtonProps): JSX.Element => {
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;
  const viewIcon = <FontAwesomeIcon icon={faEye} />;

  return (
    <ButtonStyled
      data-testid={`button--${buttonType}`}
      className={`button--${buttonType}`}
      onClick={action}
    >
      {buttonType === "icon-trash" && <i>{trashIcon}</i>}
      {buttonType === "icon-view" && <i>{viewIcon}</i>}
    </ButtonStyled>
  );
};

export default Button;
