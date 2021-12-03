import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk } from "../../Store/Messages/actions";
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
    dispatch(
      addMessageWithThunk({
        chatId: "id1",
        message: "some text",
        author: "Egor",
      })
    );
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
