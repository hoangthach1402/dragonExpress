import React from 'react'
import clsx from 'clsx'
import styles from './HomeNew.module.scss'
import According from '../According/According'
const HomeNew = () => {
  return (
    <div className={styles.homeNew}>
       <div className={styles.homeNewIntro}>
       <div className={styles.left}>
       <According />
       </div>
       <div className={styles.right}>
       <h3 className={styles.title}>DRAGON EXPRESS – Công Ty Gửi Hàng Đi Mỹ UY Tín Số #1</h3>
       <p className={styles.description}>
       Dragon Express có mặt tại 64 tỉnh thành tại Việt Nam và trên 220 quốc gia và vùng lãnh thổ khắp toàn cầu.  Dragon Express trở thành công ty quốc tế lớn nhất tại Việt Nam. Với hơn 360,000 nhân viên, chúng tôi cung cấp các giải  pháp với số lượng không giới hạn cho hầu hết các nhu cầu tiếp vận. 
       </p>
       <p className={styles.description}>
       Dragon Express mong muốn đem đến cho Quý khách hàng một dịch vụ chuyển phát nhanh quốc tế tốt nhất với thời gian vận chuyển nhanh nhất. Chúng tôi đang không ngừng nỗ lực để trở thành công ty chuyển phát nhanh hàng đầu tại Việt Nam.
       </p>
       </div> 
       </div>
      <div className={styles.doitac}>
      <div className={styles.heading}>
      <div className={styles.title}>ĐỐI TÁC KINH DOANH</div>
      <p className={styles.description}>Là đại lý cấp 01 của các hãng vận chuyển lớn trên toàn thế giới như: DHL, Fedex, Tnt, Ups … Có account chính ngạch nên cước phí vận chuyển sẽ được tối ưu nhất dành cho khách hàng của Dragon247-Express.</p>
      </div>
      <div className={styles.doitaclogo}>
      <div className={styles.item}>
      <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/1.png" alt="" />
      </div>
      <div className={styles.item}>
      <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/2.png" alt="" />
      </div>
      <div className={styles.item}>
      <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/3.png" alt="" />
      </div>
      <div className={styles.item}>
      <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/4.png" alt="" />
      </div>
      </div>
      <div className={styles.thanhtich}>
      <div className={styles.item}>
       <div className={styles.img}>
       <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box-1.png" alt="" />
       </div>
       <div className={styles.title}>+20.550</div>
       <div className={styles.description}>
       Kiện hàng mỗi năm
       </div>
      </div>
      <div className={styles.item}>
       <div className={styles.img}>
       <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/global.png" alt="" />
       </div>
       <div className={styles.title}>+220</div>
       <div className={styles.description}>
       Quốc gia trên thế giới
       </div>
      </div>
      <div className={styles.item}>
       <div className={styles.img}>
       <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/hanghoa.png" alt="" />
       </div>
       <div className={styles.title}>+550</div>
       <div className={styles.description}>
       Tấn hàng hóa
       </div>
      </div>
    
      </div>
      </div>
     <div className={styles.hanghoavanchuyen}>
     <div className={styles.heading}>
   HÀNG HÓA VẬN CHUYỂN BỞI
   <br />
   Dragon247-EXPRESS
     </div>
    <div className={styles.content}>
    <div className={styles.item}>
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box.png" alt="" />
    </div>
    <div className={styles.title}>
    Gửi bưu phẩm, giấy tờ, chứng từ
    </div>
    <div className={styles.description}>
    <p>Gửi Thư, Hồ Sơ, Giấy Tờ, Tài Liệu, Chứng Từ, Hợp Đồng…</p>
    <p>Hổ trợ dịch vụ chuyển phát giao hàng cả thứ 7 và chủ nhật.</p>
    <p>Tracking theo dõi lộ trình chi tiết bưu kiện</p>
    </div>
    </div>
    <div className={styles.item}>
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box.png" alt="" />
    </div>
    <div className={styles.title}>
    Gửi các loại mỹ phẩm, dụng cụ
    </div>
    <div className={styles.description}>
    <p>Mỹ phẩm dạng bột như bột tắm trắng, bột nghệ, tinh bột</p>
    <p>Mỹ phẩm lỏng sệt như kem dưỡng, serium, tinh dầu, tẩy trang, nước hoa hồng…</p>
    <p>Dụng cụ trang điểm makeup, nail</p>
    </div>
    </div>
    <div className={styles.item}>
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box.png" alt="" />
    </div>
    <div className={styles.title}>
    Gửi thuốc tây, dược phẩm
    </div>
    <div className={styles.description}>
    <p>Gửi các loại thuốc tây dạng vĩ, dạng viên nén, hủ các loại..</p>
    <p>Gửi thuốc nam, bắc trị các bệnh tiểu đường, cao huyết áp, thuốc bổ gan thận..</p>
    <p>Các loại thuốc bồi ngoài da, dạng xịt, nhỏ…</p>
    </div>
    </div>
    <div className={styles.item}>
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box.png" alt="" />
    </div>
    <div className={styles.title}>
    Gửi hàng hóa cá nhân
    </div>
    <div className={styles.description}>
    <p>Gửi quần áo cá nhân, giày dép, thắt lưng, mắt kính, bóp, nón, ví, balo các loại</p>
    <p>Các sản phẩm thời trang thương hiệu như Adidas, Nike, Chanel…..</p>
    <p>Gửi áo dài, váy cưới, các loại đầm dạ hội</p>
    </div>
    </div>
    <div className={styles.item}>
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box.png" alt="" />
    </div>
    <div className={styles.title}>
    Gửi thực phẩm, bánh kẹo
    </div>
    <div className={styles.description}>
    <p>Gửi thực phẩm khô: Cá khô, tôm mực, ruốt, chà bông, các loại mứt, bánh kẹo, rau củ..</p>
    <p>Các loại thực phẩm lỏng như , dầu, bột, ngũ cốc, nước ép…</p>
    <p>Các loại khô cá, mực, cơm cháy…</p>
    </div>
    </div>
    <div className={styles.item}>
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/box.png" alt="" />
    </div>
    <div className={styles.title}>
    Gửi đồ gỗ, máy móc, tượng
    </div>
    <div className={styles.description}>
    <p>Gửi các loại đồ nội thất: bàn ghế, giường, tủ, nệm, chăn sưởi ấm</p>
    <p>Gửi các hàng thủ công mỹ nghệ, tượng tôn giáo, tranh ảnh các loại</p>
    <p>Các loại máy móc công nghiệp, đồ điện tử</p>
    </div>
    </div>
    
    </div>
     </div>
   <div className={styles.lienhe}>
   <div className={styles.left}> 
   <div className={styles.title}>
   HÃY LIÊN HỆ NGAY VỚI CHÚNG TÔI
   </div>
   <div className={styles.description}>
   Liên hệ ngay với chúng tôi để giao hàng đi khắp nơi trên thế giới, hỗ trợ đóng gói vận chuyển đến tận nhà. 
   <br />
   Với công ty gửi hàng Quốc Tế Dragon247-Express việc gửi lô hàng của quý khách chưa bao giờ dễ dàng hơn thế.
   </div>
   ​</div>
   <div className={styles.right}>
   <button className={styles.btn}><a href="https://zalo.me/0987499146">LIÊN HỆ</a> </button>
   </div>
   </div>
    </div>
  )
}

export default HomeNew