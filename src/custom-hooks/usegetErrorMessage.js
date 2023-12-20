const error = [
  {
    "Firebase: Error (auth/invalid-login-credentials).":
      "Invalid username or password",
  },
  {
    "Firebase: Error (auth/email-already-in-use)": "User already exits.",
  },
];
const usegetErrorMessage = (errorCode) => {
  for (const errorMapping of error) {
    if (errorMapping[errorCode]) {
      return errorMapping[errorCode];
    }
  }
  // Default error message if no matching code is found
  return "An error occurred";
};

export default usegetErrorMessage;
