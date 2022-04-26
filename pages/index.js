import {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Typography, Input, Button} from 'antd';
import 'antd/dist/antd.css';

const {Title} = Typography;

function Index() {
    
    const router = useRouter();
    const [name, setName] = useState('');
    const [nameState, setNameState] = useState('');

    const save = () => {
        setNameState('');
        if (name.trim() === '') {
            setNameState('error');
        } else {
            localStorage.setItem('name', name);
            localStorage.setItem('data', JSON.stringify([]));
            router.replace('/parts');   
        }
    };

    return (
        <div style={{width: '100%', maxWidth: 340, minHeight: '100vh', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Head>
                <title>ทดลองคำนวณ Carbon Footprint</title>
            </Head>
            <div style={{width: '96%', marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{marginBottom: 32}}>
                    <Image src="/logo.png" alt="logo" width="152" height="72" />
                </div>
                <Title level={4}>ชื่อผลิตภัณฑ์หรือผลงาน</Title>
                <Input status={nameState} size={'large'} placeholder='ใส่ชื่อผลิตภัณฑ์หรือผลงาน' onPressEnter={() => save()} onChange={(e) => setName(e.target.value)} value={name} />
                <Button type={'primary'} size={'large'} style={{marginTop: 16}} onClick={() => save()}>ไปต่อ</Button>
                <div style={{marginTop: 64, paddingBottom: 16}}>
                    <small style={{fontSize: 10, color: '#AAAAAA'}}>&copy;2022 TIM by DO IN THAI Company Limited<br/>All rights reserved.</small>
                </div>
            </div>
        </div>
    );
}
  
export default Index;
