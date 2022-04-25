const database = {
    'ปิโตรเคมี': [
        {
            name: 'พลาสติก ABS',
            factor: 4.1597,
        },
        {
            name: 'พลาสติก GPPS',
            factor: 3.2281,
        },
        {
            name: 'พลาสติก HDPE',
            factor: 6.7071,
        },
        {
            name: 'พลาสติก LDPE',
            factor: 2.6258,
        },
        {
            name: 'พลาสติก HIPS',
            factor: 3.6843,
        },
        {
            name: 'พลาสติก PP',
            factor: 1.8095,
        },
        {
            name: 'พลาสติก PVC',
            factor: 2.1331,
        },
        {
            name: 'พลาสติก PET',
            factor: 2.8854,
        },
        {
            name: 'พลาสติก PC',
            factor: 7.7760,
        },
        {
            name: 'โฟม PE',
            factor: 2.1000,
        },
        {
            name: 'โฟม EPS',
            factor: 4.6127,
        },
        {
            name: 'Polybutadiene',
            factor: 3.9106,
        },
        {
            name: 'Epoxy Resin',
            factor: 6.6860,
        },
        {
            name: 'Polyester Resin',
            factor: 7.4185,
        },
        {
            name: 'Polyurethane',
            factor: 4.8524,
        },
        {
            name: 'Nylon 6',
            factor: 9.2691,
        },
        {
            name: 'Paraffin Wax',
            factor: 0.7982,
        },
    ],
    'กระดาษ': [
        {
            name: 'เยื่อกระดาษชนิดฟอกขาวจากชานอ้อย',
            factor: 4.3925,
        },
        {
            name: 'เยื่อกระดาษชนิดฟอกขาวจากยูคาลิปตัส',
            factor: 0.6677,
        },
        {
            name: 'กระดาษพิมพ์เขียนแบบไม่เคลือบผิว',
            factor: 2.1020,
        },
        {
            name: 'กระดาษพิมพ์เขียนแบบเคลือบผิว',
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
        {
            name: 'สติกเกอร์ เทปปิดกล่อง',
            factor: 0.5100,
        },
    ],
    'โลหะเหล็ก': [
        {
            name: 'เหล็กซินเตอร',
            factor: 0.3493,
        },
        {
            name: 'เหล็กหล่อ',
            factor: 1.6382,
        },
        {
            name: 'เหล็กพิก เหล็กดิบ',
            factor: 1.5143,
        },
        {
            name: 'Galvanized Steel Sheet',
            factor: 2.7073,
        },
    ],
    'โลหะที่ไม่ใช่เหล็ก': [
        {
            name: 'Alumnium Sheet',
            factor: 3.2231,
        },
        {
            name: 'Aluminium Primary',
            factor: 12.2359,
        },
        {
            name: 'Aluminium Secondary',
            factor: 0.4329,
        },
        {
            name: 'Aluminium alloy (AlMg3)',
            factor: 6.3369,
        },
        {
            name: 'Brass',
            factor: 2.4528,
        },
    ],
    'ไม้': [
        {
            name: 'พาเลทไม้',
            factor: 0.0930,
        },
        {
            name: 'ไม้ยางพาราแปรรูปเกรด AB',
            factor: 0.0829,
        },
        {
            name: 'ไม้ยางพาราแปรรูปเกรด C',
            factor: 0.0829,
        },
        {
            name: 'ปีกไม้ยางพารา',
            factor: 0.0829,
        },
        {
            name: 'ไม้ยางพาราอัดประสานเกรด AB',
            factor: 0.3841,
        },
        {
            name: 'ไม้ยางพาราอัดประสานเกรด C',
            factor: 0.3841,
        },
        {
            name: 'ขี้เลื่อย',
            factor: 0.0829,
        }
    ],
    'สิ่งทอ': [
        {
            name: 'คาร์บอนไฟเบอร์',
            factor: 7.5500,
        },
        {
            name: 'ผ้าทอโพลีเอสเตอร์',
            factor: 9.4100,
        },
        {
            name: 'ผ้าทอเส้นด้ายผสมโพลีเอสเตอร์แบบ CVC',
            factor: 7.1974,
        },
        {
            name: 'ผ้าทอเส้นด้ายผสมโพลีเอสเตอร์แบบ TC',
            factor: 9.0498,
        },
        {
            name: 'ผ้าทอฝ้าย',
            factor: 18.2400,
        },
        {
            name: 'ผ้าทอจากเส้นด้ายฝ้าย',
            factor: 12.9209,
        },
        {
            name: 'ผ้าทอจากเส้นด้ายโพลีเอสเตอร์',
            factor: 6.5182,
        },
        {
            name: 'ผ้าทอ CVC',
            factor: 17.1700,
        },
        {
            name: 'ผ้าทอ TC',
            factor: 15.9100,
        },
    ],
    'ยาง': [
        {
            name: 'ยางก้อนถ้วย',
            factor: 0.0863,
        },
        {
            name: 'น้ำยางข้น',
            factor: 0.2059,
        },
        {
            name: 'ยางสกิม',
            factor: 0.3903,
        },
        {
            name: 'ยางแท่ง STR 10/20',
            factor: 0.2966,
        },
        {
            name: 'ยางแท่ง STR XL/5L/5CV',
            factor: 0.2071,
        },
        {
            name: 'Synthetic Rubber',
            factor: 3.5138,
        },
        {
            name: 'Styrene Butadiene Rubber (SBR)',
            factor: 0.9732,
        },
    ],
    'แก้วและกระจก': [
        {
            name: 'ขวดแก้วใส',
            factor: 0.8075,
        },
        {
            name: 'ขวดแก้วสีชา',
            factor: 0.8305,
        },
        {
            name: 'ฉนวนใยแก้ว',
            factor: 2.5612,
        },
        {
            name: 'กระจกแผ่นเรียบ',
            factor: 1.2710,
        },
    ],
    'วัสดุก่อสร้าง': [
        {
            name: 'ทราย',
            factor: 0.0037,
        },
        {
            name: 'อิฐ',
            factor: 0.2414,
        },
        {
            name: 'ดินเหนียว',
            factor: 0.0004,
        },
        {
            name: 'Sanitary Ceramics',
            factor: 2.4092,
        },
    ],
    'พลังงาน': [
        {
            name: 'ก๊าซหุงต้ม',
            factor: 0.4267,
        },
        {
            name: 'ก๊าซธรรมชาติ',
            factor: 0.7544,
        },
        {
            name: 'น้ำมันเบนซิน',
            factor: 0.4024,
        },
        {
            name: 'น้ำมันดีเซล',
            factor: 0.3522,
        },
        {
            name: 'น้ามันก๊าด น้ำมันเครื่องบิน',
            factor: 0.3284,
        },
        {
            name: 'ถ่านไม้',
            factor: 1.0054,
        },
    ],
    'การขนส่ง': [
        {
            name: 'รถกระบะบรรทุก 4 ล้อ',
            factor: 0.1840,
        },
        {
            name: 'รถตู้บรรทุก 4 ล้อ',
            factor: 0.2405,
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
        {
            name: 'รถบรรทุกพ่วง 18 ล้อ',
            factor: 0.0529,
        },
    ],
};

export default database;
