import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`;

export const RegisterMutation = () => {
    const [mutation, { loading: mutationRegLoading, error: mutationRegError }] = useMutation(REGISTER)
    return { mutationReg: mutation, mutationRegLoading, mutationRegError }
}