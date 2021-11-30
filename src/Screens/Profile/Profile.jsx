import { useDispatch, useSelector } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { name, showName } = useSelector(profileSelector);

  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction());
  };

  return (
    <>
      <button onClick={handleToggleShowName}>Click me!</button>
      {showName && name}
    </>
  );
};
