document.getElementById("back").addEventListener("click", function() {
    const scrollToTop = setInterval(function() {
      // Lấy vị trí cuối cùng của cửa sổ trình duyệt
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
       console.log(currentPosition);
      // Nếu vị trí hiện tại đã ở đầu trang thì dừng lại
      if (currentPosition === 0) {
        clearInterval(scrollToTop);
      }
      // Di chuyển lên trên
      window.scrollBy(0, -50);
    }, 10); // Thời gian cập nhật cuộn
  });

  window.addEventListener("scroll", function() {
    const backBtn = document.getElementById("back");
    // Lấy vị trí cuối cùng của cửa sổ trình duyệt
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Nếu vị trí hiện tại lớn hơn 0 hiển thị nút back ngược lại không hiện
    if (currentPosition > 0) {
      backBtn.style.display = "block";
    } else {
      backBtn.style.display = "none";
    }
  });

  function submit(){
    var mail=document.getElementById("mail");
    if(mail!=""){
      alert("Cảm ơn bạn đã nhập thông tin");
    }
    if(mail=="") alert("Vui lòng nhập thông tin sau đó đăng kí");

  }
  
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
      processInput();
    }
  }

  function processInput() {
    var input = document.getElementById("mail").value;
    alert("Thông tin đã nhập: " + input);
  }

