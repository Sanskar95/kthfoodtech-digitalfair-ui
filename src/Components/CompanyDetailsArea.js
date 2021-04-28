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
    console.log(obj);
    this.setState({ score: obj.correctPoints });
  };

  render() {
    const { isModalOpen, quiz } = this.state;
    return (
      <div>
        <div style={{ margin: "auto", height: "10rem" }}>
          <Paper style={{ margin: "3rem" }} elevation={3}>
            <p style={{ fontSize: "25px" }}>
              Gates was born and raised in Seattle, Washington. In 1975, he
              co-founded Microsoft with childhood friend Paul Allen in
              Albuquerque, New Mexico. It went on to become the world's largest
              personal computer software company.[5][a] Gates led the company as
              chairman and CEO until stepping down as CEO in January 2000,
              succeeded by Steve Ballmer, but he remained chairman and became
              chief software architect.[8] During the late 1990s, he had been
              criticized for his business tactics, which have been considered
              anti-competitive. This opinion has been upheld by numerous court
              rulings.[9] In June 2006, Gates announced that he would be
              transitioning to a part-time role at Microsoft and full-time work
              at the Bill & Melinda Gates Foundation, the private charitable
              foundation he and his wife, Melinda Gates, established in
              2000.[10] He gradually transferred his duties to Ray Ozzie and
              Craig Mundie.[11] He stepped down as chairman of Microsoft in
              February 2014 and assumed a new post as technology adviser to
              support the newly appointed CEO Satya Nadella.[12] In March 2020,
              Gates left his board positions at Microsoft and Berkshire Hathaway
              to focus on his philanthropic efforts including climate change,
              global health and development, and education.[13] Since 1987, he
              has been included in the Forbes list of the world's wealthiest
              people.[14][15] From 1995 to 2017, he held the Forbes title of the
              richest person in the world every year except from 2010 to
              2013.[16] In October 2017, he was surpassed by Amazon founder and
              CEO Jeff Bezos, who had an estimated net worth of US$90.6 billion
              compared to Gates's net worth of US$89.9 billion at the time.[17]
              As of April 2021, Gates had an estimated net worth of US$146.7
              billion, making him the third-richest person in the world.
            </p>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              style={{ fontSize: "40px", position: "fixed" }}
              onClick={this.handleModalOpen}
            >
              Play a quiz
            </Button>
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

export default CompanyDetailsArea;
