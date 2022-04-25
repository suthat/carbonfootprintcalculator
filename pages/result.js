import {useState, useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {Typography, Divider, Button} from 'antd';
import 'antd/dist/antd.css';

const {Title} = Typography;

function Result() {
    
    const router = useRouter();
    const [name, setName] = useState();
    const [total, setTotal] = useState(0);
    const [trees, setTrees] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        setName(localStorage.getItem('name'));
        let data = JSON.parse(localStorage.getItem('data'));
        let tmp = 0;
        data.map(item => {
            tmp += item.cf;
        });
        setData(data);
        setTotal(tmp);
        setTrees(Math.ceil(tmp / 26.63));
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
                                            <small style={{color: '#888888'}}>{item.category}</small>
                                            <Title level={5}>{item.subCategory}</Title>
                                        </td>
                                        <td valign="top" align="right" style={{width: '32%', paddingBottom: 8}}>
                                            <small style={{color: '#888888'}}>e Kg CO2</small>
                                            <Title level={5}>{parseFloat(item.cf).toFixed(2)}</Title>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Divider />
                    <div>
                        <table style={{width: '100%'}}>
                            <tbody>
                                <tr>
                                    <td valign="top" style={{width: '64%', paddingBottom: 8}}>
                                        <small style={{color: '#888888'}}>Carbon Footprint</small>
                                        <Title level={4}>รอยเท้าคาร์บอน</Title>
                                    </td>
                                    <td valign="top" align="right" style={{width: '32%', paddingBottom: 8}}>
                                        <small style={{color: '#888888'}}>e Kg CO2</small>
                                        <Title level={4}>{parseFloat(total).toFixed(2)}</Title>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table style={{width: '100%'}}>
                            <tbody>
                                <tr>
                                    <td valign="top" style={{width: '64%', paddingBottom: 8}}>
                                        <small style={{color: '#888888'}}>Carbon Offset</small>
                                        <Title level={4}>การชดเชยคาร์บอน</Title>
                                    </td>
                                    <td valign="top" align="right" style={{width: '32%', paddingBottom: 8}}>
                                        <small style={{color: '#888888'}}>ต้นไม้ (ปลูก)</small>
                                        <Title level={4}>{trees}</Title>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Button type={'primary'} size={'middle'} style={{width: '100%'}} onClick={() => router.replace('/parts')}>กลับไปหน้าหลัก</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Result;
