import gql from 'graphql-tag';

const ADD_POLL = gql`
  mutation addPoll($name: String!) {
    addPoll(newPoll: {name: $name}) {
      id
    }
  }
`;

export default {
  ADD_POLL,
};
