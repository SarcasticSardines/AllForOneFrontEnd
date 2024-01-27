let helloInp = document.getElementById("helloInp");
let helloRep = document.getElementById("helloRep");
let SumInp1 = document.getElementById("SumInp1");
let SumInp2 = document.getElementById("SumInp2");
let SumRep = document.getElementById("SumRep");
let SentenceInp1 = document.getElementById("SentenceInp1");
let SentenceInp2 = document.getElementById("SentenceInp2");
let SentenceRep = document.getElementById("SentenceRep");
let GreaterInp1 = document.getElementById("GreaterInp1");
let GreaterInp2 = document.getElementById("GreaterInp2");
let GreaterRep = document.getElementById("GreaterRep");
let Mad1 = document.getElementById("Mad1");
let Mad2 = document.getElementById("Mad2");
let Mad3 = document.getElementById("Mad3");
let Mad4 = document.getElementById("Mad4");
let Mad5 = document.getElementById("Mad5");
let Mad6 = document.getElementById("Mad6");
let Mad7 = document.getElementById("Mad7");
let Mad8 = document.getElementById("Mad8");
let Mad9 = document.getElementById("Mad9");
let Mad10 = document.getElementById("Mad10");
let Mad11 = document.getElementById("Mad11");
let Mad12 = document.getElementById("Mad12");
let Mad13 = document.getElementById("Mad13");
let Mad14 = document.getElementById("Mad14");
let Mad15 = document.getElementById("Mad15");
let Mad16 = document.getElementById("Mad16");
let MadBtn = document.getElementById("MadBtn");
let MadRep = document.getElementById("MadRep");
let OddInp = document.getElementById("OddInp");
let OddRep = document.getElementById("OddRep");
let AlphaInp = document.getElementById("AlphaInp");
let AlphaRep = document.getElementById("AlphaRep");
let NumInp = document.getElementById("NumInp");
let NumRep = document.getElementById("NumRep");
let MagicInp = document.getElementById("MagicInp");
let MagicRep = document.getElementById("MagicRep");
let FeedInp = document.getElementById("FeedInp");
let FeedRep = document.getElementById("FeedRep");

// api funcs
async function MadFetch(adject1, charaName, adject2, noun1, noun2, noun3, color1, noun4, adject3, noun5, adject4, onomat1, adject5, color2, noun6, noun7){
    const promise = await fetch(`http://localhost:5249/api/MadLibs/Madness/${adject1}/${charaName}/${adject2}/${noun1}/${noun2}/${noun3}/${color1}/${noun4}/${adject3}/${noun5}/${adject4}/${onomat1}/${adject5}/${color2}/${noun6}/${noun7})`)
    const data = await promise.text();
    MadRep.innerText = data;
}
MadFetch();

    MadBtn.addEventListener("click", async (event) =>{
         MadRep.textContent = MadFetch(Mad1.value, Mad2.value, Mad3.value, Mad4.value, Mad5.value, Mad6.value, Mad7.value, Mad8.value, Mad9.value, Mad10.value, Mad11.value, Mad12.value, Mad13.value, Mad14.value, Mad15.value, Mad16.value);
        
    });

async function HelloFetch(userName){
    const promise = await fetch(`http://localhost:5249/api/SayHello/GetName/${userName}`)
    const data = await promise.text();
    console.log(data);
    return data;
}

helloInp.addEventListener("keydown", async (event)=> {
    if(event.key === "Enter"){
        helloRep.textContent = HelloFetch(helloInp.value);
        console.log(await HelloFetch(event.target.value));
    }
});

async function SumFetch(num1, num2){
    const promise = await fetch (`http://localhost:5249/api/Sums/GetNumbers/${num1}/${num2}`)
    const data = await promise.json();
    return data;
}

