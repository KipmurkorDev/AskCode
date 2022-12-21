const { userSchema   } = require("../ValidationHelplers/ValidationHelplers")

module.exports = {
      validateUser: (req, res, next)=>{
            const {error, value} = userSchema(req.body)
            if (error) {
                  let errors = error.details.map(err=>err.message)
                  return res.json(errors)
            }
            req.body = value
            next();
      }
}