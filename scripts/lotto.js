// Description:
//   로또 번호를 출력합니다.
//
// Commands:
//   huibot 로또|복권|lotto
//
// Author:
//   Jitae Kim

Array.prototype.sample = function(n) {
  const result = this.slice();
  const count = Math.min(n, result.length);

  for (let i = 0 ; i < count ; i++) {
    const x = Math.floor(Math.random() * result.length);

    const temp = result[i];
    result[i] = result[x];
    result[x] = temp;
  }

  return result.slice(0, count);
}

const generate = () =>
  Array.apply(null, Array(45))
       .map((_, i) => i + 1)
       .sample(6)
       .sort((x, y) => x - y)
       .join(', ');

const prefix = ":robot_face:";

module.exports = (robot) => {
  robot.respond(/(로또|복권|lotto)/i, (msg) => {
    msg.send(`${prefix} 로또 번호는 ${generate()} 입니다. 당첨되세요!`);
  });
};
