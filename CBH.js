let url = "http://universities.hipolabs.com/search?name=india&state=";
let btn = document.querySelector("button");
let index = document.querySelector("input");
let ul = document.querySelector("#list");
// let contry = index.value;


btn.addEventListener("click",async () => {
let contry = document.querySelector("input").value;
console.log(contry);
let colleges = await getclg(contry);
show(colleges);
});

function show(colleges) {
    ul.innerText = "";
    for (col of colleges) 
    {
        
        let li = "";
        console.log(col.name);
        li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}
async function getclg(contry) {
    try {
        let result= await axios.get(url+contry);
        return result.data;
    } catch(err){
        console.log(err);
    }
}


// const url = "https://icanhazdadjoke.com/";
// async function getjokes() {
//     try {
//         let config = { headers:{ Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
















// let img = document.querySelector("img");
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getimg();
//     img.setAttribute('src', link);
// });


// async function getimg() {
//     try
//     {
//     let res = await axios.get(url2);
//     //let data = await res.json();
//     console.log(res.data.message);
//     return res.data.message;
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }


// btn.addEventListener("click", getfacts);

// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try
//     {
//     let res = await axios.get(url);
//     //let data = await res.json();
//     console.log(res.data.fact);
//     p.innerText= res.data.fact;
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }



// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try
//     {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }





// async function demo() {
//     try{
//     await changecolor("green",1000);
//     await changecolor("red",1000);
//     await changecolor("blue",1000);
//     await changecolor("black",1000);
//     changecolor("white",1000);
//     }
//     catch(error){
//         console.log("error");
//         console.log(error);
//     }
    
//     let a = 5;
//     console.log(a);

// }










// let h1 = document.querySelector("h1");

// function changecolor(color, delay)
// {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()* 10)+1;
//             if(num >7)
//             {
//                 reject("promise is rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         },delay);
//     });
// }
// changecolor("green",1000)
// .then((result) => {
//     console.log("green is completed");
//     return changecolor("red",1000);
// })
// .then((result) => {
//     console.log("red is completed");
//     return changecolor("yellow",1000)
// })
// .then((result) => {
//     console.log("yellow is completed");
// })
// .catch((error) => {
//     console.log("There was an error");
// });














// function savetoDB(data)
// {
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random()* 10)+1;
//         if (internetSpeed > 4)
//         {
//             resolve("data was saved");
//         }
//         else
//         {
//             reject("weak connection");
//         }
//     });
// }


// // let req = savetoDB("apna college");

// // req.then((result) => {
// //     console.log(" data1 promise was resolved");
// //     return savetoDB("hello world");
// //     console.log(result);

// // })
// // .then((result) => {
// //     console.log("data2 saved");
// //     return savetoDB("dival");
// //     console.log(result);

// // })
// // .then((result) => {
// //     console.log("data3 saved");
// //     console.log(result);
// // })
// // .catch((error) => {
// //     console.log(" some promise was rejected");
// //     console.log(error);
// // })

