const btnCheckReward = document.getElementById("btnCheckReward");
btnCheckReward.onclick = function () {
  const number_1 = document.getElementById("number_1").value * 1;
  let result = 0;
  let reward = 100000 * number_1;
    result = "Đã đi làm được " + number_1 + " ngày, " + " có số lương là " + reward;
    const pInfo_1 = document.getElementById("pInfo_1");
    pInfo_1.innerHTML = result.toLocaleString();
}


const btnTinhTB = document.getElementById("btnTinhTB");
btnTinhTB.onclick = function () {
  const number_2 = document.getElementById("number_2").value * 1;
  const number_3 = document.getElementById("number_3").value * 1;
  const number_4 = document.getElementById("number_4").value * 1;
  const number_5 = document.getElementById("number_5").value * 1;
  const number_6 = document.getElementById("number_6").value * 1;
  let result = 0;
  let TB = (number_2 + number_3 + number_4 + number_5 + number_6) / 2 ;
    result = "Trung bình của 5 số là " + TB;
    const pInfo_2 = document.getElementById("pInfo_2");
    pInfo_2.innerHTML = result;
}


const btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
    const number_7 = document.getElementById("number_7").value * 1;
    let result = 0;
    let GT = number_7 * 23500;
    result = "Số tiền quy đổi được là: " + GT + " VNĐ"
    const pInfo_3 = document.getElementById("pInfo_3");
    pInfo_3.innerHTML = result;
}


const btnCDCR = document.getElementById("btnCDCR");
btnCDCR.onclick = function () {
    const ChieuDai = document.getElementById("ChieuDai").value * 1;
    const ChieuRong = document.getElementById("ChieuRong").value * 1;
    let result = 0;
    let ChuVi = (ChieuDai + ChieuRong) * 2;
    let DienTich = ChieuDai * ChieuRong;
    result = "Hình chữ nhật có chu vi là " + ChuVi + " và diện tích là " + DienTich;
    const pInfo_4 = document.getElementById("pInfo_4");
    pInfo_4.innerHTML = result;
}

const btnTong2kyso = document.getElementById("btnTong2kyso");
btnTong2kyso.onclick = function () {
    const number_8 = document.getElementById("number_8").value * 1;
    let result = 0;
    let DonVi = number_8 % 10;
    let Chuc = Math.floor(number_8 / 10);
    let TongHaiKySo = DonVi + Chuc;
    result = "Tổng của hai ký số là: " + TongHaiKySo;
    const pInfo_5 = document.getElementById("pInfo_5");
    pInfo_5.innerHTML = result;
}

