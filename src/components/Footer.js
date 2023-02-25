import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <footer>
      <div className="item">
        <p>{year} © All Rights Not Reserved. </p>
        <div className="logos">
          <div className="github">
            <a
              href="https://github.com/admrts"
              target={"_blank"}
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://linkedin.com/in/admrts"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
          <div className="twitter">
            <a
              href="https://twitter.com/alidemirtas3"
              rel="noreferrer"
              target={"_blank"}
            >
              {" "}
              <TwitterIcon />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://instagram.com/alidemirtas7"
              rel="noreferrer"
              target={"_blank"}
            >
              {" "}
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
