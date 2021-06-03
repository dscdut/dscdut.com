import getMembers from '../services/getMembers';
import convertToNonAccentVietnamese from './convertToNonAccentVietnamese';

export default async function searchMembers(string) {
  const members = await getMembers();
  const data = convertToNonAccentVietnamese(string).toLowerCase();
  const filteredMembers = members.filter(
    (member) => member.name.toLowerCase().includes(data),
  );
  return filteredMembers;
}
