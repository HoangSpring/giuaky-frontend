import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import GioHang from './components/GioHang';
import Khung from './components/Khung';
import dsMonData from './data/dsMon';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [gio, setGio] = useLocalStorage("gio-hang", []);
  const [idDangChon, setIdDangChon] = useState(null);

  const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';
  const tongPhan = gio.reduce((sum, item) => sum + item.soLuong, 0);

  useEffect(() => {
    if (tongPhan > 0) {
      document.title = `(${tongPhan}) ${tenQuan}`;
    } else {
      document.title = tenQuan;
    }
  }, [tongPhan, tenQuan]);

  const datMon = (id) => {
  setGio((prevGio) => {
    // Tìm xem món đã có trong giỏ chưa
    const tonTai = prevGio.find((mon) => String(mon.id) === String(id));

    if (tonTai) {
      return prevGio.map((mon) =>
        String(mon.id) === String(id) ? { ...mon, soLuong: mon.soLuong + 1 } : mon
      );
    } else {
      const monMoi = dsMonData.find((mon) => String(mon.id) === String(id));
      if (!monMoi) return prevGio; // Phòng trường hợp không tìm thấy món
      return [...prevGio, { ...monMoi, soLuong: 1 }];
    }
  });
};

  return (
    <div className="app-container">
      <Header tongPhan={tongPhan} tenQuan={tenQuan} />
      
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