console.log("hi~");

function getToken(length) {
  const result = String(Math.floor(Math.random() * 10 ** length)).padStart(
    length,
    "0"
  );

  return result;
}

console.log(getToken(8));
