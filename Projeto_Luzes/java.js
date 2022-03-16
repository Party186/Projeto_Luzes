body=document.querySelector("body")
document.body.style.backgroundColor = "#D3D3D3"
diva=document.createElement("div")
divd=document.createElement("div")
lace=document.createElement("img")
lace.src="./imagens/lamp-a.png"
ldes=document.createElement("img")
ldes.src="./imagens/lamp-d.png"
ace=document.createElement("img")
ace.src="./imagens/bot-a.png"
des=document.createElement("img")
des.src="./imagens/bot-d.png"
diva=document.createElement("div")
divd=document.createElement("div")
diva.append(lace)
diva.append(ace)
divd.append(ldes)
divd.append(des)
body.append(diva)
body.append(divd)
ace.onclick = desl
des.onclick = aces
ldes.style.visibility=("hidden")
des.style.visibility=("hidden")
lace.style.position=("absolute")
ldes.style.position=("absolute")
ace.style.position=("absolute")
des.style.position=("absolute")
ldes.setAttribute("id", "ldes")
des.setAttribute("id", "des")
lace.setAttribute("id", "lace")
ace.setAttribute("id", "ace")
function desl(){
    lace.style.visibility=("hidden")
    ace.style.visibility=("hidden")
    document.body.style.backgroundColor = "black"
    ldes.style.visibility=("visible")
    des.style.visibility=("visible")
}
function aces(){
    ldes.style.visibility=("hidden")
    des.style.visibility=("hidden")
    document.body.style.backgroundColor = "#D3D3D3"
    lace.style.visibility=("visible")
    ace.style.visibility=("visible")
}