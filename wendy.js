console.log("base64 -> rot13 -> answer")
function wendyMoment() {
    if (document.getElementById("wendyid").value === "wendywizard200") {
        console.log("VmZubnAsIFZuYSBuYXEgWHZ5eXZuYQ==")
        document.getElementById("trolled").innerHTML = "correct!"
    } else {
        document.getElementById("trolled").innerHTML = "incorrect"
    }
}