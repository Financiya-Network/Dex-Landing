import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 70,
    paddingBottom: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
    textAlign: 'center',
  },
  imageWrapper: {
    padding: 15,
    height: '64px',
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  listingsWrapper: {
    maxWidth: 700,
    border: '1px solid #e9e9e9',
    borderRadius: 7,
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.024),

  0 2.8px 3.4px rgba(0, 0, 0, 0.086),
  0 10px 10px rgba(0, 0, 0, 0.02)`,
  },
}));
export default function Listings() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Exchange <span className={classes.highlight}> Listings</span>
      </h6>

      <div className={classes.listingsWrapper}>
        <div className="mt-3 row text-center">
          <Fade left>
            {' '}
            <div className="col-6 col-md-3">
              <img src="https://polkabridge.org/assets/img/uniswap.png" alt="logo" className={classes.imageWrapper} />
            </div>
            <div className="col-6 col-md-3">
              <img src="https://polkabridge.org/assets/img/mxc-logo.png" alt="logo" className={classes.imageWrapper} />
            </div>
          </Fade>
          <Fade right>
            <div className="col-6 col-md-3">
              <img src="https://polkabridge.org/assets/img/gate.png" alt="logo" className={classes.imageWrapper} />
            </div>
            <div className="col-6 col-md-3">
              <img src="https://polkabridge.org/assets/img/bilaxy.png" alt="logo" className={classes.imageWrapper} />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}