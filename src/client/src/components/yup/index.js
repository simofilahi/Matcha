let yup;

let obj = [];

yup = {
  funcs: [],
  string: function () {
    // this.funcs["_string"] = (text) => {
    //   this.error = "error";
    // };
    obj["_string"] = (text) => {};
    this.obj = { ...this.obj, obj };
    console.log(this.funcs);
    return this;
  },
  alphanum: function () {
    // this.funcs["_alphanum"] = (text) => {};
    obj["_alphanum"] = (text) => {};
    return this;
  },
  min: function () {
    // this.funcs["_min"] = (text) => {};
    obj["_min"] = (text) => {};
    this.obj = { ...this.obj, obj };
    return this;
  },
  required: function () {
    // this.funcs = {
    //   ...this.funcs,
    //   _required: () => {
    //     return true;
    //   },
    // };
    return this;
  },
  max: function () {
    obj["_max"] = (text) => {};
    this.obj = { ...this.obj, obj };
    return this;
  },
  integer: function () {
    // this.funcs["_integer"] = (text) => {};
    return this;
  },
  email: function () {
    // this.funcs["_email"] = (text) => {};
    return this;
  },
  password: function () {
    // this.funcs["_password"] = (text) => {};
    return this;
  },
  object: function (data) {
    let obj = {};

    for (const [key] of Object.entries(data))
      this[`_${key}`] = { ...this.funcs };
    this.funcs = {};
    return this;
  },
  validate: function (data) {
    for (const [key, value] of Object.entries(data)) {
      if (this[`_${key}`]) {
        for (const [key_2, func] of Object.entries(this[`_${key}`])) {
          if (this.error) {
            return this;
          } else func(value);
        }
      }
    }
    return this;
  },
};

const schema = yup.object({
  username: yup.string().max(30),
  password: yup.string().min(30),
});

// - create;
// - cp into new object;
// - drop from old object;

console.log(schema);

schema.validate({ username: "simao" });

// console.log(schema);
// export default yup;
