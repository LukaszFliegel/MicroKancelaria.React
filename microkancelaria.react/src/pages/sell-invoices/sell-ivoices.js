import { Card } from 'antd';
import { Link } from 'react-router-dom';

const SellInvoicesPage = () => {
    return ( 
        <div>
            <Card title="Sell Invoices Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>Routing:
                    <br />
                        - /SellInvoices - grid with list of entitites<br />
                        - /SellInvoice/:id - page with form to edit the entity<br />                        
                        - Adding should be on the rout /SellInvoices, page should just change the "mode"<br />
                        - After adding the entity (after confirming) webapp should redirect to the edit page of added entity<br />
                </p>
                <p>Additional actions:
                <br />
                        - Print invoice - should print invoice (i.e. maybe (?) go to /reports/SellInvoice/:id)<br />
                        - Payments - should go to payments (<Link to="/SellInvoice/1/payments" >/SellInvoice/:id/payments</Link>)<br />
                        - Correct - should correct the invoice (create a new correction invoice) and display it /SellInvoice/:id, where :id is the id of newly created correction invoice <br />
                        - Print Correction - should print correction invoice (i.e. maybe (?) go to /reports/SellInvoice/:id/correction). This action shoudl appear onl if invoice has a correction invoice<br />
                </p>
            </Card>
        </div>
     );
}
 
export default SellInvoicesPage;