import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDogActionWithThunk } from "../../Store/Dog/actions";
import { dogSelector } from "../../Store/Dog/selectors";

export const Dogs = () => {
  const { loading, error, dogUrl } = useSelector(dogSelector);
  const dispatch = useDispatch();

  const handleGetDogs = () => {
    dispatch(getDogActionWithThunk());
  };

  useEffect(() => {
    handleGetDogs();
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <div>
        <div>error</div>
        <button onClick={handleGetDogs}>Refresh page</button>
      </div>
    );
  }

  return (
    <div>
      <img src={dogUrl} alt="" />
    </div>
  );
};
