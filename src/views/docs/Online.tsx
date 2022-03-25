import { Button, Space, Table } from "antd";
const { Column } = Table;

function Online() {
  const dataSource = [
    {
      id: 1,
      title: '论TS',
      tags: 'ts、js',
      stars: 32,
      createTime: '2022-03-14 14:35:02',
      updateTime: '2022-03-14 14:35:02',
      status: 1,
    },
    {
      id: 2,
      title: '论TS2',
      tags: 'ts、js',
      stars: 32,
      createTime: '2022-03-14 14:35:02',
      updateTime: '2022-03-14 14:35:02',
      status: 1,
    },
  ];

  return (
    <div className="app-container">
      <Table dataSource={dataSource} rowKey="id">
        <Column title="标题" dataIndex="title" key="title" />
        <Column title="标签" dataIndex="tags" key="tags" />
        <Column title="点赞数" dataIndex="stars" key="stars" />
        <Column title="创建时间" dataIndex="createTime" key="createTime" />
        <Column title="更新时间" dataIndex="updateTime" key="updateTime" />
        <Column title="状态" dataIndex="status" key="status" />
        <Column title="操作" dataIndex="action" key="action" render={(text, record) => 
          (
            <Space size="middle">
              <Button type="primary">查看详情</Button>
            </Space>
          )
       }/>
      </Table>
    </div>
  );
}

export default Online;