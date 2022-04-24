import {useState} from 'react';
import {useRouter} from 'next/router';
import {Typography, Input, Button} from 'antd';
import 'antd/dist/antd.css';

const {Title} = Typography;

function Index() {
    
    const router = useRouter();
    const [name, setName] = useState('');

    const save = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('data', JSON.stringify([]));
        router.replace('/parts');
    };

    return (
        <div style={{width: '100%', maxWidth: 320, height: '100vh', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '88%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Title level={4}>ชื่อผลิตภัณฑ์หรือผลงาน</Title>
                <Input size={'large'} placeholder='ใส่ชื่อผลิตภัณฑ์หรือผลงาน' onChange={(e) => setName(e.target.value)} value={name} />
                <Button type={'primary'} size={'large'} style={{marginTop: 16}} onClick={() => save()}>ไปต่อ</Button>
            </div>
        </div>
    );
}
  
export default Index;
