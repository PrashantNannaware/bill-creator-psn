import React from 'react';
import BaseTemplate from './BaseTemplate';
import { calculateSubTotal, calculateGrandTotal } from '../../utils/invoiceCalculations';

const Template3 = ({ data }) => {
  const { billTo, invoice, from, items, tax } = data;

  return (
    <BaseTemplate data={data}>
      <div className="bg-blue-500 text-white p-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="bg-white text-blue-500 p-2 inline-block rounded">
              <h1 className="text-2xl font-bold">{from.name}</h1>
            </div>
            <p className="mt-2">{from.address}</p>
            <p>{from.phone}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">BILLED TO</h2>
            <p>{billTo.name}</p>
            <p>{billTo.address}</p>
            <p>{billTo.phone}</p>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <div>
            <p>Invoice #: {invoice.number}</p>
            <p>Invoice Date: {invoice.date}</p>
          </div>
          <div className="text-right">
            <p>Due Date: {invoice.paymentDate}</p>
            <p>Due Amount: ₹{calculateGrandTotal(items, tax)}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <table className="w-full mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">ITEM NAME/ITEM DESCRIPTION</th>
              <th className="p-2 text-right">QTY.</th>
              <th className="p-2 text-right">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="p-2">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </td>
                <td className="p-2 text-right">{item.quantity}</td>
                <td className="p-2 text-right">₹{(item.quantity * item.amount).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <div className="w-1/3">
            <div className="flex justify-between mb-2">
              <span>Sub Total:</span>
              <span>₹ {calculateSubTotal(items)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxable Amount:</span>
              <span>₹ {calculateSubTotal(items)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax:</span>
              <span>₹ {tax}</span>
            </div>
            <div className="flex justify-between font-bold bg-blue-500 text-white p-2 mt-4">
              <span>Total Due Amount</span>
              <span>₹{calculateGrandTotal(items, tax)}</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold mb-2">TERMS AND CONDITIONS</h3>
          <p>Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.</p>
          <p>Please quote invoice number when remitting funds.</p>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Template3;
