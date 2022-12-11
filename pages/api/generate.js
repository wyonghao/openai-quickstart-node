import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  //console.log("PTG,gender",req.body);
 // console.log("PTG,gender",req.body.gender);
 // console.log("PTG,value",req.body.inputValue);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body),
    temperature: 0.6,
    max_tokens: 550,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(UserInputs) {
  const gender = UserInputs.gender;
  const charater = UserInputs.inputValue;
    //animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    //console.log("check capitalizedAnimal",capitalizedAnimal);
    //var my_promt = `起一个网名，性别为: ${gender}，要让人感觉"${charater}"，名字可以古朴。所以网名为：`;
    var my_promt = `Please help on the following quesiton: "${charater}"`;
  console.log("提示为：",my_promt);
  return my_promt;
}
