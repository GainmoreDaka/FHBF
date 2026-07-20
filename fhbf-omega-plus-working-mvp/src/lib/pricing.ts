export const membershipTiers = [
  { name: 'Student', price: 20, description: 'Students, youth entrepreneurs and startups' },
  { name: 'Entrepreneur', price: 50, description: 'SMEs, freelancers and consultants' },
  { name: 'Professional', price: 100, description: 'Executives and specialists' },
  { name: 'Business', price: 250, description: 'Established businesses and growing SMEs' },
  { name: 'Corporate', price: 500, description: 'Institutions and corporate partners' },
];

export const villagePricing = [
  { type: 'Emerging Entrepreneur', member: 30, nonMember: 60 },
  { type: 'Standard Indoor Stand', member: 100, nonMember: 150 },
  { type: 'Premium Indoor Stand', member: 150, nonMember: 250 },
  { type: 'Outdoor Display', member: 150, nonMember: 250 },
  { type: 'Vehicle Display', member: 200, nonMember: 350 },
  { type: 'Equipment Display', member: 250, nonMember: 400 },
];

export function getVillagePrice(type: string, isMember: boolean) {
  const found = villagePricing.find(v => v.type === type);
  if (!found) return 0;
  return isMember ? found.member : found.nonMember;
}
