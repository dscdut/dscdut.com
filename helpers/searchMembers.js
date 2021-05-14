import getMembers from '../services/getMembers';

export default async function searchMembers(string) {
     const members = await getMembers();
     console.log(string);
     const filteredMembers = members.filter(member => member.name.toLowerCase().includes(string.toLowerCase()));
     return filteredMembers;
}