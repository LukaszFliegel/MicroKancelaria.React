import { Button, Tag, Space, Popconfirm } from 'antd';

const useColumns = (handleDelete, handleSetTheDefault) => {
    return [
      // {
      //   title: 'Id',
      //   dataIndex: 'id',
      //   key: 'id',
      // },
      // {
      //   title: 'Code',
      //   dataIndex: 'code',
      //   key: 'code',
      // },    
      {
          title: 'Code',
          key: 'codeTag',
          dataIndex: 'codeTag',
  
          render: comaSeparatedString => {
            let defaultTag;
            if(comaSeparatedString.split(',')[1] === 'true')
            {
              defaultTag = <Tag color="green" key="test">Default</Tag>
            }
  
            return (
              <Space size="middle">
              {comaSeparatedString.split(',')[0]}
              {defaultTag}
            </Space>
          )},
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
              <Space size="middle">
              <Button size="small">
                Show
              </Button>
              <Button size="small">
                Edit
              </Button>            
              
              <Popconfirm title="Confirm set the default" onConfirm={() => {
                  handleSetTheDefault(record);
                  }}>
                <Button size="small">
                Set as default
              </Button>
              </Popconfirm>
              
              <Popconfirm title="Confirm delete" onConfirm={() => { 
                  // alert('delete(' + record.id + ')');
                  // console.log(record);
                  handleDelete(record);
                  }}>
                <Button danger size="small">
                  Delete
                </Button>
              </Popconfirm>
              </Space>
          ),
      },
    ];
}

export default useColumns;