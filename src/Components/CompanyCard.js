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
import { withRouter } from "react-router-dom";


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
  
    width: '400px',
    margin: '10px',
   
   
  },
  media: {
    height: '170px',
    width: '100%'
   
  },
});

function CompanyCard(props) {
  const classes = useStyles();
  const history = useHistory();
  // const handleClick = () => history.push({pathName: `/company/${convertStringToCamelCase(props.companyName)}`, state:{companyContent: props.companyContent, showQuiz: props.showQuiz}});
  const handleClick = () => history.push(`/company/${convertStringToCamelCase(props.companyName)}`);


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
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleClick} size="small" color="primary" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(CompanyCard);
