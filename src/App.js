import React, { useState, useEffect } from "react";
import getData from './api/dataService';
import "./App.css";


function calculateResults(incomingData) {
  // Calculate points per transaction

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const pointsPerTransaction = incomingData.map(transaction=> {
    let points = 0;
    const price = transaction.amt;
    if (price >=50 && price < 100) {
      points += price-50;
    } else if (price >100){
      points += (2*(price-100) + 50);
    } else {
      points += 0;
    }
    const month = new Date(transaction.transactionDt).getMonth();
    return {...transaction, points, month};
  });
               
  let byCustomer = {};
  let totalPointsByCustomer = {};
  pointsPerTransaction.forEach(pointsPerTransaction => {
    let {custid, name, month, points} = pointsPerTransaction;   
    if (!byCustomer[custid]) {
      byCustomer[custid] = [];      
    }    
    if (!totalPointsByCustomer[custid]) {
      totalPointsByCustomer[name] = 0;
    }
    totalPointsByCustomer[name] += points;
    if (byCustomer[custid][month]) {
      byCustomer[custid][month].points += points;
      byCustomer[custid][month].monthNumber = month;
      byCustomer[custid][month].numTransactions++;      
    }
    else {
      byCustomer[custid][month] = {
        custid,
        name,
        monthNumber:month,
        month: months[month],
        numTransactions: 1,        
        points
      }
    }    
  });

  let tot = [];
  for (var custKey in byCustomer) {    
    byCustomer[custKey].forEach(cRow=> {
      tot.push(cRow);
    });
  }

  let data = [];
  tot.map(obj => {
    const index = data.findIndex(d => d.name === obj.name);
    if(index > -1){
      data[index].points += obj.points;
    } else {
      data.push({
        name: obj.name,
        points: obj.points
      })
    }
    return 0;
  })
  return {
    summaryByCustomer: tot,
    pointsPerTransaction,
    totalPointsByCustomer:data
  };
}

const App = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => { 
    getData().then((data)=> {             
      const results = calculateResults(data);   
      setTransactionData(results);
    });
  },[]);

  if (transactionData.length === 0) {
    return <div>Loading...</div>;   
  }
  return  <div>       
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Points Rewards System Totals by Customer Months</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Customer</th>
                <th scope="col">Month</th>
                <th scope="col"># of Transactions</th>
                <th scope="col">Reward Points</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.summaryByCustomer.map((obj,index)=> <tr key={index}>
                <th scope="row">{obj.name}</th>
                <td>{obj.month}</td>
                <td>{obj.numTransactions}</td>
                <td>{obj.points}</td>
              </tr>)}
            </tbody>
          </table>      
            </div>
          </div>
        </div>
        
        <div className="container">    
          <div className="row">
            <div className="col-10">
              <h2>Points Rewards System Totals By Customer</h2>
            </div>
          </div>      
          <div className="row">
            <div className="col-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Total Reward Points</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.totalPointsByCustomer.map((obj,index)=> <tr key={index}>
                    <th scope="row">{obj.name}</th>
                    <td>{obj.points}</td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>      
    </div>
  ;
}

export default App;
