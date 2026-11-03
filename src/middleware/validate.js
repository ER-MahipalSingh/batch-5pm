exports.validate = (schema) => {

  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues.map((issue) => ({
          errPath: issue.path.join("."),
          errMessage: issue.message,
        })),
      });
    }
    
    req.body = result.data;
    next();
  };
};
