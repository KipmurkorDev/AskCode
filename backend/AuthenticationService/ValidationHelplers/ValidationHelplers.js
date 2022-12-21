const Joi = require("joi");





const registerSchema = Joi.object({
  Name: Joi.string().required(),
  user_name: Joi.string().alphanum().min(3).max(50),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  user_password: Joi.string().required(),
})
  .with("Name", "user_name")










module.exports = {
  userSchema: (data) => {
    return registerSchema.validate(data);
  },
};
