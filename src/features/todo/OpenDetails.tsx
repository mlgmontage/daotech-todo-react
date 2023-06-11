import { useDispatch } from "react-redux";
import { setdetailsmodal } from "../../entities/UI/model";

const OpenDetails = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setdetailsmodal({ show: true }))}>*</button>
  );
};

export default OpenDetails;
