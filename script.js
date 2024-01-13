var arr = [{
        dp: "https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1664541337092-81ad747fc1f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1577975882846-431adc8c2009?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1523304108042-8ac30850c748?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1665941065977-993d9105662a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1591851395311-65a7d160849a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww"
    }
];
var stories = document.querySelector("#stories");
let clutter = ""
arr.forEach(function(val,idx){
    clutter += `<div id="story">
    <img id="${idx}" src="${val.dp}" alt="">
</div>`
})
stories.innerHTML = clutter;

stories.addEventListener("click",function(dets,inx){
    document.querySelector("#full-story").style.display = "block";
    document.querySelector("#full-story").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(() => {
        document.querySelector("#full-story").style.display = "none";
    }, 2000);
})