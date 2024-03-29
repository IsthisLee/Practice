function checkValidationPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

function getToken(count) {
  if (count === undefined) {
    console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!");
    return;
  } else if (count <= 0) {
    console.log("에러 발생!!! 갯수가 너무 적습니다!!!");
    return;
  } else if (count > 10) {
    console.log("에러 발생!!! 갯수가 너무 많습니다!!!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  return result;
  // console.log(result)
}

function sendTokenToSMS(fff, ggg) {
  console.log(fff + "번호로 인증번호" + ggg + "를 전송합니다!!");
}

// 메인 함수
function createTokenOfPhone(myPhone, count) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myPhone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken(count);

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myPhone, myToken);
  }
}

createTokenOfPhone("01012345678", 8);
