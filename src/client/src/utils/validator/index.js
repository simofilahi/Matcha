const Validator = {
  funcs: {},
};

Validator.result = function () {
  const obj = { ...this.funcs };

  this.funcs = {};
  return obj;
};

Validator.match = function (data) {
  this.funcs["_match"] = (data, obj) => {};
  return this;
};

Validator.max = function (data) {
  this.funcs["_max"] = (data, obj) => {
    obj["error"] = "hello";
    console.log(obj["__max"]);
    if (data.length != obj["__max"]) {
      obj[`error`] = `max is ${obj["__max"]}`;
    }
  };
  this.funcs["__max"] = data;
  return this;
};

Validator.min = function (data) {
  this.funcs["_min"] = (data, obj) => {
    if (data.length != obj["__min"]) obj[`error`] = `min is ${obj["__min"]}`;
  };
  this.funcs["__min"] = data;
  return this;
};

Validator.string = function () {
  this.funcs["_string"] = (data, obj) => {
    let regex = new RegExp(
      `/^[a-zA-Z]{${obj["__min"] ? obj["__min"] : 0}, ${
        obj["__max"] ? obj["__max"] : 0
      }$}}/g`
    );

    const value = regex.test(data);
    if (!value) obj[`error`] = true;
  };
  return this;
};

Validator.interger = function () {
  this.funcs["_integer"] = (data, obj) => {
    const value = /\d/g.test(data);
    if (!value) obj[`error`] = "input must be [0-9]";
  };
  return this;
};

Validator.alphanum = function () {
  this.funcs["_alphanum"] = (data, obj) => {
    const value = /(([a-z][0-9])|([A-Z][0-9])|([A-Z][a-z][0-9]))/g.test(data);
    if (!value) obj[`error`] = "input must contain [a-z] and [0-9]";
  };
  return this;
};

Validator.password = function () {
  this.funcs["_password"] = (data, obj) => {
    let regex = new RegExp(
      `/([a-z]){${obj["__min"] ? obj["__min"] : 0}, ${
        obj["__max"] ? obj["__max"] : 0
      }}}/g`
    );
    console.log({ regex });
    const value = regex.test(data);
    if (!value) obj[`error`] = "input must contain a-z";
  };
  return this;
};

Validator.validate = function (data) {
  for (const [key, value] of Object.entries(data)) {
    if (this[`_${key}`]) {
      for (const [key_2, func] of Object.entries(this[`_${key}`])) {
        if (func instanceof Function) {
          func(value, this[`_${key}`]);
          console.log(this[`_${key}`]["error"]);
          if (this[`_${key}`]["error"]) break;
        }
      }
    }
  }
  return this;
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
