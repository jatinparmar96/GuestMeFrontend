// export type Speaker = {
//   id: string;
//   tagline?: string;
//   profilePicture: string;
//   expertise: string[];
//   reviewCount: number;
//   fullName: string;
// };

export type SpeakerResponse = {
  id: string;
  fullName: string;
  tagline: string;
  profilePicture: string;
  conditions: {
    areas: string[];
  };

  reviewsQuantity: number;
};
