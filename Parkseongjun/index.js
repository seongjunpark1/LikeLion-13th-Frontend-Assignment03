document.getElementById("register").addEventListener("click", function () {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordCheck = document.getElementById("password-check");

  let valid = true;

  // 이름 검사
  if (name.value.trim() === "") {
    showError(name, "name-error", "이름을 입력하세요.", "red");
    valid = false;
  } else {
    hideError(name, "name-error");
  }

  // 이메일 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError(email, "email-error", "유효한 이메일을 입력하세요.", "red");
    valid = false;
  } else {
    hideError(email, "email-error");
  }

  // 비밀번호 검사
  if (password.value.length < 6) {
    showError(password, "password-error", "비밀번호는 최소 6자입니다.", "red");
    valid = false;
  } else {
    hideError(password, "password-error");
  }

  // 비밀번호 확인 검사
  if (password.value !== passwordCheck.value || passwordCheck.value === "") {
    showError(passwordCheck, "password-check-error", "비밀번호가 일치하지 않습니다.", "red");
    valid = false;
  } else {
    showError(passwordCheck, "password-check-error", "비밀번호가 일치합니다.", "green");
  }

  if (valid) {
    alert("회원가입 완료!");
  }
});

function showError(input, errorId, message, color) {
  input.style.border = `2px solid ${color}`;
  const error = document.getElementById(errorId);
  error.textContent = message;
  error.style.color = color;
  error.style.display = "block";
}

function hideError(input, errorId) {
  input.style.border = "2px solid green";
  const error = document.getElementById(errorId);
  error.style.display = "none";
}

// 비밀번호 보기 토글 기능
function togglePassword(inputId, toggleElement) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === "password";

  input.type = isHidden ? "text" : "password";
  toggleElement.textContent = isHidden ? "숨기기" : "보기";
}

// 초기화 버튼 클릭 시 초기화 기능
document.getElementById("reset").addEventListener("click", function () {
  const inputs = document.querySelectorAll(".login-box input");
  inputs.forEach(input => {
    input.value = "";
    input.style.border = "1px solid #ccc";
  });

  // 모든 에러 메시지 숨기기
  const errors = document.querySelectorAll(".error-message");
  errors.forEach(error => {
    error.style.display = "none";
  });
});