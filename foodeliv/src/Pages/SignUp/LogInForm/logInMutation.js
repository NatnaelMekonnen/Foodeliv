import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
    mutation logIn($logInInput: LogInInput) {
        logIn(logInInput: $logInInput) {
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

export default LOGIN_MUTATION;
