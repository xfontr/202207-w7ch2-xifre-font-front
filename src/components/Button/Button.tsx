import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faEye,
  faScrewdriver,
} from "@fortawesome/free-solid-svg-icons";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  content?: string;
  buttonType: string;
  action: () => void;
}

const Button = ({
  buttonType,
  action,
  content = "",
}: ButtonProps): JSX.Element => {
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;
  const viewIcon = <FontAwesomeIcon icon={faEye} />;
  const modifyIcon = <FontAwesomeIcon icon={faScrewdriver} />;

  return (
    <ButtonStyled
      data-testid={`button--${buttonType}`}
      className={`button--${buttonType}`}
      onClick={action}
      type={buttonType === "submit" ? "submit" : "button"}
    >
      {content}
      {buttonType === "icon-trash" && <i>{trashIcon}</i>}
      {buttonType === "icon-view" && <i>{viewIcon}</i>}
      {buttonType === "icon-tool" && <i>{modifyIcon}</i>}
    </ButtonStyled>
  );
};

export default Button;
