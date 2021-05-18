export default async function getMembers() {
     const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/members');
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