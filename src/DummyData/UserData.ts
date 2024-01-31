export const allUsers: any = [
    {
      name: "student1",
      city: "city1",
      state: "mh",
      age: 25,
      password: "12345678",
      username: "student1",
      mobilenumber: 123456789,
      email: "student1@gamil.com",
      userType: 'student'
    },
    {
      name: "student2",
      city: "city2",
      state: "Up",
      age: 35,
      password: "12345678",
      username: "student2",
      mobilenumber: 123456781,
      email: "student2@gamil.com",
      userType: 'student'
    },
    {
      name: "college1",
      city: "city1",
      state: "MH",
      age: 31,
      password: "12345678",
      username: "college1",
      College: "RGCER",
      mobilenumber: 123456783,
      email: "college1@gamil.com",
      userType: 'college'
    },
    {
      name: "admin",
      password: "12345678",
      username: "admin",
      mobilenumber: 123456784,
      email: "admin@gamil.com",
      userType: 'admin'
    },
  ];
  
  export const logedInUser = (username: string, password: string) => {
      console.log('username',username)
    return new Promise((res, rej) => {
      return setTimeout(() => {
       
       
          // const userIndex = allUsers.findIndex((user: any) => user.username === username && user.password === password);
          // if (userIndex > -1) {
          //   res({ code: 200, data: allUsers[userIndex], msg: "user found" });
          // } else {
          //   rej({ code: 401, msg: "user not found" });
          // }
       
        // error codes => 200, 201, 400, 401, 500
          const user = allUsers.filter((user: any) => {
          if (user.username === username && user.password === password) {
            return user;
          }
        });
  
        if (user.length > 0) {
          res({ code: 200, data: user[0], msg: "user found" });
        } else {
          rej({ code: 401, msg: "user not found" });
        }
      }, 500);
    });
  };
  