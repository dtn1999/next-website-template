import { gql } from "graphql-request";

export const GET_PAGES = gql`
query GetAllPages {
  pages {
    blocks {
      typename: __typename
      ... on Container {
        typename: __typename
        style {
          ...StyleFragment
        }
      }
      ... on Text {
        id
        value
        style {
          ...StyleFragment
        }
      }
    }
  }
}

fragment StyleFragment on Style {
  bgColor {
    css
  }
  color {
    css
  }
  classNames
}
`