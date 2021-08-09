import React, { useState, useEffect } from "react";
import { Table, Space, Button, notification } from 'antd';
import useColumns from './useColumns';
// import { IInvestmentTypeDto } from './investmentTypeDto';

function InvestementTypesPage()
{
    const [tableState, setTableState] = useState({ loading:true, dataSource: null });
    // const [modelState, setModelState] = useState<IInvestmentTypeDto>();

    const fetchInvestmentTypes = () => {
        fetch("https://localhost:44381/api/InvestmentTypes")        
            .then(async response => {
                var json = await response.json();
                const investmentTypesModel = json.map((p) => { return {
                    ...p,
                    codeTag: `${p.code},${p.isDefault}`,
                }});
                
                // setTimeout(function() {
                    setTableState({ dataSource: investmentTypesModel, loading: false });
                    // setModelState(investmentTypesModel);
                // }.bind(this), 1000)
            })
            .catch(e => {
                console.log(e);
            });        
    }

    useEffect(() => {        
        fetchInvestmentTypes();
    }, []);

    const handleDelete = (record) => {
        const requestOptions = {
            method: 'DELETE',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ title: 'React PUT Request Example' })
        };
        fetch(`https://localhost:44381/api/InvestmentTypes/${record.id}`, requestOptions)
            .then(response => {
                fetchInvestmentTypes();
                notification.success({
                    message: 'Investment type deleted',
                    description:
                      `The investment type ${record.code} has been deleted`,
                  });
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleSetTheDefault = (record) => {
        record.isDefault = true;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record),
        };
        fetch(`https://localhost:44381/api/InvestmentTypes/${record.id}`, requestOptions)
            .then(async response => {
                if(response.status === 204) {
                    notification.success({
                        message: 'Investment type set as default',
                        description:
                          `The investment type ${record.code} has been set as default one`,
                      });
                }
                else
                {
                    var json = await response.json();

                    notification.error({
                        message: 'Investment type set as default',
                        description: json.message,
                      });
                }                

                fetchInvestmentTypes();
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleUpdate = (record) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record),
        };
        fetch(`https://localhost:44381/api/InvestmentTypes/${record.id}`, requestOptions)
            .then(response => {
                fetchInvestmentTypes();
                notification.success({
                    message: 'Investment type deleted',
                    description:
                      `The investment type ${record.code} has been deleted`,
                  });
            })
            .catch(e => {
                console.log(e);
            });
    };

    const columns = useColumns(handleDelete, handleSetTheDefault);
    // const tableState = useTableState();

    return (
        <Table 
            {...tableState}
            // dataSource={modelState}
            rowKey="id"
            columns={columns}
            bordered 
            title={() => {
                return (
                    <div>
                        <Space size="middle">
                            <span>Investment types</span>
                            <Button type="primary">
                                Add new
                            </Button>
                        </Space>
                </div>
                );
            }}
            />
    )
}

export default InvestementTypesPage;
