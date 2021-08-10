import { Card } from 'antd';

const InvestmentsPage = () => {
    return ( 
        <div>
            <Card title="Investments Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>One of the entitites can be set as default (when set as default, the entity should be prefilled in every dropdown with such entity), so on the grid there has to be an action to set as default (please see  the Investment Types page)</p>
                <p>Routing:
                <br />
                        - /Investments - grid with list of entitites<br />
                        - /Investments/:id - page with form to edit the entity<br />
                        - Adding should be on the rout /Investments, page should just change the "mode"<br />
                        - After adding the entity (after confirming) webapp should redirect to the edit page of added entity<br />
                    
                </p>
                <p>Additional actions:
                <br />
                        - Display sell invoices - should go to /reports/SalesRegister<br />
                </p>
                <p>Editing the entity contains dropdown of Investment types</p>
            </Card>
        </div>
     );
}
 
export default InvestmentsPage;