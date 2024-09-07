import { gql } from "urql";

export const SignUp = gql`
mutation CreateUser($input: signUpInput!) {
  createUser(input: $input) {
   token
  }
}`


export const SignIn = gql`
mutation CreateUser($input: signInInput!) {
  signIn(input: $input) {
    token
    name
  }
}`


export const me = gql`
query Query {
  me {
    id
    name
    email
    handle
    image
    backgroundImage
  }
}`