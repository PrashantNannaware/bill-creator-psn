import React from 'react';
import BaseTemplate from './BaseTemplate';
import { calculateSubTotal, calculateGrandTotal } from '../../utils/invoiceCalculations';

const Template2 = ({ data }) => {
  const { billTo, invoice, items, tax, notes } = data;
  const yourCompany = data.yourCompany || {}; // Use an empty object as fallback

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 }).format(amount);
  };

  return (
    <BaseTemplate data={data}>
        <div className="flex justify-between mb-4 border-b-2 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-cyan-700">{yourCompany.name || 'Your Company Name'}</h1>
            <p>{yourCompany.address || 'Your Company Address'}</p>
            <p>{yourCompany.phone || 'Your Company Phone'}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold text-cyan-700">Tax invoice</h2>
            <p>INVOICE NUMBER: {invoice?.number || 'N/A'}</p>
            <p>DATE: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 text-cyan-700">Bill To</h3>
          <p>{billTo?.name || 'Client Name'}</p>
          <p>{billTo?.address || 'Client Address'}</p>
          <p>{billTo?.phone || 'Client Phone'}</p>
        </div>

        <div className="mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left border-b">ID</th>
                <th className="p-2 text-left border-b">Description</th>
                <th className="p-2 text-right border-b">Quantity</th>
                <th className="p-2 text-right border-b">Rate</th>
                <th className="p-2 text-right border-b">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-right">{item.quantity}</td>
                  <td className="p-2 text-right">{formatCurrency(item.amount)}</td>
                  <td className="p-2 text-right">{formatCurrency(item.quantity * item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4">
          <div className="w-1/3">
            <div className="flex justify-between mb-2">
              <span>Sub total:</span>
              <span>{formatCurrency(calculateSubTotal(items || []))}</span>
            </div>
            {tax > 0 && (
              <div className="flex justify-between mb-2">
                <span>Tax:</span>
                <span>{formatCurrency(tax || 0)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold bg-cyan-700 text-white p-2">
              <span>Total:</span>
              <span>{formatCurrency(calculateGrandTotal(items || [], tax || 0))}</span>
            </div>
          </div>
        </div>

        {notes && (
          <div className="mt-8 text-sm">
            <p>{notes}</p>
          </div>
        )}
    </BaseTemplate>
  );
};

export default Template2;
