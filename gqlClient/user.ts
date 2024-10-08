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

export const getUserById = gql`
query Query($userId: ID!) {
  getUserById(userId: $userId) {
    name
    image
    id
    handle
    description
    backgroundImage
    videosCount
    followingCount
    followersCount
    hasFollowed
  }
}`

export const followUser = gql`
mutation Mutation($input: FollowInput!) {
  followUser(input: $input) {
    engagementType
  }
}`

export const userFollowers = gql`
query GetUserFollowers($userId: ID!) {
  getUserFollowers(userId: $userId) {
    name
    image
    id
    handle
    hasFollowed
  }
}
`