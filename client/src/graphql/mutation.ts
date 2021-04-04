import gql from 'graphql-tag';

const ADD_POLL = gql`
  mutation addPoll($name: String!) {
    addPoll(newPoll: {name: $name}) {
      id
    }
  }
`;

const ADD_QUESTION = gql`
  mutation addQuestion($text: String!, $pollId: Float!){
    addQuestion(text: $text, pollId: $pollId) {
      id
    }
  }
`;

const ADD_ANSWER = gql`
  mutation answer($questionId: Float!){
    addAnswer(questionId: $questionId) {
      id
    }
  }
`;

export default {
  ADD_POLL,
  ADD_QUESTION,
  ADD_ANSWER,
};
