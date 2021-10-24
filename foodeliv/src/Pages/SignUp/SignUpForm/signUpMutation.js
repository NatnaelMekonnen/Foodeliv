import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
    mutation signUp($userIn: UserInput!) {
        signUp(userInput: $userIn) {
            id
            firstName
            lastName
            gender
            dateOfBirth
            email
            accountType
            restaurantName
            restaurantType
            restaurantLocation
            password
            createdAt
            token
        }
    }
`;

export default SIGNUP_MUTATION;
