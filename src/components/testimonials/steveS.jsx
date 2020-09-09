import React from "react";
import Typography from "@material-ui/core/Typography";

export default function SteveS() {
  return (
    <div className="testamonialContentContainer">
      <Typography class="testamonialReview">
        We have worked with Liennette for nearly eight years. She brings
        considerable experience and financial expertise to our business. But
        more importantly, she brings insight and ideas that can only come from
        engaging with a broad cross-section of quality companies in our
        industry. We have had tremendous ROI from her services and continue to
        retain her as a trusted advisor for the long term!
      </Typography>{" "}
      <Typography class="testamonialReview">
        Needless to say, I am very pleased with Liennette. She’s an integral
        part of my decision making.
      </Typography>
      <Typography class="testamonialName">
        <span className="testamonialIconBlue">■ </span>
        Steve Sumner{" "}
      </Typography>
      <Typography class="testamonialTitle">President / Centriworks</Typography>
    </div>
  );
}
