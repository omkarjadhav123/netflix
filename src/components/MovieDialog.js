import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";

import VideoBackground from "./VideoBackground.js";
import { setOpen } from "../redux/MovieSlice.js";

export default function MovieDialog() {
  const dispatch = useDispatch();

  const { open, id } = useSelector((store) => store.movie);

  useEffect(() => {
    console.log("Dialog Open :", open);
    console.log("Movie ID :", id);
  }, [open, id]);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogContent>
        {id ? <VideoBackground movieId={id} /> : <h2>No Movie Selected</h2>}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
