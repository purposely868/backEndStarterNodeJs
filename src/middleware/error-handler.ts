import { Request, Response } from "express";

const errorHandlerMiddleware = async (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
