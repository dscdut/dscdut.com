import getMembers from '../services/getMembers';
import convertToNonAccentVietnamese from './convertToNonAccentVietnamese';

export default async function searchMembers(string) {
  const members = await getMembers();
  let filteredMembers = [];
  if (string.trim() !== '') {
    const data = convertToNonAccentVietnamese(string).toLowerCase();
    filteredMembers = members.filter(
      (member) => member.name.toLowerCase().includes(data),
    );
  }
  return filteredMembers;
}
