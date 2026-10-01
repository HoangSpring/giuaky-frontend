import { dinhDangGia } from '../utils/formatters';

export default function GioHang({ gio, dsMon }) {
  if (!gio || gio.length === 0) {
    return (
      <div data-testid="gio-hang">
        <p>Giỏ hàng trống</p>
      </div>
    );
  }

  return (
    <div data-testid="gio-hang">
      <ul>
        {gio.map((item) => {
          // Lấy món ăn từ dsMon dựa trên id hoặc item đã có sẵn gia
          const monInfo = dsMon ? dsMon.find((m) => m.id === item.id) : item;
          const giaMon = monInfo ? monInfo.gia : item.gia || 0;
          const tenMon = monInfo ? monInfo.ten : item.ten || '';
          const thanhTien = giaMon * item.soLuong;

          return (
            <li key={item.id} style={{ marginBottom: '8px' }}>
              {tenMon} x {item.soLuong} - {dinhDangGia(thanhTien)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}