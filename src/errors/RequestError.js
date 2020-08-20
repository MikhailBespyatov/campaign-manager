class RequestError extends Error {
  validation = {};

  constructor({ response, ...rest }) {
    // For prevent setup of message property in parent class
    super();
    this.response = response;

    Object.keys(rest)
      .forEach((key) => {
        this[key] = rest[key];
      });

    if (response && response.data && response.data.message) {
      this.defaultMessage = response.data.message;
    }

    if (response && response.data && response.data.errors) {
      this.validation = response.data.errors;
    }
  }

  get message() {
    return this.defaultMessage;
  }

  get validationErrors() {
    return this.validation;
  }
}

export default RequestError;
