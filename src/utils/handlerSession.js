export const handlerSessionError = (error) => {
    if(error.graphQLErrors && error.graphQLErrors.length > 0) {
        if(error.graphQLErrors[0].message === "user does not exist") {
            window.sessionStorage.removeItem("token");
            window.location.href = "/";
        }
    }
}