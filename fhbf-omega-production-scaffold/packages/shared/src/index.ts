export const MEMBERSHIP_TYPES = ['Student','Entrepreneur','Professional','Business','Corporate'] as const;

export const VILLAGE_PRICING = {
  emerging: { member: 30, nonMember: 60 },
  standardIndoor: { member: 100, nonMember: 150 },
  premiumIndoor: { member: 150, nonMember: 250 },
  outdoor: { member: 150, nonMember: 250 },
  vehicle: { member: 200, nonMember: 350 },
  equipment: { member: 250, nonMember: 400 },
};
