
let mensdata = [
    {
        image_url:
            "https://images.bewakoof.com/t640/starboy-oversized-fit-t-shirt-545603-1664287564-1.jpg",
        brand: "Bewakoof",
        name: "Men's White Star Boy Graphic Printed Ove...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/starboy-oversized-fit-t-shirt-545597-1664287601-1.jpg",
        brand: "Bewakoof",
        name: "Men's White Star Boy Graphic Printed Ove...",
        price: "₹699",
        tribe: "₹639 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/game-over-minimal-half-sleeve-t-shirt-navy-blue-305202-1655748497-1.jpg",
        brand: "Bewakoof",
        name: "Game Over Minimal Half Sleeve T-Shirt...",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/house-of-the-dragon-legacy-oversized-fit-t-shirt-544447-1664008381-1.jpg",
        brand: "Bewakoof",
        name: "Men's Blue House Of The Dragon Legacy ...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg",
        brand: "Bewakoof",
        name: "Men's Black Gohan Graphic Printed T-shirt",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg",
        brand: "Bewakoof",
        name: "Men's Black Don't Grow Up Typography T-shirt",
        price: "₹329",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/men-s-black-stripe-minion-relaxed-fit-t-shirt-452883-1655751697-1.jpg",
        brand: "Bewakoof",
        name: "Men's Black Minion Striped Oversized T-shirt",
        price: "₹549",
        tribe: "₹499 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/white-half-sleeve-t-shirt-105-1659608382-1.jpg",
        brand: "Bewakoof",
        name: "White Half Selave T-Shirt",
        price: "₹339",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/mickey-trio-call-half-sleeve-t-shirt-dl-276321-1655748514-1.jpg",
        brand: "Bewakoof",
        name: "Mickey Trio Call Half Sleeve T-Shirt (DL)",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/starboy-oversized-fit-t-shirt-545603-1664287564-1.jpg",
        brand: "Bewakoof",
        name: "Men's White Star Boy Graphic Printed Ove...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/starboy-oversized-fit-t-shirt-545597-1664287601-1.jpg",
        brand: "Bewakoof",
        name: "Men's White Star Boy Graphic Printed Ove...",
        price: "₹699",
        tribe: "₹639 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/game-over-minimal-half-sleeve-t-shirt-navy-blue-305202-1655748497-1.jpg",
        brand: "Bewakoof",
        name: "Game Over Minimal Half Sleeve T-Shirt...",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/house-of-the-dragon-legacy-oversized-fit-t-shirt-544447-1664008381-1.jpg",
        brand: "Bewakoof",
        name: "Men's Blue House Of The Dragon Legacy ...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/gohan-half-sleeve-t-shirt-512884-1655993277-1.jpg",
        brand: "Bewakoof",
        name: "Men's Black Gohan Graphic Printed T-shirt",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/don-t-grow-up-half-sleeve-t-shirt-544706-1664256006-1.jpg",
        brand: "Bewakoof",
        name: "Men's Black Don't Grow Up Typography T-shirt",
        price: "₹329",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/men-s-black-stripe-minion-relaxed-fit-t-shirt-452883-1655751697-1.jpg",
        brand: "Bewakoof",
        name: "Men's Black Minion Striped Oversized T-shirt",
        price: "₹549",
        tribe: "₹499 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/white-half-sleeve-t-shirt-105-1659608382-1.jpg",
        brand: "Bewakoof",
        name: "White Half Selave T-Shirt",
        price: "₹339",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/mickey-trio-call-half-sleeve-t-shirt-dl-276321-1655748514-1.jpg",
        brand: "Bewakoof",
        name: "Mickey Trio Call Half Sleeve T-Shirt (DL)",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    }
]
let count=0;
mensdata.forEach(function(el){
    let card= document.createElement("div")

    let proimg=document.createElement("img")
        proimg.src=el.image_url;

    let probrand=document.createElement("h4")
        probrand.innerText=el.brand; 

    let proname=document.createElement("p")
        proname.innerText=el.name;

    let proprice=document.createElement("h4")
        proprice.innerText=el.price;

    let protribe=document.createElement("p")
        protribe.innerText=el.tribe;

    
    card.append(proimg,probrand,proname,proprice,protribe)

    document.querySelector("#product").append(card)
    count++
})

document.querySelector("#count").innerText="("+count+")";
    
