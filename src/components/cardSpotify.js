class CardSpotify extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {

        const card = document.createElement("div");
        card.setAttribute("class", "Card");

        const cardTop = document.createElement("div");
        cardTop.setAttribute("class", "Card-top")
        const image = document.createElement("img");
        image.src = this.getAttribute("photo") || "assets/img/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

        cardTop.appendChild(image);

        const cardBottom = document.createElement("div");
        cardBottom.setAttribute("class", "Card-bottom");

        const h3 = document.createElement("h3");
        h3.textContent = this.getAttribute("singer") || "Unknown Singer";
        const paragraph = document.createElement("p");
        paragraph.textContent = this.getAttribute("paragraph") || "No description available.";

        cardBottom.appendChild(h3);
        cardBottom.appendChild(paragraph);



        card.appendChild(cardTop);
        card.appendChild(cardBottom);

        return card;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .Card {
            background-color: #2f2f2f;
            width: 300px;
            height: 450px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            border-radius: 0.5rem;
            transition: ease-in-out 0.5s;
        }
        
        .Card-top {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        img {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
        }
        
        .Card-bottom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 1.2rem;
            line-height: 1;
        }
        
        
        h3 {
            color: #fff;
            font-size: 1.2rem;
        }
        
        p {
            color: #a7a7a7;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            font-weight: 500;
        }
        
        
        .Card:hover {
            background-color: #3d3c3c;
        }
        `;
        return style;
    }
}

customElements.define("card-spotify", CardSpotify);
