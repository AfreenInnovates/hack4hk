import React from 'react';

const TransactionDetails: React.FC = () => {
  const transactions = [
    {
      id: "TXN12345",
      date: "2024-12-01",
      donorName: "John Doe",
      amount: 100,
      currency: "USD",
    },
    {
      id: "TXN12346",
      date: "2024-12-02",
      donorName: "Jane Smith",
      amount: 250,
      currency: "EUR",
    },
    {
      id: "TXN12347",
      date: "2024-12-05",
      donorName: "Mike Johnson",
      amount: 150,
      currency: "USD",
    },
  ];

  const targetAmount = {
    amount: 1000,
    currency: "USD",
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Transaction Details</h1>
        <p className="text-gray-700 mb-6 text-center">
          Below are the details of incoming funds for your campaign. You can track all transactions here.
        </p>

        {/* Target Amount Section */}
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold text-primary-dark">Target Amount</h2>
          <p className="text-gray-700 text-sm">
            The campaign is aiming to raise a total of{" "}
            <span className="font-bold">
              {targetAmount.amount} {targetAmount.currency}
            </span>
            .
          </p>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Transaction ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Donor Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{transaction.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{transaction.donorName}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.amount} {transaction.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
