const ruangan = [
	"Flamboyan",
	"Palm",
	"Teratai",
	"Gundala",
	"Raflesia",
	"Sunflower",
	"Packing Teratai",
	"Packing Flamboyan",
	"Pandan",
	"Tulip",
	"RC-01",
	"RC-02",
	"RC-03",
	"RC-04",
	"RC-05",
	"RC-06",
	"RC-07",
	"RC-08",
	"Cold Room",
	"Gudang Baku",
	"Penimbangan Basah",
	"Penimbangan Kering"
];
const identitasTemp = [
	"tempFlamboyan",
	"tempPalm",
	"tempTeratai",
	"tempGundala",
	"tempRaflesia",
	"tempSunflower",
	"tempPackingTeratai",
	"tempPackingFlamboyan",
	"tempPandan",
	"tempTulip",
	"tempRC-01",
	"tempRC-02",
	"tempRC-03",
	"tempRC-04",
	"tempRC-05",
	"tempRC-06",
	"tempRC-07",
	"tempRC-08",
	"tempColdRoom",
	"tempGudangBaku",
	"tempPenimbanganBasah",
	"tempPenimbanganKering"
];
const identitasHum = [
	"humFlamboyan",
	"humPalm",
	"humTeratai",
	"humGundala",
	"humRaflesia",
	"humSunflower",
	"humPackingTeratai",
	"humPackingFlamboyan",
	"humPandan",
	"humTulip",
	"humRC-01",
	"humRC-02",
	"humRC-03",
	"humRC-04",
	"humRC-05",
	"humRC-06",
	"humRC-07",
	"humRC-08",
	"humColdRoom",
	"humGudangBaku",
	"humPenimbanganBasah",
	"humPenimbanganKering"
];

const maxRange = [
	"22", //flamboyan
	"22", //palm
	"22", //teratai
	"22", //gundala
	"27", //raflesia
	"27", //sunflower
	"22", //p.terati
	"22", //p. flamboyan
	"27", //pandan
	"25", //tulip
	"4", //rc1
	"4", //rc2
	"4", //rc3
	"4", //rc4
	"4", //rc5
	"4", //rc6
	"4", //rc7
	"4", //rc8
	"4", //coldroom
	"25", //gudang baku
	"22", //p basah
	"22", //p kering
];

for (let i=0; i <ruangan.length; i++) {
	setInterval(function() {
		let xhttp = new XMLHttpRequest();
		let urlBase = "https://script.google.com/macros/s/AKfycbzSBYTERW8lvuolLt7QifEVSmd093Ue55Ur2QvdqWEM0y_UJTxMnxKuf9Kkgg_Sk9SFfQ/exec";
		let url = urlBase + "?ruangan=" + ruangan[i] + "&tipe=suhu";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				let x = this.responseText;
				if (x > maxRange[i]) {
					document.getElementById(identitasTemp[i]).innerHTML = "&#x26A0 " + this.responseText  + "<sup>&#8451</sup>";
					document.getElementById(identitasTemp[i]).style.color = "orange"
				} else {
					document.getElementById(identitasTemp[i]).innerHTML = this.responseText + "<sup>&#8451</sup>";
				}
			};
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}, 5000);

	setInterval(function() {
		let xhttp = new XMLHttpRequest();
		let urlBase = "https://script.google.com/macros/s/AKfycbzSBYTERW8lvuolLt7QifEVSmd093Ue55Ur2QvdqWEM0y_UJTxMnxKuf9Kkgg_Sk9SFfQ/exec";
		let url = urlBase + "?ruangan=" + ruangan[i] + "&tipe=lembab";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				document.getElementById(identitasHum[i]).innerHTML = this.responseText + "<sup>%</sup>";
			};
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}, 5000);
}