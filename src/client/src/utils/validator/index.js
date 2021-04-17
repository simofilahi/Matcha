const Validator = {
  props: {},
};

Validator.result = function () {
  const obj = { ...this.props };

  this.props = {};
  return obj;
};

Validator.match = function (data) {
  this.props["_match"] = (data, obj) => {};
  return this;
};

Validator.max = function (data) {
  this.props["__max"] = data;
  return this;
};

Validator.min = function (data) {
  this.props["__min"] = data;
  return this;
};

Validator.string = function () {
  this.props["_string"] = true;
  return this;
};

Validator.interger = function () {
  this.props["_integer"] = (data, obj) => {
    const value = /\d/g.test(data);
    if (!value) obj[`error`] = "input must be [0-9]";
  };
  return this;
};

Validator.alphanum = function () {
  this.props["_alphanum"] = (data, obj) => {
    const value = /(([a-z][0-9])|([A-Z][0-9])|([A-Z][a-z][0-9]))/g.test(data);
    if (!value) obj[`error`] = "input must contain [a-z] and [0-9]";
  };
  return this;
};

Validator.password = function () {
  this.props["_password"] = true;
  return this;
};

Validator.checker = function (obj, key, data) {
  let ret = false;

  switch (key) {
    case "_string":
      let regex = new RegExp(
        `^[a-zA-Z]{${obj["__min"] ? obj["__min"] : 0},${
          obj["__max"] ? obj["__max"] : 0
        }}$`,
        "g"
      );
      if (!regex.test(data)) ret = true;
      break;
    case "_min":
      if (data.length > obj["__min"]) test = true;
      test = false;
      break;
    case "_max":
      if (data.length < obj["__min"]) test = true;
      test = false;
      break;
  }
  return ret;
};

Validator.validate = function (data) {
  // try {
  for (const [key, value] of Object.entries(data)) {
    if (this[`_${key}`]) {
      for (const [key_2, func] of Object.entries(this[`_${key}`])) {
        const ret = this.checker(this[`_${key}`], key_2, value);
        if (ret) return ret;
      }
    }
  }
  return false;
};

Validator.object = function (data) {
  for (const [key, value] of Object.entries(data)) this[`_${key}`] = value;
  return this;
};

// const schema = Validator.object({
//   username: Validator.min(10).string().result(),
//   firstname: Validator.min(10).string().max(20).result(),
// });

// schema.validate({
//   username: "simao filahi",
//   firstname: "mohamed",
// });

// console.log(schema);

export default Validator;
