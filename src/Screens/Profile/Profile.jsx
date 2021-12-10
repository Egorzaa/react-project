import firebase from "firebase";
import { useEffect } from "react";
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

  const handleInitFirebaseProfile = async () => {
    const id = firebase.auth().currentUser.uid;

    await firebase
      .database()
      .ref("profile")
      .child(id)
      .child("userName")
      .on("value", (snapshot) => {
        dispatch(changeUserNameAction({ name: snapshot.val() }));
      });
  };

  useEffect(() => {
    handleInitFirebaseProfile();
  }, []);

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
    const db = firebase.database();

    const id = firebase.auth().currentUser.uid;

    db.ref("profile").child(id).child("userName").set(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <button onClick={handleToggleShowName}>Click me!</button>
      {showName && name}
    </>
  );
};
