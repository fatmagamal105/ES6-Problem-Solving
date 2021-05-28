const User_Information = {
    name: "Fatma-Alzahraa",
    age: 25,
    address: "assuit",
    faculty: "Faculty of Engineering ",
    job: "Software Developer",
    course: "Frontend and creoss-mobile platform",
    };
    User_Information[Symbol.iterator] = function* () {
      let prop = Object.keys(this);
      for (let index = 0; index < prop.length; index++) {
        let key = prop[index];
        yield [key, this[key]];
      }
    };
    for (let Information_user of User_Information) {
      console.log(Information_user);
    }