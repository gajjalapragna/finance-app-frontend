function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function openFinanceSignup() {
      document.getElementById("financeSignupPopup").style.display = "block";
  }

  function closeFinanceSignup() {
      document.getElementById("financeSignupPopup").style.display = "none";
  }

  function openSignupOptions() {
      document.getElementById("signupOptionsPopup").style.display = "block";
  }

  function closeSignupOptions() {
      document.getElementById("signupOptionsPopup").style.display = "none";
  }
//   function openloginOptions() {
//     document.getElementById("login").style.display = "block";
// }

// function closeloginOptions() {
//     document.getElementById("login").style.display = "none";
// }

 
  function openPersonalInvestmentSignup() {
    document.getElementById("personalInvestmentSignupPopup").style.display = "block";
}
function closePersonalInvestmentSignup() {
    document.getElementById("personalInvestmentSignupPopup").style.display = "none";
}
function openFinanceOrgSignup() {
    document.getElementById("financeOrgSignupPopup").style.display = "block";
}
function closeFinanceOrgSignup() {
    document.getElementById("financeOrgSignupPopup").style.display = "none";
}
function openLoginPopup(from) {
    if (from === 'finance') {
        document.getElementById("loginPopup").style.display = "block";
    } else if (from === 'borrower') {
        document.getElementById("borrowerLoginPopup").style.display = "block";
    }
}
function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("borrowerLoginPopup").style.display = "none";
}
function openBorrowerPopup() {
    document.getElementById("borrowerPopup").style.display = "block";
}
function closeBorrowerPopup() {
    document.getElementById("borrowerPopup").style.display = "none";
}
function openBorrowerSignup() {
    document.getElementById("borrowerSignupPopup").style.display = "block";
}
function closeBorrowerSignup() {
    document.getElementById("borrowerSignupPopup").style.display = "none";
}
function closeBorrowerLoginPopup() {
    document.getElementById("borrowerLoginPopup").style.display = "none";
}
  function openAboutUs() {
    document.getElementById("aboutUsPopup").style.display = "block";
}

function closeAboutUs() {
    document.getElementById("aboutUsPopup").style.display = "none";
}
function openContactUs() {
    document.getElementById("contactUsPopup").style.display = "block";
}

function closeContactUs() {
    document.getElementById("contactUsPopup").style.display = "none";
}