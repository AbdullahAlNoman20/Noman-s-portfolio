import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <section>
        <div className="dark:bg-blue-950">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-5xl font-bold leading-none sm:text-6xl  dark:text-gray-50"
            >
              Welcome to My Digital Hub. Discover, Hire, and Connect with
              Abdullah Al Noman.
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 text-justify"
            >
              Step into my digital realm, where innovation meets connection.
              Explore my portfolio to witness my expertise, download my CV to
              envision our collaboration, and delve into my daily life to see
              the person behind the code. Let's create, connect, and make magic
              together in the vast landscape of the web.
            </p>
            <div className="flex flex-wrap justify-center">
              <NavLink to="/login">
                <button
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
                >
                  <i class="fa-solid fa-laptop-code"></i> Let's work together
                </button>
              </NavLink>
              <button
                data-aos="fade-left"
                data-aos-duration="3000"
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
              >
                <i class="fa-regular fa-file-pdf"></i> Download CV
              </button>
            </div>
          </div>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          src="https://i.ibb.co/hRfd7hX/photo-2024-03-29-20-22-18.jpg"
          alt=""
          className="w-3/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-52"
        />
      </section>

      <section
        data-aos="fade-left"
        data-aos-duration="3000"
        className="p-6 dark:bg-gray-100 dark:text-gray-800"
      >
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">43+ </p>
              <p className="capitalize">Orders</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">20+</p>
              <p className="capitalize">Happy customers</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                <rect width="32" height="32" x="80" y="264"></rect>
                <rect width="32" height="32" x="240" y="128"></rect>
                <rect width="32" height="32" x="136" y="168"></rect>
                <rect width="32" height="32" x="400" y="264"></rect>
                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">1 hours</p>
              <p className="capitalize">First Responds</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">13+</p>
              <p className="capitalize">Projects and papers</p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-right"
        data-aos-duration="3000"
        className="dark:bg-gray-100 dark:text-gray-800"
      >
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold">Fully Comfortable with</h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0"
              y="0"
              enable-background="new 0 0 434.1 434.1"
              version="1.1"
              viewBox="0 0 434.1 434.1"
              xml:space="preserve"
              width="58"
              height="58"
            >
              <title>HTML5</title>
              <path fill="#fff" d="M82.7 44.3H362.2V366.7H82.7z"></path>
              <path
                fill="#FC490B"
                d="M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="none"
              viewBox="0 0 54 54"
            >
              <title>CSS3</title>
              <path
                fill="#2196F3"
                d="M3.375 0l4.303 48.6L27 54l19.315-5.397L50.625 0H3.375z"
              ></path>
              <path
                fill="#FAFAFA"
                d="M41.426 15.893l-.544 6.105-1.64 18.303-12.241 3.385-.01.003-12.234-3.388-.854-9.572h5.994l.445 4.965 6.652 1.795.004-.003 6.662-1.795.908-8.273-20.952.058-.594-5.657 22.049-.26.445-6.054-23.085.064-.388-5.633h29.916l-.533 5.957z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              width="55"
              height="55"
              viewBox="0 0 512 512"
            >
              <title>JavaScript</title>
              <path fill="#ffdf00" d="M0 0h512v512H0z"></path>
              <path d="M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-11.5 -10.232 23 20.463"
              width="58"
              height="58"
            >
              <title>React</title>
              <circle r="2.05" fill="#61dafb"></circle>
              <g fill="none" stroke="#61dafb">
                <ellipse rx="11" ry="4.2"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              image-rendering="optimizeQuality"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              viewBox="0 0 598.88 1333.33"
              width="62"
              height="62"
            >
              <title>MongoBD</title>
              <g fill-rule="nonzero">
                <path
                  fill="#599636"
                  d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
                ></path>
                <path
                  fill="#6cac48"
                  d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
                ></path>
                <path
                  fill="#c2bfbf"
                  d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58.3"
              height="35.2"
              fill="none"
              viewBox="0 0 65 39"
            >
              <title>Tailwind</title>
              <path
                fill="#06B6D4"
                fill-rule="evenodd"
                d="M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 95.39 131.07"
              width="50"
              height="50"
            >
              <title>Firebase</title>
              <path
                fill="#FFA000"
                d="M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z"
              ></path>
              <path
                fill="#F57C00"
                d="M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z"
              ></path>
              <path
                fill="#FFCA28"
                d="M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z"
              ></path>
              <path
                fill="#fff"
                fill-opacity="0.2"
                d="M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z"
              ></path>
              <path
                fill="#A52714"
                fill-opacity="0.2"
                d="M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z"
              ></path>
              <linearGradient
                id="b_1_"
                x1="-243.479"
                x2="-242.436"
                y1="345.28"
                y2="344.521"
                gradientTransform="matrix(95 0 0 -130.9998 23127.441 45253.934)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFF" stop-opacity="0.1"></stop>
                <stop
                  offset="0.14"
                  stop-color="#FFF"
                  stop-opacity="0.08"
                ></stop>
                <stop
                  offset="0.61"
                  stop-color="#FFF"
                  stop-opacity="0.02"
                ></stop>
                <stop offset="1" stop-color="#FFF" stop-opacity="0"></stop>
              </linearGradient>
              <path
                id="b"
                fill="url(#b_1_)"
                d="M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              width="58"
              height="58"
              viewBox="0 0 512 512"
            >
				<title>NodeJS</title>
              <linearGradient
                id="XMLID_00000118357800129798447730000005862678814579567263_"
                x1="337.597"
                x2="156.289"
                y1="89.494"
                y2="459.361"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#3f873f"></stop>
                <stop offset="0.33" stop-color="#3f8b3d"></stop>
                <stop offset="0.637" stop-color="#3e9638"></stop>
                <stop offset="0.934" stop-color="#3da92e"></stop>
                <stop offset="1" stop-color="#3dae2b"></stop>
              </linearGradient>
              <linearGradient
                id="SVGID_1_"
                x1="225.787"
                x2="733.809"
                y1="282.815"
                y2="-92.539"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.138" stop-color="#3f873f"></stop>
                <stop offset="0.402" stop-color="#52a044"></stop>
                <stop offset="0.713" stop-color="#64b749"></stop>
                <stop offset="0.908" stop-color="#6abf4b"></stop>
              </linearGradient>
              <linearGradient
                id="SVGID_00000048489710280204197710000009720263475330385543_"
                x1="24.028"
                x2="487.275"
                y1="255.987"
                y2="255.987"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.092" stop-color="#6abf4b"></stop>
                <stop offset="0.287" stop-color="#64b749"></stop>
                <stop offset="0.598" stop-color="#52a044"></stop>
                <stop offset="0.862" stop-color="#3f873f"></stop>
              </linearGradient>
              <path
                id="XMLID_143_"
                fill="url(#XMLID_00000118357800129798447730000005862678814579567263_)"
                fill-rule="evenodd"
                d="M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="url(#SVGID_1_)"
                d="M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z"
              ></path>
              <path
                fill="url(#SVGID_00000048489710280204197710000009720263475330385543_)"
                d="M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
