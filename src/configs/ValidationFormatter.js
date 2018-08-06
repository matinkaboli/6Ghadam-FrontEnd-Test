export default class {
  constructor() {
    this.errors = {};
  }

  addError(error, field, validation, args) {
    let message = error;

    if (error instanceof Error) {
      validation = 'ENGINE_EXCEPTION';
      message = error.message;
    }

    this.errors[field] = { validation, message, args };
  }

  toJSON() {
    return Object.keys(this.errors).length > 0 ? this.errors : null;
  }
}
