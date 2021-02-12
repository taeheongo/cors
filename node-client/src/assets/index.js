const request = () => {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:8081/data";

  if (!xhr) {
    alert("XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ");
    return false;
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const dataElem = document.getElementById("data");
        dataElem.textContent = xhr.responseText;
      } else {
        alert("request에 문제가 있어요.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
};

// request();

const preflight = () => {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:8081/data";

  if (!xhr) {
    alert("XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ");
    return false;
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr);
        const dataElem = document.getElementById("data");
        dataElem.textContent = xhr.responseText;
      } else {
        alert("request에 문제가 있어요.");
      }
    }
  };

  xhr.open("PUT", url);
  xhr.setRequestHeader("auth", "token");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ data: "post data!" }));
};

// preflight();

const requestWithCredentials = () => {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:8081/credentials";

  if (!xhr) {
    alert("XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ");
    return false;
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr);
        const dataElem = document.getElementById("data");
        dataElem.textContent = xhr.responseText;
      } else {
        alert("request에 문제가 있어요.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.withCredentials = true;
  xhr.send();
};

requestWithCredentials();
