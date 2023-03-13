class User {
    
    constructor(name, surname, age, location) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.location = location;
    }
     static isOlder( x, y) {
       return x.age > y.age
       ? `${x.name} ${x.surname} è più vecchio di ${y.name} ${y.surname}` : `${y.name} ${y.surname} è più vecchio di ${x.name} ${x.surname}`;

    }
  }
  const pierluigiMarzo = new User("Pierluigi","Marzo",31,"Lecce")
//   console.log(pierluigiMarzo);
  const giuliaButtazzo = new User("Giulia","Buttazzo",29,"Vernole")
//   console.log(giuliaButtazzo);
  const paolaButtazzo = new User("Paola","Buttazzo",26,"Vernole")
//   console.log(paolaButtazzo);
  const giovannaAnnesi = new User("Giovanna","Annesi",64,"Lecce")
//   console.log(giovannaAnnesi);
  const vitoMarzo = new User("Vito","Marzo",70,"Lecce")
//   console.log(vitoMarzo);
console.log(User.isOlder(vitoMarzo, giuliaButtazzo));
console.log(User.isOlder(giuliaButtazzo, vitoMarzo));
console.log(User.isOlder(paolaButtazzo, giuliaButtazzo));
console.log(User.isOlder(pierluigiMarzo, giuliaButtazzo));