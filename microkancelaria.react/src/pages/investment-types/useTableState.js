// import  { useState, useEffect } from "react";

// const useTableState = () => {

//     const [tableState, setTableState] = useState({ loading:true//, dataSource:null 
//     });

//     useEffect(() => {
//         const fetchInvestmentTypes = () => {
//             return fetch("https://localhost:44381/InvestmentTypes")
//                 .then(async response => {
//                     const investmentTypesModel = (await response.json()).map((p) => { return {
//                         id: p.id,
//                         code: p.code,
//                         name: p.name,
//                         isDefault: p.isDefault,
//                         codeTag: `${p.code},${p.isDefault}`,
//                     }});

//                     setTableState({loading: false//, dataSource: investmentTypesModel
//                     });
//                 })
//                 .catch(e => {
//                     console.log(e);
//                 });
            
//         }
//         fetchInvestmentTypes();
//     }, []);

//     return tableState;
// }
 
// export default useTableState;
