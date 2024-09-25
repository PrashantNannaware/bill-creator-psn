import React from 'react';
import { format } from 'date-fns';
import BaseTemplate from './BaseTemplate';
import { calculateSubTotal, calculateGrandTotal } from '../../utils/invoiceCalculations';

const Template4 = ({ data }) => {
  const { billTo, invoice, from, items, tax, notes } = data;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  const subTotal = calculateSubTotal(items);
  const total = calculateGrandTotal(items, tax);

  return (
    <BaseTemplate data={data}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-purple-600 mb-4">Invoice</h1>
            <p><span className="font-semibold">Invoice#:</span> {invoice.number}</p>
            <p><span className="font-semibold">Invoice Date:</span> {format(new Date(invoice.date), 'MMM dd, yyyy')}</p>
            <p><span className="font-semibold">Due Date:</span> {format(new Date(invoice.paymentDate), 'MMM dd, yyyy')}</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold">{from.name}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Billed by</h3>
            <p>{from.name}</p>
            <p>{from.address}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Billed to</h3>
            <p>{billTo.name}</p>
            <p>{billTo.address}</p>
          </div>
        </div>

        <table className="w-full mb-8">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-2 text-left">Item #/Item Description</th>
              <th className="p-2 text-right">Qty.</th>
              <th className="p-2 text-right">Rate</th>
              <th className="p-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-2">{item.name}</td>
                <td className="p-2 text-right">{item.quantity}</td>
                <td className="p-2 text-right">{formatCurrency(item.amount)}</td>
                <td className="p-2 text-right">{formatCurrency(item.quantity * item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mb-8">
          <div className="w-1/2">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Terms and Conditions</h3>
            <ol className="list-decimal list-inside">
              <li>Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.</li>
              <li>Please quote invoice number when remitting funds.</li>
            </ol>
          </div>
          <div className="w-1/3">
            <p className="flex justify-between"><span>Sub Total:</span> <span>{formatCurrency(subTotal)}</span></p>
            <p className="flex justify-between"><span>Tax:</span> <span>{formatCurrency(tax)}</span></p>
            <p className="flex justify-between font-bold text-lg mt-2"><span>Total:</span> <span>{formatCurrency(total)}</span></p>
          </div>
        </div>

        {notes && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Additional Notes</h3>
            <p>{notes}</p>
          </div>
        )}
      </div>
    </BaseTemplate>
  );
};

export default Template4;