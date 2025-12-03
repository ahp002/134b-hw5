export function cardCss() {
    return `
        .pcard {
        background-color: #fdf0d5;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 350px;
        padding: 2px 16px;
        transition: 0.3s;
        border: 20px solid #fdf0d5; 
        font-family: "Montserrat", sans-serif;
        }

        .pcard:has(:hover) {
            box-shadow: 0 6px 16px 0 white;
            transform: scale(1.02);
        } 

        .pcard img {
        border-radius: 8px;
        max-width: 300px;
        max-height: 170px;
        }

        .pcard h3 {
        color: #274C77;
        }

        button {
        background-color: #E7ECEF;
        font-family: "Montserrat", sans-serif;
        border-radius: 8px;
        font-size: 12px;
        margin-top: 20px;
        width: 100px;
        height: 25px;
        }

        .btn {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-around;
        }

        button &:link {
        text-decoration: none;
        }

        button:hover {
        background-color: lightblue;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }

        img {
        width: 300px;
        }

    `;
}