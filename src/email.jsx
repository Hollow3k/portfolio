export default function sendMail() {
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        message: document.getElementById("message").value,
    }

    document.getElementById("sendd").style.backgroundColor = "green";
    document.getElementById("sendd").innerText = "Sent";

    emailjs.send("service_adqnuoo","template_gt09lbf",parms)(alert("Message Sent Successfully"));
}