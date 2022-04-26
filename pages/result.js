import {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Typography, Divider, Button} from 'antd';
import 'antd/dist/antd.css';

const {Title} = Typography;

function Result() {
    
    const router = useRouter();
    const [name, setName] = useState();
    const [total, setTotal] = useState(0);
    const [trees, setTrees] = useState(0);
    const [treeImages, setTreeImages] = useState([]);
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
        for (let i=1; i <= trees; i++) {
            treeImages.push('tree');
        }
    }, [trees]);

    return (
        <div style={{width: '100%', maxWidth: 340, height: '100vh', marginTop: 24, marginLeft: 'auto', marginRight: 'auto'}}>
            <Head>
                <title>ผลการคำนวณ Carbon Footprint</title>
            </Head>
            <div style={{width: '96%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Image src="/logo.png" alt="logo" width="101" height="48" />
                <div style={{marginTop: 4}}>
                    <small style={{color: '#888888'}}>ผลิตภัณฑ์หรือผลงาน</small>
                    <Title level={3}>{name}</Title>
                </div>
                <Divider />
                <strong style={{fontSize: 16, color: '#888888'}}>ผลการคำนวณ Carbon Footprint</strong>
                <div style={{marginTop: 24}}>
                    <table style={{width: '100%'}}>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td valign="top" style={{width: '64%', paddingBottom: 8}}>
                                            <small style={{color: '#888888'}}>{item.category} {item.amount} {item.category !== 'การขนส่ง' ? 'กิโลกรัม' : 'กิโลเมตร'}</small>
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
                                <tr>
                                    <td colSpan={2} align="right">
                                        {treeImages.map(tree => (
                                            <Image src="/tree.svg" alt="tree" width="32" height="32" />
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <small style={{color: 'red'}}>*</small>
                            <small style={{color: '#888888'}}>การคำนวณอ้างอิงจาก <a href="http://thaicarbonlabel.tgo.or.th/admin/uploadfiles/emission/ts_b934985782.pdf" target={'_blank'}>Carbon Emission Factors</a> ที่ปรับปรุงล่าสุด ณ​ เดือนมีนาคม 2564 โดยองค์การบริหารก๊่าชเรือนกระจก (อบก.)</small>
                        </p>
                        <p>
                            <small style={{color: 'red'}}>**</small>
                            <small style={{color: '#888888'}}>การคำนวณ Carbon Offset ใช้ค่าคำนวณจากมาตรฐานการดูดซับและปล่อย CO2 ของต้นไม้อายุ 10 ปี โดยใช้้ค่าเฉลี่ยที่อยู่ระหว่าง 21.77 kg CO2/ต้น ถึง 31.5 kg CO2/ต้น <a href="https://www.encon.be/en/calculation-co2-offsetting-trees" target={'_blank'}>อ่านเพิ่ม</a></small>
                        </p>
                    </div>
                    <div style={{marginTop: 16}}>
                        <Button type={'primary'} size={'middle'} style={{width: '100%'}} onClick={() => router.replace('/parts')}>กลับไปหน้าหลัก</Button>
                    </div>
                    <div style={{marginTop: 40, paddingBottom: 16}}>
                        <small style={{fontSize: 10, color: '#AAAAAA'}}>&copy;2022 TIM by DO IN THAI Company Limited<br/>All rights reserved.</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Result;
