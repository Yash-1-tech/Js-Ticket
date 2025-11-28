
LOWER = 'Lower_seat';
MIDDLE = 'Middle_seat';
UPPER = 'Upper_seat';

idGenrator = (seatType) => {
    let id = seatType[0] + '-';
    for(let i = 0; i<10; i++){
        id = id + Math.round(Math.random() * 9 - 0);
    }
    return id;
}

function Train( passName, passAge, start, end) {
    this.Name = passName,
    this.Age = passAge;

    // primary age based allottment 
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
    this.id = idGenrator(this.seatType),
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
        document.getElementById('printName').innerHTML = 'Name: ' + passenger.Name + '\t';
        document.getElementById('printId').innerHTML = '| \t '+ 'ID: ' + passenger.id;
        document.getElementById('printAge').innerHTML = 'Age: ' + passenger.Age + '\t';
        document.getElementById('printSeatType').innerHTML = '| \t ' + 'Seat Type: ' + passenger.seatType;
        document.getElementById('printStart').innerHTML = 'Start: ' + passenger.start + '\t';
        document.getElementById('printEnd').innerHTML = '| \t ' + 'End: ' + passenger.end + '\t';
        document.getElementById('printFare').innerHTML = '| \t '+'Fare: Rs.' + passenger.fare;
    });
}
else{
    console.log('form not found');
}


//------------------///
