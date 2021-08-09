import React, { useState, useEffect } from "react";
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Switch } from 'antd';
import { useParams } from "react-router-dom";
import useColumns from './useColumns';
// import { IInvestmentTypeDto } from './investmentTypeDto';

function InvestementTypePage()
{
    const { id } = useParams();
    const [investmentType, setInvestmentType] = useState({});

    const [form] = Form.useForm();
    // const [modelState, setModelState] = useState<IInvestmentTypeDto>();

    const fetchInvestmentTypes = () => {
        fetch(`https://localhost:44381/api/InvestmentTypes/${id}`)        
            .then(async response => {
                var json = await response.json();
                setInvestmentType(json);
            })
            .catch(e => {
                console.log(e);
            });        
    }

    useEffect(() => {        
        fetchInvestmentTypes();
    }, []);

    const onFinish = (values) => {
        console.log('Received values from form: ', values);
      };

    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 20 },
      };

    return (
        <div>
            <h1>Edit {investmentType.code}</h1>
            {/* <h2>{investmentType.code}</h2>
            <h3>{investmentType.code}</h3> */}
            <Form
            {...layout}
            form={form}
            name="investment_type"
            onFinish={onFinish}
            //   className="ant-advanced-search-form"
            //   onFinish={onFinish}
            >
                <Form.Item
                    name="code"
                    label="Code"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                    {
                        required: true,
                        message: 'Name can not be empty',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="isDefault"
                    label="Is default">
                    <Switch />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default InvestementTypePage;
