
      document.getElementById("icon").addEventListener("click", () => {
        const navbar = document.getElementById("navbar");
        if (navbar.style.display == "block") {
          navbar.style.display = "none";
        } else navbar.style.display = "block";
      });
      document.getElementById("submit").addEventListener("click", () => {
        alert("Your form has been successfully submitted..");
      });