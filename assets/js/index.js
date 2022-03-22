const scrollContainer = document.querySelector(".plan_section");
const scrollElem = document.querySelector(".xaxis_mover");
elt1 = document.getElementById("3600");
endNbr1 = Number(elt1.id);
elt2 = document.getElementById("340");
endNbr2 = Number(elt2.id);
elt3 = document.getElementById("45");
endNbr3 = Number(elt3.id);
elt4 = document.getElementById("120");
endNbr4 = Number(elt4.id);
input_value1 = document.getElementById("Name");
input_value2 = document.getElementById("Phone");
input_value3 = document.getElementById("Email");
input_value4 = document.getElementById("Personal");


setInterval(pro, 1000);

function pro() {
  document.querySelector(".f1").classList.toggle("appear");
  document.querySelector(".f2").classList.toggle("appear");
  document.querySelector(".f3").classList.toggle("appear");
}

window.addEventListener("scroll", function () {
  var place = document.documentElement.scrollTop;
  var alertOn = document.getElementById("stats").offsetTop;
  if (place > alertOn - 400) {
    incNbrRec(0, endNbr1, elt1, 1);
    incNbrRec(0, endNbr2, elt2, 10);
    incNbrRec(0, endNbr3, elt3, 90);
    incNbrRec(0, endNbr4, elt4, 30);
    this.removeEventListener("scroll", arguments.callee, false);
  }
});

function incNbrRec(i, endNbr, elt, speed) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    if (elt.innerHTML > 3599) {
      elt.innerHTML = i + "+";
    }
    setTimeout(function () {
      if (endNbr < 1000) {
        incNbrRec(i + 1, endNbr, elt, speed);
      } else {
        incNbrRec(i + 5, endNbr, elt, speed);
      }
    }, speed);
  }
}

function sendMail(e) {
  e.preventDefault();
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "receiver@email_address.com",
    From: "sender@email_address.com",
    Subject: "NEW USER REGITERED !!!",
    Body: `Name: ${input_value1} Phone: ${input_value2} Email: ${input_value3} Personal: ${input_value4}`,
  }).then(function (message) {
    document.getElementById("myForm").reset();
    alert("Thanks for registering");
  });
}


// FAQ

let faqLabel=document.querySelectorAll(".faq-label");

faqLabel.forEach(item=>item.onclick=()=>{
   //selektuje Answer
   item.nextElementSibling.classList.toggle('active');
   
   
   let labelIcon=item.lastElementChild;
   let icons=labelIcon.lastElementChild;
   icons.classList.toggle('rotate');
 
   
})

