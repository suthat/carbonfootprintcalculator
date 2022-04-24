const database = {
    'ปิโตรเคมี': [
        {
            name: 'Acrylonitrile Butadiene Styrene (ABS)',
            factor: 4.1597,
        },
        {
            name: 'General Purposed Polystyrene (GPPS)',
            factor: 3.2281,
        },
        {
            name: 'Polypropylene (PP)',
            factor: 1.8095,
        },
        {
            name: 'Ployvinyl Chloride (PVC)',
            factor: 2.1331,
        },
        {
            name: 'Polyethylene terephthalate (PET)',
            factor: 2.8854,
        },
        {
            name: 'Polycarbonate (PC)',
            factor: 7.7760,
        },
        {
            name: 'Polyester resin',
            factor: 7.4185,
        },
        {
            name: 'Nylon 6',
            factor: 9.2691,
        },
        {
            name: 'PE Foam',
            factor: 2.1000,
        },
    ],
    'กระดาษ': [
        {
            name: 'กระดาษพิมพ์เขียนแบบ ไม่เคลือบผิว',
            factor: 2.1020,
        },
        {
            name: 'กระดาษพิมพ์เขียนแบบ เคลือบผิว',
            factor: 2.1639,
        },
        {
            name: 'กระดาษหนังสือพิมพ์',
            factor: 1.3589,
        },
        {
            name: 'กระดาษคราฟท์ ชนิดทำผิวกล่อง',
            factor: 1.6324,
        },
        {
            name: 'กระดาษคราฟท์ ชนิดทำลอน',
            factor: 1.6184,
        },
        {
            name: 'กระดาษกล่องขาวเคลือบแป้ง',
            factor: 1.8679,
        },
    ],
    'โลหะเหล็ก': [],
    'โลหะที่ไม่ใช่เหล็ก': [],
    'วัสดุก่อสร้าง': [],
    'แก้วและกระจก': [],
    'การขนส่ง': [
        {
            name: 'รถกระบะบรรทุก 4 ล้อ',
            factor: 0.1840,
        },
        {
            name: 'รถกะยะบรรทุก 6 ล้อ ขนาดเล็ก',
            factor: 0.0875,
        },
        {
            name: 'รถกะยะบรรทุก 6 ล้อ ขนาดใหญ่',
            factor: 0.0716,
        },
        {
            name: 'รถบรรทุก 10 ล้อ',
            factor: 0.0691,
        },
    ],
};

export default database;
