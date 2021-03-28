import gql from 'graphql-tag';

const GET_ALL_POLLS = gql`
  query Polls {
  polls {
    id
    name
  }
}
`;

export default {
  GET_ALL_POLLS,
};
