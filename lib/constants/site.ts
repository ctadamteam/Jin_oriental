export const SITE_CONFIG = {
  name: "진한의원",
  description: "건강한 다이어트, 진한의원과 함께하세요.",
  contact: {
    phone: "02-0000-0000",
    address: "서울특별시 강남구 ...",
  },
  links: {
    kakao: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || "#",
    blog: process.env.NEXT_PUBLIC_BLOG_URL || "#",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    naverReservation: process.env.NEXT_PUBLIC_NAVER_RESERVATION_URL || "#",
  },
  hours: {
    weekday: "10:00 - 20:00",
    saturday: "10:00 - 15:00",
    lunch: "13:00 - 14:00",
    closed: "일요일, 공휴일 휴무",
  }
};
