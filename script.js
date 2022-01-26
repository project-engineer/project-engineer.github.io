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
	"35", //palm
	"22", //teratai
	"22", //gundala
	"27", //raflesia
	"27", //sunflower
	"22", //p.terati
	"22", //p. flamboyan
	"35", //pandan
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
	"22" //p kering
];

const date_stamp = [
	"dateFlamboyan_stamp",
	"datePalm_stamp",
	"dateTeratai_stamp",
	"dateGundala_stamp",
	"dateRaflesia_stamp",
	"dateSunflower_stamp",
	"datePackingTeratai_stamp",
	"datePackingFlamboyan_stamp",
	"datePandan_stamp",
	"dateTulip_stamp",
	"dateRC-01_stamp",
	"dateRC-02_stamp",
	"dateRC-03_stamp",
	"dateRC-04_stamp",
	"dateRC-05_stamp",
	"dateRC-06_stamp",
	"dateRC-07_stamp",
	"dateRC-08_stamp",
	"dateColdRoom_stamp",
	"dateGudangBaku_stamp",
	"datePenimbanganBasah_stamp",
	"datePenimbanganKering_stamp"
];

const time_stamp = [
	"timeFlamboyan_stamp",
	"timePalm_stamp",
	"timeTeratai_stamp",
	"timeGundala_stamp",
	"timeRaflesia_stamp",
	"timeSunflower_stamp",
	"timePackingTeratai_stamp",
	"timePackingFlamboyan_stamp",
	"timePandan_stamp",
	"timeTulip_stamp",
	"timeRC-01_stamp",
	"timeRC-02_stamp",
	"timeRC-03_stamp",
	"timeRC-04_stamp",
	"timeRC-05_stamp",
	"timeRC-06_stamp",
	"timeRC-07_stamp",
	"timeRC-08_stamp",
	"timeColdRoom_stamp",
	"timeGudangBaku_stamp",
	"timePenimbanganBasah_stamp",
	"timePenimbanganKering_stamp"
];

for (let i=0; i <ruangan.length; i++) {

	setInterval(function() {
		let xhttp = new XMLHttpRequest();
		let urlBase = "https://script.google.com/macros/s/AKfycbyW51_Rl0jfpPq3OhI-N1s_GNX6IWPJnsLXSgMGKCinE301GfiY-U3vcdYMFKx7n0scug/exec";
		let url = urlBase + "?ruangan=" + ruangan[i] + "&tipe=suhu";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				let x = this.responseText;
				if (x > maxRange[i]) {
					document.getElementById(identitasTemp[i]).innerHTML = "&#x26A0 " + this.responseText  + "<sup>&#8451</sup>";
					document.getElementById(identitasTemp[i]).style.color = "orange";
				} else {
					document.getElementById(identitasTemp[i]).innerHTML = this.responseText + "<sup>&#8451</sup>";
					document.getElementById(identitasTemp[i]).style.color = "green";
				};
			};
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}, 5000);

	setInterval(function() {
		let xhttp = new XMLHttpRequest();
		let urlBase = "https://script.google.com/macros/s/AKfycbyW51_Rl0jfpPq3OhI-N1s_GNX6IWPJnsLXSgMGKCinE301GfiY-U3vcdYMFKx7n0scug/exec";
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

	setInterval(function() {
		let xhttp = new XMLHttpRequest();
		let urlBase = "https://script.google.com/macros/s/AKfycbyW51_Rl0jfpPq3OhI-N1s_GNX6IWPJnsLXSgMGKCinE301GfiY-U3vcdYMFKx7n0scug/exec";
		let url = urlBase + "?ruangan=" + ruangan[i] + "&tipe=dateStamp";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				let Str = this.responseText;
				let newStr = Str.slice(4, 15);
				console.log(newStr);
				document.getElementById(date_stamp[i]).innerHTML = newStr;
			};
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}, 5000);

	setInterval(function() {
		let xhttp = new XMLHttpRequest();
		let urlBase = "https://script.google.com/macros/s/AKfycbyW51_Rl0jfpPq3OhI-N1s_GNX6IWPJnsLXSgMGKCinE301GfiY-U3vcdYMFKx7n0scug/exec";
		let url = urlBase + "?ruangan=" + ruangan[i] + "&tipe=timeStamp";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
				let Str = this.responseText; //22:50
				let Jam = Number(Str.slice(16, 18)); //23
				let Menit = Number(Str.slice(19, 21)); // 15
				let Menit2 = Menit - 25; //-10

				let Menit3 = (Menit2 < 0) ? Menit + 60 - 25 : Menit2; //50

				let Menit4 = (Menit3 < 10) ? "0" + String(Menit3) : Menit3; //50

				let Jam2 = (Menit2 < 0) ? Jam - 1 : Jam; //1:40

				// let Jam_2 = (Jam2 == 0) ? Jam2 + 1 : Jam2;

				let Jam3 = (Jam2 == -1) ? 23 : Jam2;

				let Jam4 = (Jam3 < 10) ? "0" + String(Jam3) : Jam3;

				let Waktu = String(Jam4) + ":" + String(Menit4);

				console.log(Waktu);
				document.getElementById(time_stamp[i]).innerHTML = Waktu;
			};
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}, 5000);
};