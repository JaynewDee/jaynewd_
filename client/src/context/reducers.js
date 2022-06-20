

export const modalReducer = (type) => {
  switch (type) {
    case "login":
      return <LoginForm />;
    case "signup":
      return <SignupForm />;
    default:
      break;
  }
};
