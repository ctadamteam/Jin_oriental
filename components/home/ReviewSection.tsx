'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

export interface ElementStyle {
  left: string;
  top: string;
  width: string;
  height: string;
}

export interface CardElements {
  avatar: ElementStyle | null;
  stats: ElementStyle | null;
  meta: ElementStyle | null;
  content: ElementStyle | null;
  photo: ElementStyle | null;
}

export interface ReviewCardData {
  groupName: string;
  stats: string;
  meta: string;
  content: string;
  hasPhoto: boolean;
  photoUrl: string | null;
  rotation: number;
  style: ElementStyle;
  elements: CardElements;
}

export interface ReviewSlideData {
  id: number;
  imageUrl: string;
  alt: string;
  cards: ReviewCardData[];
}

export const REVIEW_SLIDES: ReviewSlideData[] = [
  {
    id: 1,
    imageUrl: '/images/review/review_01.jpg',
    alt: '진한의원 베스트 리뷰 1',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 27 · 사진 42',
        meta: '예약 없이 이용',
        content: '진한의원 다닌지 1년이 넘었는데 선생님 넘 상담 친절하시고\n저의 몸상태에 맞게 약 잘지어주시고 가끔 전화주셔서\n관리도 해주셔서 지인들도 2분더 소개시켜드렸어요~~\n진한의원다니고 25키로 감량했어요~~\n지금은 유지 잘 하구 있어요~~^^',
        hasPhoto: true,
        photoUrl: '/images/review/photo_01_left.jpg',
        rotation: -5.94,
        style: {
          left: '42.00%',
          top: '11.77%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '19.46%',
            height: '2.77%'
          },
          meta: {
            left: '21.60%',
            top: '10.83%',
            width: '12.87%',
            height: '2.31%'
          },
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '82.34%',
            height: '27.71%'
          },
          photo: {
            left: '6.68%',
            top: '48.70%',
            width: '86.83%',
            height: '45.73%'
          }
        }
      },
      {
        groupName: 'Group 5',
        stats: '리뷰 388 · 사진 78',
        meta: '',
        content: '최고의 한의원 입니다^^제가 다녀본곳중에 가장 친절하시고\n의욕이 넘치는 곳이에요 쌤도 무지 친절하고 원장님은\n완전 믿음가네요 오래된..묵은 지방이라..ㅎ 꾸준히 다녀볼\n생각이에요 감사해요',
        hasPhoto: false,
        photoUrl: null,
        rotation: 8.34,
        style: {
          left: '68.54%',
          top: '21.03%',
          width: '27.83%',
          height: '37.48%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '7.65%',
            width: '16.47%',
            height: '28.06%'
          },
          stats: {
            left: '20.06%',
            top: '15.82%',
            width: '21.26%',
            height: '6.12%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '38.78%',
            width: '82.34%',
            height: '51.02%'
          },
          photo: null
        }
      },
    ]
  },
  {
    id: 2,
    imageUrl: '/images/review/review_02.jpg',
    alt: '진한의원 베스트 리뷰 2',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 302 · 사진 72',
        meta: '',
        content: '친구소개로 슬림환 처방 받으러왔어요 지금 일주일차 복용\n중인데 확실히... 뭔가 식욕이 좀 없어져요 부작용도 걱정했는\n데 하나도 없네요 잠도 잘자고요! 잘맞나봐요..!! 살빼서 다음\n여름은 꼭....ㅎㅎ 이쁜 옷입을려구요',
        hasPhoto: true,
        photoUrl: '/images/review/photo_02_left.jpg',
        rotation: -2.78,
        style: {
          left: '42.93%',
          top: '9.84%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '21.26%',
            height: '2.77%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '82.93%',
            height: '23.09%'
          },
          photo: {
            left: '6.68%',
            top: '43.98%',
            width: '86.83%',
            height: '50.45%'
          }
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 453 · 사진 95',
        meta: '',
        content: '붓기랑 소화불량으로 왔어요 원장님 설명도 차근차근 상담\n해주시고, 침치료도 받고 왔어요 실장님들이랑 원장님 너무\n친절하세요 :)',
        hasPhoto: true,
        photoUrl: '/images/review/photo_02_right.jpg',
        rotation: 5.15,
        style: {
          left: '69.65%',
          top: '9.56%',
          width: '27.83%',
          height: '75.98%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.76%',
            width: '16.47%',
            height: '13.84%'
          },
          stats: {
            left: '21.60%',
            top: '8.78%',
            width: '21.56%',
            height: '3.02%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '20.11%',
            width: '80.84%',
            height: '15.10%'
          },
          photo: {
            left: '6.82%',
            top: '38.06%',
            width: '86.83%',
            height: '54.97%'
          }
        }
      },
    ]
  },
  {
    id: 3,
    imageUrl: '/images/review/review_03.jpg',
    alt: '진한의원 베스트 리뷰 3',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 840 · 사진 141',
        meta: '예약 없이 이용',
        content: '소화불량이랑 답답한 증상으로 방문했는데 원장님이 설명도\n차근차근 상담해주시고 침치료도 편안하게 잘 받고 왔어요 :)\n자율신경계가 예민하다고 하시더라구요...\n그래서 수면의 질도 안좋고 두근거림도 심하고 드디어..\n원인을 찾은 느낌이에요 너무 잘 설명해주셔서 일단 너무\n믿음이 팍팍 갔네요 잘 관리해보겠습니다 원장님 🖤',
        hasPhoto: true,
        photoUrl: '/images/review/photo_03_left.jpg',
        rotation: -3.93,
        style: {
          left: '42.59%',
          top: '10.53%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '22.16%',
            height: '2.77%'
          },
          meta: {
            left: '21.60%',
            top: '10.83%',
            width: '12.87%',
            height: '2.31%'
          },
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '82.63%',
            height: '32.33%'
          },
          photo: {
            left: '6.68%',
            top: '52.65%',
            width: '86.83%',
            height: '41.78%'
          }
        }
      },
      {
        groupName: 'Group 5',
        stats: '리뷰 195 · 사진 38',
        meta: '',
        content: '원장님 방송 나오신거 보고믿고 바로 찾아왔네요, 방송에서도\n조곤조곤 엄청 잘 설명해주셔서 한번 해독 진료 받아보고\n싶었는데 드디어 받아봤네요 염증때문에 좀 부종이 심했더라구요.\n아침에 개운하지도 않고 한 3주째 관리중인데\n벌써 조금씩 좋아지는게 느껴지네요 확실히 아침에 개운합니다\n원장님 감사해요',
        hasPhoto: false,
        photoUrl: null,
        rotation: 3.76,
        style: {
          left: '69.80%',
          top: '4.21%',
          width: '27.83%',
          height: '45.55%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.30%',
            width: '16.47%',
            height: '23.09%'
          },
          stats: {
            left: '20.06%',
            top: '13.01%',
            width: '20.96%',
            height: '5.04%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '31.90%',
            width: '90.12%',
            height: '58.76%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 376 · 사진 65',
        meta: '',
        content: '자율신경 이상으로 3년 넘게 정신과 약복용중인데 내성이 생겨\n몸이 계속안좋았어요 체력도 점점 떨어졌고요 자율신경쪽\n심하시다해서 추천받아 왔어요 상담 되게 디테일하게 섬세하게\n잘해주세요. 다른한의원에 비해 체계적이고 신뢰가요.\n진짜 잘온것 같아요 효과도 많이 봤으면 좋겠네요!',
        hasPhoto: false,
        photoUrl: null,
        rotation: -2.25,
        style: {
          left: '68.22%',
          top: '52.43%',
          width: '27.83%',
          height: '41.40%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.93%',
            width: '16.47%',
            height: '25.40%'
          },
          stats: {
            left: '20.06%',
            top: '14.32%',
            width: '21.26%',
            height: '5.54%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '35.10%',
            width: '86.23%',
            height: '55.42%'
          },
          photo: null
        }
      },
    ]
  },
  {
    id: 4,
    imageUrl: '/images/review/review_04.jpg',
    alt: '진한의원 베스트 리뷰 4',
    cards: [
      {
        groupName: 'Group 5',
        stats: '리뷰 838 · 사진 162',
        meta: '',
        content: '극단적인 다이어트하고 또다시 요요왔어요.. 너무 스트레스\n받아서 도저히 혼자 힘으로 감당 안될 거 같아 진한의원 방문\n했습니다..! 우선 체질이랑 살찌는 습관(?) 암튼 제 상태를\n꼼꼼히 체크해주시더니 환 처방해주셨어요. 원장님 믿고 꾸준히\n복용하니까 다시 살이 빠지고 있는거 같아 마음이 편안해졌어요.\n마음까지 편안해지니까 스트레스도 안 받고\n어느새 1키로만 더 빼면 비만 탈출이요!! 저처럼 요요 오신 분들은\n진한의원 추천드리고 갈게요!',
        hasPhoto: false,
        photoUrl: null,
        rotation: 4.01,
        style: {
          left: '42.43%',
          top: '3.44%',
          width: '27.83%',
          height: '52.46%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '5.47%',
            width: '16.47%',
            height: '20.05%'
          },
          stats: {
            left: '20.06%',
            top: '11.30%',
            width: '22.46%',
            height: '4.37%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '27.70%',
            width: '88.32%',
            height: '65.61%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 21 · 사진 17',
        meta: '예약 후 이용 | 대기 시간 10분 이내',
        content: '2년전에 둘째를 낳고 살빼는게 쉽지 않았는데 우연히 티비에\n나오는 원장님을 믿고 방문해서 10kg를 감량해서 전\n돈 안아까운 투자였는데 ... 요새 입맛이 돌면서 야식을 했더니\n살이 점점 찌고 있어서 급하게 또 방문하게 되었네요.\n여전히 믿음이 가고 다시 한번 감량 해볼게요^^ 기대됩니다~~',
        hasPhoto: false,
        photoUrl: null,
        rotation: -6.11,
        style: {
          left: '41.84%',
          top: '54.94%',
          width: '27.83%',
          height: '41.40%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.93%',
            width: '16.47%',
            height: '25.40%'
          },
          stats: {
            left: '20.06%',
            top: '14.32%',
            width: '18.56%',
            height: '5.54%'
          },
          meta: {
            left: '20.06%',
            top: '19.86%',
            width: '29.94%',
            height: '4.62%'
          },
          content: {
            left: '5.99%',
            top: '35.10%',
            width: '85.03%',
            height: '55.42%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 3',
        stats: '리뷰 477 · 사진 101',
        meta: '',
        content: '미주란효과 넘 많이봐서 친구 데려왔어요 ㅎㅎ \n원장님 진짜 시술 넘 꼼꼼히 잘해주셔요^^\n친구도 아픈거 잘 못맞는데 진짜 거의 통증 없어서 넘 좋다고\n하네요ㅎㅎ',
        hasPhoto: true,
        photoUrl: '/images/review/photo_04_right.jpg',
        rotation: 8.18,
        style: {
          left: '70.08%',
          top: '4.89%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '21.86%',
            height: '2.77%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '82.34%',
            height: '23.09%'
          },
          photo: {
            left: '6.68%',
            top: '44.00%',
            width: '86.83%',
            height: '50.43%'
          }
        }
      },
    ]
  },
  {
    id: 5,
    imageUrl: '/images/review/review_05.jpg',
    alt: '진한의원 베스트 리뷰 5',
    cards: [
      {
        groupName: 'Group 5',
        stats: '리뷰 279 · 사진 55',
        meta: '',
        content: '만성 스트레스와 긴장으로 자율신경계 실조증 증상이\n나타났는데, 한약 치료와 약침 요법으로 심박수와 혈압이 안정\n되었습니다 :) 불안감도 줄어들어 요즘 삶의 질이 올라간거\n같아요! 검사도 잘해주시고 무엇보다 처방도 제 상태에 맞게\n딱딱딱 해주셔서 빠르게 건강해질 수 있었던거 같아요 :)',
        hasPhoto: false,
        photoUrl: null,
        rotation: 0.49,
        style: {
          left: '40.82%',
          top: '8.60%',
          width: '27.83%',
          height: '41.70%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.88%',
            width: '16.47%',
            height: '25.22%'
          },
          stats: {
            left: '20.06%',
            top: '14.21%',
            width: '21.26%',
            height: '5.50%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '34.84%',
            width: '84.73%',
            height: '55.02%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 295 · 사진 59',
        meta: '',
        content: '평소에 스트레스만 받으면 폭식하던 습관이 있었는데\n이대로는 도저히 안될거 같아서 진한의원에 방문하게 되었습니다.\n우선 제 인바디랑 체질 등등 여기저기 체크해주시더니\n해독에 좋은 치료랑 한약 처방받았어요. 며칠 꾸준히 먹고 나니까\n확실히 폭식하던 습관이 많이 줄어들게 되었네요.\n밤에 안 먹으니까 지금은 2주 됐는데 5키로 가까이 빠졌습니다.',
        hasPhoto: false,
        photoUrl: null,
        rotation: 0.06,
        style: {
          left: '42.52%',
          top: '47.80%',
          width: '27.83%',
          height: '44.61%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.43%',
            width: '16.47%',
            height: '23.57%'
          },
          stats: {
            left: '20.06%',
            top: '13.29%',
            width: '21.26%',
            height: '5.14%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '32.57%',
            width: '88.92%',
            height: '60.00%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 3',
        stats: '리뷰 418 · 사진 89',
        meta: '',
        content: '출산후 10키로가 늘어나서 한약 복용을 시작했습니다.\n덕분에 식욕이 줄고 3개월만에 8키로 정도 감량했어요.\n부작용도 없어서 정말 만족합니다.',
        hasPhoto: true,
        photoUrl: '/images/review/photo_05_right.jpg',
        rotation: 4,
        style: {
          left: '68.68%',
          top: '7.27%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '20.96%',
            height: '2.77%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '75.75%',
            height: '18.48%'
          },
          photo: {
            left: '6.68%',
            top: '38.77%',
            width: '86.83%',
            height: '55.66%'
          }
        }
      },
    ]
  },
  {
    id: 6,
    imageUrl: '/images/review/review_06.jpg',
    alt: '진한의원 베스트 리뷰 6',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 247 · 사진 51',
        meta: '',
        content: '출산 후 체중이 쉽게 안 빠져서 산후 다이어트로 유명한\n진한의원에 방문하게 되었습니다.\n상담 과정에서 체질이랑 살 안빠지는 이유에 대해서\n정말 세심하게 말씀해주셨습니다.\n\n그리고 부종관리랑 체내 순환을 돕는 치료를 진행하게\n되었고 일주일 되니까 라인이 잡히기 시작하더라구요.\n\n가벼운 운동도 병행하니까 3개월 정도 돼서\n예전 몸매로 돌아갈 수 있었습니다.\n\n산후 우울증이랑 체중 안빠지는 스트레스 때문에\n매일매일이 짜증 연속이었는데 진한의원 덕분에\n고민을 덜게 되어서 감사합니다.',
        hasPhoto: false,
        photoUrl: null,
        rotation: -12.92,
        style: {
          left: '39.08%',
          top: '18.68%',
          width: '27.83%',
          height: '77.61%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.66%',
            width: '16.47%',
            height: '13.55%'
          },
          stats: {
            left: '21.60%',
            top: '8.60%',
            width: '20.66%',
            height: '2.96%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '19.69%',
            width: '75.15%',
            height: '73.91%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 405 · 사진 70',
        meta: '',
        content: '슬림탕 먹으면서 운동도 병행했더니 건강하게 살이 빠졌어요\nㅋㅋ\n\n특히 폭식하던 습관이 많이 줄어들어서 몸무게 유지도\n쉬워졌어요~!\n특히 복부 지방이 빠져서 옷 입을 때 너무 편하고 자신감도\n생겼어요 ㅋㅋ\n\n원장님이 식단과 운동 팁까지 알려 주셔서 더 쉽게\n관리할 수 있는거 같아요!',
        hasPhoto: false,
        photoUrl: null,
        rotation: 4.19,
        style: {
          left: '67.04%',
          top: '-3.06%',
          width: '27.83%',
          height: '61.63%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '5.86%',
            width: '16.47%',
            height: '17.06%'
          },
          stats: {
            left: '21.60%',
            top: '10.83%',
            width: '21.26%',
            height: '3.72%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '24.79%',
            width: '83.23%',
            height: '68.26%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 5',
        stats: '리뷰 665 · 사진 115',
        meta: '',
        content: '직장인이라 운동할 시간이 없어\n고민이었는데 여기서 슬림환\n처방받고 나서 식사량 조절이\n쉬워졌어요 ㅎㅎ 식사량이\n줄어드니까 자연스레 체중도\n5kg 빠졌네요 ㅎㅎ',
        hasPhoto: true,
        photoUrl: '/images/review/photo_06_right.jpg',
        rotation: 5.22,
        style: {
          left: '67.93%',
          top: '52.39%',
          width: '27.83%',
          height: '42.46%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.76%',
            width: '16.47%',
            height: '24.77%'
          },
          stats: {
            left: '20.06%',
            top: '13.96%',
            width: '22.16%',
            height: '5.40%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '34.23%',
            width: '43.41%',
            height: '54.04%'
          },
          photo: {
            left: '52.58%',
            top: '37.28%',
            width: '41.04%',
            height: '52.92%'
          }
        }
      },
    ]
  },
  {
    id: 7,
    imageUrl: '/images/review/review_07.jpg',
    alt: '진한의원 베스트 리뷰 7',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 563 · 사진 109',
        meta: '',
        content: '몸무게보다 체지방률이 중요한데 정확히 체지방률만 5%\n줄어들어서 만족합니다👍👍👍\n처음 상담부터 관리까지 세심하게 잘해주셔서 원하는대로\n체지방률만 감량할 수 있었던거 같아요!!',
        hasPhoto: true,
        photoUrl: '/images/review/photo_07_left.jpg',
        rotation: -2.78,
        style: {
          left: '42.93%',
          top: '9.84%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '22.46%',
            height: '2.77%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '79.34%',
            height: '23.09%'
          },
          photo: {
            left: '6.68%',
            top: '43.98%',
            width: '86.83%',
            height: '50.45%'
          }
        }
      },
      {
        groupName: 'Group 7',
        stats: '리뷰 8 · 사진 9',
        meta: '예약 후 이용 | 대기 시간 30분 이내',
        content: '3개월씩 프로그램 진행하며 꾸준히 슬림환 복용중 이에요\n이번엔 오랫만에 해독까지 추가해서 독소 배출도 하려구요\n해독하고 나면 살도 빠지지만 피부에 광이 나더라구요..\n몸도 가벼운 느낌이고.... 중년이라 다욧이 너무 힘든데\n진 한의원 프로그램으로 꾸준하게 도움 받고 있어요^^\n다욧과 건강까지 챙길 수 있어 좋아요~',
        hasPhoto: true,
        photoUrl: '/images/review/photo_07_right.jpg',
        rotation: 4.9,
        style: {
          left: '69.08%',
          top: '8.41%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '16.47%',
            height: '2.77%'
          },
          meta: {
            left: '21.60%',
            top: '10.83%',
            width: '30.24%',
            height: '2.31%'
          },
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '79.94%',
            height: '32.33%'
          },
          photo: {
            left: '6.68%',
            top: '53.22%',
            width: '86.83%',
            height: '41.21%'
          }
        }
      },
    ]
  },
  {
    id: 8,
    imageUrl: '/images/review/review_08.jpg',
    alt: '진한의원 베스트 리뷰 8',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 27 · 사진 42',
        meta: '예약 없이 이용 | 대기 시간 바로 입장',
        content: '배사라정😍 과식 후나 변비에 효과 정말 좋아요~~😍😋🤭\n진한의원을 알게되고 2년 넘게 꾸준히 이용하고 있어요\n음식조절 안될때 도움받고 있어요~~🙂😀😁😄',
        hasPhoto: true,
        photoUrl: '/images/review/photo_08_left.jpg',
        rotation: -3.01,
        style: {
          left: '41.83%',
          top: '11.20%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '19.46%',
            height: '2.77%'
          },
          meta: {
            left: '21.60%',
            top: '10.83%',
            width: '31.44%',
            height: '2.31%'
          },
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '80.24%',
            height: '18.48%'
          },
          photo: {
            left: '6.68%',
            top: '38.77%',
            width: '86.83%',
            height: '55.66%'
          }
        }
      },
      {
        groupName: 'Group 5',
        stats: '리뷰 360 · 사진 78',
        meta: '',
        content: '체중 감량 목표뿐만 아니라 제 체질, 식습관, 생활 패턴까지\n꼼꼼하게 분석해 주셨습니당\n\n특히 어떤 음식이 저에게 맞는지, 피해야 할 음식이 무엇인지까지\n설명해 주셔서 유익했던거 같아용!\n\n한약을 복용한 지 2주 정도 지나니 확실히 식욕이 줄고 소화가\n더 잘되는 게 느껴졌어용 ㅎㅎ',
        hasPhoto: false,
        photoUrl: null,
        rotation: 6.41,
        style: {
          left: '67.55%',
          top: '5.16%',
          width: '27.83%',
          height: '52.45%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '5.47%',
            width: '16.47%',
            height: '20.05%'
          },
          stats: {
            left: '20.06%',
            top: '11.30%',
            width: '21.26%',
            height: '4.37%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '27.70%',
            width: '88.62%',
            height: '65.61%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 508 · 사진 105',
        meta: '',
        content: '결론부터 말씀드리면 2개월 동안 7kg 감량했고 현재도\n계속 유지중입니다!\n\n몸이 붓는 느낌이 사라지고, 평소보다 소변을 자주 보게 되네요\n체중 감량뿐 아니라 컨디션도 좋아졌어요~',
        hasPhoto: false,
        photoUrl: null,
        rotation: 1.53,
        style: {
          left: '67.06%',
          top: '53.15%',
          width: '27.83%',
          height: '41.18%'
        },
        elements: {
          avatar: {
            left: '3.29%',
            top: '6.96%',
            width: '16.47%',
            height: '25.54%'
          },
          stats: {
            left: '20.06%',
            top: '14.39%',
            width: '22.46%',
            height: '5.57%'
          },
          meta: null,
          content: {
            left: '5.99%',
            top: '35.29%',
            width: '85.33%',
            height: '55.71%'
          },
          photo: null
        }
      },
    ]
  },
  {
    id: 9,
    imageUrl: '/images/review/review_09.jpg',
    alt: '진한의원 베스트 리뷰 9',
    cards: [
      {
        groupName: 'Group 3',
        stats: '리뷰 316 · 사진 64',
        meta: '',
        content: '다이어트 한약 상담을 받았는데, 체질 분석을 세밀하게 해주셔서\n신뢰가 갔습니다!\n\n식욕 조절이 가장 큰 고민이라고 하니 맞춤형 처방을\n추천받았어요^^\n\n복용하니 첫날부터 식욕이 확 줄어드는게 신기할 따름..\n\n평소처럼 폭식 충동이 안 생겼어요.\n3주 차에는 붓기도 줄어들더라고요.\n\n결과: 6주 동안 5kg 감량.',
        hasPhoto: false,
        photoUrl: null,
        rotation: -8.7,
        style: {
          left: '37.83%',
          top: '22.08%',
          width: '27.83%',
          height: '69.24%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '5.22%',
            width: '16.47%',
            height: '15.19%'
          },
          stats: {
            left: '21.60%',
            top: '9.64%',
            width: '20.96%',
            height: '3.31%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '22.06%',
            width: '87.72%',
            height: '71.79%'
          },
          photo: null
        }
      },
      {
        groupName: 'Group 6',
        stats: '리뷰 570 · 사진 106',
        meta: '',
        content: '친구랑 지금 다이어트 내기 했어요!\n각각 10키로씩 빼기로 했는데 혼자 힘으로 도저히 안될거 같아서\n진한의원 방문하게 됐습니다!\n\n처음에 제 생활 습관이랑 인바디같은거 보시더니 체질이랑\n증상에 대해서 자세하게 설명해주시더라구요 그리고 탕으로 된\n한약을 처방받았는데 며칠 복용하고 나니까 확실히 살 빠지는게\n느껴져요! 내기에서 이길 수 있을 듯 ㅎㅎㅎㅎㅎㅎ',
        hasPhoto: true,
        photoUrl: '/images/review/photo_09_right.jpg',
        rotation: 8.48,
        style: {
          left: '69.00%',
          top: '0.00%',
          width: '27.83%',
          height: '94.67%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '3.82%',
            width: '16.47%',
            height: '11.11%'
          },
          stats: {
            left: '21.60%',
            top: '7.05%',
            width: '22.16%',
            height: '2.42%'
          },
          meta: null,
          content: {
            left: '7.22%',
            top: '16.14%',
            width: '88.02%',
            height: '36.36%'
          },
          photo: {
            left: '7.61%',
            top: '54.00%',
            width: '86.83%',
            height: '41.16%'
          }
        }
      },
    ]
  },
  {
    id: 10,
    imageUrl: '/images/review/review_10.jpg',
    alt: '진한의원 베스트 리뷰 10',
    cards: [
      {
        groupName: 'Group 7',
        stats: '리뷰 32 · 사진 15 · 팔로워 1',
        meta: '예약 없이 이용 | 대기 시간 바로 입장',
        content: '앞전에 약먹다 끊고 다시 일터져서 병원 찾았네요 ㅠㅠ.\n역시 체중조절엔 진한의원이 답이죵😉\n언제나 친절하신 원장님과 선생님들~~ 좋습니다👍',
        hasPhoto: true,
        photoUrl: '/images/review/photo_10_left.jpg',
        rotation: -3.45,
        style: {
          left: '40.25%',
          top: '18.37%',
          width: '27.83%',
          height: '68.27%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '5.29%',
            width: '16.47%',
            height: '15.40%'
          },
          stats: {
            left: '21.60%',
            top: '9.78%',
            width: '29.94%',
            height: '3.36%'
          },
          meta: {
            left: '21.60%',
            top: '13.14%',
            width: '31.44%',
            height: '2.80%'
          },
          content: {
            left: '7.22%',
            top: '22.38%',
            width: '75.15%',
            height: '22.41%'
          },
          photo: {
            left: '6.68%',
            top: '46.36%',
            width: '86.83%',
            height: '46.47%'
          }
        }
      },
      {
        groupName: 'Group 3',
        stats: '리뷰 1 · 사진 1',
        meta: '예약 후 이용 | 대기 시간 바로 입장',
        content: '여러번의 다이어트와 요요를 경험하고, 그냥편하게살아야겠다\n포기하고있었는데 진한의원소개받고 정말 편하게 건강해지고\n있어요! 당 중독에, 식욕조절도 안됐고, 저녁엔 자극적인음식이\n확 땡겼었는데, 처방해주신 약들 덕분에 식욕조절도 쉽고\n체지방도 잘 빠지고있어요 거기다 보강해주는 약들 덕분에\n몸컨디션도 너무 좋습니다! 약의 도움을 받아 식습관, 생활습관\n바로잡고 건강한 삶의 루틴으로 잡아가볼게요!',
        hasPhoto: true,
        photoUrl: '/images/review/photo_10_right.jpg',
        rotation: 4.79,
        style: {
          left: '68.90%',
          top: '5.31%',
          width: '27.83%',
          height: '82.79%'
        },
        elements: {
          avatar: {
            left: '4.83%',
            top: '4.37%',
            width: '16.47%',
            height: '12.70%'
          },
          stats: {
            left: '21.60%',
            top: '8.06%',
            width: '15.27%',
            height: '2.77%'
          },
          meta: {
            left: '21.60%',
            top: '10.83%',
            width: '29.64%',
            height: '2.31%'
          },
          content: {
            left: '7.22%',
            top: '18.45%',
            width: '85.63%',
            height: '36.95%'
          },
          photo: {
            left: '6.68%',
            top: '55.79%',
            width: '86.83%',
            height: '38.65%'
          }
        }
      },
    ]
  },
];

export function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* CSS style block to style the text selection highlight: keeps selected text transparent to prevent double-text overlap, but shows the tilted blue highlight box */}
      <style dangerouslySetInnerHTML={{ __html: `
        .review-card-selection-overlay ::selection {
          background-color: rgba(139, 166, 18, 0.25) !important;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
        }
        .review-card-selection-overlay ::-moz-selection {
          background-color: rgba(139, 166, 18, 0.25) !important;
          color: transparent !important;
        }
      ` }} />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        <SectionTitle 
          subtitle="REAL REVIEWS"
          title={
            <span className="flex flex-col items-center justify-center">
              <span>진한의원과 함께한</span>
              <span>고객님들의 솔직한 후기</span>
            </span>
          } 
        />
        
        <div className="relative group max-w-[1320px] mx-auto mt-12">
          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {REVIEW_SLIDES.map((review) => (
                <div 
                  className="flex-[0_0_100%] min-w-0 relative [container-type:inline-size]" 
                  key={review.id}
                >
                  <div className="block w-full bg-gray-50 relative overflow-hidden select-none">
                    {/* Base Slide Background Banner */}
                    <img 
                      src={review.imageUrl} 
                      alt={review.alt} 
                      className="w-full h-auto block select-none pointer-events-none"
                      draggable={false}
                    />

                    {/* Left-side header text selectable overlays */}
                    <div 
                      className="absolute pointer-events-auto text-center select-text cursor-text review-card-selection-overlay"
                      style={{
                        left: '11.25%',
                        top: '58.13%',
                        width: '20.17%',
                        height: '4.59%',
                        zIndex: 2,
                      }}
                    >
                      <div className="text-[1.5cqw] font-normal tracking-tight text-transparent whitespace-nowrap leading-none select-text cursor-text">
                        진한의원의 진짜리뷰만 모아모아!
                      </div>
                    </div>

                    <div 
                      className="absolute pointer-events-auto text-center select-text cursor-text review-card-selection-overlay"
                      style={{
                        left: '9.08%',
                        top: '62.33%',
                        width: '24.50%',
                        height: '15.68%',
                        zIndex: 2,
                      }}
                    >
                      <div className="text-[6.0cqw] font-extrabold tracking-tight text-transparent whitespace-nowrap leading-none select-text cursor-text">
                        베스트리뷰
                      </div>
                    </div>

                    <div 
                      className="absolute pointer-events-auto text-center select-text cursor-text review-card-selection-overlay"
                      style={{
                        left: '11.25%',
                        top: '80.11%',
                        width: '20.17%',
                        height: '8.41%',
                        zIndex: 2,
                      }}
                    >
                      <div className="text-[1.33cqw] font-normal tracking-tight text-transparent whitespace-nowrap leading-[1.3] select-text cursor-text">
                        #한방다이어트 #해독 #자율신경계
                      </div>
                      <div className="text-[1.33cqw] font-normal tracking-tight text-transparent whitespace-nowrap leading-[1.3] select-text cursor-text">
                        #미주란 #붓기제로 #슬림탕 #슬림환
                      </div>
                    </div>
                    
                    {/* Interactive, Selectable React Review Cards Overlay - Completely Transparent, Hardware Accelerated, and Mathematically Correct Rotations */}
                    {review.cards.map((card, cardIndex) => (
                      <div 
                        key={cardIndex}
                        className="absolute pointer-events-auto text-left select-text cursor-text review-card-selection-overlay"
                        style={{
                          left: card.style.left,
                          top: card.style.top,
                          width: card.style.width,
                          height: card.style.height,
                          transform: card.rotation ? `rotate(${card.rotation}deg)` : undefined,
                          transformOrigin: 'top left',
                          zIndex: 2,
                          boxSizing: 'border-box',
                          backgroundColor: 'rgba(255, 255, 255, 0.001)',
                          willChange: 'transform',
                          WebkitBackfaceVisibility: 'hidden',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        {/* Profile stats info (Transparent) */}
                        {card.elements.stats && (
                          <div 
                            className="absolute flex items-center select-text cursor-text overflow-hidden text-transparent"
                            style={{
                              left: card.elements.stats.left,
                              top: card.elements.stats.top,
                              width: card.elements.stats.width,
                              height: card.elements.stats.height,
                              willChange: 'transform'
                            }}
                          >
                            <span className="text-[0.83cqw] font-normal tracking-tight whitespace-nowrap leading-none text-transparent select-text cursor-text">
                              {card.stats}
                            </span>
                          </div>
                        )}

                        {/* Profile meta info (Transparent) */}
                        {card.elements.meta && card.meta && (
                          <div 
                            className="absolute flex items-center select-text cursor-text overflow-hidden text-transparent"
                            style={{
                              left: card.elements.meta.left,
                              top: card.elements.meta.top,
                              width: card.elements.meta.width,
                              height: card.elements.meta.height,
                              willChange: 'transform'
                            }}
                          >
                            <span className="text-[0.66cqw] font-normal whitespace-nowrap leading-none text-transparent select-text cursor-text">
                              {card.meta}
                            </span>
                          </div>
                        )}

                        {/* Content review body text (Transparent, Split Line-by-Line to prevent wrap mismatch) */}
                        {card.elements.content && (
                          <div 
                            className="absolute select-text cursor-text"
                            style={{
                              left: card.elements.content.left,
                              top: card.elements.content.top,
                              width: card.elements.content.width,
                              height: card.elements.content.height,
                              willChange: 'transform'
                            }}
                          >
                            {card.content.split('\n').map((line, lineIdx) => (
                              <div 
                                key={lineIdx}
                                className="text-[1.05cqw] font-normal tracking-tight whitespace-nowrap text-transparent select-text cursor-text"
                                style={{
                                  lineHeight: 1.54,
                                }}
                              >
                                {line}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full h-2.5 ${
                index === selectedIndex 
                  ? 'w-6 bg-[#8BA612]' 
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
