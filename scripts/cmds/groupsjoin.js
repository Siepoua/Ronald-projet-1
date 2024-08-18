module.exports.config = {
  name: "groupsjoin",
  version: "1.0.0",
  hasPermssion: 0,
  aliases: ["gj"],
  credits: "RONALD",//do not change thé name
  description: "Liste les groupes Messenger et permet de rejoindre un groupe en répondant avec un numéro",
  commandCategory: "Utility",
  usages: "groups",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const threadList = await api.getThreadList(100, null, ["INBOX"]);
  const groups = threadList.filter(thread => thread.isGroup);
  
  if (groups.length === 0) {
    return api.sendMessage("Le bot n'est dans aucun groupe.", event.threadID);
  }
  
  let groupListMessage = "Voici la liste des groupes où le bot est présent:\n";
  
  groups.forEach((group, index) => {
    groupListMessage += `${index + 1}. ${group.name}\n`;
  });

  groupListMessage += "\nRépondez avec le numéro du groupe que vous souhaitez rejoindre.";
  
  api.sendMessage(groupListMessage, event.threadID, (error, info) => {
    if (error) return console.error(error);

    global.client.handleReply.push({
      type: "selectGroup",
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID,
      groups: groups
    });
  });
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  const userChoice = parseInt(event.body);
  const selectedGroup = handleReply.groups[userChoice - 1];
  
  if (!selectedGroup) {
    return api.sendMessage("Numéro invalide. Veuillez réessayer.", event.threadID);
  }
  
  api.sendMessage(`Vous avez rejoint le groupe: ${selectedGroup.name}`, selectedGroup.threadID, (error) => {
    if (error) return api.sendMessage("Impossible de rejoindre le groupe.", event.threadID);
  });

  api.unsendMessage(handleReply.messageID);
};
