let userName = prompt("Lütfen adınızı girin:");
document.getElementById("myName").textContent = userName ? userName : "Misafir";

// Saati dakikayı ve saniyeyi göstermek içim
function showTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const day = days[now.getDay()];

  document.getElementById(
    "myClock"
  ).textContent = `${hours}:${minutes}:${seconds} ${day}`;
}

// setInterval belirtilen süre boyunca fonksiyonu tekrarlı olarak çalıstırır.
setInterval(showTime, 1000);

// Anlık olarak saat ve tarihi göstermek için

showTime();
