const z = require("zod");

exports.registerValidate = z.object({
  name: z.string().trim().min(6, "Name must be content atlist 6 char"),
  email: z.string().trim().email("Email should be proper"),
  password: z.string().min(6, "Password must be content atlist 6 char"),
});

exports.loginValidate = z.object({
  email: z.string().trim().email("Email should be proper"),
  password: z.string().min(6, "Password must be content atlist 6 char"),
});
