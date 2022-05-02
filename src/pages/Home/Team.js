import { Hidden, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn, Telegram, Twitter } from "@material-ui/icons";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 54,
    fontWeight: 700,
    verticalAlign: "middle",
    wordSpacing: "0px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  para: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: -5,
    color: "#bdbdbd",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 21,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,

      paddingBottom: 3,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },

  icon: {
    fontSize: 24,
    color: "#bdbdbd",
    "&:hover": {
      color: theme.palette.pbr.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },

  people: {
    paddingTop: 30,
    midth: "100%",
    maxWidth: 220,
    [theme.breakpoints.down("sm")]: {
      width: 160,
    },
  },
  peopleSmall: {
    paddingTop: 40,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
  },
  avatar: {
    width: "140px",
    height: "140px",
    borderRadius: 7,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "75px",
      height: "75px",
    },
  },
  avatarSmall: {
    width: "120px",
    height: "120px",
    borderRadius: 7,

    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
  },
}));
export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center">
        <h4 className={classes.heading}>Team</h4>

        <div className="row flex-row justify-content-center">
          <Hidden smDown>
            <div className="col-md-1"></div>
          </Hidden>
          <div className="col-6  col-md-2 " align="center">
            <Fade left>
              <div className={classes.people}>
                <img
                  src="./images/cyclese.png"
                  alt="Cyclese"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Cyclese</h6>
                <p className={classes.para}>CEO & Founder</p>

                <Tooltip title="Telegram">
                  <a href="https://t.me/cyclese_polkabridge">
                    <IconButton aria-label="Telegram">
                      <Telegram className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/cyclese-mohr-8bb396225/">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>{" "}
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="./images/team/tahir.jpg"
                  alt="Tahir"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Tahir Ahmad</h6>
                <p className={classes.para}>Product Engineer</p>
                <Tooltip title="Twitter">
                  <a href="https://twitter.com/tahirahmadin">
                    <IconButton aria-label="Twitter">
                      <Twitter className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="Github">
                  <a href="https://github.com/tahirahmadin">
                    <IconButton aria-label="Github">
                      <GitHub className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="./images/team/aamir.png"
                  alt="Aamir"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Aamir Alam</h6>
                <p className={classes.para}>Software Engineer</p>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/aamir-alam/">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="GitHub">
                  <a href="https://github.com/AamirAlam">
                    <IconButton aria-label="GitHub">
                      <GitHub className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="./images/team/henri.jpg"
                  alt="Henri"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Stephane Henri</h6>
                <p className={classes.para}>Smart Contract Dev</p>
                <Tooltip title="Github">
                  <a href="https://www.linkedin.com/in/stephanehenri/">
                    <IconButton aria-label="Github">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="images/team/tanishq.png"
                  alt="Tanishq"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Tanishq Dhawan</h6>
                <p className={classes.para}>Marketing Manager</p>

                <Tooltip title="LinkedIn">
                  <a href="https://twitter.com/ace_tanishq">
                    <IconButton aria-label="Twitter">
                      <Twitter className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/tanishq-dhawan-20ba19166">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <Hidden smDown>
            <div className="col-md-1"></div>
          </Hidden>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="./images/team/swas.jpg"
                  alt="Swas"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Swas </h6>
                <p className={classes.para}>Design Lead</p>

                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/mr-swaroop-234633213">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="./images/team/taha.jpg"
                  alt="Swas"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Taha Zafar </h6>
                <p className={classes.para}>Content Manager</p>

                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/taha-zafar-aa983bb6">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="./images/team/sonali.jpg"
                  alt="Swas"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Sonali Rawat</h6>
                <p className={classes.para}>Social Media Manager</p>

                <Tooltip title="Twitter">
                  <a href="https://twitter.com/sonali_rawat12?s=21">
                    <IconButton aria-label="Twitter">
                      <Twitter className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/sonali-rawat-4567811ab/">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="images/team/rashid.jpg"
                  alt="Rashid"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Rashid Khan</h6>
                <p className={classes.para}>UI/UX Designer</p>

                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/mohd-rashid-khan-a50a60229/">
                    <IconButton aria-label="LinkedIn">
                      <LinkedIn className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
          <div className="col-6 col-md-2" align="center">
            <Fade right>
              <div className={classes.people}>
                <img
                  src="images/team/qi.jpeg"
                  alt="Quynh"
                  className={classes.avatar}
                />
                <h6 className={classes.title}>Quynh Mi</h6>
                <p className={classes.para}>HR Manager</p>

                <Tooltip title="LinkedIn">
                  <a href="https://twitter.com/imquynhmi">
                    <IconButton aria-label="Twitter">
                      <Twitter className={classes.icon} />
                    </IconButton>
                  </a>
                </Tooltip>
              </div>
            </Fade>
          </div>
        </div>
        <div className="row  justify-content-center"> </div>
      </div>
    </div>
  );
}
