import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

function convertStringToCamelCase(sentence) {
  return sentence.replace(
    /(?:^\w|[A-Z]|\b\w|\s+)/g,
    function (camelCaseMatch, i) {
      if (+camelCaseMatch === 0) return "";
      return i === 0
        ? camelCaseMatch.toLowerCase()
        : camelCaseMatch.toUpperCase();
    }
  );
}

const useStyles = makeStyles({
  root: {
    width: "450px",
    margin: "10px",
  },
});

function CompanyCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push(`/company/${props.companyUrlString}`);
  const handleEventButtonClick = (url) => window.open(url, "_blank");

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img
          onClick={handleClick}
          style={{ width: "100%", height: "300px" }}
          src={props.imagePath}
        />
        <CardContent>
          <Typography style={{ fontSize: "25px", fontWeight: "1000" }}>
            {props.companyName}
          </Typography>

          {props.eventFlag && (
            <Typography style={{ fontSize: "15px", fontWeight: "1000" }}>
              Webinar Available!
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={handleClick}
          size="small"
          color="primary"
          variant="outlined"
        >
          Learn More
        </Button>

        {props.eventFlag === true && (
          <Button
            onClick={() => handleEventButtonClick(props.meetingLink)}
            size="small"
            color="green"
            variant="outlined"
          >
            Take me to the event!
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default withRouter(CompanyCard);
