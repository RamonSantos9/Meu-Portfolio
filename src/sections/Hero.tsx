"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  const svgCursor = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="70" viewBox="0 0 77 57" fill="none">
    <path d="M4.749 20.1675L1 1.07544L18.2128 10.4988L9.73319 12.9583L4.749 20.1675Z" fill="black"/>
    <path d="M4.749 20.1675L1 1.07544L18.2128 10.4988L9.73319 12.9583L4.749 20.1675Z" stroke="white" stroke-width="0.88" stroke-miterlimit="10"/>
    <path d="M17.1392 23.5192C17.1392 22.3925 17.9052 21.4786 18.8489 21.4786H62.462C70.4915 21.4786 76.9997 29.2451 76.9997 38.8257C76.9997 48.4063 70.4915 56.1728 62.462 56.1728H37.663C26.3279 56.1728 17.1392 45.2092 17.1392 31.683V23.5192Z" fill="#683CFA"/>
    <path d="M38.4543 33.1255L34.7193 43.6555H31.5093L27.7743 33.1255H30.5043L33.1143 41.0755L35.7393 33.1255H38.4543ZM43.3363 43.7755C42.5163 43.7755 41.7763 43.6005 41.1163 43.2505C40.4663 42.9005 39.9513 42.4005 39.5713 41.7505C39.2013 41.1005 39.0163 40.3405 39.0163 39.4705C39.0163 38.6105 39.2063 37.8555 39.5863 37.2055C39.9663 36.5455 40.4863 36.0405 41.1463 35.6905C41.8063 35.3405 42.5463 35.1655 43.3663 35.1655C44.1863 35.1655 44.9263 35.3405 45.5863 35.6905C46.2463 36.0405 46.7663 36.5455 47.1463 37.2055C47.5263 37.8555 47.7163 38.6105 47.7163 39.4705C47.7163 40.3305 47.5213 41.0905 47.1313 41.7505C46.7513 42.4005 46.2263 42.9005 45.5563 43.2505C44.8963 43.6005 44.1563 43.7755 43.3363 43.7755ZM43.3363 41.5555C43.8263 41.5555 44.2413 41.3755 44.5813 41.0155C44.9313 40.6555 45.1063 40.1405 45.1063 39.4705C45.1063 38.8005 44.9363 38.2855 44.5963 37.9255C44.2663 37.5655 43.8563 37.3855 43.3663 37.3855C42.8663 37.3855 42.4513 37.5655 42.1213 37.9255C41.7913 38.2755 41.6263 38.7905 41.6263 39.4705C41.6263 40.1405 41.7863 40.6555 42.1063 41.0155C42.4363 41.3755 42.8463 41.5555 43.3363 41.5555ZM48.5671 39.4705C48.5671 38.6005 48.7421 37.8405 49.0921 37.1905C49.4521 36.5405 49.9471 36.0405 50.5771 35.6905C51.2171 35.3405 51.9471 35.1655 52.7671 35.1655C53.8171 35.1655 54.6921 35.4405 55.3921 35.9905C56.1021 36.5405 56.5671 37.3155 56.7871 38.3155H54.0571C53.8271 37.6755 53.3821 37.3555 52.7221 37.3555C52.2521 37.3555 51.8771 37.5405 51.5971 37.9105C51.3171 38.2705 51.1771 38.7905 51.1771 39.4705C51.1771 40.1505 51.3171 40.6755 51.5971 41.0455C51.8771 41.4055 52.2521 41.5855 52.7221 41.5855C53.3821 41.5855 53.8271 41.2655 54.0571 40.6255H56.7871C56.5671 41.6055 56.1021 42.3755 55.3921 42.9355C54.6821 43.4955 53.8071 43.7755 52.7671 43.7755C51.9471 43.7755 51.2171 43.6005 50.5771 43.2505C49.9471 42.9005 49.4521 42.4005 49.0921 41.7505C48.7421 41.1005 48.5671 40.3405 48.5671 39.4705ZM66.0492 39.3355C66.0492 39.5755 66.0342 39.8255 66.0042 40.0855H60.1992C60.2392 40.6055 60.4042 41.0055 60.6942 41.2855C60.9942 41.5555 61.3592 41.6905 61.7892 41.6905C62.4292 41.6905 62.8742 41.4205 63.1242 40.8805H65.8542C65.7142 41.4305 65.4592 41.9255 65.0892 42.3655C64.7292 42.8055 64.2742 43.1505 63.7242 43.4005C63.1742 43.6505 62.5592 43.7755 61.8792 43.7755C61.0592 43.7755 60.3292 43.6005 59.6892 43.2505C59.0492 42.9005 58.5492 42.4005 58.1892 41.7505C57.8292 41.1005 57.6492 40.3405 57.6492 39.4705C57.6492 38.6005 57.8242 37.8405 58.1742 37.1905C58.5342 36.5405 59.0342 36.0405 59.6742 35.6905C60.3142 35.3405 61.0492 35.1655 61.8792 35.1655C62.6892 35.1655 63.4092 35.3355 64.0392 35.6755C64.6692 36.0155 65.1592 36.5005 65.5092 37.1305C65.8692 37.7605 66.0492 38.4955 66.0492 39.3355ZM63.4242 38.6605C63.4242 38.2205 63.2742 37.8705 62.9742 37.6105C62.6742 37.3505 62.2992 37.2205 61.8492 37.2205C61.4192 37.2205 61.0542 37.3455 60.7542 37.5955C60.4642 37.8455 60.2842 38.2005 60.2142 38.6605H63.4242ZM61.8492 33.4255L59.5242 34.6555V32.8855L61.8492 31.7005L64.1742 32.8855V34.6555L61.8492 33.4255Z" fill="white"/>
    </svg>
  `)}`;

  useEffect(() => {
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: 100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 1, y: 0 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, [
    leftPointerAnimate,
    leftPointerScope,
    rightPointerAnimate,
    rightPointerScope,
  ]);
  return (
    <section
      className="py-24 overflow-x-clip"
      style={{
        cursor: `url("${svgCursor}") 16 16, auto`,
      }}
    >
      <div className="z-10 flex min-h-64 items-center justify-center">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-white" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#A3E635] via-[#ffffff] to-[#1ED96F] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Bem-vindo
          </span>
        </AnimatedGradientText>
      </div>
      <motion.div
        ref={leftPointerScope}
        initial={{ opacity: 0, y: 100, x: -100 }}
        drag
        className="absolute left-56 top-96 hidden lg:block"
      >
        <Pointer name="Ramon" />
      </motion.div>
      <motion.div
        ref={rightPointerScope}
        initial={{ opacity: 0, x: 50, y: 100 }}
        drag
        className="absolute right-[300px] hidden lg:block"
      >
        <Pointer name="Santos" color="red" />
      </motion.div>
      <div className="container">
        <h1 className="text-6xl md:text-7xl font-medium font-poppins text-center mt-6 bg-gradient-to-br from-[#FFFFF7] bg-clip-text text-transparent">
          Olá, eu sou o Ramon
        </h1>

        <p className="text-center font-poppins text-regular text-[#7D7F78] mt-8 mg-lg">
          Sou estudante de Análise e Desenvolvimento de Sistemas, <br />
          apaixonado por transformar ideias em interfaces incríveis.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <a
            href="https://drive.google.com/file/d/1HDy-VcnR9qgO3p16-VX1ecchHq4xyY-X/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="secondary"
              className="inline-flex items-center gap-2"
              size="sm"
            >
              Currículo
              <svg
                width="12"
                height="12"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.8678 1H10.847V6.43646H29.087L1 33.1547L4.96522 37L33.1843 10.3481V27.6519H39L38.8678 1Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/ramon-santosxp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="tertiary"
              className="md:inline-flex items-center"
              size="sm"
            >
              <svg
                width="25"
                height="20"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3_2)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44 40H34.2754V25.9384C34.2754 22.2578 32.7543 19.7451 29.4092 19.7451C26.8507 19.7451 25.4278 21.4407 24.7655 23.0749C24.5171 23.6614 24.556 24.4784 24.556 25.2955V40H14.9219C14.9219 40 15.0461 15.0913 14.9219 12.8271H24.556V17.0916C25.1251 15.227 28.2036 12.5658 33.1164 12.5658C39.2114 12.5658 44 16.4744 44 24.8908V40ZM5.1792 9.42819H5.11713C2.01271 9.42819 0 7.35095 0 4.71793C0 2.03367 2.0722 0 5.23871 0C8.40263 0 10.3481 2.02857 10.4102 4.71027C10.4102 7.34329 8.40262 9.42819 5.1792 9.42819ZM1.1098 12.8271H9.68579V40H1.1098V12.8271Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_2">
                    <rect width="44" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </a>
          <a
            href="https://github.com/RamonSantos9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="tertiary"
              className="md:inline-flex items-center"
              size="sm"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_5)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0C24.8368 0 32 7.344 32 16.4048C32 23.6512 27.4208 29.7984 21.0672 31.9696C20.256 32.1312 19.968 31.6192 19.968 31.1824C19.968 30.6416 19.9872 28.8752 19.9872 26.68C19.9872 25.1504 19.4752 24.152 18.9008 23.6432C22.464 23.2368 26.208 21.8496 26.208 15.5488C26.208 13.7568 25.5872 12.2944 24.56 11.1456C24.7264 10.7312 25.2752 9.0624 24.4032 6.8032C24.4032 6.8032 23.0624 6.3632 20.008 8.4848C18.703 8.12105 17.3548 7.93537 16 7.9328C14.6463 7.93524 13.2991 8.12093 11.9952 8.4848C8.9376 6.3632 7.5936 6.8032 7.5936 6.8032C6.7248 9.0624 7.2736 10.7312 7.4384 11.1456C6.416 12.2944 5.7904 13.7568 5.7904 15.5488C5.7904 21.8336 9.5264 23.2416 13.08 23.656C12.6224 24.0656 12.208 24.7888 12.064 25.8496C11.152 26.2688 8.8352 26.9936 7.408 24.4864C7.408 24.4864 6.5616 22.9104 4.9552 22.7952C4.9552 22.7952 3.3952 22.7744 4.8464 23.792C4.8464 23.792 5.8944 24.296 6.6224 26.192C6.6224 26.192 7.5616 29.12 12.0128 28.128C12.0208 29.4992 12.0352 30.792 12.0352 31.1824C12.0352 31.616 11.7408 32.1232 10.9424 31.9712C4.584 29.8032 0 23.6528 0 16.4048C0 7.344 7.1648 0 16 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_5">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
