var qoute = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        Auther: "― Oscar Wilde"
    },
    {
        qoute: "“So many books, so little time.”",
        Auther: "― Frank Zappa"
    },
    {
        qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        Auther: "― Albert Einstein"
    },
    {
        qoute: "“A room without books is like a body without a soul.”",
        Auther: "― Marcus Tullius Cicero"
    },
    {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        Auther: "― Mae West"
    }
]

function takeQuote(){
    var quotes = Math.floor(Math.random() * qoute.length)
    console.log(quotes)
    document.getElementById("quote").innerHTML = qoute[quotes].qoute;
    document.getElementById("auther").innerHTML = qoute[quotes].Auther;
}

const cursorDot=document.querySelector("[data-cursor-dot]")

const cursorOutline=document.querySelector("[data-cursor-outline]")
window.addEventListener("mousemove",function(e){
  const posX =e.clientX;
  const posY=e.clientY;
  cursorDot.style.left=`${posX}px`;
  cursorDot.style.top=`${posY}px`;
  cursorOutline.style.left=`${posX-15}px`;
cursorOutline.style.top =`${posY-15}px`;

});
$(".btg " ).click(function(){
    $(" .col" ).hide(450).show(450)
})