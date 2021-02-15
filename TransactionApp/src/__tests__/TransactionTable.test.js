import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TransactionTable from '../components/TransactionTable';


const transactions = [
    {
        accountNumber: '189873123456789',
        id: 1000000001,
        date: '27-01-20',
        narration: 'atm',
        type: 'dbt',
        amount: 5000
    },{
        accountNumber: '189873123456789',
        id: 1000000002,
        date: '29-01-20',
        narration: 'upi',
        type: 'crt',
        amount: 2000
    }
];

describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = mount(<TransactionTable transactions={transactions}/>);
    const rows = wrapper.find('tr');
    expect(rows.length).toBe(3);

    const firstRowColumns = rows.first().find('td').map(column => column.text())
    console.log(firstRowColumns);
    expect(firstRowColumns.length).toBe(5)// since you have 4 td
    expect(firstRowColumns[0]).toBe('ID')
    expect(firstRowColumns[1]).toBe('Date')
    expect(firstRowColumns[2]).toBe('Narration')

// const SecondRowColumns = rows.last().find('td').map(column => column.text())
//       expect(firstRowColumns.length).to.eql(4)// since you have 4 td
//       expect(firstRowColumns[0]).to.eql('BudgetCategoryName2')
//       expect(firstRowColumns[1]).to.eql(30)
//       expect(firstRowColumns[2]).to.eql(someDate2)
  });
});