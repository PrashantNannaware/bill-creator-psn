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
              <h1 className="text-2xl font-bold">{from.name || 'FOOBAR LABS'}</h1>
            </div>
            <p className="mt-2">{from.address}</p>
            <p>GSTIN: {from.gstin || '29VGCED1234K2Z6'}</p>
            <p>PAN: {from.pan || 'VGCED1234K'}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">BILLED TO</h2>
            <p>{billTo.name}</p>
            <p>{billTo.address}</p>
            <p>GSTIN: {billTo.gstin || '29VGCED1234K2Z6'}</p>
            <p>PAN: {billTo.pan || 'VGCED1234K'}</p>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <div>
            <p>Invoice #: {invoice.number || 'REF/2020-21/017'}</p>
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
              <th className="p-2 text-right">HSN</th>
              <th className="p-2 text-right">QTY.</th>
              <th className="p-2 text-right">GST RATE</th>
              <th className="p-2 text-right">IGST</th>
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
                <td className="p-2 text-right">{item.hsn || '0056'}</td>
                <td className="p-2 text-right">{item.quantity}</td>
                <td className="p-2 text-right">9%</td>
                <td className="p-2 text-right">₹{(item.amount * 0.09).toFixed(2)}</td>
                <td className="p-2 text-right">₹{(item.quantity * item.amount).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between">
          <div className="w-1/2">
            <h3 className="font-semibold mb-2">BANK AND UPI DETAILS</h3>
            <p>Bank Name: HDFC Bank</p>
            <p>Account Holder Name: {from.name || 'Foobar Labs'}</p>
            <p>Account Number: 45366287987</p>
            <p>IFSC: HDFC0018159</p>
            <p>Account Type: Savings</p>
            <p>UPI: foobarlabs@okhdfc</p>
            <div className="mt-4">
              <p>Scan to pay via UPI</p>
              <div className="w-32 h-32 bg-gray-300"></div>
              <p className="text-sm mt-2">username@vpa</p>
              <p className="text-xs">Maximum of 1 lakh can be transferred via upi in a single day</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-between mb-2">
              <span>Sub Total:</span>
              <span>₹ {calculateSubTotal(items)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount(10%):</span>
              <span>₹ {(parseFloat(calculateSubTotal(items)) * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxable Amount:</span>
              <span>₹ {(parseFloat(calculateSubTotal(items)) * 0.9).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>CGST:</span>
              <span>₹ {(parseFloat(calculateSubTotal(items)) * 0.09).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>SGST:</span>
              <span>₹ {(parseFloat(calculateSubTotal(items)) * 0.09).toFixed(2)}</span>
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