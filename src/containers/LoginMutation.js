import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
    mutation login($input: UserCredentials!) {
        login(input: $input)
    }
`;

export const LoginMutation = () => {
    const [mutation, { loading: mutationLogLoading, error: mutationLogError }] = useMutation(LOGIN)
    return { mutationLog: mutation, mutationLogLoading, mutationLogError }
}