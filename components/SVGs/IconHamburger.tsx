const IconHamburger: React.FC<{ isMounted: boolean }> = ({ isMounted }) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_241_2)">
        <rect
          width="16"
          height="3"
          fill="white"
          className={`${
            isMounted
              ? 'transition ease-in rotate-[45deg] translate-x-1 duration-200'
              : 'transition ease-in rotate-0 translate-x-0 duration-200'
          }`}
        />
        <rect
          y="6"
          width="16"
          height="3"
          fill="white"
          className={`${
            isMounted
              ? 'transition ease-out opacity-0 -translate-x-3 duration-200'
              : 'transition ease-in opacity-1 translate-x-0 duration-200'
          }`}
        />
        <rect
          y="12"
          width="16"
          height="3"
          fill="white"
          className={`${
            isMounted
              ? 'transition ease-in -rotate-[45deg] translate-x-[-7px] translate-y-[3px] duration-200'
              : 'transition ease-in rotate-0 translate-x-0 translate-y-0 duration-200'
          }`}
        />
      </g>
      <defs>
        <clipPath id="clip0_241_2">
          <rect width="16" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default IconHamburger;
