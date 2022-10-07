import React from "react";
import Privacy from "./Privacy";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* footer */}
      <div className="footer h-[25vw] w-full bg-gradient-to-r from-[#FC5229] to-[#AF067D] inline-flex flex-row justify-center align-middle">
        <div className="flex flex-col justify-center align-middle px-[10vw]">
          <h2 className="font-montserrat font-extrabold text-white text-left text-[4vw] leading-snug tracking-tight">
            HAVE FUN!
          </h2>
          <p className="font-montserrat text-WHITE text-left text-white font-light justify-center align-middle text-[1.4vw] leading-tight tracking-tight">
            Make your learning experience exciting, simple and useful whatever
            your age may be or wherever you may be. After 7 years of research,
            data, trials and tribulations, we present to you the Classroom
            Without Walls. Let’s Flip! <br></br>
            <br></br>
            <Link to="/privacy">
              <p className="font-medium text-blue-400 underline hover:cursor-pointer">
                Privacy Policy for Let's Flip
              </p>
            </Link>
          </p>
          <a href="https://onelink.to/hc6ta4">
            <div className="font-montserrat flex text-center text-white text-[0.9vw] items-center justify-center align-middle rounded-xl px-[3vw] mt-[2vw] w-fit h-[3vw] shadow-gray-500 shadow-md">
              Download now
            </div>
          </a>

          <div className="flex flex-row justify-start align-middle pt-[2vw]">
            <a href="https://www.instagram.com/letsflip.sg/">
              <div className="flex flex-row">
                <svg
                  width="2vw"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00075 0C5.82806 0 5.55539 0.00950025 4.70205 0.048334C3.85037 0.0873344 3.26903 0.222169 2.76036 0.420004C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865008 3.84987 0.0481671 4.70122C0.01 5.55456 0 5.82739 0 8.00008C0 10.1728 0.00966692 10.4446 0.048334 11.298C0.0875011 12.1496 0.222336 12.731 0.420004 13.2396C0.624507 13.7658 0.897843 14.2121 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2121 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00008C16 5.82739 15.99 5.55472 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.897509 13.7666 0.624173 13.24 0.420004C12.73 0.222169 12.1483 0.0873344 11.2966 0.048334C10.4433 0.00950025 10.1716 0 7.99825 0H8.00075ZM7.28308 1.44168C7.49608 1.44135 7.73375 1.44168 8.00075 1.44168C10.1368 1.44168 10.3899 1.44935 11.2335 1.48768C12.0135 1.52335 12.4368 1.65368 12.7188 1.76319C13.0921 1.90819 13.3583 2.08152 13.6381 2.36152C13.9181 2.64153 14.0915 2.9082 14.2368 3.28153C14.3463 3.5632 14.4768 3.98654 14.5123 4.76655C14.5507 5.60989 14.559 5.86323 14.559 7.99825C14.559 10.1333 14.5507 10.3866 14.5123 11.2299C14.4767 12.01 14.3463 12.4333 14.2368 12.715C14.0918 13.0883 13.9181 13.3541 13.6381 13.634C13.3581 13.914 13.0923 14.0873 12.7188 14.2323C12.4371 14.3423 12.0135 14.4723 11.2335 14.508C10.3901 14.5463 10.1368 14.5547 8.00075 14.5547C5.86456 14.5547 5.61139 14.5463 4.76805 14.508C3.98804 14.472 3.5647 14.3416 3.28253 14.2321C2.9092 14.0871 2.64253 13.9138 2.36252 13.6338C2.08252 13.3538 1.90919 13.0878 1.76385 12.7143C1.65435 12.4326 1.52385 12.0093 1.48835 11.2293C1.45002 10.3859 1.44235 10.1326 1.44235 7.99625C1.44235 5.85989 1.45002 5.60789 1.48835 4.76455C1.52402 3.98454 1.65435 3.5612 1.76385 3.2792C1.90885 2.90586 2.08252 2.63919 2.36252 2.35919C2.64253 2.07919 2.9092 1.90585 3.28253 1.76052C3.56454 1.65052 3.98804 1.52052 4.76805 1.48468C5.50606 1.45135 5.79206 1.44135 7.28308 1.43968V1.44168ZM12.2711 2.77003C11.7411 2.77003 11.3111 3.19953 11.3111 3.72971C11.3111 4.25971 11.7411 4.68972 12.2711 4.68972C12.8011 4.68972 13.2311 4.25971 13.2311 3.72971C13.2311 3.1997 12.8011 2.7697 12.2711 2.7697V2.77003ZM8.00075 3.89171C5.73189 3.89171 3.89237 5.73123 3.89237 8.00008C3.89237 10.2689 5.73189 12.1076 8.00075 12.1076C10.2696 12.1076 12.1085 10.2689 12.1085 8.00008C12.1085 5.73123 10.2694 3.89171 8.00058 3.89171H8.00075ZM8.00075 5.33339C9.47343 5.33339 10.6674 6.52723 10.6674 8.00008C10.6674 9.47276 9.47343 10.6668 8.00075 10.6668C6.5279 10.6668 5.33406 9.47276 5.33406 8.00008C5.33406 6.52723 6.5279 5.33339 8.00075 5.33339Z"
                    fill="white"
                  />
                </svg>

                <p className="font-montserrat text-white align-middle text-[1vw] place-self-center leading-tight tracking-tight pl-[0.5vw] pr-[2vw]">
                  @Letsflip.sg
                </p>
              </div>
            </a>
            <a href="https://www.linkedin.com/showcase/let-s-flip-application">
              <div className="flex flex-row">
                <svg
                  width="2vw"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1.14614C0 0.513313 0.526012 0 1.17491 0H14.8251C15.474 0 16 0.513315 16 1.14614V14.8539C16 15.4869 15.474 16 14.8251 16L1.17491 16C0.526012 16 0 15.4869 0 14.8539V1.14614ZM4.94338 13.3937V6.16876H2.54196V13.3937H4.94338ZM3.74266 5.18232C4.58008 5.18232 5.10131 4.62753 5.10131 3.9342C5.0857 3.22527 4.58008 2.68587 3.75854 2.68587C2.93709 2.68587 2.4 3.22527 2.4 3.9342C2.4 4.62753 2.92112 5.18232 3.72701 5.18232H3.74266ZM8.6514 13.3937V9.35897C8.6514 9.14304 8.667 8.92732 8.73042 8.77296C8.90401 8.34153 9.29915 7.89471 9.96255 7.89471C10.8315 7.89471 11.1791 8.55725 11.1791 9.52851V13.3937H13.5803V9.251C13.5803 7.03184 12.3956 5.99922 10.8156 5.99922C9.54177 5.99922 8.9706 6.69937 8.65146 7.19167V7.21656H8.63543C8.6407 7.20832 8.64605 7.20003 8.65146 7.19167V6.16876H6.25007C6.28158 6.8467 6.25007 13.3937 6.25007 13.3937H8.6514Z"
                    fill="white"
                  />
                </svg>
                <p className="font-montserrat text-white place-self-center align-middle text-[1vw] leading-tight tracking-tight pl-[0.5vw] pr-[2vw]">
                  Let's Flip Application
                </p>
              </div>
            </a>
            <a href="https://www.facebook.com/letsflipapp/">
              <div className="flex flex-row">
                <svg
                  width="2vw"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8.04858C16 3.60312 12.418 -0.00062561 7.99949 -0.00062561C3.58095 -0.00062561 -0.000976562 3.60312 -0.000976562 8.04858C-0.000976562 12.0662 2.92468 15.3962 6.74942 16V10.3753H4.71805V8.04858H6.74942V6.27524C6.74942 4.25791 7.94383 3.1436 9.77132 3.1436C10.6466 3.1436 11.5622 3.30081 11.5622 3.30081V5.28167H10.5534C9.55951 5.28167 9.24957 5.90213 9.24957 6.53868V8.04858H11.4684L11.1137 10.3753H9.24957V16C13.0743 15.3962 16 12.0662 16 8.04858Z"
                    fill="white"
                  />
                </svg>
                <p className="font-montserrat text-white align-middle text-[1vw] leading-tight place-self-center tracking-tight pl-[0.5vw] pr-[2vw]">
                  Let's Flip
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center bg-qr bg-center bg-no-repeat bg-contain w-[50vw] mr-[10vw]"></div>
      </div>

      <Routes>
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {/* footer */}
    </div>
  );
}

export default Footer;
