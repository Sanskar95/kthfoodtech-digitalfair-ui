import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import  Quiz  from 'react-quiz-component';


const quiz = {
  quizTitle: "React Quiz Component Demo",
  quizSynopsis:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
  questions: [
    {
      question:
        "How can you access the state of a component from inside of a member function?",
      questionType: "text",     
      answers: [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is developed by _____?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["Google Engineers", "Facebook Engineers"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "ReactJS is an MVC based framework?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["True", "False"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "10",
    },
    {
      question: "Which of the following concepts is/are key to ReactJS?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "30",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      questionType: "photo",
      answerSelectionType: "single",
      answers: [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
    {
      question: "What are the advantages of React JS?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "20",
    },
  ],
};

class CompanyDetailsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };
  handleClose = () => {
    this.setState({ isModalOpen: false });
    alert("points subitted");
  };

  onCompleteAction = (obj) => {
    console.log(obj);
    // YOUR LOGIC GOES HERE
  }

  render() {
    const { isModalOpen } = this.state;
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
              <Button autoFocus onClick={this.handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default CompanyDetailsArea;
