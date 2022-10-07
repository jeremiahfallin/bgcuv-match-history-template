const matches = [
  // {
  //   blue: ["Chris"],
  //   red: ["Jeremiah"],
  //   winner: "blue",
  //   date: "09082022",
  // },
  {
    blue: ["Hayden"],
    red: ["Olivia"],
    winner: "red",
    date: "09082022"
  },
  // {
  //   blue: ["Marcus"],
  //   red: ["Trystan"],
  //   winner: "blue",
  //   date: "09082022",
  // },
  {
    blue: ["Chris"],
    red: ["Olivia"],
    winner: "blue",
    date: "09082022"
  },
  // {
  //   blue: ["Marcus"],
  //   red: ["Zoe"],
  //   winner: "red",
  //   date: "09082022",
  // },
  {
    blue: ["Chris"],
    red: ["Zoe"],
    winner: "blue",
    date: "09082022"
  },
  {
    blue: ["Zoe"],
    red: ["Chris"],
    winner: "blue",
    date: "09092022"
  },
  {
    blue: ["Ella"],
    red: ["Zoe"],
    winner: "red",
    date: "09092022"
  },
  {
    blue: ["Hayden"],
    red: ["Chris"],
    winner: "blue",
    date: "09092022"
  },
  {
    blue: ["Adam"],
    red: ["Hayden"],
    winner: "red",
    date: "09092022"
  },
  {
    blue: ["Quentin"],
    red: ["Chris"],
    winner: "red",
    date: "09092022"
  },
  {
    blue: ["Quentin"],
    red: ["Zoe"],
    winner: "red",
    date: "09092022"
  },
  {
    blue: ["Quentin"],
    red: ["Hayden"],
    winner: "red",
    date: "09092022"
  },
  {
    blue: ["Adam"],
    red: ["Ella"],
    winner: "blue",
    date: "09092022"
  },
  {
    blue: ["Ella"],
    red: ["Quentin"],
    winner: "blue",
    date: "09092022"
  },
  {
    blue: ["Zoe"],
    red: ["Hayden"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Zoe"],
    red: ["Chris"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Zoe"],
    red: ["Quentin"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Zoe"],
    red: ["Emma"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Quentin"],
    red: ["Conner"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Emma"],
    red: ["Conner"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Hayden"],
    red: ["Emma"],
    winner: "blue",
    date: "09142022"
  },
  {
    blue: ["Emma"],
    red: ["Quentin"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Chris"],
    red: ["Emma"],
    winner: "blue",
    date: "09142022"
  },
  {
    blue: ["Chris"],
    red: ["Quentin"],
    winner: "blue",
    date: "09142022"
  },
  {
    blue: ["Hayden"],
    red: ["Chris"],
    winner: "red",
    date: "09142022"
  },
  {
    blue: ["Chris"],
    red: ["Conner"],
    winner: "blue",
    date: "09142022"
  },
  {
    blue: ["Hayden"],
    red: ["Olivia"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Arianna"],
    red: ["Chris"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Conner"],
    red: ["Alex"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Daltyn"],
    red: ["Quentin"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Hayden"],
    red: ["Arianna"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Conner"],
    red: ["Olivia"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Daltyn"],
    red: ["Chris"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Trystan"],
    red: ["Alex"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Hayden"],
    red: ["Conner"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Daltyn"],
    red: ["Arianna"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Trystan"],
    red: ["Olivia"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Zoe"],
    red: ["Chris"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Quentin"],
    red: ["Alex"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Hayden"],
    red: ["Daltyn"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Trystan"],
    red: ["Conner"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Quentin"],
    red: ["Olivia"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Alex"],
    red: ["Chris"],
    winner: "chris",
    date: "10052022"
  },
  {
    blue: ["Hayden"],
    red: ["Trystan"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Quentin"],
    red: ["Conner"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Alex"],
    red: ["Arianna"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Chris"],
    red: ["Olivia"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Quentin"],
    red: ["Trystan"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Alex"],
    red: ["Daltyn"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Chris"],
    red: ["Conner"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Olivia"],
    red: ["Arianna"],
    winner: "blue",
    date: "10052022"
  },
  {
    blue: ["Hayden"],
    red: ["Quentin"],
    winner: "red",
    date: "10052022"
  },
  {
    blue: ["Chris"],
    red: ["Trystan"],
    winner: "red",
    date: "10052022"
  }
  // {
  //   blue: ["Olivia"],
  //   red: ["Daltyn"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Arianna"],
  //   red: ["Conner"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Hayden"],
  //   red: ["Alex"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Chris"],
  //   red: ["Quentin"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Olivia"],
  //   red: ["Zoe"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Arianna"],
  //   red: ["Trystan"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Conner"],
  //   red: ["Daltyn"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Hayden"],
  //   red: ["Chris"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Olivia"],
  //   red: ["Alex"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Arianna"],
  //   red: ["Quentin"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Conner"],
  //   red: ["Zoe"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Daltyn"],
  //   red: ["Trystan"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Trystan"],
  //   red: ["Zoe"],
  //   winner: "",
  //   date: "10052022"
  // },
  // {
  //   blue: ["Zoe"],
  //   red: ["Quentin"],
  //   winner: "",
  //   date: "10052022"
  // },
];

export default matches;
