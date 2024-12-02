class airplane {
    constructor(airp){
        this.speed = 0;
        this.airplaneNumber = airp;
        const newDiv = document.createElement("div");
        newDiv.classList.add("airplane");
        newDiv.id = "airplane" + this.airplaneNumber;
        newDiv.style.top = "115px";
        this.airplane = newDiv;
    } 

}







































/*<!DOCTYPE html>
<html>
<head>
    <title>Weather Forecast</title>
</head>
<body>
    <h1>Weather Forecast</h1>
    <label for="cities">Choose a city:</label>
    <select name="cities" id="cities"></select>
    <button type="button" id="btnforecast">Get Forecast</button>
    <div id="output" style="margin-top: 20px; border: 1px solid #ccc; padding: 10px;">
        <strong>Forecast will appear here</strong>
    </div>

    <script>
        class City {
            constructor(name, latitude, longitude) {
                this.name = name;
                this.latitude = latitude;
                this.longitude = longitude;
            }
        }

        class MeteoApi {
            constructor() {
                this.baseUrl = "https://api.open-meteo.com/v1/forecast?";
            }

            getForecast(latitude, longitude) {
                const url = `${this.baseUrl}latitude=${latitude}&longitude=${longitude}&current_weather=true`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log("Forecast data:", data);
                        this.displayForecast(data.current_weather);
                    })
                    .catch(error => console.error("Error fetching data:", error));
            }

            displayForecast(data) {
                // Найти элемент для отображения
                const outputDiv = document.getElementById("output");

                // Проверка на наличие данных
                if (!data) {
                    outputDiv.innerHTML = "<p>No forecast data available.</p>";
                    return;
                }

                // Форматировать и выводить данные
                outputDiv.innerHTML = `
                    <h3>Weather Information</h3>
                    <p><strong>Temperature:</strong> ${data.temperature}°C</p>
                    <p><strong>Wind Speed:</strong> ${data.windspeed} km/h</p>
                `;
            }
        }

        // Массив для хранения городов
        const arrCity = [
            new City("Bishkek", 42.882004, 74.582748),
            new City("Balykchy", 42.28, 76.11)
        ];

        // Создаем массив для API
        const apiList = [];
        apiList.push(new MeteoApi());

        const select = document.getElementById("cities");
        const btnforecast = document.getElementById("btnforecast");

        // Заполняем select городами
        arrCity.forEach((city, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.innerHTML = city.name;
            select.appendChild(opt);
        });

        // Добавляем слушатель на кнопку прогноза
        btnforecast.addEventListener("click", () => {
            const selectedIndex = select.value; // Получаем индекс выбранного города
            const selectedCity = arrCity[selectedIndex]; // Выбираем город по индексу

            // Вызываем getForecast() у первого API в списке (apiList[0])
            apiList[0].getForecast(selectedCity.latitude, selectedCity.longitude);
        });
    </script>
</body>
</html>
*/