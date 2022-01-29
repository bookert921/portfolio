import {
  GatsbyFunctionRequest,
  GatsbyFunctionResponse,
} from "gatsby";
// import emailjs from "@emailjs/browser";
import fetch from "node-fetch";

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    service_id: process.env.EMAILJS_SERVICE,
    template_id: process.env.EMAILJS_TEMPLATE,
    user_id: process.env.EMAILJS_ID,
    accessToken: process.env.EMAILJS_TOKEN,
    template_params: {
      name: req.body.name,
      message: req.body.message,
      email: req.body.email,
      subject: req.body.message,
    },
  };

  try {
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  // if (req.method !== "POST") return;
  // emailjs.init(process.env.EMAILJS_ID as string);
  // try {
  //   if (req.body) {
  //     const response = await emailjs.send(
  //       process.env.EMAILJS_SERVICE as string,
  //       process.env.EMAILJS_TEMPLATE as string,
  //       req.body
  //     );
  //     return res.status(200).send(response);
  //   }
  // } catch (error) {
  //   let errMsg = "";
  //   if (error instanceof Error) {
  //     errMsg = error.message;
  //   }
  //   console.log(errMsg);
  //   return res.status(500).json({
  //     message: "There was an error",
  //     error: errMsg,
  //   });
  // }
}
