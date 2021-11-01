var thePages=["Home", "About", "interact"]
var responseDiv= document.body.querySelector(".response")
var fart=[]
function makeANav(){
    var nav=document.createElement("nav")
    for (var i=0; i<thePages.length; i++) {
        makeButt(thePages[i])
    }
    document.body.appendChild(nav)



    function makeButt(chaos){
        var butts=document.createElement("button")
        butts.innerHTML=chaos
        butts.addEventListener("click", function(){
            navigateTheHighSeAss(chaos)
        })
        nav.appendChild(butts)

    }
}
function navigateTheHighSeAss(chaos){
    if (chaos==="Home"){
        homeOfTheAsses()
    } else if(chaos==="About"){
        aboutInsertBadAttemptAtButtPun()
    }else if(chaos==="interact"){
        aFunShitShow()
    }
}
function wrappingTheCheeks(){
    var wrapper=document.createElement("div")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)
}
function homeOfTheAsses(){
    var wrapper=document.body.querySelector(".wrapper")
    wrapper.innerHTML=""
    var aHeader=document.createElement("h1")
    aHeader.innerHTML="Home"
    var bHeader=document.createElement("h3")
    bHeader.innerHTML="gurenyuu"
    wrapper.appendChild(aHeader)
    wrapper.appendChild(bHeader)

}
function aboutInsertBadAttemptAtButtPun(){
    var wrapper=document.body.querySelector(".wrapper")
    wrapper.innerHTML=""
    var aHeader=document.createElement("h1")
    aHeader.innerHTML="About"
    var bHeader=document.createElement("h3")
    bHeader.innerHTML="Sebastien Cornejo"
    var cHeader=document.createElement("h10")
    cHeader.innerHTML="Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."
    wrapper.appendChild(aHeader)
    wrapper.appendChild(bHeader)
    wrapper.appendChild(cHeader)
}

function aFunShitShow() {

    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = ""
    var aHeader = document.createElement("button")
    aHeader.innerHTML = "Submit"
    wrapper.appendChild(aHeader)
    var bHeader = document.createElement("h2")
    bHeader.innerHTML = fart
    wrapper.appendChild(bHeader)
    var textValue= document.body.querySelector(".input2").value;

    aHeader.addEventListener("click", function () {
        if (textValue.length >= 1) {
            fart.push()
            renderList()
        } else {
            bheader.innerHTML="Gotta actually put at something"
        }

    })
    function renderList(){
        var itemsDiv=document.body.querySelector(".items")
        itemsDiv.innerHTML=""
        for (var i=0; i<fart.length; i++){
            var ele=document.createElement("div")
            ele.innerHTML=fart[i]
            itemsDiv.appendChild(ele)
        }
    }
}
document.body.querySelector(".butts2").addEventListener("click", function(){
    var textValue= document.body.querySelector(".input").value;


    if (textValue==="coolStudent123"){
        responseDiv.innerHTML=""
        makeANav()
        wrappingTheCheeks()
        navigateTheHighSeAss("Home")
    } else{
        responseDiv.innerHTML="Wrong Username, Try again."
    }
})
