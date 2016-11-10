// Description:
//   주문 시 대표님과 현강님을 호출합니다.
//
// Commands:
//   (도시락|맥도날드|버거|배달|식사|치킨|피자) (드시|드실|먹으|배달|시켜|시키|시킬|주문)에 반응합니다.
//
// Author:
//   Jitae Kim

const prefix = ":robot_face:";
const responses = [
  '주문하시겠어요?',
  '주문하셔야죠?',
  '드실거죠?',
  '같이 드실래요?',
];

module.exports = (robot) => {
  robot.hear(/(?=.*(도시락|맥도날드|버거|식사|치킨|피자).*)(?=.*(드시|드실|먹으|배달|시켜|시키|시킬|주문).*)/, (msg) => {
    const response = responses.sort(() => .5 - Math.random())[0];

    msg.send(`${prefix} <@howon86>, <@hyungang.yang> ${response}`);
  });
};
