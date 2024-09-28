import React from 'react';
import { format } from 'date-fns';
import BaseTemplate2 from './BaseTemplate2';
import { calculateSubTotal, calculateGrandTotal } from '../../utils/invoiceCalculations';
import { formatCurrency } from '../../utils/formatCurrency';

const Receipt1 = ({ data, isPrint = false }) => {
  const { billTo = {}, invoice = {}, yourCompany = {}, cashier = '', items = [], tax = 0, notes = '', footer = '' } = data || {};

  const subTotal = calculateSubTotal(items);
  const total = calculateGrandTotal(items, tax);

  return (
    <BaseTemplate2
      width="80mm"
      height="auto"
      className="p-2"
      data={data}
      isPrint={isPrint}
    >
      <div
        className="bg-white flex flex-col min-h-full"
        style={{
          fontSize: isPrint ? "8px" : "14px",
          fontFamily: "'Courier New', Courier, monospace",
          whiteSpace: "pre-wrap",
          lineHeight: "1.2",
        }}
      >
        <div className="flex-grow">
          <div className="text-center font-bold mb-2">RECEIPT</div>
          <div className="mb-2">
            <div>Invoice: {invoice.number || "N/A"}</div>
            <div>
              Date:{" "}
              {invoice.date
                ? `${format(new Date(invoice.date), "MM/dd/yyyy")} ${format(new Date(), "HH:mm")}`
                : "N/A"}
            </div>
          </div>
          <div className="mb-2">Customer: {billTo || "N/A"}</div>
          <div className="mb-2">Cashier: {cashier || "N/A"}</div>
          <div className="border-t border-b py-2 mb-2">
            <div className="flex justify-between font-bold mb-2">
              <span>Item</span>
              <span>Total</span>
            </div>
            {items.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <div>
                  <span>{item.name || "N/A"} X {item.quantity || 0} qty</span>
                </div>
                <span>
                  {formatCurrency((item.quantity || 0) * (item.amount || 0))}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total:</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div className="mt-4">
            <div>{notes || "N/A"}</div>
          </div>
        </div>
        <div className="text-center mt-4">{footer || ""}</div>
      </div>
    </BaseTemplate2>
  );
};

export default Receipt1;
