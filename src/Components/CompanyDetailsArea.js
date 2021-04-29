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
import image from "../Images/swegreen-header.jpg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { companyStuff } from "../Data/data";

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
      companyObject: {},
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
    this.getDisplayData(companyStuff);
    this.fetchRequests();
  }

  getDisplayData = (companyStuff) => {
    const companyNameFromUrl = this.props.match.params.companyName;
    const companyObject = companyStuff.filter(
      (company) => company.companyUrlString === companyNameFromUrl
    )[0];
    this.setState({ companyObject: companyObject });
  };

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
    changeUserPoints(localStorage.getItem("username"), this.state.score).then(
      () => {
        this.setState({ isModalOpen: false });
      }
    );
  };

  handleSnakePointsSubmit = () => {
    changeUserPoints(
      localStorage.getItem("username"),
      localStorage.getItem("snakeHighScore")
    ).then(() => {
      this.setState({ isSnakeModalOpen: false });
    });
  };

  handleSnakeModalOpen = () => {
    this.setState({ isSnakeModalOpen: true });
  };

  onCompleteAction = (obj) => {
    this.setState({ score: obj.correctPoints });
  };

  render() {
    const { isModalOpen, quiz, isSnakeModalOpen, companyObject } = this.state;
    return (
      <div>
        <div style={{ margin: "auto", height: "10rem" }}>
          <Paper style={{ margin: "1rem" }} elevation={3}>
            <img
              style={{
                width: "70%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                height: "auto",
              }}
              src={image}
            />
            <p
              style={{
                fontSize: "20px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80%",
              }}
            >
              {companyObject.companyContent}
            </p>

            <div style={{ textAlign: "center" }}>
              {companyObject.showQuiz && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{
                    fontSize: "20px",
                    backgroundColor: "coral",
                    borderRadius: "30px",
                  }}
                  onClick={this.handleModalOpen}
                >
                  Play quiz!
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{
                  fontSize: "20px",
                  backgroundColor: "green",
                  borderRadius: "30px",
                }}
                onClick={this.handleSnakeModalOpen}
              >
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

        <Dialog
          fullScreen
          open={isSnakeModalOpen}
          onClose={this.handleSnakeClose}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleSnakeClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Snake</Typography>
            </Toolbar>
          </AppBar>
          <Snake />
          <Button
            autoFocus
            style={{ fontSize: "20px", backgroundColor: "green", width: '30%', textAlign: "center" }}
            onClick={this.handleSnakePointsSubmit}
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
