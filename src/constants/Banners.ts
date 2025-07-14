type Banner = {
  id: string;
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
};
const Banners: Banner[] = [
  {
    id: "std-banner",
    name: "Standard Banner",
    description: "Description for Standard Banner",
    image: "banner1.png",
    startDate: "",
    endDate: "",
  },
  {
    id: "char-banner",
    name: "Character Banner",
    description: "Description for Character Banner",
    image: "banner2.png",
    startDate: "2024-02-01",
    endDate: "2026-02-28",
  },
  {
    id: "wp-banner",
    name: "Weapon Banner",
    description: "Description for Weapon Banner",
    image: "banner2.png",
    startDate: "2024-02-01",
    endDate: "2026-02-28",
  },
  {
    id: "syn-banner",
    name: "Synergy Banner",
    description: "Description for Synergy Banner",
    image: "banner2.png",
    startDate: "2024-02-01",
    endDate: "2026-02-28",
  },
];

export default Banners;
