class Airport {
    constructor(airp){
        this.speed = 0;
        this.airplane = airp;
        this.airplanes = [];
        this.airpos = 10;
    }

    easeInOut(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    move(x, y, planeNum, speed){
        const deltax = x - (parseInt(this.airplanes[planeNum - 1].airplane.style.left) + 35);
        const deltay = y - parseInt(this.airplanes[planeNum - 1].airplane.style.top);
        const rad = Math.atan2(deltay, deltax);
        const grad = (rad * (180 / Math.PI)) + 45;
        this.airplanes[planeNum - 1].airplane.style.transform = "rotate(" + grad + "deg)";
        console.log(grad);

        var moveToBtn = document.getElementById("moveTo");
        moveToBtn.disabled = true;
        var currTop = parseInt(this.airplanes[planeNum - 1].airplane.style.top) - (this.airplanes[planeNum - 1].airplane.offsetHeight / 2);
        var currLeft = parseInt(this.airplanes[planeNum - 1].airplane.style.left) - (this.airplanes[planeNum - 1].airplane.offsetWidth / 2);
        console.log(currLeft);
        var totalTime = 120000 / speed;
        var intervalTime = 50;
        var elapsedTime = 0;

        var int = setInterval(()=>{
            elapsedTime = elapsedTime + intervalTime;
            var progress = elapsedTime / totalTime;
            this.airplanes[planeNum - 1].airplane.style.top = currTop + (y - currTop) * this.easeInOut(progress) + "px";
            this.airplanes[planeNum - 1].airplane.style.left = currLeft + (x - currLeft) * this.easeInOut(progress) + "px";
           
            if(elapsedTime >= totalTime) {
                clearInterval(int);
                moveToBtn.disabled = false;
                this.airplanes[planeNum - 1].airplane.style.top = y + "px";
                this.airplanes[planeNum - 1].airplane.style.left = x + "px";
            }
        }, intervalTime)  
    }

    addAirplane(plane) {
        var container = document.getElementsByClassName("airplane-container")[0];
        plane.airplane.style.left = this.airpos + "px";
        container.appendChild(plane.airplane);
        this.airplanes.push(plane);
        this.airpos = this.airpos + 45;
    }
    
}

//const divRect = div.getBoundingClientRect();
//divRect.left
//divRect.top