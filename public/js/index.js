// html 의 document가 모두 로드되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행
// 표준
window.addEventListener("load", function () {});

// html 만 로드 완료를 체크한다.
window.addEventListener("DOMContentLoaded", function () {
  console.log("로딩 완료");
});
