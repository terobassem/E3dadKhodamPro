function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navLogo").style.width = "40px";
    } else {
      document.getElementById("navLogo").style.width = "100px";
    }
  }