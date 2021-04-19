import * as React from "react";

interface IInvoiceListProps {
  invoiceData: InvoiceDataType;
  logo?:string;
}

type InvoiceDataType = {
  customerName:string;
  invoices: InvoiceType[];
}

type InvoiceType = {
  id:number, 
  name:string, 
  total:string
};

//props means properties
const InvoiceList = (props: IInvoiceListProps) =>{
  const {customerName, invoices} = props.invoiceData;

  const itemStyleContainer = {display: "flex", justifyContent: "space-between"};

  return (
    <div>
      <h1>{customerName}</h1>
      <hr/>

      <div>
        {invoices.map((invoice) => (
          //key prop must be unique!!!
          <div key={invoice.id} style={itemStyleContainer}>
              <div>{invoice.name}</div>
              <div>{invoice.total}</div>
          </div>
          ))}
      </div>
    </div>
  );
}


const App = () => {
  const data = {
    customerName: "Google",
    invoices: [
      {id:123, name:"Dev work", total: "20.00"}, 
      {id:456, name:"More dev work", total: "50.00"},
      {id:789, name:"AGAIN MORE dev work", total: "100.00"}
    ]
  }
  return (
    <div>
      <InvoiceList invoiceData={data} />
    </div>
  );
};

export default App;
