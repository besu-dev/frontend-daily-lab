// object is store data like Array but store data in different way like key value pair instead of index value pair.
let user = [
  {
    name: "besufikad",
    age: 25,
    role: "customer",
    isActive: true,
    gender: "male",
  },
  {
    name:"Belay",
    age: 30,
    role: "admin",
    isActive: true,
    gender: "male", 
  },
  {
    name:"Abebe",
    age: 20,
    role: "Service Provider",
    isActive: false,
    gender: "male",
  }
];



for(let i = 0; i < user.length; i++){
    console.log(user[i].role);}
