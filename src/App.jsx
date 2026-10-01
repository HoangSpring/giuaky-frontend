import { useState } from 'react';
import './App.css'; // Nhớ import CSS để hiển thị giao diện đẹp
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import GioHang from './components/GioHang';
import Khung from './components/Khung';
import dsMonData from './data/dsMon';

export default function App() {
  const [gio, setGio] = useState([]);
  const [idDangChon, setIdDangChon] = useState(null);

  // Đổi tên thành datMon (chữ M viết hoa)
  const datMon = (id) => {
    setGio((prevGio) => {
      const tonTai = prevGio.find((mon) => mon.id === id);
      if (tonTai) {
        return prevGio.map((mon) =>
          mon.id === id ? { ...mon, soLuong: mon.soLuong + 1 } : mon
        );
      } else {
        const monMoi = dsMonData.find((mon) => mon.id === id);
        return [...prevGio, { ...monMoi, soLuong: 1 }];
      }
    });
  };

  // Đổi tên thành tongPhan (chữ P viết hoa)
  const tongPhan = gio.reduce((tong, mon) => tong + mon.soLuong, 0);

  return (
    <div className="app-container">
      <Header tongPhan={tongPhan} />
      <main className="main-content">
        <DanhSachMon
          dsMon={dsMonData}
          idDangChon={idDangChon}
          onChon={(id) => setIdDangChon(id)}
          onDat={datMon}
        />
        <aside className="sidebar">
          <Khung tieuDe="Giỏ hàng">
            <GioHang gio={gio} dsMon={dsMonData} />
          </Khung>
        </aside>
      </main>
    </div>
  );
}