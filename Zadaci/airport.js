"strict mode";


(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        this.number = number || Math.random() * 100;
        this.category = category || "e";
        if (this.category !== "e" || this.category !== "b") {
            console.log("invalid input");
        }
    }
    Seat.prototype.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
    }
    Passenger.prototype.getData = function () {
          return this.seat.getData() + ", " + this.person.getData();
    }

    function Flight(relation, date) {
        var listOfPassengers = [];
        this.relation = relation;
        this.date = new Date(date);
    }

    Flight.prototype.addPassenger = function (passenger) {
        if (!passenger || !(passenger instanceof Passenger)) {
            console.log("Invalid input");
        }
        this.listOfPassengers.push(passenger);
    }

    Flight.prototype.getData = function () {
        return this.date + ", " + this.relation + ", " + this.listOfPassengers;
    }

    function Airport() {
        this.name = "Nikola Tesla";
        var listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flight) {
        if (!fligt || !(flight instanceof Flight)) {
            console.log("Not a flight!!!!!!!!!!!!!!!!!!!!");
        }
        this.listOfFlights.push(flight);
    }



    var otac = new Person("pera", "mika");
    var putnik = new Passenger(otac, 23);

    console.log(putnik);









})();