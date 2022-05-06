import { gql } from '@apollo/client';

export const READ_PROJECT = gql`
  query findProject($title: String!) {
     findProject(title: $title) {

   }
}
`;
