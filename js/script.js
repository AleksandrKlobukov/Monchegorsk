let mymap = L.map("mapid").setView([67.93930346719567, 32.883585609050535], 10);

L.tileLayer("Mon/{z}/{x}/{y}.png", {
  maxZoom: 12,
  minZoom: 8,
  updateWhenIdle: true,
  updateWhenZooming: false,
}).addTo(mymap);

const markersData = [
  {
    className: "Vitteguba",
    coords: coords_01,
    popupText: text_01,
  },
  {
    className: "Vysokiy",
    coords: coords_02,
    popupText: text_02,
  },
  {
    className: "VysokiyOstrov",
    coords: coords_03,
    popupText: text_03,
  },
  {
    className: "DevichyaLambina",
    coords: coords_04,
    popupText: text_04,
  },
  {
    className: "Dolgoe",
    coords: coords_05,
    popupText: text_05,
  },
  {
    className: "Zhdanova",
    coords: coords_06,
    popupText: text_06,
  },
  {
    className: "Zheleznodorozhnyi",
    coords: coords_07,
    popupText: text_07,
  },
  {
    className: "Imandra",
    coords: coords_08,
    popupText: text_08,
  },
  {
    className: "IokostrovskiiProliv",
    coords: coords_09,
    popupText: text_09,
  },
  {
    className: "Kashkozero",
    coords: coords_10,
    popupText: text_10,
  },
  {
    className: "KetkyavrKent",
    coords: coords_11,
    popupText: text_11,
  },
  {
    className: "KilevaevskiNavolok",
    coords: coords_12,
    popupText: text_12,
  },
  {
    className: "KislayaGuba",
    coords: coords_13,
    popupText: text_13,
  },
  {
    className: "KoimaGuba",
    coords: coords_14,
    popupText: text_14,
  },
  {
    className: "KumuzheBolshoe",
    coords: coords_15,
    popupText: text_15,
  },
  {
    className: "KumuzheMaloe",
    coords: coords_16,
    popupText: text_16,
  },
  {
    className: "Kuna",
    coords: coords_17,
    popupText: text_17,
  },
  {
    className: "Kurenga",
    coords: coords_18,
    popupText: text_18,
  },
  {
    className: "Kutskol",
    coords: coords_19,
    popupText: text_19,
  },
  {
    className: "Laplandiya",
    coords: coords_20,
    popupText: text_20,
  },
  {
    className: "LaplandZapovednik",
    coords: coords_21,
    popupText: text_21,
  },
  {
    className: "Lumbolka",
    coords: coords_22,
    popupText: text_22,
  },
  {
    className: "Markvuppi",
    coords: coords_23,
    popupText: text_23,
  },
  {
    className: "Monche-Guba",
    coords: coords_24,
    popupText: text_24,
  },
  {
    className: "Murmanles",
    coords: coords_25,
    popupText: text_25,
  },
  {
    className: "NefelinovyePeski",
    coords: coords_26,
    popupText: text_26,
  },
  {
    className: "Nittis",
    coords: coords_27,
    popupText: text_27,
  },
  {
    className: "Nud",
    coords: coords_28,
    popupText: text_28,
  },
  {
    className: "NudVerhnii",
    coords: coords_29,
    popupText: text_29,
  },
  {
    className: "NudNizhnii",
    coords: coords_30,
    popupText: text_30,
  },
  {
    className: "Olenya",
    coords: coords_31,
    popupText: text_31,
  },
  {
    className: "OlkhovyiNavolok",
    coords: coords_32,
    popupText: text_32,
  },
  {
    className: "Ostrovskoye",
    coords: coords_33,
    popupText: text_33,
  },
  {
    className: "Peche-Guba",
    coords: coords_34,
    popupText: text_34,
  },
  {
    className: "Pivnus-Ozero",
    coords: coords_35,
    popupText: text_35,
  },
  {
    className: "Pionerskii",
    coords: coords_36,
    popupText: text_36,
  },
  {
    className: "Polovinka",
    coords: coords_37,
    popupText: text_37,
  },
  {
    className: "Priozernyi",
    coords: coords_38,
    popupText: text_38,
  },
  {
    className: "Protoki",
    coords: coords_39,
    popupText: text_39,
  },
  {
    className: "Ras-Navolok",
    coords: coords_40,
    popupText: text_40,
  },
  {
    className: "Rizh-Guba",
    coords: coords_41,
    popupText: text_41,
  },
  {
    className: "Rudnyi",
    coords: coords_42,
    popupText: text_42,
  },
  {
    className: "SobachyaGuba",
    coords: coords_43,
    popupText: text_43,
  },
  {
    className: "SovhozProdsnaba",
    coords: coords_44,
    popupText: text_44,
  },
  {
    className: "SopchaBolshaya",
    coords: coords_45,
    popupText: text_45,
  },
  {
    className: "SopchaMalaya",
    coords: coords_46,
    popupText: text_46,
  },
  {
    className: "SuhoiPorog",
    coords: coords_47,
    popupText: text_47,
  },
  {
    className: "SuchiyaGuba",
    coords: coords_48,
    popupText: text_48,
  },
  {
    className: "Symba",
    coords: coords_49,
    popupText: text_49,
  },
  {
    className: "Travyanoi",
    coords: coords_50,
    popupText: text_50,
  },
  {
    className: "Trostnikovyi",
    coords: coords_51,
    popupText: text_51,
  },
  {
    className: "Chudozero",
    coords: coords_52,
    popupText: text_52,
  },
  {
    className: "ShuchiyaGuba",
    coords: coords_53,
    popupText: text_53,
  },
  {
    className: "YagelnyiBor",
    coords: coords_54,
    popupText: text_54,
  },
  {
    className: "Yarva",
    coords: coords_55,
    popupText: text_55,
  },

  {
    className: "twokm",
    coords: coords_56,
    popupText: text_56,
  },
  {
    className: "ninekm",
    coords: coords_57,
    popupText: text_57,
  },
  {
    className: "twofivekm",
    coords: coords_58,
    popupText: text_58,
  },
  {
    className: "onesixkm",
    coords: coords_59,
    popupText: text_59,
  },
  {
    className: "onesevenkm",
    coords: coords_60,
    popupText: text_60,
  },
  {
    className: "twozerokm",
    coords: coords_61,
    popupText: text_61,
  },
  {
    className: "twosixkm",
    coords: coords_62,
    popupText: text_62,
  },
  {
    className: "twoninekm",
    coords: coords_63,
    popupText: text_63,
  },
  {
    className: "Rikotaibola",
    coords: coords_64,
    popupText: text_64,
  },
];

markersData.forEach((data) => {
  const marker = L.marker(data.coords)
    .bindPopup(data.popupText)
    .openPopup()
    .addTo(mymap);

  const button = document.querySelector(`.${data.className}`);
  button.addEventListener("click", function () {
    mymap.flyTo(marker.getLatLng(), 11);
    setTimeout(() => marker.openPopup(), 500);
  });
});

document.querySelector(".menu-items").addEventListener(
  "wheel",
  function (e) {
    e.stopPropagation();
  },
  true,
);

document.querySelector(".sidebar").addEventListener(
  "wheel",
  function (e) {
    e.stopPropagation();
  },
  true,
);

document.getElementById("toggle-button").addEventListener("click", function () {
  let sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
  }
});

document.querySelector(".menu-items").addEventListener(
  "wheel",
  function (e) {
    e.stopPropagation();
  },
  true,
);

document.querySelector(".menu-items").addEventListener(
  "touchmove",
  function (e) {
    e.stopPropagation();
  },
  true,
);

document.querySelector(".sidebar").addEventListener(
  "wheel",
  function (e) {
    e.stopPropagation();
  },
  true,
);

document.querySelector(".sidebar").addEventListener(
  "touchmove",
  function (e) {
    e.stopPropagation();
  },
  true,
);
