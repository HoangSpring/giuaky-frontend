import {useState} from "react";

export default function FormDatMon({ onGuiDon }) {
    const [ten, setTen] = useState('');
    const [sdt, setSdt] = useState('');
    const [diaChi, setDiaChi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!ten.trim || !sdt.trim() || !diaChi.trim()) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }

        onGuiDon({ ten, sdt, diaChi });
        setTen('');
        setSdt('');
        setDiaChi('');
    };
    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
                <label style={{ marginRight: '10px' }}>Tên khách hàng:</label>
                <input
                    type="text"
                    value={ten}
                    onChange={(e) => setTen(e.target.value)}
                    placeholder="Nhập họ và tên"
                    style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }}
                    />
            </div>
            <div>
                <label style={{ marginRight: '10px' }}>Số điện thoại:</label>
                <input
                    type="text"
                    value={sdt}
                    onChange={(e) => setSdt(e.target.value)}
                    placeholder="Nhập số điện thoại"
                    style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }}
                    />
            </div>
            <div>
                <label style={{ marginRight: '10px' }}>Địa chỉ:</label>
                <input
                    type="text"
                    value={diaChi}
                    onChange={(e) => setDiaChi(e.target.value)}
                    placeholder="Nhập địa chỉ"
                    style={{ width: '100%', padding: '6px', boxSizing: 'border-box' }}
                    />
            </div>
        </form>
    );
}