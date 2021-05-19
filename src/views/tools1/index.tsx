import React, { FC, useEffect, useState} from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { testList } from '../../apis/testRequest'

interface DataType {
    id: number;
    name: string;
    age: number;
    address: string;
    school: string;
  }
const columns: ColumnsType<DataType> | undefined = [
    {
      title: 'Name',
      dataIndex: 'name',
      align: "center",
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      align: "center",
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      align: "center",
      key: 'address'
    },
    {
        title: 'School',
        dataIndex: 'school',
        align: "center",
        key: 'school'
    },
  ];
const ToolsOne: FC = () => {
    const [data, setDate] = useState<DataType[]>([])
    const initList = async() => {
        const res = await testList()
        setDate(res.data.data)
    }
    useEffect(() => {
        initList()
    }, [])
    return (
        <Table columns={columns} dataSource={data} rowKey="id" />
    )
}
export default ToolsOne