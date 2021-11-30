import { useDispatch, useSelector } from "react-redux";
import {
  changeUserNameAction,
  toggleUserNameAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { name, showName } = useSelector(profileSelector);

  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction());
  };

  const handleNameChange = (e) => {
    dispatch(changeUserNameAction({ name: e.target.value }));
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <button onClick={handleToggleShowName}>Click me!</button>
      {showName && name}
    </>
  );
};
