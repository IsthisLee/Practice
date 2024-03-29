/** 배열 타입 */
const arr1: number[] = [1, 2, 3]; // 주로 사용하는 방식
const arr2: Array<number> = [1, 2, 3]; // 제네릭 타입

const arr3: string[] = ["hi", "hello", "bye"];
const arr4: Array<string> = ["hi", "hello", "bye"];

// 설계가 잘못됐을 경우 아래와 같이 타입이 다양하게 들어갈 수 있음
// 특정 상황(지형, 3D 등)에서는 사용될 수도 있음.
const arr5 = [1, true, false, "haha", {}];
// 예시
const arr6: (string | number | boolean | { name: string })[] = [
  1,
  true,
  false,
  "haha",
  { name: "홍길동" }
];

// 실제로는 다음과 같은 타입으로 백엔드에서 사용됨.
// 즉, 객체로 이루어진 배열이 됨.
const arr7 = [
  {
    name: "홍길동",
    age: 24,
    city: "Seoul",
    board: {
      title: "게시글 제목",
      content: "게시글 내용",
      date: "2021-01-01",
      statistics: {
        view: 100,
        like: 10,
        dislike: 1
      }
    },
    comment: [
      {
        content: "댓글 내용",
        date: "2021-01-01",
        like: 10,
        dislike: 1
      }
      // ...
    ]
  }
  // ...
];
interface IPerson {
  name: string;
  age: number;
  city?: string; // ?는 있어도 되고 없어도 되는 것을 의미
}
const arr8: IPerson[] = [
  {
    name: "홍길동",
    age: 24,
    city: "Seoul"
  },
  {
    name: "홍길동",
    age: 24
  },
  {
    name: "홍길동",
    age: 24
  }
];
// 아래와 같이 안전하게 접근할 수 있음
arr8.forEach((person) => console.log(person?.city ?? "default"));

/** 튜플 */
// 자바스크립트는 튜플이 없지만, 논리적으로 튜플이 존재함
// 튜플 - 배열의 길이 length와 안에 원소를 바꿀 수 없는 자료구조. - 불변성 유지
// 즉, 불변성 유지를 위해 안전하게 배열 대신 튜플을 사용할 수 있음
const arr9: [number, boolean, string, object, any[]] = [
  1,
  true,
  "hello",
  {},
  []
];
console.log(arr9);
arr9.push("ohohoh");
console.log(arr9); // 논리적인 튜플 자료구조라 push를 사용해도 적용됨. 한계가 존재. 추후 함수형 프로그래밍 시 활용됨.
