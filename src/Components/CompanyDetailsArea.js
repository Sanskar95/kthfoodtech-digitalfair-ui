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

class CompanyDetailsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
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

  handlePointsSubmit = () => {
    changeUserPoints("snskr95", this.state.score).then(() => {
      this.setState({ isModalOpen: false });
    });
  };

  onCompleteAction = (obj) => {
    this.setState({ score: obj.correctPoints });
  };

  render() {
    const { isModalOpen, quiz } = this.state;
    return (
      <div>
        <div style={{ margin: "auto", height: "10rem" }}>
          <Paper style={{ margin: "3rem" }} elevation={3}>
            <p style={{ fontSize: "25px" }}>
              {this.props.location.state.companyContent}
            </p>
            {this.props.location.state.showQuiz && (
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                style={{ fontSize: "20px", position: "absolute", left: '35%' }}
                onClick={this.handleModalOpen}
              >
                Play a quiz
              </Button>
            )}
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
              Modal title
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
      </div>
    );
  }
}

export default withRouter(CompanyDetailsArea);
