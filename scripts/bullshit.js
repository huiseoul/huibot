// Description:
//   헛소리를 합니다.
//
// Commands:
//   huibot 잡담|헛소리
//   (데일리 미팅할 시간이예요)에 반응합니다.
//
// Author:
//   Jitae Kim

const https = require('https');

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

const prefix = ":robot_face:";
const responses = [
  '그렇다고 합니다.',
  '아 벌써?',
  '시간이 그렇게 됐군요.',
  '*alarm-bot* 너도 참여해야지?',
  '회의실로 가시죠.',
];

const getContents = () =>
  new Promise((resolve, reject) => {
    const url = 'https://news.google.com/news?cf=all&hl=ko&pz=1&ned=kr&output=rss';

    https.get(url, (response) => {
      let result = '';

      response.on('data', (data) => {
        result += data.toString();
      });
      response.on('end', () => {
        resolve(result);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });

const generateBullshit = () =>
  getContents().then(data => data.match(/[가-힣]+/g))
               .then(data => data.sample(Math.floor(Math.random() * 15) + 15))
               .then(data => data.join(' '));

module.exports = (robot) => {
  robot.respond(/잡담|헛소리/, (msg) => {
    generateBullshit().then(response => { msg.send(`${prefix} ${response}`); })
                      .catch((err) => {
                        console.log(err);
                        msg.send(`${prefix} 지금은 잡담을 할 수 없어요...`);
                      });
  });

  robot.hear(/데일리 미팅할 시간이예요/, (msg) => {
    const response = responses.sort(() => .5 - Math.random())[0];

    msg.send(`${prefix} ${response}`);
  });
};
