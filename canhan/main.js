// Ẩn tất cả nội dung
function hideAll() {
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("infoContent").style.display = "none";
    document.getElementById("studentProfileContent").style.display = "none";
    document.getElementById("serviceContent").style.display = "none";
    document.getElementById("loginContent").style.display = "none";
  }
  
  // Hiển thị từng mục
  function showHome() {
    hideAll();
    document.getElementById("homeContent").style.display = "block";
  }
  
  function showInfo() {
    hideAll();
    document.getElementById("infoContent").style.display = "block";
  }
  
  function showStudentProfile() {
    hideAll();
    document.getElementById("studentProfileContent").style.display = "block";
  }
  
  function showService() {
    hideAll();
    document.getElementById("serviceContent").style.display = "block";
  }
  
  function showLogin() {
    hideAll();
    document.getElementById("loginContent").style.display = "block";
  }
  
  // Tài khoản mẫu
  const users = {
    "Vanthuong": {
      password: "123456",
      email: "vanthuong@example.com",
      phone: "0901234567",
      address: "Hà Nội",
      school: "ĐH Công nghệ",
      major: "Công nghệ Thông Tin",
      year: "2021 - 2025"
    },
    "Quochoang": {
      password: "123456",
      email: "quochoang@example.com",
      phone: "0907654321",
      address: "TP HCM",
      school: "ĐH Bách Khoa",
      major: "Khoa học Máy tính",
      year: "2020 - 2024"
    }
  };
  
  // Xử lý đăng nhập
  function handleLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("loginError");
  
    if (users[username] && users[username].password === password) {
      // Đăng nhập thành công
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("welcomeBox").style.display = "block";
      document.getElementById("displayUsername").innerText = username;
  
      const user = users[username];
      // Cập nhật thông tin
      document.getElementById("infoAvatar").src = `https://i.pravatar.cc/150?u=${username}`;
      document.getElementById("infoAvatar").style.display = "block";
      document.getElementById("infoName").innerText = username;
      document.getElementById("infoEmail").innerText = user.email;
      document.getElementById("infoPhone").innerText = user.phone;
      document.getElementById("infoAddress").innerText = user.address;
      document.getElementById("infoSchool").innerText = user.school;
      document.getElementById("infoMajor").innerText = user.major;
      document.getElementById("infoYear").innerText = user.year;
  
      // Hiển thị bảng điểm mẫu
      const gradeTable = document.getElementById("gradeTableBody");
      gradeTable.innerHTML = `
        <tr><td>Lập trình C++</td><td>8.0</td><td>Đậu</td></tr>
        <tr><td>Thiết kế Web</td><td>9.0</td><td>Đậu</td></tr>
        <tr><td>Toán rời rạc</td><td>7.5</td><td>Đậu</td></tr>
      `;
  
      showInfo(); // chuyển sang tab Thông tin
      errorBox.innerText = "";
    } else {
      errorBox.innerText = "Tên đăng nhập hoặc mật khẩu không đúng!";
    }
  }
  
  // Đăng xuất
  function handleLogout() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("welcomeBox").style.display = "none";
    document.getElementById("loginError").innerText = "";
  
    // Xóa thông tin cá nhân
    document.getElementById("infoAvatar").style.display = "none";
    document.getElementById("infoName").innerText = "Chưa đăng nhập";
    document.getElementById("infoEmail").innerText = "-";
    document.getElementById("infoPhone").innerText = "-";
    document.getElementById("infoAddress").innerText = "-";
    document.getElementById("infoSchool").innerText = "-";
    document.getElementById("infoMajor").innerText = "-";
    document.getElementById("infoYear").innerText = "-";
    document.getElementById("gradeTableBody").innerHTML = "";
  }
  
  // Đăng nhập email ở trang chủ
  function submitEmail() {
    const email = document.getElementById("loginEmail").value.trim();
    const errorText = document.getElementById("emailError");
  
    if (!email || !email.includes("@")) {
      errorText.innerText = "Email không hợp lệ!";
    } else {
      errorText.innerText = "Đăng nhập email thành công!";
    }
  }
  