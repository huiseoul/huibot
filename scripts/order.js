// Description:
//   주문 시 대표님과 현강님을 호출합니다.
//
// Commands:
//   (도시락|맥도날드|버거|배달|식사|치킨|피자) (드시|드실|먹으|배달|시켜|시키|시킬|주문)에 반응합니다.
//
// Author:
//   Jitae Kim

const menus = {
  '맥도날드': 'https://www.mcdelivery.co.kr/kr/browse/menu.html',
  '버거킹': 'https://delivery.burgerking.co.kr/menu/SpecialOffer',
  '본도시락': 'http://www.bondosirak.com/brand/menu_list2.asp',
};
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
  });

  robot.hear(/맥도날드/, (msg) => {
    msg.send(`${prefix} ${menus['맥도날드']}`);
  });

  robot.hear(/버거킹/, (msg) => {
    msg.send(`${prefix} ${menus['버거킹']}`);
  });

  robot.hear(/본\s*도시락/, (msg) => {
    msg.send(`${prefix} ${menus['본도시락']}`);
  });
};
