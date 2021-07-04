// Variables
let cookies = 90;
let cookiePerClick = 1;
let upgrade1Price = 25;
let upgrade2Price = 100;
let upgrade3Price = 500;
let upgrade4Price = 2000;
let upgrade5Price = 5000;
let upgrade6Price = 10000
let upgrade7Price = 15000
let upgrade8Price = 30000
let upgrade9Price = 50000
let autoIncome = 0;
let canBuyUpgrade1;
let canBuyUpgrade2;
let canBuyUpgrade3;
let canBuyUpgrade4;
let canBuyUpgrade5;
let canBuyUpgrade6;
let canBuyUpgrade7;
let canBuyUpgrade8;
let canBuyUpgrade9;
let autoCookies;
let autoCheckForOpacity;
let checkIfWeCanBuyUpgrade;
let goldenPopUpRequierment;


// Texts & Varibles needs to be in every function beacuse the values of variables changes and then the text does aswell & Same with the opacity of the buttons, needs to be in every functions that effects the cookie value
let requierments = [
  canBuyUpgrade1 = cookies >= upgrade1Price,
  canBuyUpgrade2 = cookies >= upgrade2Price,
  canBuyUpgrade3 = cookies >= upgrade3Price,
  canBuyUpgrade4 = cookies >= upgrade4Price,
  canBuyUpgrade5 = cookies >= upgrade5Price,
  canBuyUpgrade6 = cookies >= upgrade6Price,
  canBuyUpgrade7 = cookies >= upgrade7Price,
  canBuyUpgrade8 = cookies >= upgrade8Price,
  canBuyUpgrade9 = cookies >= upgrade9Price,
];
document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
if (canBuyUpgrade1) {
  document.getElementById("upgrade1id").style.opacity = "1";
} else {
  document.getElementById("upgrade1id").style.opacity = "0.45";
}
if (canBuyUpgrade2) {
  document.getElementById("upgrade2id").style.opacity = "1";
} else {
  document.getElementById("upgrade2id").style.opacity = "0.45";
}
if (canBuyUpgrade3) {
  document.getElementById("upgrade3id").style.opacity = "1";
} else {
  document.getElementById("upgrade3id").style.opacity = "0.45";
}
if (canBuyUpgrade4) {
  document.getElementById("upgrade4id").style.opacity = "1";
} else {
  document.getElementById("upgrade4id").style.opacity = "0.45";
}
if (canBuyUpgrade5) {
  document.getElementById("upgrade5id").style.opacity = "1";
} else {
  document.getElementById("upgrade5id").style.opacity = "0.45";
}
if (canBuyUpgrade6) {
  document.getElementById("upgrade6id").style.opacity = "1";
} else {
  document.getElementById("upgrade6id").style.opacity = "0.45";
}
if (canBuyUpgrade7) {
  document.getElementById("upgrade7id").style.opacity = "1";
} else {
  document.getElementById("upgrade7id").style.opacity = "0.45";
}
if (canBuyUpgrade8) {
  document.getElementById("upgrade8id").style.opacity = "1";
} else {
  document.getElementById("upgrade8id").style.opacity = "0.45";
}
if (canBuyUpgrade9) {
  document.getElementById("upgrade9id").style.opacity = "1";
} else {
  document.getElementById("upgrade9id").style.opacity = "0.45";
}
//-------------------------------------------------------------------------------------------







// UPGRADES AND ONCLICK

let bakeCookie = () => {
  cookies = cookies + cookiePerClick;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
};

upgrade1id.onclick = () => {
  if (canBuyUpgrade1) {
    buyUpgrade1();
  }
};

let buyUpgrade1 = () => {
  cookies = cookies - upgrade1Price;
  cookiePerClick++;
  upgrade1Price = upgrade1Price + 15;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
};

upgrade2id.onclick = () => {
  if (canBuyUpgrade2) {
    buyUpgrade2();
  }
};

let buyUpgrade2 = () => {
  cookies = cookies - upgrade2Price;
  upgrade2Price = upgrade2Price + 75;
  autoIncome = autoIncome + 10;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
};

upgrade3id.onclick = () => {
  if (canBuyUpgrade3) {
    buyUpgrade3();
  }
};

let buyUpgrade3 = () => {
  cookies = cookies - upgrade3Price;
  upgrade3Price = upgrade3Price + 75;
  autoIncome = autoIncome + 10;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
};

upgrade4id.onclick = () => {
  if (canBuyUpgrade4) {
    buyUpgrade4();
  }
};

let buyUpgrade4 = () => {
  cookies = cookies - upgrade4Price;
  upgrade4Price = upgrade4Price + 200;
  autoIncome = autoIncome + 25;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
};

upgrade5id.onclick = () => {
  if (canBuyUpgrade5) {
    buyUpgrade5();
  }
};

let buyUpgrade5 = () => {
  cookies = cookies - upgrade5Price;
  upgrade5Price = upgrade5Price + 350;
  autoIncome = autoIncome + 75;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
};

upgrade6id.onclick = () => {
  if (canBuyUpgrade6) {
    buyUpgrade6();
  }
};

let buyUpgrade6 = () => {
  cookies = cookies - upgrade6Price;
  upgrade6Price = upgrade6Price + 750;
  autoIncome = autoIncome + 200;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML = "Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML = "Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML = "Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML = "Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML = "Price: " + upgrade5Price;
  document.getElementById("price__button__6").innerHTML = "Price: " + upgrade6Price;
  document.getElementById("price__button__7").innerHTML = "Price: " + upgrade7Price;
  document.getElementById("price__button__8").innerHTML = "Price: " + upgrade8Price;
  document.getElementById("price__button__9").innerHTML = "Price: " + upgrade9Price;
  document.getElementById("cps").innerHTML = "Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  canBuyUpgrade6 = cookies >= upgrade6Price;
  canBuyUpgrade7 = cookies >= upgrade7Price;
  canBuyUpgrade8 = cookies >= upgrade8Price;
  canBuyUpgrade9 = cookies >= upgrade9Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
  if (canBuyUpgrade6) {
    document.getElementById("upgrade6id").style.opacity = "1";
  } else {
    document.getElementById("upgrade6id").style.opacity = "0.45";
  }
  if (canBuyUpgrade7) {
    document.getElementById("upgrade7id").style.opacity = "1";
  } else {
    document.getElementById("upgrade7id").style.opacity = "0.45";
  }
  if (canBuyUpgrade8) {
    document.getElementById("upgrade8id").style.opacity = "1";
  } else {
    document.getElementById("upgrade8id").style.opacity = "0.45";
  }
  if (canBuyUpgrade9) {
    document.getElementById("upgrade9id").style.opacity = "1";
  } else {
    document.getElementById("upgrade9id").style.opacity = "0.45";
  }
}


// Auto Income function
let autoCookiesIncomeFunction = () => {
  cookies = cookies + autoIncome;
  document.getElementById("totalCookies").innerHTML = "Cookies: " + cookies;
  document.getElementById("price__button__1").innerHTML ="Price: " + upgrade1Price;
  document.getElementById("price__button__2").innerHTML ="Price: " + upgrade2Price;
  document.getElementById("price__button__3").innerHTML ="Price: " + upgrade3Price;
  document.getElementById("price__button__4").innerHTML ="Price: " + upgrade4Price;
  document.getElementById("price__button__5").innerHTML ="Price: " + upgrade5Price;
  document.getElementById("cps").innerHTML ="Cookies Per Second: " + autoIncome;
  canBuyUpgrade1 = cookies >= upgrade1Price;
  canBuyUpgrade2 = cookies >= upgrade2Price;
  canBuyUpgrade3 = cookies >= upgrade3Price;
  canBuyUpgrade4 = cookies >= upgrade4Price;
  canBuyUpgrade5 = cookies >= upgrade5Price;
  if (canBuyUpgrade1) {
    document.getElementById("upgrade1id").style.opacity = "1";
  } else {
    document.getElementById("upgrade1id").style.opacity = "0.45";
  }
  if (canBuyUpgrade2) {
    document.getElementById("upgrade2id").style.opacity = "1";
  } else {
    document.getElementById("upgrade2id").style.opacity = "0.45";
  }
  if (canBuyUpgrade3) {
    document.getElementById("upgrade3id").style.opacity = "1";
  } else {
    document.getElementById("upgrade3id").style.opacity = "0.45";
  }
  if (canBuyUpgrade4) {
    document.getElementById("upgrade4id").style.opacity = "1";
  } else {
    document.getElementById("upgrade4id").style.opacity = "0.45";
  }
  if (canBuyUpgrade5) {
    document.getElementById("upgrade5id").style.opacity = "1";
  } else {
    document.getElementById("upgrade5id").style.opacity = "0.45";
  }
};

//Auto Cookie interval
autoCookies = setInterval(() => autoCookiesIncomeFunction(), 1000);

// Golden PopUp
