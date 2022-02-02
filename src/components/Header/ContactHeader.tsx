import { useTheme } from "@mui/material/styles";

const ContactHeader = () => {
  const theme = useTheme();
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 531 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1_784_3083"
        maskUnits="userSpaceOnUse"
        x="0.904053"
        y="0.895996"
        width="530"
        height="109"
        fill="black"
      >
        <rect fill="white" x="0.904053" y="0.895996" width="530" height="109" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9877 102.824C17.2801 98.7801 11.9275 92.8232 7.91812 85.0001L7.91583 84.9956C3.89098 77.0441 1.90405 67.3275 1.90405 55.888C1.90405 44.6401 3.84311 34.978 7.76528 26.9376C11.6836 18.905 17.2349 12.7062 24.4198 8.37554C31.6058 4.04427 39.9979 1.896 49.5601 1.896C54.6359 1.896 59.8492 2.53052 65.1981 3.79481C70.539 5.05721 76.2541 6.94733 82.3415 9.45962L82.9941 9.72891L81.6153 37.304H67.6084L64.5514 22.4014C62.4921 21.7036 60.4958 21.1438 58.5624 20.7209C55.5463 20.0611 52.7869 19.736 50.2801 19.736C44.9846 19.736 40.5958 21.0799 37.0528 23.7145L37.0461 23.7194L37.0393 23.7243C33.4871 26.2746 30.7626 30.0323 28.8978 35.0673C27.0293 40.1122 26.0801 46.1806 26.0801 53.296C26.0801 61.6598 27.1735 68.5801 29.32 74.0912C31.5671 79.5179 34.5782 83.5185 38.3183 86.1677C42.1779 88.7376 46.492 90.024 51.2881 90.024C54.8923 90.024 58.708 89.2851 62.7416 87.7849C66.8591 86.1933 70.9977 83.7984 75.1566 80.5847L76.0222 79.9159L84.7247 93.5444L84.0278 94.1064C78.0022 98.9658 71.7181 102.623 65.1754 105.064C58.7388 107.502 52.38 108.728 46.1041 108.728C38.0611 108.728 30.6849 106.764 23.997 102.83L23.9877 102.824ZM64.8241 104.128C71.2561 101.728 77.4481 98.128 83.4001 93.328L75.7681 81.376C75.5019 81.5817 75.2356 81.7842 74.9694 81.9834C71.0116 84.9453 67.0538 87.1908 63.0961 88.72C58.9681 90.256 55.0321 91.024 51.2881 91.024C46.2961 91.024 41.7841 89.68 37.7521 86.992C33.8161 84.208 30.6961 80.032 28.3921 74.464C26.1841 68.8 25.0801 61.744 25.0801 53.296C25.0801 46.096 26.0401 39.904 27.9601 34.72C29.8801 29.536 32.7121 25.6 36.4561 22.912C40.2001 20.128 44.8081 18.736 50.2801 18.736C52.8721 18.736 55.7041 19.072 58.7761 19.744C60.5744 20.1374 62.4222 20.6459 64.3193 21.2696C64.6831 21.3893 65.0488 21.5131 65.4163 21.6412L68.4241 36.304H80.6641L81.9601 10.384C75.9121 7.88799 70.2481 6.01599 64.9681 4.768C59.6881 3.52 54.5521 2.896 49.5601 2.896C40.1521 2.896 31.9441 5.00799 24.9361 9.23199C17.9281 13.456 12.5041 19.504 8.66405 27.376C4.82405 35.248 2.90405 44.752 2.90405 55.888C2.90405 67.216 4.87205 76.768 8.80805 84.544C12.7441 92.224 17.9761 98.032 24.5041 101.968C31.0321 105.808 38.2321 107.728 46.1041 107.728C52.2481 107.728 58.4881 106.528 64.8241 104.128ZM160.304 88.8737L160.301 88.8792C157.145 95.1915 152.596 100.091 146.663 103.552C140.721 107.018 133.627 108.728 125.423 108.728C113.887 108.728 104.81 105.299 98.3379 98.3285L98.3326 98.3228C91.9674 91.3608 88.8547 81.5347 88.8547 68.992C88.8547 60.2399 90.3618 52.6911 93.4187 46.3801L93.4215 46.3743C96.5741 39.9705 101.072 35.0206 106.912 31.5559C112.762 28.0858 119.811 26.376 128.015 26.376C139.551 26.376 148.672 29.8056 155.238 36.77C161.802 43.7314 165.015 53.5618 165.015 66.112C165.015 74.8689 163.458 82.4671 160.304 88.8737ZM115.616 48.7843L115.61 48.7929C113.077 52.7742 111.735 59.1168 111.735 67.984C111.735 76.8578 113.031 83.0954 115.461 86.8789C117.843 90.4932 121.442 92.328 126.431 92.328C130.102 92.328 132.984 91.4129 135.166 89.6671C137.367 87.9065 139.101 85.1725 140.309 81.3618C141.517 77.5536 142.135 72.8147 142.135 67.12C142.135 58.4439 140.792 52.3046 138.271 48.5227L138.265 48.5137C135.78 44.6985 132.081 42.776 127.007 42.776C121.849 42.776 118.105 44.7833 115.616 48.7843ZM114.623 87.424C112.031 83.392 110.735 76.912 110.735 67.984C110.735 59.056 112.079 52.48 114.767 48.256C117.455 43.936 121.535 41.776 127.007 41.776C132.383 41.776 136.415 43.84 139.103 47.968C141.791 52 143.135 58.384 143.135 67.12C143.135 72.88 142.511 77.728 141.263 81.664C140.015 85.6 138.191 88.528 135.791 90.448C133.391 92.368 130.271 93.328 126.431 93.328C121.151 93.328 117.215 91.36 114.623 87.424ZM172.176 107V94.8777L181.824 92.1211V43.5212L172.176 40.6497V28.5804L199.343 27.3456L201.208 37.2943C204.89 34.1059 208.756 31.6422 212.809 29.9151C218.092 27.5678 223.173 26.376 228.04 26.376C234.797 26.376 240.475 28.5205 244.998 32.8406C249.591 37.1299 251.745 43.5885 251.648 52.005V91.9936L261.296 94.888V107H220.848V94.8804L229.488 92.3794V56.32C229.488 51.7385 228.456 48.5863 226.597 46.6432L226.589 46.6348L226.582 46.6263C224.78 44.6526 222.374 43.64 219.256 43.64C216.849 43.64 214.163 44.3093 211.184 45.7055C208.772 46.8364 206.371 48.4384 203.984 50.5248V92.2851L212.624 94.8889V107H172.176ZM202.984 93.0282V50.074C203.149 49.9266 203.314 49.7813 203.48 49.6382C203.648 49.4928 203.816 49.3497 203.984 49.2089C206.216 47.3408 208.475 45.8712 210.76 44.8C213.832 43.36 216.664 42.64 219.256 42.64C222.616 42.64 225.304 43.744 227.32 45.952C229.432 48.16 230.488 51.616 230.488 56.32V93.1309L221.848 95.632V106H260.296V95.632L250.648 92.7376V52C250.744 43.744 248.632 37.6 244.312 33.568C239.992 29.44 234.568 27.376 228.04 27.376C223.336 27.376 218.392 28.528 213.208 30.832C209.098 32.5824 205.17 35.1171 201.422 38.4361C201.131 38.6938 200.841 38.9563 200.552 39.2235L198.52 28.384L173.176 29.536V39.904L182.824 42.7754V92.8754L173.176 95.632V106H211.624V95.632L202.984 93.0282ZM278.548 102.474L278.54 102.464C274.971 98.1817 273.268 91.9613 273.268 83.968V43.496H262.036V30.9035L273.268 28.2674V11.4177L295.572 7.46309V28.104H315.322L314.991 43.496H295.572V81.232C295.572 85.2997 296.243 88.0067 297.393 89.5668C298.512 91.0854 300.199 91.896 302.636 91.896C304.065 91.896 305.652 91.6732 307.405 91.2133C309.29 90.6472 311.323 89.9381 313.504 89.0848L314.48 88.7027L318.828 101.578L318.092 101.981C309.916 106.458 302.024 108.728 294.428 108.728C287.598 108.728 282.25 106.691 278.556 102.484L278.548 102.474ZM307.676 92.176C305.852 92.656 304.172 92.896 302.636 92.896C299.948 92.896 297.932 91.984 296.588 90.16C295.244 88.336 294.572 85.36 294.572 81.232V42.496H314.012L314.3 29.104H294.572V8.65599L274.268 12.256V29.0599L263.036 31.696V42.496H274.268V83.968C274.268 91.84 275.948 97.792 279.308 101.824C282.764 105.76 287.804 107.728 294.428 107.728C301.82 107.728 309.548 105.52 317.612 101.104L313.868 90.0163C313.554 90.1392 313.242 90.259 312.934 90.3761C311.075 91.082 309.323 91.682 307.676 92.176ZM387.486 92.603L397.134 95.632V105.856L371.934 107.152L369.541 95.0608C369.265 95.3779 368.986 95.6891 368.706 95.9942C365.408 99.5896 361.876 102.349 358.11 104.272C353.598 106.576 348.942 107.728 344.142 107.728C337.998 107.728 332.91 105.76 328.878 101.824C324.846 97.888 322.83 92.224 322.83 84.832C322.83 79.36 323.982 75.04 326.286 71.872C328.686 68.608 332.142 66.256 336.654 64.816C341.166 63.376 346.638 62.656 353.07 62.656H367.326V54.736C367.326 50.224 366.222 47.008 364.014 45.088C361.902 43.168 358.782 42.208 354.654 42.208C352.638 42.208 350.478 42.4 348.174 42.784C346.692 43.0311 345.13 43.3576 343.488 43.7637C343.17 43.8425 342.848 43.9243 342.523 44.0092C342.493 44.0171 342.463 44.025 342.432 44.033L340.83 54.016H328.302L327.15 32.992C333.678 31.072 339.63 29.68 345.006 28.816C350.478 27.856 355.47 27.376 359.982 27.376C368.91 27.376 375.726 29.296 380.43 33.136C385.134 36.976 387.486 42.928 387.486 50.992V92.603ZM344.84 27.8298C350.354 26.8628 355.403 26.376 359.982 26.376C369.036 26.376 376.113 28.3208 381.063 32.3613C386.07 36.4491 388.486 42.7331 388.486 50.992V91.8688L398.134 94.8978V106.806L371.121 108.195L368.946 97.2044C365.721 100.616 362.262 103.275 358.565 105.163C353.92 107.534 349.109 108.728 344.142 108.728C337.763 108.728 332.416 106.675 328.18 102.54C323.9 98.3619 321.83 92.4058 321.83 84.832C321.83 79.2303 323.008 74.6787 325.477 71.2838L325.481 71.2796C328.026 67.8181 331.672 65.3563 336.35 63.8633C340.989 62.383 346.569 61.656 353.07 61.656H366.326V54.736C366.326 50.3567 365.252 47.4896 363.358 45.8426L363.35 45.8354L363.342 45.8279C361.481 44.1368 358.643 43.208 354.654 43.208C352.701 43.208 350.597 43.3941 348.339 43.7704C346.761 44.0333 345.087 44.3888 343.316 44.8377L341.682 55.016H327.355L326.108 32.2561L326.868 32.0326C333.424 30.1044 339.416 28.702 344.84 27.8298ZM356.382 73.312C351.39 73.312 347.934 74.08 346.014 75.616C344.094 77.152 343.134 79.552 343.134 82.816C343.134 86.368 343.95 89.008 345.582 90.736C347.31 92.368 349.47 93.184 352.062 93.184C354.462 93.184 357.102 92.464 359.982 91.024C362.181 89.8514 364.295 88.3711 366.326 86.5832C366.497 86.4331 366.667 86.2808 366.836 86.1264C367 85.9768 367.163 85.8251 367.326 85.6714V73.312H356.382ZM366.326 74.312H356.382C351.422 74.312 348.273 75.0895 346.639 76.3969C345.029 77.6851 344.134 79.749 344.134 82.816C344.134 86.2207 344.915 88.5591 346.29 90.0289C347.811 91.4558 349.711 92.184 352.062 92.184C354.26 92.184 356.742 91.5246 359.523 90.1354C361.881 88.8765 364.149 87.2459 366.326 85.2368V74.312ZM420.104 103.983L420.094 103.977C414.645 100.708 410.346 96.0546 407.195 90.0485C404.031 84.0165 402.473 76.7442 402.473 68.272C402.473 60.5973 403.589 54.0709 405.865 48.7281C408.124 43.4243 411.185 39.115 415.062 35.8327C418.906 32.4832 423.201 30.0632 427.943 28.5815C432.649 27.1109 437.501 26.376 442.497 26.376C447.189 26.376 451.925 26.9626 456.703 28.1327C461.447 29.2945 465.359 30.6107 468.421 32.0918L469.002 32.3733L468.382 55.16H453.615L451.537 43.7981C450.609 43.5573 449.567 43.3567 448.41 43.1988L448.404 43.198C446.426 42.9155 444.602 42.776 442.929 42.776C438.978 42.776 435.745 43.7834 433.165 45.7407L433.161 45.744C430.662 47.6179 428.749 50.3656 427.457 54.0583L427.454 54.0659C426.159 57.6742 425.497 62.0181 425.497 67.12C425.497 72.6022 426.254 77.1719 427.729 80.8606C429.207 84.5537 431.257 87.3108 433.852 89.1949C436.551 90.9891 439.661 91.896 443.217 91.896C446.055 91.896 449.205 91.3006 452.677 90.0805C456.14 88.8639 459.765 87.0312 463.552 84.5696L464.383 84.0291L472.213 95.8574L471.474 96.4251C466.033 100.603 460.572 103.728 455.088 105.784L455.081 105.787L455.073 105.79C449.596 107.746 444.106 108.728 438.609 108.728C431.823 108.728 425.65 107.153 420.113 103.988L420.104 103.983ZM433.281 90.016C430.497 88 428.337 85.072 426.801 81.232C425.265 77.392 424.497 72.688 424.497 67.12C424.497 61.936 425.169 57.472 426.513 53.728C427.857 49.888 429.873 46.96 432.561 44.944C435.345 42.832 438.801 41.776 442.929 41.776C444.657 41.776 446.529 41.92 448.545 42.208C449.553 42.3455 450.484 42.5157 451.339 42.7188C451.536 42.7654 451.728 42.8138 451.917 42.864C452.083 42.9084 452.247 42.9541 452.408 43.0012L454.449 54.16H467.409L467.985 32.992C465.009 31.552 461.169 30.256 456.465 29.104C451.761 27.952 447.105 27.376 442.497 27.376C437.601 27.376 432.849 28.096 428.241 29.536C423.633 30.976 419.457 33.328 415.713 36.592C411.969 39.76 408.993 43.936 406.785 49.12C404.577 54.304 403.473 60.688 403.473 68.272C403.473 76.624 405.009 83.728 408.081 89.584C411.153 95.44 415.329 99.952 420.609 103.12C425.985 106.192 431.985 107.728 438.609 107.728C443.985 107.728 449.361 106.768 454.737 104.848C460.113 102.832 465.489 99.76 470.865 95.632L464.098 85.4091L464.097 85.408C460.257 87.904 456.561 89.776 453.009 91.024C449.457 92.272 446.193 92.896 443.217 92.896C439.473 92.896 436.161 91.936 433.281 90.016ZM488.735 102.474L488.727 102.464C485.158 98.1817 483.455 91.9613 483.455 83.968V43.496H472.223V30.9035L483.455 28.2674V11.4177L505.759 7.46309V28.104H525.509L525.178 43.496H505.759V81.232C505.759 85.2997 506.431 88.0067 507.581 89.5668C508.699 91.0854 510.386 91.896 512.823 91.896C514.252 91.896 515.84 91.6732 517.593 91.2132C519.478 90.6471 521.51 89.9381 523.691 89.0848L524.667 88.7027L529.015 101.578L528.28 101.981C520.104 106.458 512.211 108.728 504.615 108.728C497.786 108.728 492.438 106.691 488.744 102.484L488.735 102.474ZM517.863 92.176C516.039 92.656 514.359 92.896 512.823 92.896C510.135 92.896 508.119 91.984 506.775 90.16C505.431 88.336 504.759 85.36 504.759 81.232V42.496H524.199L524.487 29.104H504.759V8.65599L484.455 12.256V29.0599L473.223 31.696V42.496H484.455V83.968C484.455 91.84 486.135 97.792 489.495 101.824C492.951 105.76 497.991 107.728 504.615 107.728C512.007 107.728 519.735 105.52 527.799 101.104L524.055 90.016C523.741 90.1389 523.43 90.259 523.122 90.3761C521.263 91.082 519.51 91.682 517.863 92.176ZM154.511 37.456C148.175 30.736 139.343 27.376 128.015 27.376C119.951 27.376 113.087 29.056 107.423 32.416C101.759 35.776 97.3907 40.576 94.3187 46.816C91.3427 52.96 89.8547 60.352 89.8547 68.992C89.8547 81.376 92.9267 90.928 99.0707 97.648C105.311 104.368 114.095 107.728 125.423 107.728C133.487 107.728 140.399 106.048 146.159 102.688C151.919 99.328 156.335 94.576 159.407 88.432C162.479 82.192 164.015 74.752 164.015 66.112C164.015 53.728 160.847 44.176 154.511 37.456Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9877 102.824C17.2801 98.7801 11.9275 92.8232 7.91812 85.0001L7.91583 84.9956C3.89098 77.0441 1.90405 67.3275 1.90405 55.888C1.90405 44.6401 3.84311 34.978 7.76528 26.9376C11.6836 18.905 17.2349 12.7062 24.4198 8.37554C31.6058 4.04427 39.9979 1.896 49.5601 1.896C54.6359 1.896 59.8492 2.53052 65.1981 3.79481C70.539 5.05721 76.2541 6.94733 82.3415 9.45962L82.9941 9.72891L81.6153 37.304H67.6084L64.5514 22.4014C62.4921 21.7036 60.4958 21.1438 58.5624 20.7209C55.5463 20.0611 52.7869 19.736 50.2801 19.736C44.9846 19.736 40.5958 21.0799 37.0528 23.7145L37.0461 23.7194L37.0393 23.7243C33.4871 26.2746 30.7626 30.0323 28.8978 35.0673C27.0293 40.1122 26.0801 46.1806 26.0801 53.296C26.0801 61.6598 27.1735 68.5801 29.32 74.0912C31.5671 79.5179 34.5782 83.5185 38.3183 86.1677C42.1779 88.7376 46.492 90.024 51.2881 90.024C54.8923 90.024 58.708 89.2851 62.7416 87.7849C66.8591 86.1933 70.9977 83.7984 75.1566 80.5847L76.0222 79.9159L84.7247 93.5444L84.0278 94.1064C78.0022 98.9658 71.7181 102.623 65.1754 105.064C58.7388 107.502 52.38 108.728 46.1041 108.728C38.0611 108.728 30.6849 106.764 23.997 102.83L23.9877 102.824ZM64.8241 104.128C71.2561 101.728 77.4481 98.128 83.4001 93.328L75.7681 81.376C75.5019 81.5817 75.2356 81.7842 74.9694 81.9834C71.0116 84.9453 67.0538 87.1908 63.0961 88.72C58.9681 90.256 55.0321 91.024 51.2881 91.024C46.2961 91.024 41.7841 89.68 37.7521 86.992C33.8161 84.208 30.6961 80.032 28.3921 74.464C26.1841 68.8 25.0801 61.744 25.0801 53.296C25.0801 46.096 26.0401 39.904 27.9601 34.72C29.8801 29.536 32.7121 25.6 36.4561 22.912C40.2001 20.128 44.8081 18.736 50.2801 18.736C52.8721 18.736 55.7041 19.072 58.7761 19.744C60.5744 20.1374 62.4222 20.6459 64.3193 21.2696C64.6831 21.3893 65.0488 21.5131 65.4163 21.6412L68.4241 36.304H80.6641L81.9601 10.384C75.9121 7.88799 70.2481 6.01599 64.9681 4.768C59.6881 3.52 54.5521 2.896 49.5601 2.896C40.1521 2.896 31.9441 5.00799 24.9361 9.23199C17.9281 13.456 12.5041 19.504 8.66405 27.376C4.82405 35.248 2.90405 44.752 2.90405 55.888C2.90405 67.216 4.87205 76.768 8.80805 84.544C12.7441 92.224 17.9761 98.032 24.5041 101.968C31.0321 105.808 38.2321 107.728 46.1041 107.728C52.2481 107.728 58.4881 106.528 64.8241 104.128ZM160.304 88.8737L160.301 88.8792C157.145 95.1915 152.596 100.091 146.663 103.552C140.721 107.018 133.627 108.728 125.423 108.728C113.887 108.728 104.81 105.299 98.3379 98.3285L98.3326 98.3228C91.9674 91.3608 88.8547 81.5347 88.8547 68.992C88.8547 60.2399 90.3618 52.6911 93.4187 46.3801L93.4215 46.3743C96.5741 39.9705 101.072 35.0206 106.912 31.5559C112.762 28.0858 119.811 26.376 128.015 26.376C139.551 26.376 148.672 29.8056 155.238 36.77C161.802 43.7314 165.015 53.5618 165.015 66.112C165.015 74.8689 163.458 82.4671 160.304 88.8737ZM115.616 48.7843L115.61 48.7929C113.077 52.7742 111.735 59.1168 111.735 67.984C111.735 76.8578 113.031 83.0954 115.461 86.8789C117.843 90.4932 121.442 92.328 126.431 92.328C130.102 92.328 132.984 91.4129 135.166 89.6671C137.367 87.9065 139.101 85.1725 140.309 81.3618C141.517 77.5536 142.135 72.8147 142.135 67.12C142.135 58.4439 140.792 52.3046 138.271 48.5227L138.265 48.5137C135.78 44.6985 132.081 42.776 127.007 42.776C121.849 42.776 118.105 44.7833 115.616 48.7843ZM114.623 87.424C112.031 83.392 110.735 76.912 110.735 67.984C110.735 59.056 112.079 52.48 114.767 48.256C117.455 43.936 121.535 41.776 127.007 41.776C132.383 41.776 136.415 43.84 139.103 47.968C141.791 52 143.135 58.384 143.135 67.12C143.135 72.88 142.511 77.728 141.263 81.664C140.015 85.6 138.191 88.528 135.791 90.448C133.391 92.368 130.271 93.328 126.431 93.328C121.151 93.328 117.215 91.36 114.623 87.424ZM172.176 107V94.8777L181.824 92.1211V43.5212L172.176 40.6497V28.5804L199.343 27.3456L201.208 37.2943C204.89 34.1059 208.756 31.6422 212.809 29.9151C218.092 27.5678 223.173 26.376 228.04 26.376C234.797 26.376 240.475 28.5205 244.998 32.8406C249.591 37.1299 251.745 43.5885 251.648 52.005V91.9936L261.296 94.888V107H220.848V94.8804L229.488 92.3794V56.32C229.488 51.7385 228.456 48.5863 226.597 46.6432L226.589 46.6348L226.582 46.6263C224.78 44.6526 222.374 43.64 219.256 43.64C216.849 43.64 214.163 44.3093 211.184 45.7055C208.772 46.8364 206.371 48.4384 203.984 50.5248V92.2851L212.624 94.8889V107H172.176ZM202.984 93.0282V50.074C203.149 49.9266 203.314 49.7813 203.48 49.6382C203.648 49.4928 203.816 49.3497 203.984 49.2089C206.216 47.3408 208.475 45.8712 210.76 44.8C213.832 43.36 216.664 42.64 219.256 42.64C222.616 42.64 225.304 43.744 227.32 45.952C229.432 48.16 230.488 51.616 230.488 56.32V93.1309L221.848 95.632V106H260.296V95.632L250.648 92.7376V52C250.744 43.744 248.632 37.6 244.312 33.568C239.992 29.44 234.568 27.376 228.04 27.376C223.336 27.376 218.392 28.528 213.208 30.832C209.098 32.5824 205.17 35.1171 201.422 38.4361C201.131 38.6938 200.841 38.9563 200.552 39.2235L198.52 28.384L173.176 29.536V39.904L182.824 42.7754V92.8754L173.176 95.632V106H211.624V95.632L202.984 93.0282ZM278.548 102.474L278.54 102.464C274.971 98.1817 273.268 91.9613 273.268 83.968V43.496H262.036V30.9035L273.268 28.2674V11.4177L295.572 7.46309V28.104H315.322L314.991 43.496H295.572V81.232C295.572 85.2997 296.243 88.0067 297.393 89.5668C298.512 91.0854 300.199 91.896 302.636 91.896C304.065 91.896 305.652 91.6732 307.405 91.2133C309.29 90.6472 311.323 89.9381 313.504 89.0848L314.48 88.7027L318.828 101.578L318.092 101.981C309.916 106.458 302.024 108.728 294.428 108.728C287.598 108.728 282.25 106.691 278.556 102.484L278.548 102.474ZM307.676 92.176C305.852 92.656 304.172 92.896 302.636 92.896C299.948 92.896 297.932 91.984 296.588 90.16C295.244 88.336 294.572 85.36 294.572 81.232V42.496H314.012L314.3 29.104H294.572V8.65599L274.268 12.256V29.0599L263.036 31.696V42.496H274.268V83.968C274.268 91.84 275.948 97.792 279.308 101.824C282.764 105.76 287.804 107.728 294.428 107.728C301.82 107.728 309.548 105.52 317.612 101.104L313.868 90.0163C313.554 90.1392 313.242 90.259 312.934 90.3761C311.075 91.082 309.323 91.682 307.676 92.176ZM387.486 92.603L397.134 95.632V105.856L371.934 107.152L369.541 95.0608C369.265 95.3779 368.986 95.6891 368.706 95.9942C365.408 99.5896 361.876 102.349 358.11 104.272C353.598 106.576 348.942 107.728 344.142 107.728C337.998 107.728 332.91 105.76 328.878 101.824C324.846 97.888 322.83 92.224 322.83 84.832C322.83 79.36 323.982 75.04 326.286 71.872C328.686 68.608 332.142 66.256 336.654 64.816C341.166 63.376 346.638 62.656 353.07 62.656H367.326V54.736C367.326 50.224 366.222 47.008 364.014 45.088C361.902 43.168 358.782 42.208 354.654 42.208C352.638 42.208 350.478 42.4 348.174 42.784C346.692 43.0311 345.13 43.3576 343.488 43.7637C343.17 43.8425 342.848 43.9243 342.523 44.0092C342.493 44.0171 342.463 44.025 342.432 44.033L340.83 54.016H328.302L327.15 32.992C333.678 31.072 339.63 29.68 345.006 28.816C350.478 27.856 355.47 27.376 359.982 27.376C368.91 27.376 375.726 29.296 380.43 33.136C385.134 36.976 387.486 42.928 387.486 50.992V92.603ZM344.84 27.8298C350.354 26.8628 355.403 26.376 359.982 26.376C369.036 26.376 376.113 28.3208 381.063 32.3613C386.07 36.4491 388.486 42.7331 388.486 50.992V91.8688L398.134 94.8978V106.806L371.121 108.195L368.946 97.2044C365.721 100.616 362.262 103.275 358.565 105.163C353.92 107.534 349.109 108.728 344.142 108.728C337.763 108.728 332.416 106.675 328.18 102.54C323.9 98.3619 321.83 92.4058 321.83 84.832C321.83 79.2303 323.008 74.6787 325.477 71.2838L325.481 71.2796C328.026 67.8181 331.672 65.3563 336.35 63.8633C340.989 62.383 346.569 61.656 353.07 61.656H366.326V54.736C366.326 50.3567 365.252 47.4896 363.358 45.8426L363.35 45.8354L363.342 45.8279C361.481 44.1368 358.643 43.208 354.654 43.208C352.701 43.208 350.597 43.3941 348.339 43.7704C346.761 44.0333 345.087 44.3888 343.316 44.8377L341.682 55.016H327.355L326.108 32.2561L326.868 32.0326C333.424 30.1044 339.416 28.702 344.84 27.8298ZM356.382 73.312C351.39 73.312 347.934 74.08 346.014 75.616C344.094 77.152 343.134 79.552 343.134 82.816C343.134 86.368 343.95 89.008 345.582 90.736C347.31 92.368 349.47 93.184 352.062 93.184C354.462 93.184 357.102 92.464 359.982 91.024C362.181 89.8514 364.295 88.3711 366.326 86.5832C366.497 86.4331 366.667 86.2808 366.836 86.1264C367 85.9768 367.163 85.8251 367.326 85.6714V73.312H356.382ZM366.326 74.312H356.382C351.422 74.312 348.273 75.0895 346.639 76.3969C345.029 77.6851 344.134 79.749 344.134 82.816C344.134 86.2207 344.915 88.5591 346.29 90.0289C347.811 91.4558 349.711 92.184 352.062 92.184C354.26 92.184 356.742 91.5246 359.523 90.1354C361.881 88.8765 364.149 87.2459 366.326 85.2368V74.312ZM420.104 103.983L420.094 103.977C414.645 100.708 410.346 96.0546 407.195 90.0485C404.031 84.0165 402.473 76.7442 402.473 68.272C402.473 60.5973 403.589 54.0709 405.865 48.7281C408.124 43.4243 411.185 39.115 415.062 35.8327C418.906 32.4832 423.201 30.0632 427.943 28.5815C432.649 27.1109 437.501 26.376 442.497 26.376C447.189 26.376 451.925 26.9626 456.703 28.1327C461.447 29.2945 465.359 30.6107 468.421 32.0918L469.002 32.3733L468.382 55.16H453.615L451.537 43.7981C450.609 43.5573 449.567 43.3567 448.41 43.1988L448.404 43.198C446.426 42.9155 444.602 42.776 442.929 42.776C438.978 42.776 435.745 43.7834 433.165 45.7407L433.161 45.744C430.662 47.6179 428.749 50.3656 427.457 54.0583L427.454 54.0659C426.159 57.6742 425.497 62.0181 425.497 67.12C425.497 72.6022 426.254 77.1719 427.729 80.8606C429.207 84.5537 431.257 87.3108 433.852 89.1949C436.551 90.9891 439.661 91.896 443.217 91.896C446.055 91.896 449.205 91.3006 452.677 90.0805C456.14 88.8639 459.765 87.0312 463.552 84.5696L464.383 84.0291L472.213 95.8574L471.474 96.4251C466.033 100.603 460.572 103.728 455.088 105.784L455.081 105.787L455.073 105.79C449.596 107.746 444.106 108.728 438.609 108.728C431.823 108.728 425.65 107.153 420.113 103.988L420.104 103.983ZM433.281 90.016C430.497 88 428.337 85.072 426.801 81.232C425.265 77.392 424.497 72.688 424.497 67.12C424.497 61.936 425.169 57.472 426.513 53.728C427.857 49.888 429.873 46.96 432.561 44.944C435.345 42.832 438.801 41.776 442.929 41.776C444.657 41.776 446.529 41.92 448.545 42.208C449.553 42.3455 450.484 42.5157 451.339 42.7188C451.536 42.7654 451.728 42.8138 451.917 42.864C452.083 42.9084 452.247 42.9541 452.408 43.0012L454.449 54.16H467.409L467.985 32.992C465.009 31.552 461.169 30.256 456.465 29.104C451.761 27.952 447.105 27.376 442.497 27.376C437.601 27.376 432.849 28.096 428.241 29.536C423.633 30.976 419.457 33.328 415.713 36.592C411.969 39.76 408.993 43.936 406.785 49.12C404.577 54.304 403.473 60.688 403.473 68.272C403.473 76.624 405.009 83.728 408.081 89.584C411.153 95.44 415.329 99.952 420.609 103.12C425.985 106.192 431.985 107.728 438.609 107.728C443.985 107.728 449.361 106.768 454.737 104.848C460.113 102.832 465.489 99.76 470.865 95.632L464.098 85.4091L464.097 85.408C460.257 87.904 456.561 89.776 453.009 91.024C449.457 92.272 446.193 92.896 443.217 92.896C439.473 92.896 436.161 91.936 433.281 90.016ZM488.735 102.474L488.727 102.464C485.158 98.1817 483.455 91.9613 483.455 83.968V43.496H472.223V30.9035L483.455 28.2674V11.4177L505.759 7.46309V28.104H525.509L525.178 43.496H505.759V81.232C505.759 85.2997 506.431 88.0067 507.581 89.5668C508.699 91.0854 510.386 91.896 512.823 91.896C514.252 91.896 515.84 91.6732 517.593 91.2132C519.478 90.6471 521.51 89.9381 523.691 89.0848L524.667 88.7027L529.015 101.578L528.28 101.981C520.104 106.458 512.211 108.728 504.615 108.728C497.786 108.728 492.438 106.691 488.744 102.484L488.735 102.474ZM517.863 92.176C516.039 92.656 514.359 92.896 512.823 92.896C510.135 92.896 508.119 91.984 506.775 90.16C505.431 88.336 504.759 85.36 504.759 81.232V42.496H524.199L524.487 29.104H504.759V8.65599L484.455 12.256V29.0599L473.223 31.696V42.496H484.455V83.968C484.455 91.84 486.135 97.792 489.495 101.824C492.951 105.76 497.991 107.728 504.615 107.728C512.007 107.728 519.735 105.52 527.799 101.104L524.055 90.016C523.741 90.1389 523.43 90.259 523.122 90.3761C521.263 91.082 519.51 91.682 517.863 92.176ZM154.511 37.456C148.175 30.736 139.343 27.376 128.015 27.376C119.951 27.376 113.087 29.056 107.423 32.416C101.759 35.776 97.3907 40.576 94.3187 46.816C91.3427 52.96 89.8547 60.352 89.8547 68.992C89.8547 81.376 92.9267 90.928 99.0707 97.648C105.311 104.368 114.095 107.728 125.423 107.728C133.487 107.728 140.399 106.048 146.159 102.688C151.919 99.328 156.335 94.576 159.407 88.432C162.479 82.192 164.015 74.752 164.015 66.112C164.015 53.728 160.847 44.176 154.511 37.456Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="2"
        mask="url(#path-1-outside-1_784_3083)"
      />
    </svg>
  );
};

export default ContactHeader;