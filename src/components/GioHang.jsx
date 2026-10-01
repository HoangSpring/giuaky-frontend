export default function GioHang({ gio, onXoaMon, onXoaTatCa }) {
  const tongTien = gio.reduce((sum, item) => sum + item.gia * item.soLuong, 0);

  if (gio.length === 0) {
    return <p>Giỏ hàng đang trống.</p>;
  }

  return (
    <div className="gio-hang">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>Danh sách đã chọn:</span>
        <button 
          onClick={onXoaTatCa}
          style={{ background: '#ff4d4f', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
        >
          Xóa tất cả
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {gio.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '8px',
              paddingBottom: '6px',
              borderBottom: '1px dashed #eee'
            }}
          >
            <div>
              <strong>{item.ten}</strong> - {item.soLuong} phần
              <div style={{ fontSize: '12px', color: '#666' }}>
                {(item.gia * item.soLuong).toLocaleString('vi-VN')} đ
              </div>
            </div>

            <button
              onClick={() => onXoaMon(item.id)}
              style={{ background: 'transparent', color: '#ff4d4f', border: '1px solid #ff4d4f', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <hr style={{ margin: '12px 0', border: 'none', borderTop: '1px solid #ddd' }} />
      <p style={{ fontWeight: 'bold', margin: 0 }}>
        Tổng tiền: {tongTien.toLocaleString('vi-VN')} đ
      </p>
    </div>
  );
}