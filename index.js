const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd");
  //console.log(client.user.presence.status);

  /* const testChannel = client.channels.find(
    channel => channel.name === "test"
  );
  */
});

client.on("message", async(msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
  if (msg.content == "hola") {
    console.log(msg);
    msg.channel.send("Hello! @" + msg.author.username);
  }

  if (msg.content.includes("!test")) {
    msg.reply("Estás testeando!");
  }

  if (msg.content == "!pretty") {
    const embed = new MessageEmbed()
    .setTitle('Un mensaje embed').setColor([255, 0, 255])
    .setAuthor('Richard', 'https://image.freepik.com/vector-gratis/circulo-brillante-iluminacion-purpura-aislado-sobre-fondo-oscuro_1441-2396.jpg')
    .addField("SOmething one", "lorem ipsum")
    .addField("SOmething one", "lorem ipsum")
    .addField("SOmething one", "lorem ipsum");
    msg.channel.send(embed);
  }

  if(msg.content === '!clear'){
      const fetched= await msg.channel.fetchMessages({limit:100});
      console.log(fetched)
  }
});

client.login(process.env.token);
