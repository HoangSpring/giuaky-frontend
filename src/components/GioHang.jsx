export default function GioHang({ gio }) {
  // Tính tổng tiền của giỏ hàng
  const tongTien = gio.reduce((sum, item) => sum + item.gia * item.soLuong, 0);

  if (gio.length === 0) {
    return <p>Giỏ hàng đang trống.</p>;
  }

  return (
    <div className="gio-hang">
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {gio.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            {/* Sử dụng item.ten thay vì tenMon */}
            <strong>{item.ten}</strong> - {item.soLuong} phần ({(item.gia * item.soLuong).toLocaleString()} đ)
          </li>
        ))}
      </ul>
      <hr />
      <p style={{ fontWeight: 'bold' }}>
        Tổng tiền: {tongTien.toLocaleString()} đ
      </p>
    </div>
  );
}