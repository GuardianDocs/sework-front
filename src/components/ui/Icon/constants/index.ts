import { SVGProps } from 'react';

type Path = SVGProps<SVGPathElement>;

type IconMapper = {
  [key in string]: {
    path: Path | Path[];
  };
};

export const SVG_ICON_MAPPER = {
  check: {
    path: {
      d: 'M19.8584 7.70016L10.8084 16.7512C10.6584 16.9012 10.4549 16.9855 10.2427 16.9855C10.0305 16.9855 9.82701 16.9013 9.67698 16.7512L4.86865 11.9429L6.00002 10.8115L10.2426 15.0541L18.727 6.56885L19.8584 7.70016Z',
      fill: 'currentColor',
    },
  },
  edit: {
    path: {
      d: 'M15.9458 4.8077C15.9361 4.81349 15.9097 4.83078 15.861 4.87211C15.7644 4.95411 15.6428 5.07481 15.4361 5.28158L15.4321 5.28554L13.1314 7.58625L16 10.4549L18.3103 8.14454C18.5134 7.94143 18.6326 7.82126 18.7138 7.72559C18.7552 7.67677 18.7725 7.65033 18.7783 7.64065C18.7884 7.60508 18.7884 7.56746 18.7783 7.53196C18.7726 7.52226 18.7552 7.49574 18.7136 7.44671C18.6313 7.34983 18.5103 7.22788 18.3029 7.02054L16.5631 5.28074C16.3566 5.07425 16.2353 4.95375 16.1388 4.8719C16.0904 4.83075 16.064 4.8135 16.0543 4.8077C16.0188 4.79769 15.9813 4.7977 15.9458 4.8077ZM18.7808 7.5363C18.7807 7.53629 18.7806 7.53595 18.7803 7.53531L18.7808 7.5363ZM14.8686 11.5862L12 8.71762L4.80001 15.9176V18.7862L7.66864 18.7862L14.8686 11.5862ZM15.9492 4.80574C15.9498 4.80539 15.9502 4.80524 15.9502 4.80525L15.9492 4.80574ZM15.4438 3.28829C15.8053 3.17083 16.1948 3.17083 16.5563 3.28829C16.8106 3.37092 17.0092 3.512 17.1742 3.65208C17.3267 3.78148 17.4947 3.94951 17.6751 4.13001L19.4537 5.90857C19.635 6.08986 19.8036 6.25839 19.9333 6.41121C20.0737 6.57659 20.215 6.77545 20.2978 7.03009C20.4152 7.39165 20.4152 7.78108 20.2977 8.14255C20.2151 8.39703 20.0739 8.59576 19.9336 8.76103C19.804 8.9137 19.6356 9.08203 19.4546 9.26304L19.4278 9.2898L8.5657 20.1519C8.41567 20.3019 8.21219 20.3862 8.00002 20.3862L4.00002 20.3862C3.78784 20.3862 3.58436 20.302 3.43433 20.1519C3.2843 20.0019 3.20001 19.7984 3.20001 19.5862V15.5862C3.20001 15.3741 3.2843 15.1706 3.43433 15.0206L14.3069 4.14795L14.3241 4.13083C14.5048 3.95006 14.673 3.78185 14.8256 3.65232C14.9907 3.51215 15.1894 3.37096 15.4438 3.28829Z',
      fill: 'currentColor',
    },
  },
  lineAdd: {
    path: {
      d: 'M12.8 11.2002V4.2002H11.2L11.2 11.2002H4.20001V12.8002H11.2L11.2 19.8002H12.8V12.8002H19.8V11.2002H12.8Z',
      fill: 'currentColor',
    },
  },
  chevronDown: {
    path: {
      d: 'M7.00002 8.86865L12 13.8687L17 8.86865L18.1314 10L12.5657 15.5657C12.2533 15.8781 11.7468 15.8781 11.4343 15.5657L5.86865 10L7.00002 8.86865Z',
      fill: 'currentColor',
    },
  },
  chevronUp: {
    path: {
      d: 'M7.00002 15.1313L12 10.1313L17 15.1313L18.1314 14L12.5657 8.43429C12.2533 8.12187 11.7468 8.12187 11.4343 8.43429L5.86865 14L7.00002 15.1313Z',
      fill: 'currentColor',
    },
  },
  chevronLeft: {
    path: {
      d: 'M15.1313 7.00002L10.1313 12L15.1313 17L14 18.1314L8.43429 12.5657C8.12187 12.2533 8.12187 11.7468 8.43429 11.4343L14 5.86865L15.1313 7.00002Z',
      fill: 'currentColor',
    },
  },
  chevronRight: {
    path: {
      d: 'M8.86865 17L13.8687 12L8.86865 6.99998L10 5.86861L15.5657 11.4343C15.8781 11.7467 15.8781 12.2532 15.5657 12.5657L10 18.1313L8.86865 17Z',
      fill: 'currentColor',
    },
  },
  trash: {
    path: {
      d: 'M11.9734 2.7002H12.0267C12.4699 2.70019 12.8424 2.70018 13.1488 2.72108C13.4684 2.74289 13.774 2.79011 14.0715 2.91333C14.7578 3.19762 15.3027 3.74307 15.5868 4.42891C15.71 4.72633 15.7572 5.03181 15.7791 5.35146C15.7864 5.45942 15.7912 5.5756 15.7943 5.7002H20.3V7.3002H18.8V17.3354C18.8 17.867 18.8 18.3139 18.7701 18.6797C18.7389 19.0622 18.6709 19.4258 18.495 19.771C18.2265 20.298 17.7973 20.7269 17.2706 20.9952C16.9254 21.1711 16.5619 21.239 16.1794 21.2703C15.8137 21.3002 15.3668 21.3002 14.8353 21.3002H9.16476C8.63315 21.3002 8.18616 21.3002 7.82027 21.2703C7.43772 21.2391 7.07391 21.1712 6.72862 20.9952C6.20107 20.7264 5.77328 20.2971 5.50519 19.771C5.32918 19.4255 5.26122 19.0617 5.22992 18.6788C5.19999 18.3126 5.2 17.865 5.20001 17.3323L5.20001 7.3002H3.70001V5.7002H8.20568C8.20876 5.57562 8.21353 5.45947 8.2209 5.35153C8.24271 5.03191 8.28993 4.72638 8.41315 4.42891C8.69719 3.74319 9.24181 3.19766 9.92824 2.91333C10.2258 2.79009 10.5315 2.74289 10.8511 2.72108C11.1575 2.70018 11.5301 2.70019 11.9734 2.7002ZM9.80618 5.7002H14.1938C14.1913 5.61244 14.1878 5.53331 14.1828 5.46054C14.1665 5.22248 14.1376 5.11133 14.1086 5.04121C13.9867 4.74693 13.753 4.51323 13.4592 4.39154C13.3892 4.36253 13.278 4.33362 13.0399 4.31737C12.7945 4.30063 12.4769 4.3002 12 4.3002C11.5231 4.3002 11.2055 4.30063 10.96 4.31737C10.7217 4.33363 10.6105 4.36254 10.5405 4.39154C10.2469 4.51319 10.0133 4.74682 9.89136 5.04121C9.86233 5.11128 9.83343 5.22238 9.81719 5.46047C9.81222 5.53326 9.80869 5.61241 9.80618 5.7002ZM6.80001 7.3002V17.3002C6.80001 17.8735 6.80063 18.2552 6.8246 18.5484C6.8478 18.8323 6.88883 18.9622 6.9308 19.0446C7.04621 19.2711 7.2299 19.4549 7.455 19.5696C7.53711 19.6115 7.6669 19.6525 7.95058 19.6756C8.24356 19.6996 8.62477 19.7002 9.19692 19.7002H14.8031C15.3753 19.7002 15.7563 19.6996 16.049 19.6756C16.3323 19.6525 16.462 19.6115 16.5442 19.5696C16.7702 19.4545 16.9545 19.2702 17.0694 19.0446C17.1113 18.9624 17.1523 18.8327 17.1755 18.5493C17.1994 18.2565 17.2 17.8754 17.2 17.3033V7.3002H6.80001ZM10.8 9.7002V17.3002H9.20001V9.7002H10.8ZM14.8 9.7002V17.3002H13.2V9.7002H14.8Z',
      fill: 'currentColor',
    },
  },
  save: {
    path: {
      d: 'M15.2238 5.32704C15.1406 5.30567 15.041 5.2998 14.5625 5.2998H7.16684C6.68694 5.2998 6.37502 5.30042 6.13713 5.31985C5.90853 5.33852 5.81967 5.37049 5.77304 5.39426C5.60996 5.47735 5.47756 5.60975 5.39447 5.77282C5.37071 5.81946 5.33874 5.90831 5.32007 6.13691C5.30064 6.3748 5.30001 6.68672 5.30001 7.16663V16.8333C5.30001 17.3132 5.30064 17.6248 5.32006 17.8624C5.33871 18.0906 5.37064 18.1793 5.39447 18.2261C5.47801 18.39 5.61083 18.5229 5.77304 18.6055C5.81953 18.6292 5.90819 18.6611 6.13635 18.6798C6.35147 18.6974 6.62722 18.6995 7.03335 18.6998L7.03335 16.3022C7.03333 15.862 7.03332 15.4842 7.05871 15.1733C7.08545 14.8459 7.1443 14.523 7.3022 14.2131C7.53868 13.749 7.91585 13.3718 8.37998 13.1353C8.68987 12.9774 9.0128 12.9186 9.34021 12.8918C9.65105 12.8664 10.0289 12.8664 10.4691 12.8665H13.5313C13.9714 12.8664 14.3491 12.8664 14.6597 12.8918C14.987 12.9186 15.3096 12.9775 15.6194 13.1353C16.0826 13.3714 16.4611 13.7481 16.698 14.2131C16.8558 14.5228 16.9146 14.8455 16.9413 15.1725C16.9667 15.4829 16.9667 15.8602 16.9667 16.2995V18.6998C17.3728 18.6995 17.6484 18.6974 17.8633 18.6798C18.0912 18.6611 18.1797 18.6293 18.2263 18.6055C18.3899 18.5222 18.5229 18.3892 18.6057 18.2266C18.6294 18.1801 18.6613 18.0915 18.68 17.8634C18.6994 17.626 18.7 17.3147 18.7 16.8357V9.68275C18.7 9.27377 18.6956 9.18917 18.6794 9.1168C18.6608 9.03349 18.6303 8.95415 18.589 8.8807C18.5535 8.8177 18.5011 8.75292 18.2328 8.4548L15.9368 5.90364C15.6257 5.55795 15.5569 5.49028 15.4879 5.44439C15.4076 5.39106 15.3185 5.35137 15.2238 5.32704ZM16.8359 20.2998H7.13307C6.69376 20.2998 6.31648 20.2998 6.00603 20.2745C5.679 20.2477 5.35633 20.1889 5.04665 20.0311C4.58166 19.7942 4.20491 19.4158 3.96886 18.9525C3.81104 18.6427 3.75214 18.3202 3.72538 17.9928C3.69999 17.6822 3.7 17.3046 3.70001 16.8644L3.70001 7.13556C3.7 6.69535 3.69999 6.3175 3.72538 6.00666C3.75212 5.67925 3.81097 5.35632 3.96886 5.04643C4.20535 4.5823 4.58252 4.20513 5.04665 3.96865C5.35653 3.81075 5.67947 3.7519 6.00688 3.72516C6.31772 3.69977 6.69557 3.69978 7.13577 3.6998L14.5625 3.6998C14.5872 3.6998 14.6117 3.69977 14.6359 3.69975C15.0008 3.69941 15.3172 3.69912 15.6218 3.77733C15.8886 3.84587 16.1428 3.95853 16.3735 4.11185C16.6328 4.28418 16.8416 4.51667 17.0784 4.78027C17.0941 4.79781 17.11 4.81549 17.126 4.8333M17.126 4.8333L19.4221 7.38443C19.4221 7.38442 19.4221 7.38443 19.4221 7.38443C19.4358 7.39972 19.4495 7.41491 19.4631 7.42996C19.6682 7.65743 19.8497 7.85879 19.983 8.09547C20.1018 8.30631 20.1883 8.53276 20.2409 8.76788C20.3005 9.03482 20.3003 9.30765 20.3 9.62031C20.3 9.64095 20.3 9.66176 20.3 9.68276V16.8667C20.3 17.306 20.3 17.6833 20.2747 17.9937C20.2479 18.3207 20.1891 18.6433 20.0313 18.953C19.7946 19.4176 19.4163 19.7949 18.9527 20.0311C18.6431 20.1889 18.3207 20.2477 17.9937 20.2745C17.6834 20.2998 17.3063 20.2998 16.867 20.2998H16.8359M8.63335 18.6998L15.3667 18.6999V16.3306C15.3667 15.8516 15.3661 15.5403 15.3467 15.3028C15.328 15.0746 15.2961 14.986 15.2724 14.9395C15.1897 14.7773 15.0569 14.6445 14.893 14.5609C14.8462 14.5371 14.7575 14.5052 14.5293 14.4865C14.2917 14.4671 13.9801 14.4665 13.5002 14.4665H10.5002C10.0203 14.4665 9.70835 14.4671 9.47046 14.4865C9.24186 14.5052 9.15301 14.5372 9.10637 14.5609C8.9433 14.644 8.8109 14.7764 8.72781 14.9395C8.70404 14.9861 8.67207 15.075 8.6534 15.3036C8.63397 15.5415 8.63335 15.8534 8.63335 16.3333V18.6998ZM8.70001 7.03313H15.3V8.63313H8.70001V7.03313Z',
      fill: 'currentColor',
    },
  },
  circleHelp: {
    path: [
      {
        d: 'M11.4686 6.79399C12.0307 6.70483 12.6062 6.77273 13.1321 6.99042C13.6581 7.20814 14.1134 7.56721 14.448 8.02744C14.7827 8.48803 14.9831 9.03188 15.0278 9.59894C15.0725 10.1664 14.9593 10.7351 14.701 11.2422C14.4428 11.7492 14.0496 12.1748 13.5643 12.4722C13.4491 12.5428 13.3059 12.6113 13.2029 12.6606L13.1559 12.6831C13.0296 12.7441 12.9317 12.7944 12.8512 12.8469C12.7973 12.882 12.7675 12.9071 12.7519 12.9225V14.1336H11.1519V12.8892C11.1519 12.1554 11.6416 11.7255 11.9773 11.5066C12.1505 11.3937 12.3287 11.3058 12.46 11.2423L12.5242 11.2114C12.635 11.158 12.6894 11.1318 12.7282 11.108C12.9618 10.9649 13.1509 10.7602 13.2754 10.5159C13.3998 10.2717 13.4543 9.99778 13.4327 9.72469C13.4112 9.45125 13.3146 9.18956 13.1537 8.96815C12.9925 8.74637 12.7732 8.57351 12.5202 8.46877C12.267 8.36398 11.99 8.33128 11.7193 8.37423C11.4486 8.41719 11.1947 8.53427 10.9865 8.71219C10.7781 8.89029 10.6233 9.12215 10.5387 9.38266L10.2918 10.1436L8.7699 9.64968L9.01685 8.88875C9.19257 8.34732 9.51447 7.86551 9.94703 7.49585C10.3798 7.12601 10.9067 6.88314 11.4686 6.79399ZM12.7369 12.941C12.7363 12.941 12.7378 12.9379 12.7434 12.9314C12.7404 12.9377 12.7376 12.941 12.7369 12.941Z',
        fill: 'currentColor',
      },

      {
        d: 'M12 16.8002C12.4418 16.8002 12.8 16.442 12.8 16.0002C12.8 15.5584 12.4418 15.2002 12 15.2002C11.5582 15.2002 11.2 15.5584 11.2 16.0002C11.2 16.442 11.5582 16.8002 12 16.8002Z',
        fill: 'currentColor',
      },

      {
        d: 'M3.20001 12.0002C3.20001 7.14009 7.13991 3.2002 12 3.2002C16.8601 3.2002 20.8 7.14009 20.8 12.0002C20.8 16.8603 16.8601 20.8002 12 20.8002C7.13991 20.8002 3.20001 16.8603 3.20001 12.0002ZM12 4.8002C8.02356 4.8002 4.80001 8.02375 4.80001 12.0002C4.80001 15.9766 8.02356 19.2002 12 19.2002C15.9765 19.2002 19.2 15.9766 19.2 12.0002C19.2 8.02375 15.9765 4.8002 12 4.8002Z',
        fill: 'currentColor',
      },
    ],
  },
  circleInfo: {
    path: {
      d: 'M12 4.8002C8.02356 4.8002 4.80001 8.02375 4.80001 12.0002C4.80001 15.9766 8.02356 19.2002 12 19.2002C15.9765 19.2002 19.2 15.9766 19.2 12.0002C19.2 8.02375 15.9765 4.8002 12 4.8002ZM3.20001 12.0002C3.20001 7.14009 7.13991 3.2002 12 3.2002C16.8601 3.2002 20.8 7.14009 20.8 12.0002C20.8 16.8603 16.8601 20.8002 12 20.8002C7.13991 20.8002 3.20001 16.8603 3.20001 12.0002ZM11.1557 8.44464C11.1557 8.00281 11.5139 7.64464 11.9557 7.64464H12.0443C12.4861 7.64464 12.8443 8.00281 12.8443 8.44464V8.53353C12.8443 8.97474 12.4871 9.33266 12.0459 9.33353L11.9573 9.3337C11.7449 9.33412 11.541 9.25002 11.3906 9.09994C11.2402 8.94987 11.1557 8.74615 11.1557 8.5337V8.44464ZM12.8 10.7002V16.3558H11.2V10.7002H12.8Z',
      fill: 'currentColor',
    },
  },
  copy: {
    path: [
      {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M14 9.1H6C5.50294 9.1 5.1 9.50294 5.1 10V18C5.1 18.4971 5.50294 18.9 6 18.9H14C14.4971 18.9 14.9 18.4971 14.9 18V10C14.9 9.50294 14.4971 9.1 14 9.1ZM6 7.5C4.61929 7.5 3.5 8.61929 3.5 10V18C3.5 19.3807 4.61929 20.5 6 20.5H14C15.3807 20.5 16.5 19.3807 16.5 18V10C16.5 8.61929 15.3807 7.5 14 7.5H6Z',
        fill: 'currentColor',
      },
      {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M10 5.1H18C18.4971 5.1 18.9 5.50294 18.9 6V14C18.9 14.4971 18.4971 14.9 18 14.9H16.5V16.5H18C19.3807 16.5 20.5 15.3807 20.5 14V6C20.5 4.61929 19.3807 3.5 18 3.5H10C8.61929 3.5 7.5 4.61929 7.5 6V7.5H9.1V6C9.1 5.50294 9.50294 5.1 10 5.1Z',
        fill: 'currentColor',
      },
    ],
  },
  back: {
    path: {
      d: 'M12.1314 7.00002L7.93138 11.2H18.8V12.8H7.93138L12.1314 17L11 18.1314L5.43433 12.5657C5.12191 12.2533 5.12191 11.7468 5.43433 11.4343L11 5.86865L12.1314 7.00002Z',
      fill: 'currentColor',
    },
  },
  warning: {
    path: [
      {
        fill: 'currentColor',
        d: 'M12 19.2002C15.9765 19.2002 19.2 15.9766 19.2 12.0002C19.2 8.02374 15.9765 4.80019 12 4.80019C8.02356 4.80019 4.80001 8.02374 4.80001 12.0002C4.80001 15.9766 8.02356 19.2002 12 19.2002ZM20.8 12.0002C20.8 16.8603 16.8601 20.8002 12 20.8002C7.1399 20.8002 3.20001 16.8603 3.20001 12.0002C3.20001 7.14009 7.1399 3.20019 12 3.2002C16.8601 3.2002 20.8 7.14009 20.8 12.0002Z',
      },
      {
        fill: 'currentColor',
        d: 'M12.0443 16.3556C12.4861 16.3556 12.8443 15.9975 12.8443 15.5556V15.4666C12.8443 15.2541 12.7598 15.0504 12.6094 14.9003C12.4591 14.7503 12.2552 14.6662 12.0427 14.6666L11.9542 14.6668C11.513 14.6676 11.1557 15.0255 11.1557 15.4668V15.5556C11.1557 15.9975 11.5139 16.3556 11.9557 16.3556H12.0443Z',
      },
      { fill: 'currentColor', d: 'M11.2 7.64453V13.3001H12.8V7.64453H11.2Z' },
    ],
  },
  search: {
    path: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M15.352 16.4831C14.1571 17.4327 12.6448 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.6447 17.4328 14.1569 16.4833 15.3517L20.5657 19.4341L19.4343 20.5655L15.352 16.4831ZM16.4 11C16.4 13.9823 13.9823 16.4 11 16.4C8.01766 16.4 5.6 13.9823 5.6 11C5.6 8.01766 8.01766 5.6 11 5.6C13.9823 5.6 16.4 8.01766 16.4 11Z',
      fill: 'currentColor',
    },
  },
  setting: {
    path: [
      {
        d: 'M16.8407 6.1841L16.4844 6.18978C16.4291 6.19066 16.4018 6.19086 16.3745 6.19042C16.1039 6.18606 15.8383 6.11749 15.5996 5.98978C15.5756 5.97692 15.5518 5.96268 15.5038 5.935C15.4559 5.90736 15.4316 5.89335 15.4085 5.87898C15.1779 5.73587 14.9846 5.53966 14.8453 5.30675C14.8313 5.28333 14.8175 5.25915 14.7906 5.21069L14.615 4.89449C14.3341 4.38847 14.1933 4.13468 13.9926 3.94977C13.8144 3.78552 13.6031 3.66139 13.373 3.58547C13.1128 3.49964 12.8212 3.49958 12.2378 3.50006L11.7531 3.50046C11.1713 3.50094 10.8803 3.50118 10.6208 3.58703C10.3913 3.66298 10.1808 3.78711 10.003 3.95094C9.80227 4.13584 9.66118 4.38944 9.37918 4.89635L9.37741 4.89893L9.20693 5.20538C9.17997 5.25384 9.1663 5.27832 9.15228 5.30172C9.01313 5.53397 8.82073 5.72905 8.59072 5.87187C8.56754 5.88627 8.54352 5.90014 8.49547 5.92788C8.44773 5.95544 8.42268 5.96991 8.39867 5.98276C8.15945 6.1108 7.89364 6.17981 7.62234 6.1839C7.595 6.18431 7.5673 6.18359 7.5117 6.18264L7.1586 6.17661C6.57424 6.16663 6.28163 6.16164 6.01972 6.24348C5.788 6.3159 5.57494 6.43721 5.39395 6.59902C5.1896 6.78171 5.04438 7.03458 4.75393 7.54031L4.75248 7.54229L4.5137 7.95806L4.51113 7.96278C4.22329 8.46396 4.07903 8.71515 4.02418 8.9819C3.9755 9.21861 3.97799 9.46286 4.03117 9.6986C4.09129 9.96506 4.24047 10.2148 4.53964 10.7134L4.72545 11.0231C4.75359 11.07 4.76856 11.0927 4.78166 11.1162C4.91412 11.3537 4.98687 11.6201 4.99541 11.8919C4.99625 11.9188 4.99625 11.9462 4.99624 12.0008C4.99622 12.0555 4.99653 12.0826 4.99567 12.1095C4.987 12.3814 4.91338 12.6471 4.78068 12.8846C4.76755 12.9081 4.75308 12.9318 4.7249 12.9787L4.54383 13.28C4.24256 13.7812 4.09205 14.0319 4.03185 14.2998C3.9786 14.5368 3.97683 14.7824 4.02646 15.0201C4.08255 15.2889 4.22883 15.5421 4.5224 16.0479L4.76233 16.4613C5.05394 16.9638 5.20064 17.2143 5.40462 17.3956C5.58509 17.556 5.79728 17.6767 6.02779 17.7486C6.28834 17.8298 6.57808 17.8253 7.15892 17.8161L7.50756 17.8105C7.5669 17.8096 7.59662 17.8089 7.6258 17.8094C7.89606 17.8144 8.16138 17.8838 8.3995 18.0117C8.42522 18.0255 8.45089 18.0405 8.5022 18.0704C8.55289 18.0999 8.57852 18.1145 8.60294 18.1298C8.82902 18.272 9.01803 18.4658 9.15547 18.6947C9.17032 18.7195 9.18455 18.7449 9.21301 18.7962L9.38121 19.0993C9.66438 19.6094 9.80668 19.8645 10.0082 20.0501C10.1864 20.2144 10.3975 20.3386 10.6277 20.4145C10.8879 20.5003 11.1797 20.5001 11.7632 20.4996L12.2477 20.4992C12.8296 20.4987 13.1203 20.4984 13.3798 20.4126C13.6094 20.3366 13.8201 20.2128 13.998 20.0489C14.199 19.8638 14.3405 19.6093 14.6233 19.1009L14.7938 18.7945C14.8208 18.746 14.8345 18.7216 14.8485 18.6982C14.9877 18.4659 15.1797 18.2707 15.4097 18.1278C15.4329 18.1134 15.4569 18.0996 15.5049 18.0718C15.5531 18.044 15.5771 18.0302 15.6012 18.0173C15.8404 17.8892 16.107 17.82 16.3783 17.8159C16.4022 17.8156 16.4266 17.816 16.4693 17.8167L16.8424 17.8231C17.4268 17.8331 17.7187 17.838 17.9806 17.7561C18.2124 17.6837 18.4259 17.5629 18.6069 17.4011C18.8112 17.2184 18.9567 16.9651 19.247 16.4596L19.4894 16.0376C19.7774 15.5361 19.9218 15.2846 19.9767 15.0178C20.0254 14.7811 20.0231 14.5368 19.9699 14.3011C19.9102 14.0366 19.7617 13.7891 19.4668 13.2976L19.2745 12.9771C19.2464 12.9302 19.2327 12.9067 19.2196 12.8832C19.0871 12.6458 19.0133 12.3797 19.0048 12.1079C19.0039 12.0811 19.0039 12.0535 19.0039 11.999C19.0039 11.9443 19.0044 11.9168 19.0053 11.8899C19.0139 11.618 19.0876 11.352 19.2203 11.1145C19.2333 11.0913 19.2472 11.0683 19.2747 11.0225L19.2757 11.021L19.4568 10.7198C19.758 10.2185 19.9089 9.96741 19.9691 9.69954C20.0223 9.46258 20.0241 9.21729 19.9745 8.97953C19.9187 8.71235 19.7728 8.4609 19.4826 7.961L19.2376 7.53871C18.946 7.03628 18.8002 6.78529 18.5962 6.60396C18.4158 6.44354 18.203 6.32322 17.9725 6.25133C17.7122 6.17014 17.4221 6.17476 16.8424 6.184L16.8407 6.1841Z',
        stroke: 'currentColor',
        strokeWidth: '1.6',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        d: 'M9.05463 13.7011C9.99388 15.3279 12.0741 15.8853 13.7009 14.9461C15.3278 14.0068 15.8851 11.9266 14.9459 10.2998C14.0066 8.67296 11.9264 8.11557 10.2996 9.05481C8.67277 9.99406 8.11538 12.0743 9.05463 13.7011Z',
        stroke: 'currentColor',
        strokeWidth: '1.6',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    ],
  },
  card: {
    path: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M6.49069 4.58936H17.5097C18.0115 4.58934 18.4357 4.58933 18.7833 4.61775C19.1477 4.64754 19.4977 4.71249 19.8312 4.88242C20.3363 5.13977 20.7488 5.55049 21.007 6.05729C21.1769 6.39071 21.2418 6.7408 21.2715 7.10484C21.2999 7.45224 21.2999 7.87597 21.2999 8.37677V15.6244C21.2999 16.1252 21.2999 16.5488 21.2715 16.896C21.2418 17.26 21.1769 17.6098 21.007 17.9432C20.749 18.4495 20.3367 18.861 19.8312 19.1185C19.4979 19.2884 19.148 19.3533 18.7841 19.383C18.4368 19.4114 18.0132 19.4114 17.5124 19.4114H6.48763C5.98679 19.4114 5.56303 19.4114 5.2156 19.383C4.85157 19.3533 4.50147 19.2884 4.16806 19.1185C3.66166 18.8605 3.25075 18.4487 2.99319 17.9432C2.82323 17.6096 2.75829 17.2594 2.72851 16.895C2.7001 16.5473 2.70011 16.123 2.70012 15.6212V8.37993C2.70011 7.87808 2.7001 7.45367 2.72851 7.1058C2.75828 6.74132 2.82319 6.39094 2.99319 6.05729C3.25098 5.55135 3.66211 5.14022 4.16806 4.88243C4.5017 4.71242 4.85208 4.64752 5.21656 4.61775C5.56443 4.58933 5.98885 4.58934 6.49069 4.58936ZM4.29992 10.3002L4.30012 15.5894C4.30012 16.1315 4.30074 16.4899 4.3232 16.7647C4.34488 17.0301 4.38289 17.1463 4.4188 17.2168C4.52342 17.4221 4.69001 17.5888 4.89444 17.6929C4.96468 17.7287 5.08075 17.7667 5.34592 17.7883C5.62038 17.8108 5.97829 17.8114 6.51938 17.8114H17.4806C18.0217 17.8114 18.3794 17.8108 18.6537 17.7884C18.9185 17.7667 19.0345 17.7288 19.1048 17.6929C19.3101 17.5883 19.4772 17.4212 19.5814 17.2168C19.6172 17.1465 19.6552 17.0305 19.6768 16.7656C19.6993 16.4914 19.6999 16.1337 19.6999 15.5926L19.6997 10.3002H4.29992ZM19.6999 8.36708H4.30012C4.30017 7.84979 4.30136 7.50338 4.3232 7.23605C4.3449 6.97039 4.38293 6.85408 4.4188 6.78368C4.52319 6.57879 4.68956 6.41243 4.89444 6.30804C4.96484 6.27216 5.08115 6.23413 5.34681 6.21244C5.62176 6.18998 5.98036 6.18936 6.52249 6.18936H17.4779C18.02 6.18936 18.3783 6.18998 18.6529 6.21243C18.9181 6.23411 19.0343 6.27209 19.1048 6.30804C19.3106 6.41287 19.4775 6.57966 19.5814 6.78367C19.6172 6.85391 19.6552 6.96999 19.6768 7.23516C19.6987 7.50254 19.6998 7.84911 19.6999 8.36708ZM6.47785 14.0337H11.8556V15.6337H6.47785V14.0337Z',
      fill: 'currentColor',
    },
  },
  home: {
    path: {
      d: 'M5.23748 9.10238L5.76428 9.70444L5.23748 9.10238ZM14.0633 4.99036L13.5365 5.59243V5.59243L14.0633 4.99036ZM18.7627 9.10238L18.2359 9.70444L18.7627 9.10238ZM9.93848 4.989L9.41167 4.38694L9.41167 4.38694L9.93848 4.989ZM11.4443 3.90949L11.2174 3.14233L11.4443 3.90949ZM12.5555 3.90949L12.7824 3.14233L12.7824 3.14233L12.5555 3.90949ZM4.23121 10.432L5.00522 10.6343L4.23121 10.432ZM4.50606 9.82767L5.16796 10.277L5.16796 10.277L4.50606 9.82767ZM5.23652 19.6159L4.87333 20.3287H4.87333L5.23652 19.6159ZM4.38102 18.7604L3.66821 19.1236L3.66821 19.1236L4.38102 18.7604ZM19.6192 18.7604L20.332 19.1236V19.1236L19.6192 18.7604ZM18.7627 19.6159L19.1259 20.3287H19.1259L18.7627 19.6159ZM19.7683 10.432L20.5424 10.2298V10.2298L19.7683 10.432ZM19.4942 9.82767L20.1561 9.37835L20.1561 9.37835L19.4942 9.82767ZM4.96759 16.6962V11.4603H3.36759V16.6962H4.96759ZM13.5365 5.59243L18.2359 9.70444L19.2895 8.50032L14.5901 4.3883L13.5365 5.59243ZM10.4653 5.59107C10.8394 5.26367 11.0865 5.04821 11.29 4.89604C11.4855 4.74987 11.5927 4.69986 11.6712 4.67665L11.2174 3.14233C10.8849 3.24067 10.6041 3.41109 10.3319 3.61464C10.0677 3.81219 9.76737 4.0757 9.41167 4.38694L10.4653 5.59107ZM14.5901 4.3883C14.2338 4.07655 13.9331 3.81272 13.6685 3.61496C13.396 3.41122 13.115 3.24071 12.7824 3.14233L12.3286 4.67665C12.4073 4.69991 12.5147 4.75004 12.7105 4.89642C12.9143 5.04879 13.1618 5.26458 13.5365 5.59243L14.5901 4.3883ZM11.6712 4.67665C11.8855 4.61325 12.1143 4.61325 12.3286 4.67665L12.7824 3.14233C12.2719 2.99136 11.728 2.99136 11.2174 3.14233L11.6712 4.67665ZM4.96759 11.4603C4.96759 10.8953 4.97367 10.755 5.00522 10.6343L3.45719 10.2298C3.36152 10.5959 3.36759 10.9791 3.36759 11.4603H4.96759ZM4.71067 8.50032C4.3473 8.81827 4.05648 9.06557 3.84415 9.37836L5.16796 10.277C5.23826 10.1734 5.34024 10.0755 5.76428 9.70444L4.71067 8.50032ZM5.00522 10.6343C5.03821 10.508 5.09312 10.3872 5.16796 10.277L3.84415 9.37835C3.66853 9.63708 3.53694 9.9246 3.45719 10.2298L5.00522 10.6343ZM7.29753 19.0291C6.73709 19.0291 6.36466 19.0285 6.07867 19.0051C5.80197 18.9825 5.67735 18.9426 5.59971 18.9031L4.87333 20.3287C5.21414 20.5023 5.57278 20.5691 5.94835 20.5998C6.31462 20.6297 6.76348 20.6291 7.29753 20.6291V19.0291ZM3.36759 16.6962C3.36759 17.2314 3.36697 17.6809 3.39693 18.0476C3.42764 18.4237 3.49444 18.7826 3.66821 19.1236L5.09382 18.3973C5.05417 18.3194 5.01426 18.1946 4.99162 17.9174C4.96822 17.6309 4.96759 17.2577 4.96759 16.6962H3.36759ZM5.59971 18.9031C5.38175 18.792 5.20483 18.6151 5.09382 18.3973L3.66821 19.1236C3.93266 19.6427 4.35441 20.0643 4.87333 20.3287L5.59971 18.9031ZM19.0324 16.6996C19.0324 17.2601 19.0318 17.6325 19.0084 17.9184C18.9858 18.195 18.946 18.3196 18.9064 18.3973L20.332 19.1236C20.5056 18.7828 20.5724 18.4243 20.6031 18.0487C20.633 17.6825 20.6324 17.2337 20.6324 16.6996H19.0324ZM16.7025 20.6291C17.2365 20.6291 17.6852 20.6297 18.0513 20.5998C18.4268 20.5691 18.7852 20.5023 19.1259 20.3287L18.3995 18.9031C18.3218 18.9427 18.1973 18.9825 17.9209 19.0051C17.6351 19.0285 17.2629 19.0291 16.7025 19.0291V20.6291ZM18.9064 18.3973C18.7958 18.6142 18.6183 18.7916 18.3995 18.9031L19.1259 20.3287C19.6439 20.0647 20.0671 19.6435 20.332 19.1236L18.9064 18.3973ZM20.6324 11.4603C20.6324 10.9779 20.638 10.5956 20.5424 10.2298L18.9943 10.6343C19.026 10.7553 19.0324 10.8965 19.0324 11.4603H20.6324ZM18.2359 9.70444C18.6601 10.0756 18.762 10.1735 18.8323 10.277L20.1561 9.37835C19.9438 9.06555 19.6528 8.81818 19.2895 8.50032L18.2359 9.70444ZM20.5424 10.2298C20.463 9.92613 20.3326 9.63839 20.1561 9.37835L18.8323 10.277C18.9062 10.3859 18.9609 10.5065 18.9943 10.6343L20.5424 10.2298ZM19.0324 11.4603V16.6996H20.6324V11.4603H19.0324ZM16.7025 19.0291H7.29753V20.6291H16.7025V19.0291ZM5.76428 9.70444L10.4653 5.59107L9.41167 4.38694L4.71067 8.50032L5.76428 9.70444ZM11.2 13.9547V19.829H12.8V13.9547H11.2Z',
      fill: 'currentColor',
    },
  },
  user: {
    path: {
      d: 'M19 19.875C19 17.4588 15.866 15.5 12 15.5C8.13401 15.5 5 17.4588 5 19.875M12 12.875C9.58375 12.875 7.625 10.9162 7.625 8.5C7.625 6.08375 9.58375 4.125 12 4.125C14.4162 4.125 16.375 6.08375 16.375 8.5C16.375 10.9162 14.4162 12.875 12 12.875Z',
      stroke: 'currentColor',
      strokeWidth: '1.6',
      strokeLinejoin: 'round',
    },
  },
  fold: {
    path: [
      {
        d: 'M5 12L10 17M5 12L10 7M5 12H16',
        stroke: 'currentColor',
        strokeWidth: '1.6',
        strokeLinejoin: 'round',
      },
      {
        d: 'M19 5V19',
        stroke: 'currentColor',
        strokeWidth: '1.6',
      },
    ],
  },
  unfold: {
    path: [
      {
        d: 'M19 12L14 17M19 12L14 7M19 12H8',
        stroke: 'currentColor',
        strokeWidth: '1.6',
        strokeLinejoin: 'round',
      },
      {
        d: 'M5 5V19',
        stroke: 'currentColor',
        strokeWidth: '1.6',
      },
    ],
  },
  image: {
    path: [
      {
        d: 'M4.50004 17.0001C4.5 16.9462 4.5 16.8908 4.5 16.8335V7.16683C4.5 6.23341 4.5 5.76635 4.68166 5.40983C4.84144 5.09623 5.09623 4.84144 5.40983 4.68166C5.76635 4.5 6.23341 4.5 7.16683 4.5H16.8335C17.7669 4.5 18.2334 4.5 18.5899 4.68166C18.9035 4.84144 19.1587 5.09623 19.3185 5.40983C19.5 5.766 19.5 6.2325 19.5 7.16409V16.8359C19.5 17.2401 19.5 17.5566 19.4852 17.8145M4.50004 17.0001C4.50068 17.8237 4.51114 18.2548 4.68166 18.5895C4.84144 18.9031 5.09623 19.1587 5.40983 19.3185C5.766 19.5 6.2325 19.5 7.16409 19.5H16.8363C17.7679 19.5 18.2337 19.5 18.5899 19.3185C18.9035 19.1587 19.1587 18.9031 19.3185 18.5895C19.4213 18.3879 19.4658 18.1511 19.4852 17.8145M4.50004 17.0001L8.47332 12.3646L8.47449 12.3633C8.82689 11.9522 9.00338 11.7463 9.21273 11.672C9.39662 11.6068 9.59739 11.6084 9.78035 11.6761C9.98886 11.7533 10.1625 11.9616 10.5099 12.3784L12.7359 15.0496C13.0575 15.4355 13.2192 15.6295 13.4155 15.7074C13.5887 15.7761 13.7797 15.7838 13.9584 15.7311C14.1618 15.6711 14.3409 15.492 14.699 15.134L15.1132 14.7197C15.4778 14.3551 15.6601 14.173 15.8664 14.1134C16.0476 14.0611 16.2414 14.0724 16.4157 14.1444C16.6142 14.2263 16.7752 14.427 17.0972 14.8296L19.4852 17.8145M19.4852 17.8145L19.5 17.833',
        stroke: 'currentColor',
        strokeWidth: '1.6',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M17.8629 5.32025C17.6252 5.30082 17.3134 5.3002 16.8335 5.3002H7.16683C6.68693 5.3002 6.375 5.30082 6.13712 5.32025C5.90852 5.33892 5.81966 5.37089 5.77302 5.39466C5.60995 5.47775 5.47755 5.61015 5.39446 5.77322C5.3707 5.81986 5.33872 5.90871 5.32005 6.13731C5.30062 6.3752 5.3 6.68712 5.3 7.16703V14.8377L7.86591 11.8441C7.86795 11.8418 7.87 11.8394 7.87206 11.8371L7.88573 11.8211C8.0458 11.6343 8.19761 11.4572 8.33708 11.3204C8.48723 11.1731 8.68211 11.0116 8.94541 10.9182C9.30619 10.7903 9.69986 10.7934 10.0581 10.9261C10.32 11.023 10.5127 11.1871 10.661 11.3367C10.799 11.4757 10.9487 11.6555 11.1068 11.8452L13.3505 14.5376C13.5201 14.7411 13.616 14.8552 13.6919 14.932C13.7035 14.9439 13.7132 14.9532 13.721 14.9604C13.7298 14.9537 13.7409 14.9448 13.7547 14.9331C13.8378 14.863 13.9445 14.7572 14.1333 14.5685L14.5664 14.1353C14.7321 13.9697 14.89 13.8117 15.0336 13.6907C15.189 13.5597 15.3868 13.4194 15.6446 13.345C16.0012 13.2421 16.3808 13.2646 16.721 13.4051C16.9687 13.5074 17.1496 13.6682 17.2898 13.8156C17.4198 13.9522 17.5598 14.1273 17.7068 14.3111L18.7 15.5526V7.16429C18.7 6.6853 18.6994 6.37399 18.68 6.13653C18.6613 5.90837 18.6294 5.81972 18.6057 5.77322C18.5229 5.6106 18.3902 5.47798 18.2267 5.39466C18.18 5.37085 18.0912 5.33891 17.8629 5.32025ZM18.6559 18.0587L16.4726 15.3295C16.303 15.1176 16.2067 14.9984 16.1304 14.9183C16.1176 14.9048 16.1071 14.8944 16.0989 14.8865C16.0899 14.8934 16.0786 14.9024 16.0647 14.9141C15.9799 14.9856 15.871 15.0935 15.6789 15.2856L15.2454 15.7191C15.0831 15.8814 14.9279 16.0366 14.7867 16.1558C14.6334 16.2853 14.4386 16.4237 14.1848 16.4986C13.8373 16.6011 13.4626 16.5869 13.1206 16.4512C12.8749 16.3538 12.6938 16.1985 12.5535 16.0563C12.4241 15.9254 12.2845 15.7577 12.1388 15.5829L9.89535 12.8908C9.71259 12.6714 9.60785 12.5469 9.5251 12.4635C9.51142 12.4497 9.50019 12.439 9.49129 12.4308C9.48234 12.4388 9.47111 12.4492 9.45743 12.4627C9.37362 12.5449 9.26737 12.6677 9.08189 12.8841C9.07985 12.8865 9.07779 12.8889 9.07571 12.8913L5.30112 17.2949C5.30318 17.5559 5.30883 17.7477 5.32356 17.9026C5.34247 18.1016 5.37222 18.1829 5.39446 18.2265C5.47799 18.3904 5.61081 18.5233 5.77302 18.6059C5.81952 18.6296 5.90818 18.6615 6.13633 18.6802C6.37379 18.6996 6.6851 18.7002 7.16409 18.7002H16.8363C17.3153 18.7002 17.6264 18.6996 17.8637 18.6802C18.0916 18.6615 18.1801 18.6297 18.2267 18.6059C18.3894 18.523 18.5224 18.39 18.6057 18.2265C18.6214 18.1958 18.6398 18.1485 18.6559 18.0587ZM20.2908 17.7115C20.3 17.4631 20.3 17.1775 20.3 16.857V7.13326C20.3 6.69394 20.3 6.31666 20.2747 6.00622C20.2479 5.67919 20.1891 5.35651 20.0313 5.04684C19.7946 4.58225 19.4168 4.2053 18.9531 3.96905C18.6433 3.8112 18.3206 3.75232 17.9932 3.72556C17.6825 3.70017 17.3048 3.70018 16.8646 3.7002L7.13576 3.7002C6.69556 3.70018 6.31771 3.70017 6.00687 3.72556C5.67945 3.7523 5.35652 3.81115 5.04664 3.96905C4.58251 4.20553 4.20534 4.5827 3.96885 5.04683C3.81096 5.35672 3.7521 5.67965 3.72536 6.00706C3.69997 6.3179 3.69999 6.69575 3.7 7.13596L3.70004 17.0009C3.70036 17.4045 3.70252 17.7572 3.73074 18.054C3.75984 18.3602 3.82057 18.6619 3.96885 18.9529C4.2049 19.4162 4.58164 19.7946 5.04664 20.0315C5.35631 20.1893 5.67899 20.2481 6.00602 20.2749C6.31647 20.3002 6.69374 20.3002 7.13306 20.3002H16.8674C17.3067 20.3002 17.6838 20.3002 17.9941 20.2749C18.3211 20.2481 18.6435 20.1893 18.9531 20.0315C19.4176 19.7948 19.7951 19.4166 20.0313 18.9529C20.1789 18.6633 20.2406 18.3604 20.2696 18.0517C20.3008 17.9415 20.3082 17.8253 20.2908 17.7115Z',
        fill: 'currentColor',
      },
      {
        d: 'M16.8 8.6002C16.8 9.37339 16.1732 10.0002 15.4 10.0002C14.6268 10.0002 14 9.37339 14 8.6002C14 7.827 14.6268 7.2002 15.4 7.2002C16.1732 7.2002 16.8 7.827 16.8 8.6002Z',
        fill: 'currentColor',
      },
    ],
  },
  empty: {
    path: { d: '' },
  },
} as const satisfies IconMapper;
