
export default async function getMembers() {
     const res = await fetch('https://606f0d030c054f001765845d.mockapi.io/api/members');
     const data = await res.json();
     
     const members = data.map(member => {
          return {
               id: member.id.toString(),
               avatar: member.avatar,
               name: member.name
          }
     });

     return members;
}