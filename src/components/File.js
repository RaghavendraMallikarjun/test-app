import { object } from "prop-types";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const ImportFromFileBodyComponent = () => {
    let fileReader;

    const[isTable,setIsTable]=useState(false);

    const[content,setContent]=useState();
     
    const b64ToUtf8=(str)=>{
        let b = new Buffer(str, 'base64')
        let s = b.toString();
        return s
    } 
    const handleFileRead = (e) => {
      const content = fileReader.result;
      setContent(content);
      setIsTable(true);
    };
    
const showTable=()=>{

    let jsonObj = JSON.parse(content);
      let encodedGEM_PURCHASE_ORDER=jsonObj.loanApplications[0].pledgedDocuments[0].documents[0].data;
      let decodedGEM_PURCHASE_ORDER=b64ToUtf8(encodedGEM_PURCHASE_ORDER);
      let encodedGEM_PROFILE=jsonObj.loanApplications[0].borrower.documents[0].data
      let decodedGEM_PROFILE=b64ToUtf8(encodedGEM_PROFILE)
      var dataToDisplay=JSON.parse(decodedGEM_PROFILE);
      var purchaseOrderData=JSON.parse(decodedGEM_PURCHASE_ORDER);
      return (<div><p>GEM_PROFILE</p><div>
      <table  className="table table-bordered table-sm">
     <tbody>
       <tr>
         <td>gstin</td>
         <td>
           <span>
           {dataToDisplay.gstin}    
           </span>
         </td>
       </tr>
       <tr>
         <td>pan</td>
         <td>
           <span>{dataToDisplay.pan}</span>
         </td>
       </tr>
       <tr>
         <td>onboardingDate</td>
         <td>
           <span>{dataToDisplay.onboardingDate}</span>
         </td>
       </tr>
       <tr>
         <td>sellerRating</td>
         <td>
           <div>
             <table className="table table-bordered table-sm">
               <tbody>
                 <tr>
                   <td>incidentHistory</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.incidentHistory}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>reliability</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.reliability}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>qualityOfOrderFulfillment</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.qualityOfOrderFulfillment}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>finalRating</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.finalRating}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>coverage</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.coverage}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>timelyDelivery</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.timelyDelivery}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>overallRating</td>
                   <td>
                     <span>{dataToDisplay.sellerRating.overallRating}</span>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </td>
       </tr>
       <tr>
         <td>vintageData</td>
         <td>
           <div>
             <table className="table table-bordered table-sm">
               <tbody>
                 <tr>
                   <td>period</td>
                   <td>
                     <span>{dataToDisplay.vintageData.period}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>valueOfOrdersPlaced</td>
                   <td>
                     <span>{}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>valueOfOrdersPaid</td>
                   <td>
                     <span>{dataToDisplay.vintageData.valueOfOrdersPlaced}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>numberOfOrdersDelivered</td>
                   <td>
                     <span>53</span>
                   </td>
                 </tr>
                 <tr>
                   <td>numberOfOrdersPlaced</td>
                   <td>
                     <span>{dataToDisplay.vintageData.numberOfOrdersDelivered}</span>
                   </td>
                 </tr>
                 <tr>
                   <td>valueOfOrdersDelivered</td>
                   <td>
                     <span>{dataToDisplay.vintageData.valueOfOrdersDelivered}</span>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </td>
       </tr>
     </tbody>
   </table>
 </div>
 <p>GEM_PURCHASE_ORDER</p>
 <div data-reactroot="">
  <table className="table table-bordered table-sm">
    <tbody>
      <tr>
        <td>orderAmount</td>
        <td>
          <span>{purchaseOrderData.orderAmount}</span>
        </td>
      </tr>
      <tr>
        <td>lineItems</td>
        <td>
          <div>
            <table className="table table-bordered table-sm">
              <tbody>
                <tr>
                  <td>
                    <div>
                      <table className="table table-bordered table-sm">
                        <tbody>
                          <tr>
                            <td>sacCode</td>
                            <td>
                              <span>
                                {purchaseOrderData.lineItems[0].sacCode}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>productName</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].productName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>numberOfUnits</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].numberOfUnits}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>totalPrice</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].totalPrice}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>productBrand</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].productBrand}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>expectedDeliveryStartDate</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].expectedDeliveryStartDate}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>expectedDeliveryEndDate</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].expectedDeliveryEndDate}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>quantityUnitType</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].quantityUnitType}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>hsnCode</td>
                            <td>
                              <span>
                                {purchaseOrderData.lineItems[0].hsnCode}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>offeringType</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].offeringType}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>unitPrice</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].unitPrice}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>orderItemId</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].orderItemId}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>productCode</td>
                            <td>
                              <span>{purchaseOrderData.lineItems[0].productCode}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td>orderAcceptanceDate</td>
        <td>
          <span>{purchaseOrderData.orderAcceptanceDate}</span>
        </td>
      </tr>
      <tr>
        <td>sellerGSTIN</td>
        <td>
          <span>
            {purchaseOrderData.sellerGSTIN}
          </span>
        </td>
      </tr>
      <tr>
        <td>purchaseOrderNumber</td>
        <td>
          <span>{purchaseOrderData.purchaseOrderNumber}</span>
        </td>
      </tr>
      <tr>
        <td>buyerPaymentMethod</td>
        <td>
          <span>{purchaseOrderData.buyerPaymentMethod}</span>
        </td>
      </tr>
      <tr>
        <td>buyerGSTIN</td>
        <td>
          <span>{purchaseOrderData.buyerGSTIN}</span>
        </td>
      </tr>
      <tr>
        <td>contractDate</td>
        <td>
          <span>{purchaseOrderData.contractDate}</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
 </div>);
     
}

    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };
    
    return <div className='upload-expense'>
       <br/>
      <input
        type='file'
        id='file'

        className='input-file'
        accept='.json'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <br/>
      <br/>
      <div>
      {/* <button type="submit">Submit</button> */}
      </div>
      {
          isTable && showTable()
      }
      
    </div>;
  };


  export default ImportFromFileBodyComponent;