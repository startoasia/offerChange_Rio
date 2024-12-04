// offer01
$(".offer_01 .btn-lightShow").click(function () {
  $(".offer_01 .natural").toggleClass("d-none");
  $(".offer_01 .light").toggleClass("d-none");
});
$(".offer_01 .btn-natural").click(function () {
  $(".offer_01 .natural").toggleClass("d-none");
  $(".offer_01 .light").toggleClass("d-none");
});
// offer02
$(".offer_02 .btn-lightShow").click(function () {
  $(".offer_02 .natural").toggleClass("d-none");
  $(".offer_02 .light").toggleClass("d-none");
});
$(".offer_02 .btn-natural").click(function () {
  $(".offer_02 .natural").toggleClass("d-none");
  $(".offer_02 .light").toggleClass("d-none");
});
// offer3
$(".offer_03 .btn-lightShow").click(function () {
  $(".offer_03 .natural").toggleClass("d-none");
  $(".offer_03 .light").toggleClass("d-none");
});
$(".offer_03 .btn-natural").click(function () {
  $(".offer_03 .natural").toggleClass("d-none");
  $(".offer_03 .light").toggleClass("d-none");
});

// 收合視窗
// Q1
$(".saleBtn").click(function () {
  $(".saleShow").toggleClass("show");
});

function checkTimeHeaderCTA() {
  const headerCTA = document.querySelector('.headerCTA')
  let now = new Date();
  // 倒數計時出現
  let show = new Date("6/24/2024 00:00:00");

  // 第一次活動截止時間
  let fut = new Date("7/14/2024 23:59:59");
  if (now >= show && now <= fut) {
    headerCTA.style.display = "blcok";
  } else {
    headerCTA.style.display = "none";
  }

}
checkTimeHeaderCTA()

