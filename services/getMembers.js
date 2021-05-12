import { BASE_URL } from '../constants/url';

export default async function getMembers() {
     const res = await fetch(BASE_URL + '/members');
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