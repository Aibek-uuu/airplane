class City {
    constructor(name, x, y){
        this.name = name;
        this.top = y;
        this.left = x;
        this.createCity();
    }

    createCity() {
        var divContainer = document.createElement("div");
        divContainer.style.top = this.top + "px";
        divContainer.style.left = this.left + "px";
        divContainer.style.position = "absolute";
        document.body.appendChild(divContainer);

        var divCity = document.createElement("div");
        divCity.classList.add("city");
        divContainer.appendChild(divCity);

        var divText = document.createElement("div");
        divText.innerText = this.name;
        divContainer.appendChild(divText);
    }
}


//поменят фон. 