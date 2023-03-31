import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

import getJoke from "./util/jokes.js";
//console.log(await jokes.getJoke());

import templateEngine from "./util/templateEngine.js";

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, { tabTitle: "Upper | Welcome" });



const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, { tabTitle: "Upper | IRLQuests" });

const contact = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contact, { tabTitle: "Upper | Contact" })

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", async (req, res) => {
    const joke = await getJoke();
    const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html")
        .replace("$JOKE", JSON.stringify(joke));
    const jokesPage = templateEngine.renderPage(jokes, {
        tabTitle: "Upper | Jokes",
        cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`
    });
    res.send(jokesPage);
})

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.post("/api/contact", (req, res) => {
    console.log(req.body);

    res.redirect("/");
});

console.log(process.env.PORT)

const PORT = Number(process.env.PORT) || 8082;

app.listen(PORT);

//how do u defene env variables in node
//package.json scripts
