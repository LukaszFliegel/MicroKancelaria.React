import { Card } from 'antd';

const ContractorsPage = () => {
    return ( 
        <div>
            <Card title="Contractors Page" >                
                <p>Page should contain grid with list of the entity with the possibility of add/edit and delete</p>
                <p>All CRUD operations for the entity. One button for "Add" (on the top maybe?) and grid actions for delete/edit</p>                
                <p>One of the entitites can be set as default (when set as default, the entity should be prefilled in every dropdown with such entity), so on the grid there has to be an action to set as default (please see  the Investment Types page)</p>
                <p>Routing:
                    <ul>
                        <li>/contractors - grid with list of entitites</li>
                        <li>/contractor/:id - page with form to edit the entity</li>                        
                        <li>Addount should be on the rout /contractors, page should just change the "mode"</li>
                        <li>After adding the entity (after confirming) webapp should redirect to the edit page of added entity</li>
                    </ul>
                </p>
                <p>Editing the entity contains dropdown of Contractors (with parent contractor)</p>
            </Card>
        </div>
     );
}
 
export default ContractorsPage;