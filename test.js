import { MarvBot } from "./bot.js";
let bot = new MarvBot("now please reply accurate and as few words as possible");

(async () => {
  await test();
})();

async function test() {
  let ans = await bot.answer(
    "your key isXq6CP, reply 'Copy that' if you received",
  );
  let ans2 = await bot.answer("tell me the key I just send to you");
  console.log("The GPT says:", ans2);
  console.log("test", "Xq6CP" == ans2 ? "pass" : "failure");
}
