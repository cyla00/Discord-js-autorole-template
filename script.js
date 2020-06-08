const user = member.guild.user;
const addingRole = member.roles.add(#role#).then(member.setNickname(`${user}`)); //adds role + sets a custom nickname if set up;
if(addingRole){
  member.send(newEntryEmbed).catch(err => {  //it sends to the user a privqte message with a previous set embed;
    console.log(err);
  })
}
