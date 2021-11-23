import { useHistory } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Profile = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.HOME);
  };
  return <button onClick={handleClick}>profile page</button>;
};
