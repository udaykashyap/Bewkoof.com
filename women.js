
let womensdata = [
    {
        image_url:
            "https://images.bewakoof.com/t640/pink-venom-boyfriend-t-shirt-545598-1664287749-1.jpg",
        brand: "Bewakoof",
        name: "women's White Star Boy Graphic Printed Ove...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-yellow-been-there-boyfriend-t-shirt-482683-1655750298-1.jpg",
        brand: "Bewakoof",
        name: "women's White Star Boy Graphic Printed Ove...",
        price: "₹699",
        tribe: "₹639 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-blue-hang-loose-relax-boyfriend-t-shirt-387816-1655748808-5.jpg",
        brand: "Bewakoof",
        name: "Game Over Minimal Half Sleeve T-Shirt...",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/believe-cat-boyfriend-t-shirt-387068-1655748385-5.jpg",
        brand: "Bewakoof",
        name: "women's Blue House Of The Dragon Legacy ...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-lilac-bloom-cute-but-psycho-printed-t-shirt-534619-1662619837-1.jpg",
        brand: "Bewakoof",
        name: "women's Black Gohan Graphic Printed T-shirt",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-white-midnight-story-boyfriend-fit-t-shirts-499186-1657271564-1.jpg",
        brand: "Bewakoof",
        name: "women's Black Don't Grow Up Typography T-shirt",
        price: "₹329",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-black-tropical-vibes-typography-oversized-t-shirt-493433-1655750394-1.jpg",
        brand: "Bewakoof",
        name: "women's Black Minion Striped Oversized T-shirt",
        price: "₹549",
        tribe: "₹499 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/totally-koalified-oversized-fit-t-shirt-534839-1660144282-1.jpg",
        brand: "Bewakoof",
        name: "White Half Selave T-Shirt",
        price: "₹339",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-black-tune-squad-lola-bunny-graphic-printed-oversized-t-shirt-519143-1660311562-1.jpg",
        brand: "Bewakoof",
        name: "Mickey Trio Call Half Sleeve T-Shirt (DL)",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-blue-dreamer-t-shirt-295742-1655748135-1.jpg",
        brand: "Bewakoof",
        name: "women's White Star Boy Graphic Printed Ove...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-pink-no-time-for-romance-graphic-printed-boyfriend-t-shirt-544710-1664273379-1.jpg",
        brand: "Bewakoof",
        name: "women's White Star Boy Graphic Printed Ove...",
        price: "₹699",
        tribe: "₹639 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-black-henley-slim-fit-t-shirt-318484-1656142941-1.jpg",
        brand: "Bewakoof",
        name: "Game Over Minimal Half Sleeve T-Shirt...",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/no-time-for-romance-oversized-fit-t-shirt-544708-1664256230-1.jpg",
        brand: "Bewakoof",
        name: "women's Blue House Of The Dragon Legacy ...",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-black-pacman-love-printed-t-shirt-519158-1658746352-1.jpg",
        brand: "Bewakoof",
        name: "women's Black Gohan Graphic Printed T-shirt",
        price: "₹449",
        tribe: "₹409 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-off-white-heyyyy-lazy-typography-oversized-t-shirt-512933-1660311520-1.jpg",
        brand: "Bewakoof",
        name: "women's Black Don't Grow Up Typography T-shirt",
        price: "₹329",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/white-women-aop-t-shirt-467467-1655732009-1.jpg",
        brand: "Bewakoof",
        name: "women's Black Minion Striped Oversized T-shirt",
        price: "₹549",
        tribe: "₹499 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-wax-yellow-better-together-typography-oversized-t-shirt-502216-1658825477-1.jpg",
        brand: "Bewakoof",
        name: "White Half Selave T-Shirt",
        price: "₹339",
        tribe: "₹309 For Tribe Member"
    },
    {
        image_url:
            "https://images.bewakoof.com/t640/women-s-all-over-printed-oversized-fit-t-shirt-492837-1656145324-1.jpg",
        brand: "Bewakoof",
        name: "Mickey Trio Call Half Sleeve T-Shirt (DL)",
        price: "₹449",
        tribe: "₹419 For Tribe Member"
    }
]
let count=0;
womensdata.forEach(function(el){
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
    
