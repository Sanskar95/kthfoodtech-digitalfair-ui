import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Quiz from "react-quiz-component";
import { getCompanyQuestions } from "../Rest/QuestionService";
import { changeUserPoints } from "../Rest/UserService";
import { withRouter } from "react-router-dom";
import Snake from "react-simple-snake";
import image from '../Images/swegreen-header.jpg'
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function tranformQuestionResponse(questionResponse) {
  let transformedQuestions = [];
  for (let i = 0; i < questionResponse.length; i++) {
    let modifiedObject = {};
    let questionObject = questionResponse[i];

    modifiedObject["question"] = questionObject.question;
    modifiedObject["questionType"] = "text";
    modifiedObject["answers"] = questionObject.options.split(",");
    modifiedObject["correctAnswer"] = questionObject.options
      .split(",")
      .indexOf(questionObject.correctAnswer)
      .toString();
    modifiedObject["messageForCorrectAnswer"] = "Correct answer. Good job.";
    modifiedObject["messageForIncorrectAnswer"] = "Incorrect answer LOL";
    modifiedObject["point"] = "1";
    transformedQuestions.push(modifiedObject);
  }

  return transformedQuestions;
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class CompanyDetailsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isSnakeModalOpen: false,
      quiz: null,
      score: 0,
    };
  }

  fetchRequests = async () => {
    const questions = await getCompanyQuestions("abc");
    let quiz = {};
    quiz["quizTitle"] = "Company Quiz";
    quiz["quizSynopsis"] = "Some generic description";
    quiz["questions"] = tranformQuestionResponse(questions.data);
    this.setState({ quiz: quiz });
  };
  componentDidMount() {
    this.fetchRequests();
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };
  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleSnakeClose = () => {
    this.setState({ isSnakeModalOpen: false });
  };

  handlePointsSubmit = () => {
    changeUserPoints("snskr95", this.state.score).then(() => {
      this.setState({ isModalOpen: false });
    });
  };

  handleSnakeModalOpen = () => {
    this.setState({ isSnakeModalOpen: true });
  };

  onCompleteAction = (obj) => {
    this.setState({ score: obj.correctPoints });
  };
 
  render() {
    const { isModalOpen, quiz, isSnakeModalOpen } = this.state;
    return (
      <div>
        <div style={{ margin: "auto", height: "10rem" }}>
          <Paper style={{ margin: "3rem" }} elevation={3}>
            <img style={{width: '100%'}}src={image}/>
            <p style={{ fontSize: "25px" }}>
              {this.props.location.state.companyContent}
            </p>
          
            <div style={{ textAlign: 'center' }}>
            {this.props.location.state.showQuiz && (
              <Button variant="contained" color="primary" size="large" style={{fontSize: "20px",backgroundColor: 'coral'}} onClick={this.handleModalOpen}>
              Play quiz!
            </Button>
            )}
            <Button variant="contained" color="primary" size="large" style={{marginLeft: '2rem', fontSize: "20px",backgroundColor: 'green',}} onClick={this.handleSnakeModalOpen}>
              Play snake!
            </Button>
          </div>
          </Paper>
          
          <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={isModalOpen}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={this.handleClose}
            >
              Quiz!
            </DialogTitle>
            <DialogContent dividers>
              <Quiz quiz={quiz} onComplete={this.onCompleteAction} />
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={this.handlePointsSubmit}
                color="primary"
                variant="outlined"
              >
                SUBMIT POINTS
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <Dialog fullScreen open={isSnakeModalOpen} onClose={this.handleSnakeClose} TransitionComponent={Transition}>
        <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.handleSnakeClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">
              Snake
            </Typography>
          </Toolbar>
        </AppBar>
        <Snake />
            <Button
              autoFocus
              style={{fontSize: "20px",backgroundColor: 'green'}}
              onClick={this.handlePointsSubmit}
              color="primary"
              variant="contained"
            >
              SUBMIT POINTS
            </Button>
      </Dialog>

      
      </div>
    );
  }
}

export default withRouter(CompanyDetailsArea);
