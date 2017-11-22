import React from 'react';

export default class Signup extends React.Component {
    close() {
        $('.a-tooltip').css({'display': 'none'});
    }

    render() {
        return (
            <div className='a-tooltip' style={{ display: 'none' }}>
                <p className='a-tooltip-title'> Đăng ký </p>
                <strong> Bước 1: </strong>
                Soạn tin
                <strong> DK</strong>
                Têngóicước Gửi <strong> 9033 </strong>
                <p>Tên gói cước bao gồm:<br />
                    - PHIM (2000d/ngay)<br />
                    - PHIM7 (9000d/7ngay)<br />
                    - PHIM30 (19000d/30ngay)<br />
                    - M3 (80000d/90ngay)<br />
                    - M6 (140000d/180ngay)<br />
                    - M12 (200000d/365ngay)<br />
                    - F12 (1200000d/365ngay)<br />
                    - DA7 (15000d/7ngay)<br />
                    - DA30 (55000d/30ngay)<br />
                    - TH7 (15000d/7ngay)<br />
                    - TH30 (55000d/30ngay)<br />
                    - H (2000d/ngay)<br />
                    - H7 (9000d/7ngay)<br />
                    - H30 (30000d/30ngay)<br />
                    <strong>Bước 2:</strong> Sau khi đăng ký thành công. Bạn nhập số điện thoại đã đăng ký và chọn nhận mật khẩu qua SMS<br />
                    <strong>Bước 3:</strong> Nhập mật khẩu vừa nhận được qua SMS, chọn đăng nhập và thưởng thức những bộ phim đặc sắc cùng mFilm.<br /><br />
                    <span style={{ fontStyle: 'italic' }}>Dịch vụ dành riêng cho thuê bao 3G MobiFone</span>
                </p>
                <div><span className='a-dong-tooltip' onClick={this.close.bind(this)}>Đóng</span></div>
            </div>
        )
    }
}