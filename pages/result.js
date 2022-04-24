import {useState, useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Typography, Divider, Button} from 'antd';
import 'antd/dist/antd.css';
import database from '../models';

const {Title} = Typography;

function Result() {
    
    const router = useRouter();
    const [name, setName] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setData(JSON.parse(localStorage.getItem('data')));
    }, []);

    return (
        <div style={{width: '100%', maxWidth: 320, height: '100vh', marginTop: 24, marginLeft: 'auto', marginRight: 'auto'}}>
            <Head>
                <title>ผลการคำนวณ Carbon Footprint</title>
            </Head>
            <div style={{width: '88%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Title level={3}>{name}</Title>
                <Divider />
                <strong style={{fontSize: 16, color: '#888888'}}>ผลการคำนวณ Carbon Footprint</strong>
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
                                        <td valign="top" align="right" style={{width: '32%', paddingBottom: 8}}>
                                            <small style={{}}>e Kg CO2</small>
                                            <Title level={5}>{parseFloat(item.cf).toFixed(2)}</Title>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div style={{marginTop: 16}}>
                        <Button type={'primary'} size={'middle'} style={{width: '100%'}} onClick={() => router.replace('/parts')}>กลับไปหน้าหลัก</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Result;
