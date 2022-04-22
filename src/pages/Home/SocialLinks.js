import { Button, IconButton, Input, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Twitter,
  Telegram,
  GitHub,
  Email,
  Reddit,
  Instagram,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: "black",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  newsletterCard: {
    width: 800,
    height: "100%",
    padding: 20,
    paddingTop: 30,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // border: "1px solid #454545",
    filter: "drop-shadow(0 0 0.5rem #212121)",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    paddingBottom: 15,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: "100%",
      height: "100%",
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  subheading: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 28,
    height: 28,
    color: "#e4e5ee",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      height: 20,
    },
  },
  iconWrapper: {
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      marginRight: 2,
    },
  },
  subscribeCard: {
    backgroundColor: "#D9047C",
    width: "90%",
    height: "100%",
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    borderRadius: 10,
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,

    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    marginRight: 5,
    color: "#ffffff",
    padding: "7px 30px 7px 30px",
    fontWeight: 600,
    fontSize: 13,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "10px 20px 10px 20px",
    },
  },
}));
export default function SocialLinks() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.newsletterCard}>
        {/* <div className="text-center">
          <h6 className={classes.heading}>Get in touch Now!</h6>
        </div>
        <div className="d-flex justify-content-center">
          <div className={classes.subscribeCard}>
            <p className={classes.subheading}>Need more updates?</p>
            <div className="px-5 py-3">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 45,
                  paddingLeft: 10,
                }}
              >
                {" "}
                <Input
                  disableUnderline={true}
                  placeholder="Type your email here"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    height: 45,
                    paddingLeft: 10,
                  }}
                  fullWidth
                />
                <Button className={classes.button}>Subscribe</Button>
              </div>
            </div>
            <p className={classes.para}>
              We will send you development updates right into your inbox!
            </p>
          </div>
        </div> */}
        <div className="container text-center mt-5" style={{ paddingTop: 30 }}>
          <div>
            <img
              src="https://launchpad.polkabridge.org/img/logo-white.png"
              alt="logo"
              height="40px"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className={classes.iconWrapper}>
              <Tooltip title="Twitter" aria-label="add1">
                <a href="https://twitter.com/realpolkabridge">
                  <IconButton aria-label="Twitter">
                    <Twitter className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Telegram">
                <a href="https://t.me/polkabridgegroup">
                  <IconButton aria-label="Telegram">
                    <Telegram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>

            <div className={classes.iconWrapper}>
              <Tooltip title="Github">
                <a href="https://github.com/cyclese96">
                  <IconButton aria-label="Github">
                    <GitHub className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Medium">
                <a href="https://polkabridge.medium.com/">
                  <IconButton aria-label="Reddit">
                    <img src="./images/medium.png" className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Reddit">
                <a href="https://www.reddit.com/r/polkabridge_official/">
                  <IconButton aria-label="Reddit">
                    <Reddit className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Instagram">
                <a href="https://www.instagram.com/polkabridgeofficial/">
                  <IconButton aria-label="Reddit">
                    <Instagram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Discord">
                <a href="https://discord.gg/tzemFksyZB">
                  <IconButton aria-label="Discord">
                    <img
                      src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-White-1024x780.png"
                      className={classes.icon}
                      style={{ height: 23 }}
                      alt="discord"
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Email">
                <a href="mailto:support@polkabridge.org">
                  <IconButton aria-label="Email">
                    <Email className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </div>
          <p className={classes.para}>
            Copyright 2022{" "}
            <span className={classes.highlight}>PolkaBridge</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
