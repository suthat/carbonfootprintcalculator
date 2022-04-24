import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Typography, Divider, Select, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import database from '../models';

const {Title} = Typography;
const { Option } = Select;

function Add() {
    
    const router = useRouter();
    const [name, setName] = useState();
    const [data, setData] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [category, setCategory] = useState(undefined);
    const [subCategory, setSubCategory] = useState(undefined);
    const [amount, setAmount] = useState('');
    const [isTransport, setIsTransport] = useState(false);

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setData(JSON.parse(localStorage.getItem('data')));
    }, []);

    const onCategoryChange = (value) => {
        setCategory(value);
        setMaterials(database[value]);
        if (value === 'การขนส่ง') {
            setIsTransport(true);
        } else {
            setIsTransport(false);
        }
    };

    const save = () => {
        let tmp = data;
        tmp.push({
            category: category,
            subCategory: subCategory,
            amount: amount,
        });
        setData(tmp);
        localStorage.setItem('data', JSON.stringify(tmp));
        router.replace('/parts');
    };

    return (
        <div style={{width: '100%', maxWidth: 320, height: '100vh', marginTop: 24, marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={{width: '88%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Title level={3} style={{marginBottom: 0}}>{name}</Title>
                <Title level={4} style={{marginTop: 8, color: '#888888'}}>เพิ่มข้อมูลใหม่</Title>
                <Divider />
                <p style={{marginBottom: 4}}><b style={{color: '#888888'}}>หมวดหมู่</b></p>
                <Select
                    showSearch
                    size={'large'}
                    placeholder="เลือกหมวดหมู่"
                    style={{width: '100%'}}
                    optionFilterProp="children"
                    onChange={(value) => onCategoryChange(value)}
                    value={category}>
                    <Option value="ปิโตรเคมี">ปิโตรเคมี</Option>
                    <Option value="กระดาษ">กระดาษ</Option>
                    <Option value="โลหะเหล็ก">โลหะเหล็ก</Option>
                    <Option value="โลหะที่ไม่ใช่เหล็ก">โลหะที่ไม่ใช่เหล็ก</Option>
                    <Option value="วัสดุก่อสร้าง">วัสดุก่อสร้าง</Option>
                    <Option value="แก้วและกระจก">แก้วและกระจก</Option>
                    <Option value="การขนส่ง">การขนส่ง</Option>
                </Select>
                {!isTransport ? (
                    <>
                        <p style={{marginTop: 16, marginBottom: 4}}><b style={{color: '#888888'}}>วัสดุ</b></p>
                        <Select
                            showSearch
                            size={'large'}
                            placeholder="เลือกวัสดุ"
                            style={{width: '100%'}}
                            onChange={(value) => setSubCategory(value)}
                            value={subCategory}>
                            {materials.map((material, index) => {
                                return (
                                    <Option key={index} value={material.name}>{material.name}</Option>
                                );
                            })}
                        </Select>
                        <p style={{marginTop: 16, marginBottom: 4}}><b style={{color: '#888888'}}>น้ำหนัก</b></p>
                        <Input size={'large'} type={'number'} suffix={'กิโลกรัม'} placeholder='ใส่น้ำหนัก' onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </>
                ) : (
                    <>
                        <p style={{marginTop: 16, marginBottom: 4}}><b style={{color: '#888888'}}>รูปแบบการขนส่ง</b></p>
                        <Select
                            showSearch
                            size={'large'}
                            placeholder="เลือกรูปแบบการขนส่ง"
                            style={{width: '100%'}}
                            onChange={(value) => setSubCategory(value)}
                            value={subCategory}>
                            {materials.map((material, index) => {
                                return (
                                    <Option key={index} value={material.name}>{material.name}</Option>
                                );
                            })}
                        </Select>
                        <p style={{marginTop: 16, marginBottom: 4}}><b style={{color: '#888888'}}>ระยะทาง</b></p>
                        <Input size={'large'} type={'number'} suffix={'กิโลเมตร'} placeholder='ใส่ระยะทาง' onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </>
                )}
                <div style={{marginTop: 16}}>
                    <Button type={'primary'} size={'large'} style={{marginTop: 16}} onClick={() => save()}>เพิ่ม</Button>
                    <div style={{marginTop: 16}}>
                        <Button type={'secondary'} size={'middle'} onClick={() => router.back()}>ย้อนกลับ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Add;
