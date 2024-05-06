import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export const Card = ({ value }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const capitalizeEachWord = (sentence) => {
    if (!sentence) {
      return ""; // Handle the case where sentence is empty or undefined
    }

    // Split the sentence into words
    const words = sentence.split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      const temp = word.toLowerCase();
      if (temp !== "ncr" && temp !== "ios" && temp !== "sde")
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      else return word.toUpperCase();
    });

    // Join the words back into a single string
    return capitalizedWords.join(" ");
  };

  return (
    <div className="card">
      {/* Header/Top part of the card */}
      <div className="card-header">
        <div className="icon">
          <img src={value.logoUrl} />
        </div>
        <div className="job-details">
          <div className="items">{value.companyName}</div>
          <div className="items">{capitalizeEachWord(value.jobRole)}</div>
          <div className="items">{capitalizeEachWord(value.location)}</div>
        </div>
      </div>
      {/* Salary details */}
      <div className="salary">
        Estimated Salary: {value.minJdSalary ? `${value.minJdSalary}K -` : ""}{" "}
        {value.maxJdSalary}K {value.salaryCurrencyCode}
      </div>
      <div className="about">
        <div className="about-details">
          <h2>About Company:</h2>
          <h3>About Us:</h3>
          <p>{value.jobDetailsFromCompany}</p>
        </div>
        <div className="view-job">
          <button onClick={handleOpen}>View Job</button>
        </div>
      </div>
      <div className="minimum-experience">
        <p>Minimum Experinece</p>
        <p>{value.minExp ? `${value.minExp} Years` : "N/A"}</p>
      </div>
      {/* Bottom 2 buttons */}
      <div className="buttons">
        <button className="common-button-style easy-apply">
          <ElectricBoltIcon
            style={{
              fontSize: "1.6rem",
              marginRight: "0.5rem",
              fill: "yellow",
              stroke: "orangered",
              strokeWidth: "1",
            }}
          />
          Easy Apply
        </button>
        <button className="common-button-style referral">
          {/* Adding two sample images for styling */}
          <div>
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
          <div> Unlock Referral Asks</div>
        </button>
      </div>
      {/* Popup feature build using Material UI modal styling */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          About Us:
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{value.jobDetailsFromCompany}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};
