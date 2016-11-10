// Description:
//   인사를 돌려줍니다.
//
// Commands:
//   hui-bot 안녕|하이|헬로|hi|hello|hey

const prefix = ":robot_face:";
const responses = [
  '안녕하세요?',
  '아녕하세여',
  '후훗 하이',
  '아령하세여',
  '안뇽',
  '아리영',
  '욥',
  '네',
  '잘 지내시죠?',
  '안녕',
  '아안녀엉하아세에요오',
  '누구세요',
  'sup?',
  '안녕하세욤',
  '안녕하세요오',
  '밥은 드셨나요?',
  'hi',
  'hello',
  '헬로우',
  'yeah',
  'bro',
  "지금 몇시죠?",
  "ㅋㅋ하이",
];

module.exports = (robot) => {
  robot.respond(/안녕|하이|헬로|hi|hello|hey/i, (msg) => {
    let response = responses.sort(() => .5 - Math.random())[0];
    msg.send(`${prefix} ${response}`);
  });
};