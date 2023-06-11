import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type UIModelT = {
  details: DetailsModalT;
};

type DetailsModalT = {
  show: boolean;
  id?: number;
};

const initialState: UIModelT = {
  details: {
    show: false,
  },
};

const UIModel = createSlice({
  initialState,
  name: "UI",
  reducers: {
    setdetailsmodal: (state, { payload }: PayloadAction<DetailsModalT>) => {
      state.details = payload;
    },
  },
});

export default UIModel.reducer;
export const { setdetailsmodal } = UIModel.actions;

export const detailsModalSelector = (state: RootState) => state.UI.details;
