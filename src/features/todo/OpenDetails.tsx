import { useDispatch } from "react-redux";
import { setdetailsmodal } from "../../entities/UI/model";

type Props = {
  id: number;
};

const OpenDetails: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setdetailsmodal({ show: true, id }))}>
      *
    </button>
  );
};

export default OpenDetails;
