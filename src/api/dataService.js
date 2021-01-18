

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Rahul",
          amt: 120,
          transactionDt: "05-01-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 75,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 94,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 10,
          transactionDt: "06-01-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 75,
          transactionDt: "06-21-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 200,
          transactionDt: "07-01-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 1,
          transactionDt: "07-04-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 80,
          transactionDt: "07-03-2020"
        },
        {
          custid: 1,
          name: "Rahul",
          amt: 224,
          transactionDt: "07-21-2020"
        },
        {
          custid: 2,
          name: "Srikanth",
          amt: 125,
          transactionDt: "05-01-2020"
        },
        {
          custid: 2,
          name: "Srikanth",
          amt: 75,
          transactionDt: "05-21-2020"
        },
        {
          custid: 2,
          name: "Srikanth",
          amt: 10,
          transactionDt: "06-01-2020"
        },
        {
          custid: 2,
          name: "Srikanth",
          amt: 75,
          transactionDt: "06-21-2020"
        },
        {
          custid: 2,
          name: "Srikanth",
          amt: 200,
          transactionDt: "07-01-2020"
        },
        {
          custid: 2,
          name: "Srikanth",
          amt: 224,
          transactionDt: "07-21-2020"
        },
        {
          custid: 3,
          name: "Chandu",
          amt: 120,
          transactionDt: "06-21-2020"
        }
    ]
  );
};