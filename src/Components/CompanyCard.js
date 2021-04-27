import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

function convertStringToCamelCase(sentence) {
  return sentence.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,
  function(camelCaseMatch, i) {
     if (+camelCaseMatch === 0)
        return "";
     return i === 0 ? camelCaseMatch.toLowerCase() :
     camelCaseMatch.toUpperCase();
  });
}

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 200,
  },
});

export default function CompanyCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push(`/company/${convertStringToCamelCase(props.companyName)}`);


 const  nextPath=(path) =>{
    props.history.push(path);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imagePath}
          onClick={handleClick}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.companyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.briefDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
