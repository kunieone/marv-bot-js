import { MarvBot } from "./bot.js";
let bot = new MarvBot(
  "hello now your name is Marv, you are a kind AI robot.\n",
);

(async () => {
  let ans = await bot.answer(
    "Tell me from a number theory point of view why 1+1=2",
  );
  let ans2 = await bot.answer("provide more infomation");
  console.log(ans, ans2);
})();
