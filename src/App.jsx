import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import DanhSachMon from './components/DanhSachMon';
import GioHang from './components/GioHang';
import Khung from './components/Khung';
import FormDatMon from './components/FormDatMon';
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
      const tonTai = prevGio.find((mon) => String(mon.id) === String(id));
      if (tonTai) {
        return prevGio.map((mon) =>
          String(mon.id) === String(id) ? { ...mon, soLuong: mon.soLuong + 1 } : mon
        );
      } else {
        const monMoi = dsMonData.find((mon) => String(mon.id) === String(id));
        if (!monMoi) return prevGio;
        return [...prevGio, { ...monMoi, soLuong: 1 }];
      }
    });
  };

  // Hàm xóa 1 món khỏi giỏ hàng
  const xoaMon = (id) => {
    setGio((prevGio) => prevGio.filter((item) => String(item.id) !== String(id)));
  };

  // Hàm xóa toàn bộ giỏ hàng
  const xoaTatCa = () => {
    setGio([]);
  };

  const handleGuiDon = (thongTinNguoiNhan) => {
    if (gio.length === 0) {
      alert('Giỏ hàng đang trống! Vui lòng chọn món trước khi đặt.');
      return;
    }

    console.log('Đơn hàng đã đặt thành công:', {
      nguoiNhan: thongTinNguoiNhan,
      chiTietGioHang: gio,
      tongTien: gio.reduce((sum, item) => sum + item.gia * item.soLuong, 0)
    });

    alert('Đặt hàng thành công! Cảm ơn bạn.');
    setGio([]);
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
            <GioHang 
              gio={gio} 
              onXoaMon={xoaMon} 
              onXoaTatCa={xoaTatCa} 
            />
          </Khung>

          <Khung tieuDe="Thông tin giao hàng">
            <FormDatMon onGuiDon={handleGuiDon} />
          </Khung>
        </aside>
      </main>
    </div>
  );
}