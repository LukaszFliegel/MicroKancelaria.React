import { Card } from 'antd';
import { Link } from 'react-router-dom';

const PurchaseInvoicesPage = () => {
    return ( 
        <div>
            <Card title="Purchase Invoices Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>Routing:
                    <br />
                        - /PurchaseInvoices - grid with list of entitites<br />
                        - /PurchaseInvoice/:id - page with form to edit the entity<br />                        
                        - Adding should be on the rout /PurchaseInvoice, page should just change the "mode"<br />
                        - After adding the entity (after confirming) webapp should redirect to the edit page of added entity<br />
                </p>
                <p>Additional actions:
                <br />
                        - Print invoice - should print invoice (i.e. maybe (?) go to /reports/PurchaseInvoice/:id)<br />
                        - Payments - should go to payments (<Link to="/PurchaseInvoice/1/payments" >/PurchaseInvoice/:id/payments</Link>)<br />
                </p>
            </Card>
        </div>
     );
}
 
export default PurchaseInvoicesPage;