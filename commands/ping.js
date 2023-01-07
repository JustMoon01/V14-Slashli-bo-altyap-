const Discord = require("discord.js")
const db = require("justdata");
const { messageLink } = require("discord.js");
module.exports = {
  name: "ping",
  description: "Botun pingini gösterir!",
  type: 1,
  options: [],
  run: async (client, interaction) => {

    const embed = new Discord.EmbedBuilder()
      .setTitle("DarknessCode Slashlı Bot Altyapi")
      .setDescription(`Pingim : ${client.ws.ping} ms`)
      interaction.reply({embeds: [embed]})
  }
}
