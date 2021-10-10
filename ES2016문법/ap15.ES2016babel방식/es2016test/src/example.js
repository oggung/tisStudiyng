//문법에 따른 임포트 방식의 차이...

const a = 1;
const b = 2;
export {a};
export const c = 3;
export default b; // 파일당 한번만 사용 가능하다.