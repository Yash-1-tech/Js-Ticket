LOWER = 'Lower_seat';
MIDDLE = 'Middle_seat';
UPPER = 'Upper_seat';
let x = 0;

function Train( passName, passAge, start, end) {
    this.passName = passName,
    this.passAge = passAge;
    
    const seatType = passAge => {
        if (passAge > 60) {
            return LOWER;
        }
        else if(passAge > 40){
            return MIDDLE
        }
        else {
            return UPPER
        }
    };
    this.seatType = seatType(passAge);
    this.start = start,
    this.end = end;

    const route = (start,end) => {
        const distance = {'pune':0,'mumbai':155, 'jaipur':1195, 'delhi':1405};
        const distTravel = distance[end]- distance[start];
        const fare = (distTravel / 20);
        return {fare, distTravel};
    };

    const result = route(start,end);
    this.fare = result.fare
    this.distance = result.distTravel
}

const yash = new Train('Yash',44,'pune','delhi');
yash.seatType = 'changed';
console.log(yash);

const form = document.getElementById('passengerForm');
if(form){
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const passenger = new Train(
        document.getElementById('name').value,
        document.getElementById('age').value,
        document.getElementById('start').value,
        document.getElementById('end').value,
        );
        console.log(passenger);
    });
}
else{
    console.log('form not found');
}


//------------------///
