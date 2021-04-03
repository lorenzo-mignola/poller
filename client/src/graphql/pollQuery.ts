import gql from 'graphql-tag';

const GET_ALL_POLLS = gql`
  query Polls {
    polls {
      id
      name
    }
  }
`;

const GET_POLL = gql`
  query Poll($id: Float!){
    poll(id: $id) {
      name
      questions {
        text
        id
      }
    }
  }
`;

export default {
  GET_ALL_POLLS,
  GET_POLL,
};
