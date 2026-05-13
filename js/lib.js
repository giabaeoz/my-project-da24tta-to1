// 1. MẢNG DỮ LIỆU SẢN PHẨM
const productList = [
    { 
        id: "001", 
        name: "iPhone 17 Pro Max chính hãng", 
        price: "37.590.000 VNĐ", 
        img: "../assets/images/product1.jpg" ,
        desc: "iPhone 17 Pro Max là siêu phẩm smartphone mới nhất mang đến trải nghiệm đột phá chưa từng có. Sở hữu thiết kế khung titan nguyên khối siêu nhẹ và bền bỉ, chiếc điện thoại này toát lên vẻ sang trọng và đẳng cấp. Điểm nhấn ấn tượng nhất chính là sức mạnh từ con chip A19 Pro thế hệ mới, mang lại hiệu năng vượt trội, xử lý mượt mà mọi tựa game đồ họa nặng và các tác vụ đa nhiệm phức tạp. Màn hình Super Retina XDR kích thước 6.9 inch với công nghệ ProMotion 120Hz cho màu sắc sống động và độ chi tiết sắc nét đến từng pixel. Hệ thống camera sau được nâng cấp toàn diện với cảm biến chính 48MP, hỗ trợ zoom quang học 10x và khả năng quay video 8K chuyên nghiệp, giúp bạn bắt trọn mọi khoảnh khắc đáng nhớ. Dung lượng pin khủng cùng công nghệ sạc nhanh đảm bảo thiết bị luôn sẵn sàng đồng hành cùng bạn."
    },
    { 
        id: "002", 
        name: "iPhone Air Chính Hãng", 
        price: "22.890.000 VNĐ", 
        img: "../assets/images/product5.jpg" ,
        desc:"iPhone 17 Air là mẫu smartphone gây đột phá với thiết kế siêu mỏng chỉ khoảng 5-6mm và khung viền nhôm bền bỉ, hướng đến người dùng ưu tiên tính thẩm mỹ và sự nhẹ nhàng. Máy sở hữu màn hình 6.6 inch 120Hz, chip A19 mạnh mẽ tối ưu cho AI và điểm khác biệt lớn là chỉ trang bị một camera đơn phía sau để duy trì độ mỏng kỷ lục. Đây được xem là sự thay thế cho dòng Plus, kết hợp hoàn hảo giữa hiệu năng ổn định và ngôn ngữ thiết kế sang trọng, hiện đại nhất của Apple."
    },
    { 
        id: "003", 
        name: "iPhone 17 256GB Chính Hãng", 
        price: "24.390.000 VNĐ", 
        img: "../assets/images/product4.jpg" ,
        desc:"iPhone 17 hứa hẹn là bước ngoặt lớn với màn hình ProMotion 120Hz mượt mà trải dài trên mọi phiên bản cùng thiết kế mỏng nhẹ đột phá. Sức mạnh của máy đến từ chip A19 tối ưu cho trí tuệ nhân tạo (AI), đi kèm camera selfie nâng cấp lên 24MP cho hình ảnh sắc nét vượt trội. Điểm nhấn đặc biệt nhất là sự xuất hiện của dòng iPhone 17 Air siêu mỏng, mang đến vẻ ngoài sang trọng và hiện đại, khẳng định vị thế dẫn đầu của Apple trong thế giới smartphone cao cấp"
    },
    { 
        id: "004", 
        name: "MacBook Pro M5", 
        price: "117.990.000 VNĐ", 
        img: "../assets/images/product2.jpg" ,
        desc: "MacBook Pro M5 là chiếc máy tính xách tay tối thượng dành riêng cho giới chuyên gia sáng tạo và lập trình viên. Trái tim của cỗ máy là vi xử lý M5 đột phá, kết hợp cùng bộ nhớ RAM lên đến 128GB, mang đến tốc độ xử lý kinh ngạc cho các tác vụ render video 8K, thiết kế 3D hay biên dịch hàng triệu dòng code trong chớp mắt. Màn hình Liquid Retina XDR 16 inch tuyệt mỹ hiển thị dải màu rộng, độ tương phản cực cao và độ sáng lên tới 1600 nits, mang lại hình ảnh chân thực tuyệt đối. Thiết kế tản nhiệt tiên tiến giúp máy luôn duy trì hiệu năng cao nhất mà vẫn hoạt động êm ái. Bàn phím Magic Keyboard gõ êm, trackpad siêu rộng cùng hệ thống âm thanh 6 loa vòm Spatial Audio biến không gian làm việc của bạn thành một studio thực thụ. Thời lượng pin ấn tượng lên đến 22 giờ liên tục."
    },
    { 
        id: "005", 
        name: "MacBook Neo ", 
        price: "15.990.000 VNĐ", 
        img: "../assets/images/product6.jpg" ,
        desc: "MacBook Neo (ra mắt tháng 3/2026) là dòng laptop giá rẻ nhất lịch sử của Apple, được thiết kế tối ưu cho học sinh, sinh viên và các tác vụ văn phòng cơ bản. Điểm đột phá của máy nằm ở việc trang bị chip A18 Pro từ iPhone thay vì dòng M-series, kết hợp cùng màn hình Liquid Retina 13 inch sắc nét và thời lượng pin ấn tượng lên đến 16 giờ. Với thiết kế vỏ nhôm nguyên khối nhiều màu sắc trẻ trung, không dùng quạt tản nhiệt nên hoạt động cực kỳ yên tĩnh, MacBook Neo mang đến trải nghiệm macOS mượt mà với mức giá vô cùng dễ tiếp cận, chỉ từ khoảng 16 triệu đồng tại Việt Nam."
    },
    { 
        id: "006", 
        name: "Tai nghe AirPods Pro 3", 
        price: "6.500.000 VNĐ", 
        img: "../assets/images/product3.jpg" ,
        desc: "Tai nghe Bluetooth AirPods Pro 3 định nghĩa lại trải nghiệm âm thanh di động với hàng loạt nâng cấp công nghệ sáng tạo. Được trang bị chip H3 mới nhất, thiết bị mang đến khả năng chống ồn chủ động (ANC) thông minh gấp 3 lần so với thế hệ tiền nhiệm, giúp bạn chìm đắm hoàn toàn vào không gian âm nhạc tĩnh lặng tuyệt đối dù đang ở nơi đông người. Chế độ Xuyên âm (Transparency mode) tự động điều chỉnh theo môi trường xung quanh, cho phép bạn dễ dàng giao tiếp mà không cần tháo tai nghe. Âm thanh không gian cá nhân hóa (Personalized Spatial Audio) tạo hiệu ứng vòm 360 độ sống động như đang ở trong rạp hát. Thiết kế công thái học vừa vặn hoàn hảo với nhiều nút tai silicone mềm mại. Kết hợp cùng hộp sạc MagSafe hỗ trợ sạc nhanh, tai nghe cung cấp thời gian nghe nhạc lên đến 30 giờ."
    }
    
];

// 2. HÀM TẠO 1 SẢN PHẨM (Đã thêm tham số productId)
function addProduct(productId, productImg, productName, productPrice) {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-md-4 mb-4");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card h-100 shadow-sm");
    myDiv.appendChild(cardDiv);
    
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");
    cardDiv.appendChild(myDiv1);
    
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", productImg);
    imgEl.setAttribute("alt", productName);
    imgEl.setAttribute("class", "card-img-top");
    myDiv1.appendChild(imgEl);
    
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info card-body d-flex flex-column text-center");

    const nameEl = document.createElement("p");
    nameEl.setAttribute("class", "card-title fw-bold fs-5");
    const textName = document.createTextNode(productName);
    nameEl.appendChild(textName);
    myDiv2.appendChild(nameEl);
    
    const priceEl = document.createElement("p");
    priceEl.setAttribute("class", "card-text text-danger fw-bold");
    const textPrice = document.createTextNode(productPrice);
    priceEl.appendChild(textPrice);
    myDiv2.appendChild(priceEl);
    
    // Nút Xem chi tiết truyền ID
    const myLink = document.createElement("a");
    myLink.setAttribute("class", "btn btn-primary mt-auto");
    const productLink = "product-detail.html"; 
    myLink.setAttribute("href", productLink + "?id=" + productId); 
    
    const textLink = document.createTextNode("Chi tiết sản phẩm");
    myLink.appendChild(textLink);
    myDiv2.appendChild(myLink);
    
    cardDiv.appendChild(myDiv2);
    
    const container = document.querySelector(".product-list");
    if (container) {
        container.appendChild(myDiv);
    }
}

// 3. HÀM LOAD TOÀN BỘ SẢN PHẨM
function loadAllProducts() {
    const container = document.querySelector(".product-list");
    if(container) {
        container.innerHTML = '';
    

    for (let i = 0; i < productList.length; i++) {
        addProduct(
            productList[i].id,    // Đưa ID vào đây
            productList[i].img,   
            productList[i].name,   
            productList[i].price
        );
    }
    }
}
// 4. HÀM KIỂM TRA ID VÀ HIỂN THỊ CHI TIẾT SẢN PHẨM
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = urlParams.get('id');

    if (currentId !== null) {
        let foundProduct = null;

        for (let i = 0; i < productList.length; i++) {
            if (productList[i].id === currentId) {
                foundProduct = productList[i];
                break;
            }
        }

        if (foundProduct !== null) {
            const imgEl = document.getElementById("p-image");
            const nameEl = document.getElementById("p-name");
            const priceEl = document.getElementById("p-price");
            
            const descEl = document.getElementById("p-description");

            if (imgEl) imgEl.setAttribute("src", foundProduct.img);
            if (nameEl) nameEl.innerText = foundProduct.name;
            if (priceEl) priceEl.innerText = foundProduct.price;
            
            if (descEl) descEl.innerText = foundProduct.desc;

        } else {
            const nameEl = document.getElementById("p-name");
            if (nameEl) nameEl.innerText = "Sản phẩm không tồn tại!";
        }
    }
}