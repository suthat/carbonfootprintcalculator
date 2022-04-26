import {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Typography, Divider, Button} from 'antd';
import 'antd/dist/antd.css';
import database from '../models';

const {Title} = Typography;

function Parts() {
    
    const router = useRouter();
    const [name, setName] = useState();
    const [data, setData] = useState([]);
    const [calculateState, setCalculateState] = useState(false);

    useEffect(() => {
        setName(localStorage.getItem('name'));
        const tmp = JSON.parse(localStorage.getItem('data'));
        if (tmp.length > 0) {
            setCalculateState(true);
        }
        setData(tmp);
    }, []);

    const remove = (element) => {
        let tmp = data;
        tmp = tmp.filter((item, index) => {
            if (index !== element) {
                return item;
            }
        });
        setData(tmp);
        if (tmp.length === 0) {
            setCalculateState(false);
        }
        localStorage.setItem('data', JSON.stringify(tmp));
    };

    const calculate = () => {
        let tmp = data;
        tmp = tmp.map(item => {
            let cf = 0;
            database[item.category].map(material => {
                if (item.subCategory === material.name) {
                    cf = material.factor * parseFloat(item.amount);
                }
            });
            return {...item, cf: cf}
        });
        localStorage.setItem('data', JSON.stringify(tmp));
        router.push('/result')
    };

    return (
        <div style={{width: '100%', maxWidth: 340, height: '100vh', marginTop: 24, marginLeft: 'auto', marginRight: 'auto'}}>
            <Head>
                <title>ข้อมูลคำนวณ Carbon Footprint สำหรับ{name}</title>
            </Head>
            <div style={{width: '96%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Image src="/logo.png" alt="logo" width="101" height="48" />
                <div style={{marginTop: 4}}>
                    <small style={{color: '#888888'}}>ผลิตภัณฑ์หรือผลงาน</small>
                    <Title level={3}>{name}</Title>
                </div>
                <Divider />
                <strong style={{fontSize: 16, color: '#888888'}}>รายการข้อมูลสำหรับคำนวณ Carbon Footprint</strong>
                <div style={{marginTop: 8, textAlign: 'right'}}>
                    <Button type={'primary'} onClick={() => router.push('/add')}>เพิ่มข้อมูล</Button>
                </div>
                <div style={{marginTop: 24}}>
                    <table style={{width: '100%'}}>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td valign="top" style={{width: '64%', paddingBottom: 8}}>
                                            <small style={{}}>{item.category}</small>
                                            <Title level={5}>{item.subCategory}</Title>
                                        </td>
                                        <td valign="top" align="right" style={{width: '24%', paddingBottom: 8}}>
                                            {item.category === 'การขนส่ง' ? (
                                                <small style={{}}>กิโลเมตร</small>
                                            ) : (
                                                <small style={{}}>กิโลกรัม</small>
                                            )}
                                            <Title level={5}>{item.amount}</Title>
                                        </td>
                                        <td valign="top" align="right" style={{paddingBottom: 8}}>
                                            <Button type={'danger'} size={'small'} onClick={() => remove(index)}>x</Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div style={{marginTop: 16}}>
                        <Button disabled={!calculateState} type={'primary'} size={'large'} style={{width: '100%'}} onClick={() => calculate()}>คำนวณ Carbon Footprint</Button>
                        <div style={{marginTop: 16, textAlign: 'center'}}>
                            <Button type={'secondary'} size={'middle'} onClick={() => router.replace('/')}>ล้างข้อมูลและเริ่มต้นใหม่</Button>
                        </div>
                    </div>
                    <div style={{marginTop: 40, paddingBottom: 16}}>
                        <small style={{fontSize: 10, color: '#AAAAAA'}}>&copy;2022 TIM by DO IN THAI Company Limited<br/>All rights reserved.</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Parts;
