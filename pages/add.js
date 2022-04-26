import {useState, useEffect} from 'react';
import Head from 'next/head';
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
    const [categoryState, setCategoryState] = useState('');
    const [subCategory, setSubCategory] = useState(undefined);
    const [subCategoryState, setSubCategoryState] = useState('');
    const [amount, setAmount] = useState('');
    const [amountState, setAmountState] = useState('');
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
        setCategoryState('');
        setSubCategoryState('');
        setAmountState('');
        if (category === undefined) {
            setCategoryState('error');
        }
        if (subCategory === undefined) {
            setSubCategoryState('error');
        }
        if (amount === '') {
            setAmountState('error');
        }
        if (category !== undefined && subCategory !== undefined && amount !== '') {
            let tmp = data;
            tmp.push({
                category: category,
                subCategory: subCategory,
                amount: amount,
            });
            setData(tmp);
            localStorage.setItem('data', JSON.stringify(tmp));
            router.replace('/parts');
        }
    };

    return (
        <div style={{width: '100%', maxWidth: 340, height: '100vh', marginTop: 24, marginLeft: 'auto', marginRight: 'auto'}}>
            <Head>
                <title>เพิ่มข้อมูลคำนวณ Carbon Footprint</title>
            </Head>
            <div style={{width: '96%', marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{marginTop: 4}}>
                    <small style={{color: '#888888'}}>ผลิตภัณฑ์หรือผลงาน</small>
                    <Title level={3}>{name}</Title>
                </div>
                <Title level={4} style={{marginTop: 8, color: '#888888'}}>เพิ่มข้อมูลใหม่</Title>
                <Divider />
                <p style={{marginBottom: 4}}><b style={{color: '#888888'}}>หมวดหมู่</b></p>
                <Select
                    status={categoryState}
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
                    <Option value="ไม้">ไม้</Option>
                    <Option value="สิ่งทอ">สิ่งทอ</Option>
                    <Option value="ยาง">ยาง</Option>
                    <Option value="แก้วและกระจก">แก้วและกระจก</Option>
                    <Option value="วัสดุก่อสร้าง">วัสดุก่อสร้าง</Option>
                    <Option value="พลังงาน">พลังงาน</Option>
                    <Option value="การขนส่ง">การขนส่ง</Option>
                    <Option value="Waste">Waste</Option>
                </Select>
                {!isTransport ? (
                    <>
                        <p style={{marginTop: 16, marginBottom: 4}}><b style={{color: '#888888'}}>วัสดุ</b></p>
                        <Select
                            status={subCategoryState}
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
                        <Input status={amountState} size={'large'} type={'number'} suffix={'กิโลกรัม'} placeholder='ใส่น้ำหนัก' onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </>
                ) : (
                    <>
                        <p style={{marginTop: 16, marginBottom: 4}}><b style={{color: '#888888'}}>รูปแบบการขนส่ง</b></p>
                        <Select
                            status={subCategoryState}
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
                        <Input status={amountState} size={'large'} type={'number'} suffix={'กิโลเมตร'} placeholder='ใส่ระยะทาง' onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </>
                )}
                <div style={{marginTop: 16}}>
                    <Button type={'primary'} size={'large'} style={{marginTop: 16}} onClick={() => save()}>เพิ่ม</Button>
                    <div style={{marginTop: 16}}>
                        <Button type={'secondary'} size={'middle'} onClick={() => router.back()}>ย้อนกลับ</Button>
                    </div>
                </div>
                <div style={{marginTop: 40, paddingBottom: 16}}>
                    <small style={{fontSize: 10, color: '#AAAAAA'}}>&copy;2022 TIM by DO IN THAI Company Limited<br/>All rights reserved.</small>
                </div>
            </div>
        </div>
    );
}
  
export default Add;
