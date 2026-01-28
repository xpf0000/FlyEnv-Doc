<template>
  <template v-if="type === 0">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="flex flex-1 items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/apache.png" />
      </div>
      <span class="shrink-0 select-text">Apache</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="flex flex-1 items-center justify-center">
        <img src="https://oss.macphpstudy.com/image/nginx.png" />
      </div>
      <span class="shrink-0 select-text">Nginx</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="flex flex-1 items-center justify-center w-full p-5">
        <img src="https://oss.macphpstudy.com/image/caddy.svg" />
      </div>
      <span class="shrink-0 select-text">Caddy</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="flex flex-1 items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/tomcat.svg" />
      </div>
      <span class="shrink-0 select-text">Tomcat</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">网络服务器</span>
      <div class="flex flex-1 items-center justify-center w-full p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
          <g fill="#e03875">
            <path
              d="M4.737 14.193A7 7 0 008.006 15a6.98 6.98 0 004.735-1.847l-1.66-1.737a4.6 4.6 0 110-6.828l1.66-1.738a7 7 0 10-8.004 11.343zM13.32 11.402a.573.573 0 10.637-.953.573.573 0 00-.637.953z"
            ></path>
            <path
              d="M7.96 9.517a1.517 1.517 0 11-.012-3.034 1.517 1.517 0 01.013 3.034zM13.978 9.447a.574.574 0 10.637-.954.574.574 0 00-.637.954zM12.59 9.472a.574.574 0 110-1.148.574.574 0 010 1.148zM13.978 7.514a.574.574 0 10.637-.954.574.574 0 00-.637.954zM12.59 7.675a.574.574 0 110-1.148.574.574 0 010 1.148zM13.353 5.585a.574.574 0 10.635-.956.574.574 0 00-.635.956z"
            ></path>
          </g>
        </svg>
      </div>
      <span class="shrink-0 select-text">Consul</span>
    </div>
  </template>
  <template v-else-if="type === 1">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="flex flex-1 items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mysql.png" />
      </div>
      <span class="shrink-0 select-text">MySQL</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="flex flex-1 items-center justify-center p-1">
        <img src="https://oss.macphpstudy.com/image/mariadb.svg" />
      </div>
      <span class="shrink-0 select-text">MariaDB</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="flex flex-1 items-center justify-center w-full p-6">
        <img src="https://oss.macphpstudy.com/image/postgresql.svg" />
      </div>
      <span class="shrink-0 select-text">PostgreSQL</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据库</span>
      <div class="flex flex-1 items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/MongoDB.svg" />
      </div>
      <span class="shrink-0 select-text">MongoDB</span>
    </div>
  </template>
  <template v-else-if="type === 2">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center">
        <img src="https://oss.macphpstudy.com/image/php.png" />
      </div>
      <span class="shrink-0 select-text">PHP</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center p-4">
        <img src="https://oss.macphpstudy.com/image/java.svg" />
      </div>
      <span class="shrink-0 select-text">Java</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">运行时</span>
      <div class="flex flex-1 items-center justify-center w-full p-4">
        <img src="https://oss.macphpstudy.com/image/Node.js.svg" />
      </div>
      <span class="shrink-0 select-text">NodeJS</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center w-full p-4">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M366.635375 495.627875c8.93024999-1.488375 17.8605-2.480625 26.79075-2.48062499h-7.44187499 241.61287499c10.418625 0 20.341125-1.488375 30.26362501-3.969 44.65124999-12.403125 77.3955-52.093125 77.3955-101.20950002V185.053625c0-57.5505-49.116375-101.2095-107.65912501-110.63587501-37.209375-5.9535-91.287-8.93024999-128.00025-8.93024999-36.71325001 0-71.938125 3.472875-103.194 8.93024999C305.115875 90.29374999 288.74374999 123.534125 288.74374999 185.053625v66.48075h223.25625001V288.74374999H216.3095C133.456625 288.74374999 65.983625 387.96874999 65.4875 510.0155v1.9845c0 22.325625 1.9845 43.659 6.449625 63.504C90.29374999 667.78325001 147.84424999 735.25625001 216.3095 735.25625001h35.224875v-106.66687501c0-62.51174999 46.63574999-120.558375 115.101-132.9615z m23.814-283.7835c-22.325625 0-40.68225001-18.356625-40.18612499-40.68225 0-22.325625 17.8605-40.68225001 40.18612499-40.68225s40.68225001 18.356625 40.68225 40.68225c-0.496125 22.82175001-18.356625 40.68225001-40.68225 40.68225z"
            fill="#0075AA"
          ></path>
          <path
            d="M949.086125 434.108375C927.75275001 349.271 872.682875 288.74374999 807.6905 288.74374999h-35.224875v94.75987501c0 78.883875-51.597 135.93825001-115.101 145.86075-6.449625 0.99224999-12.89925001 1.488375-19.34887499 1.48837501H396.402875c-10.418625 0-20.341125 1.488375-30.26362499 3.969-44.65124999 11.907-77.3955 48.62025001-77.3955 96.74437499V834.48125001c0 57.5505 58.046625 91.783125 115.10099998 108.15524999 67.969125 19.845 142.387875 23.317875 224.24850002 0 54.077625-15.379875 107.163-46.63574999 107.16299998-108.15525001v-61.5195h-223.25624999V735.25625001h295.6905c58.54275001 0 109.643625-49.6125 134.449875-122.04675001 10.418625-30.263625 16.372125-64.49625001 16.372125-101.2095 0-27.286875-3.472875-53.5815-9.426375-77.891625z m-316.52775 372.58987501c22.325625 0 40.186125 18.356625 40.186125 40.68224999 0 22.325625-18.356625 40.68225001-40.186125 40.68225001-22.325625 0-40.68225001-18.356625-40.68225-40.68225001 0.496125-22.325625 18.356625-40.68225001 40.68225-40.68225001z"
            fill="#FFD400"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Python</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center w-full">
        <svg
          class="icon"
          viewBox="0 0 2586 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M192.026947 345.303579c-4.958316 0-6.144-2.479158-3.718736-6.197895l26.031157-33.414737c2.425263-3.718737 8.623158-6.197895 13.581474-6.197894h442.260211c4.958316 0 6.197895 3.772632 3.772631 7.437473l-21.018947 32.175158c-2.533053 3.772632-8.730947 7.437474-12.449684 7.437474l-448.458106-1.239579zM4.958316 459.290947c-4.958316 0-6.144-2.479158-3.664842-6.144l25.977263-33.468631c2.479158-3.772632 8.623158-6.197895 13.635368-6.197895H605.776842c4.904421 0 7.383579 3.772632 6.144 7.383579l-9.916631 29.749895c-1.239579 5.012211-6.197895 7.491368-11.156211 7.491368L4.958316 459.290947zM304.720842 573.278316c-4.904421 0-6.144-3.772632-3.664842-7.437474l17.300211-30.989474c2.479158-3.718737 7.491368-7.383579 12.395789-7.383579h247.808c4.958316 0 7.383579 3.664842 7.383579 8.623158l-2.425263 29.749895c0 4.958316-4.958316 8.623158-8.730948 8.623158l-270.012631-1.185684zM1590.649263 323.045053c-78.039579 19.833263-131.287579 34.654316-208.141474 54.487579-18.593684 4.958316-19.779368 6.197895-35.947789-12.39579-18.539789-21.018947-32.175158-34.708211-58.206316-47.050105-78.039579-38.373053-153.6-27.324632-224.202105 18.593684-84.237474 54.433684-127.568842 135.006316-126.383158 235.358316 1.293474 99.058526 69.416421 180.870737 167.235368 194.45221 84.291368 11.156211 154.893474-18.539789 210.620632-81.758315 11.156211-13.635368 21.018947-28.510316 33.468632-45.810527h-239.077053c-26.031158 0-32.175158-16.114526-23.552-37.133473 16.060632-38.480842 45.810526-102.831158 63.164632-135.060211a33.414737 33.414737 0 0 1 30.989473-19.833263h450.937263c-2.479158 33.468632-2.479158 66.883368-7.437473 100.352-13.635368 89.195789-47.104 170.954105-101.645474 242.795789-89.141895 117.706105-205.608421 190.787368-353.010526 210.620632-121.424842 16.060632-234.172632-7.437474-333.285053-81.758316-91.621053-69.416421-143.683368-161.091368-157.264842-275.024842-16.168421-135.060211 23.498105-256.377263 105.256421-362.981053 87.956211-115.226947 204.422737-188.254316 346.866526-214.339368 116.466526-21.018947 227.974737-7.383579 328.326737 60.739368 65.643789 43.331368 112.747789 102.831158 143.683369 174.618948 7.437474 11.210105 2.425263 17.354105-12.39579 21.126737"
            fill="#00ACD7"
          ></path>
          <path
            d="M2295.538526 507.634526c-1.239579-16.114526-1.239579-28.564211-3.664842-40.906105-22.312421-122.610526-135.114105-191.973053-252.766316-164.75621-115.226947 25.977263-189.547789 99.166316-216.764631 215.578947-22.366316 96.633263 24.737684 194.506105 113.933474 234.172631 68.122947 29.696 136.245895 25.977263 201.889684-7.491368 97.926737-50.822737 151.228632-130.048 157.372631-236.597895m-294.80421 500.466527c-112.747789-2.479158-215.578947-34.654316-302.349474-108.975158C1625.357474 835.907368 1579.439158 755.388632 1564.618105 659.994947 1542.305684 520.030316 1580.732632 396.126316 1665.024 285.911579c90.327579-118.945684 199.410526-180.870737 346.812632-206.95579C2138.165895 56.697263 2257.111579 69.093053 2364.901053 142.228211c97.872842 66.937263 158.558316 157.372632 174.726736 276.264421 21.018947 167.235368-27.324632 303.481263-142.497684 419.947789-81.758316 82.997895-182.056421 135.060211-297.337263 158.558316-33.414737 6.197895-66.829474 7.491368-99.058526 11.15621"
            fill="#00ACD7"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Go</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center w-full p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1594 1397"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
        >
          <g transform="matrix(4.16667 0 0 4.16667 -42 -44)">
            <path
              d="M70.223 252.775C40.55 221.33 23.188 177.89 23.232 126.061c-.04-45.837 14.361-85.236 39.119-115.216l-.039.015h-52.04v241.92h59.915l.036-.005zm274.073.021c12.783-13.692 24.237-29.816 34.616-48.256l-57.6-28.799c-20.23 32.887-49.813 63.158-90.72 63.359-59.537-.201-82.929-51.112-82.8-116.64h222.48c.297-7.398.297-10.838 0-14.399 1.452-38.985-8.88-71.754-27.675-97.273l-.097.072h50.092v241.92h-48.405l.109.016zM151.392 66.3c2.463-29.668 25.854-49.619 53.28-49.68 27.613.061 47.564 20.012 48.24 49.68h-101.52z"
              fill="#a90432"
              fill-rule="nonzero"
            />
            <path
              d="M41.952 293.82v-10.079h-30.96V343.5h30.96v-10.08h-19.44v-15.839h18.72V307.5h-18.72v-13.68h19.44zm52.56 24.48c7.718-1.146 11.956-8.793 12.24-16.559-.284-12.706-8.52-17.963-20.16-18h-15.84V343.5h11.52v-23.759l14.4 23.759h14.4l-16.56-25.2zm-12.24-25.2h1.44c6.285.237 11.002 1.671 10.8 9.36.202 7.047-4.355 8.958-10.8 8.64h-1.44v-18zm64.8-9.359h-11.52V343.5h28.08v-10.08h-16.56v-49.679zm75.6 47.519l5.04 12.24h12.24l-22.32-61.2h-9.36l-23.76 61.2h12.24l5.04-12.24h20.88zm-2.88-9.359h-14.4l6.48-22.32 7.92 22.32zm41.76 21.599h12.24v-40.32l31.68 41.76h8.64v-61.199h-12.24v40.32l-31.68-41.761h-8.64v61.2zm102.96-31.68v9.36h12.96c-.27 7.523-6.426 13.896-13.68 13.68-11.456.216-17.133-10.856-17.28-20.88.147-9.89 5.744-21.44 17.28-21.599 6.054.159 11.172 4.301 13.68 9.36l10.08-5.041c-4.433-9.337-13.388-14.515-23.76-14.4-17.853-.115-29.286 14.621-29.52 31.68.234 16.635 11.348 31.451 28.8 31.68 18.848-.229 27.563-15.284 27.36-32.4v-1.44h-25.92z"
              fill-rule="nonzero"
              fill="#231f20"
            />
          </g>
        </svg>
      </div>
      <span class="shrink-0 select-text">Erlang</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center w-full p-6">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M710.826667 749.653333l197.546666 175.36-389.12-30.72c76.373333-46.08 139.093333-101.12 186.026667-144.64h5.12z m218.88 104.96l36.266666-476.586666c-17.92 46.08-46.506667 99.413333-83.626666 156.586666z m-205.653334-115.626666l197.12 174.933333-52.48-358.4a1524.053333 1524.053333 0 0 1-144.64 183.04z m-230.4 170.666666a689.92 689.92 0 0 1-130.56 55.893334l454.4-30.72-323.84-25.6z m-379.733333-229.546666l119.04 278.186666 98.133333-324.693333z m245.76-62.72l331.52 106.666666L606.72 388.266667z m265.386667-261.973334l309.333333-20.906666-241.493333-197.546667zM801.28 51.2l-202.666667-0.853333 90.026667 63.146666z m-746.666667 510.72L47.786667 759.466667l48.64-88.746667z m110.933334 79.36c38.4 2.56 77.653333-5.973333 116.906666-23.466667a621.226667 621.226667 0 0 0 81.493334-46.933333 962.133333 962.133333 0 0 0 119.466666-102.4c144.213333-142.933333 203.52-302.933333 140.373334-366.506667-14.933333-15.36-36.693333-23.04-64-23.04-83.2-0.426667-207.36 62.293333-313.173334 167.253334s-166.826667 219.306667-167.253333 303.36c0 29.866667 8.106667 53.333333 24.746667 69.973333s35.413333 20.906667 61.44 22.186667z m300.8 263.253333l13.653333-7.253333-133.546667-256.853333-100.266666 332.8 7.68-0.853334 26.026666-3.84a634.026667 634.026667 0 0 0 162.133334-51.2l24.746666-11.946666z m272.64-212.48l2.986666-3.84 6.826667-7.68 9.386667-11.52 13.226666-16.64 12.373334-15.36 12.8-16.64c9.813333-12.8 19.2-26.026667 29.866666-40.533333s21.333333-30.72 31.573334-46.506667l-17.92-11.093333-207.786667-126.72 81.92 325.12 24.32-27.733333z m231.68-522.666666l-255.146667-35.84 243.2 198.826666a416 416 0 0 0 16.64-81.493333c0.426667-3.413333 0.426667-7.253333 0.853333-11.093333s0.426667-6.826667 0.426667-10.24a231.68 231.68 0 0 0-5.973333-60.586667z m-98.133334 349.013333l2.133334-2.986667c4.693333-6.826667 11.946667-17.92 19.626666-31.573333 21.333333-37.546667 47.786667-91.306667 58.88-130.986667l-317.44 21.333334 210.773334 129.28 25.6 15.786666z m-380.586666 375.466667h0.853333c69.12-38.4 130.986667-85.76 200.533333-153.173334l-337.066666-109.226666zM46.933333 795.306667c1.28 43.946667 10.666667 80.213333 27.733334 107.946666l15.786666-187.733333z m61.44-92.16l-18.346666 216.32c26.026667 33.706667 60.586667 49.066667 111.786666 49.066666h16.213334l-8.96-22.613333c-19.626667-49.066667-75.946667-188.16-101.12-242.346667zM966.826667 156.16a153.6 153.6 0 0 0-14.08-31.573333c-23.04-38.4-62.72-62.72-118.186667-72.533334l-123.733333 68.266667z m0 0"
            fill="#D52900"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Ruby</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">语言</span>
      <div class="flex flex-1 items-center justify-center w-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144" class="icon">
          <path
            d="m71.05 23.68c-26.06 0-47.27 21.22-47.27 47.27s21.22 47.27 47.27 47.27 47.27-21.22 47.27-47.27-21.22-47.27-47.27-47.27zm-.07 4.2a3.1 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm7.12 5.12a38.27 38.27 0 0 1 26.2 18.66l-3.67 8.28c-.63 1.43.02 3.11 1.44 3.75l7.06 3.13a38.27 38.27 0 0 1 .08 6.64h-3.93c-.39 0-.55.26-.55.64v1.8c0 4.24-2.39 5.17-4.49 5.4-2 .23-4.21-.84-4.49-2.06-1.18-6.63-3.14-8.04-6.24-10.49 3.85-2.44 7.85-6.05 7.85-10.87 0-5.21-3.57-8.49-6-10.1-3.42-2.25-7.2-2.7-8.22-2.7h-40.6a38.27 38.27 0 0 1 21.41-12.08l4.79 5.02c1.08 1.13 2.87 1.18 4 .09zm-44.2 23.02a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm74.15.14a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm-68.29.5h5.42v24.44h-10.94a38.27 38.27 0 0 1 -1.24-14.61l6.7-2.98c1.43-.64 2.08-2.31 1.44-3.74zm22.62.26h12.91c.67 0 4.71.77 4.71 3.8 0 2.51-3.1 3.41-5.65 3.41h-11.98zm0 17.56h9.89c.9 0 4.83.26 6.08 5.28.39 1.54 1.26 6.56 1.85 8.17.59 1.8 2.98 5.4 5.53 5.4h16.14a38.27 38.27 0 0 1 -3.54 4.1l-6.57-1.41c-1.53-.33-3.04.65-3.37 2.18l-1.56 7.28a38.27 38.27 0 0 1 -31.91-.15l-1.56-7.28c-.33-1.53-1.83-2.51-3.36-2.18l-6.43 1.38a38.27 38.27 0 0 1 -3.32-3.92h31.27c.35 0 .59-.06.59-.39v-11.06c0-.32-.24-.39-.59-.39h-9.15zm-14.43 25.33a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm46.05.14a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11z"
          />
          <path
            d="m115.68 70.95a44.63 44.63 0 0 1 -44.63 44.63 44.63 44.63 0 0 1 -44.63-44.63 44.63 44.63 0 0 1 44.63-44.63 44.63 44.63 0 0 1 44.63 44.63zm-.84-4.31 6.96 4.31-6.96 4.31 5.98 5.59-7.66 2.87 4.78 6.65-8.09 1.32 3.4 7.46-8.19-.29 1.88 7.98-7.98-1.88.29 8.19-7.46-3.4-1.32 8.09-6.65-4.78-2.87 7.66-5.59-5.98-4.31 6.96-4.31-6.96-5.59 5.98-2.87-7.66-6.65 4.78-1.32-8.09-7.46 3.4.29-8.19-7.98 1.88 1.88-7.98-8.19.29 3.4-7.46-8.09-1.32 4.78-6.65-7.66-2.87 5.98-5.59-6.96-4.31 6.96-4.31-5.98-5.59 7.66-2.87-4.78-6.65 8.09-1.32-3.4-7.46 8.19.29-1.88-7.98 7.98 1.88-.29-8.19 7.46 3.4 1.32-8.09 6.65 4.78 2.87-7.66 5.59 5.98 4.31-6.96 4.31 6.96 5.59-5.98 2.87 7.66 6.65-4.78 1.32 8.09 7.46-3.4-.29 8.19 7.98-1.88-1.88 7.98 8.19-.29-3.4 7.46 8.09 1.32-4.78 6.65 7.66 2.87z"
            fill-rule="evenodd"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </svg>
      </div>
      <span class="shrink-0 select-text">Rust</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">运行时</span>
      <div class="flex flex-1 items-center justify-center w-full p-2">
        <img
          class="p-[5px]"
          src="data:image/svg+xml;base64, PHN2ZyBpZD0iQnVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA3MCI+PHRpdGxlPkJ1biBMb2dvPC90aXRsZT48cGF0aCBpZD0iU2hhZG93IiBkPSJNNzEuMDksMjAuNzRjLS4xNi0uMTctLjMzLS4zNC0uNS0uNXMtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjUtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjVBMjYuNDYsMjYuNDYsMCwwLDEsNzUuNSwzNS43YzAsMTYuNTctMTYuODIsMzAuMDUtMzcuNSwzMC4wNS0xMS41OCwwLTIxLjk0LTQuMjMtMjguODMtMTAuODZsLjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNUMxOS41NSw2NS4zLDMwLjE0LDY5Ljc1LDQyLDY5Ljc1YzIwLjY4LDAsMzcuNS0xMy40OCwzNy41LTMwQzc5LjUsMzIuNjksNzYuNDYsMjYsNzEuMDksMjAuNzRaIi8+PGcgaWQ9IkJvZHkiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kIiBkPSJNNzMsMzUuN2MwLDE1LjIxLTE1LjY3LDI3LjU0LTM1LDI3LjU0UzMsNTAuOTEsMywzNS43QzMsMjYuMjcsOSwxNy45NCwxOC4yMiwxM1MzMy4xOCwzLDM4LDNzOC45NCw0LjEzLDE5Ljc4LDEwQzY3LDE3Ljk0LDczLDI2LjI3LDczLDM1LjdaIiBzdHlsZT0iZmlsbDojZmJmMGRmIi8+PHBhdGggaWQ9IkJvdHRvbV9TaGFkb3ciIGRhdGEtbmFtZT0iQm90dG9tIFNoYWRvdyIgZD0iTTczLDM1LjdhMjEuNjcsMjEuNjcsMCwwLDAtLjgtNS43OGMtMi43MywzMy4zLTQzLjM1LDM0LjktNTkuMzIsMjQuOTRBNDAsNDAsMCwwLDAsMzgsNjMuMjRDNTcuMyw2My4yNCw3Myw1MC44OSw3MywzNS43WiIgc3R5bGU9ImZpbGw6I2Y2ZGVjZSIvPjxwYXRoIGlkPSJMaWdodF9TaGluZSIgZGF0YS1uYW1lPSJMaWdodCBTaGluZSIgZD0iTTI0LjUzLDExLjE3QzI5LDguNDksMzQuOTQsMy40Niw0MC43OCwzLjQ1QTkuMjksOS4yOSwwLDAsMCwzOCwzYy0yLjQyLDAtNSwxLjI1LTguMjUsMy4xMy0xLjEzLjY2LTIuMywxLjM5LTMuNTQsMi4xNS0yLjMzLDEuNDQtNSwzLjA3LTgsNC43QzguNjksMTguMTMsMywyNi42MiwzLDM1LjdjMCwuNCwwLC44LDAsMS4xOUM5LjA2LDE1LjQ4LDIwLjA3LDEzLjg1LDI0LjUzLDExLjE3WiIgc3R5bGU9ImZpbGw6I2ZmZmVmYyIvPjxwYXRoIGlkPSJUb3AiIGQ9Ik0zNS4xMiw1LjUzQTE2LjQxLDE2LjQxLDAsMCwxLDI5LjQ5LDE4Yy0uMjguMjUtLjA2LjczLjMuNTksMy4zNy0xLjMxLDcuOTItNS4yMyw2LTEzLjE0QzM1LjcxLDUsMzUuMTIsNS4xMiwzNS4xMiw1LjUzWm0yLjI3LDBBMTYuMjQsMTYuMjQsMCwwLDEsMzksMTljLS4xMi4zNS4zMS42NS41NS4zNkM0MS43NCwxNi41Niw0My42NSwxMSwzNy45Myw1LDM3LjY0LDQuNzQsMzcuMTksNS4xNCwzNy4zOSw1LjQ5Wm0yLjc2LS4xN0ExNi40MiwxNi40MiwwLDAsMSw0NywxNy4xMmEuMzMuMzMsMCwwLDAsLjY1LjExYy45Mi0zLjQ5LjQtOS40NC03LjE3LTEyLjUzQzQwLjA4LDQuNTQsMzkuODIsNS4wOCw0MC4xNSw1LjMyWk0yMS42OSwxNS43NmExNi45NCwxNi45NCwwLDAsMCwxMC40Ny05Yy4xOC0uMzYuNzUtLjIyLjY2LjE4LTEuNzMsOC03LjUyLDkuNjctMTEuMTIsOS40NUMyMS4zMiwxNi40LDIxLjMzLDE1Ljg3LDIxLjY5LDE1Ljc2WiIgc3R5bGU9ImZpbGw6I2NjYmVhNztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJPdXRsaW5lIiBkPSJNMzgsNjUuNzVDMTcuMzIsNjUuNzUuNSw1Mi4yNy41LDM1LjdjMC0xMCw2LjE4LTE5LjMzLDE2LjUzLTI0LjkyLDMtMS42LDUuNTctMy4yMSw3Ljg2LTQuNjIsMS4yNi0uNzgsMi40NS0xLjUxLDMuNi0yLjE5QzMyLDEuODksMzUsLjUsMzgsLjVzNS42MiwxLjIsOC45LDMuMTRjMSwuNTcsMiwxLjE5LDMuMDcsMS44NywyLjQ5LDEuNTQsNS4zLDMuMjgsOSw1LjI3QzY5LjMyLDE2LjM3LDc1LjUsMjUuNjksNzUuNSwzNS43LDc1LjUsNTIuMjcsNTguNjgsNjUuNzUsMzgsNjUuNzVaTTM4LDNjLTIuNDIsMC01LDEuMjUtOC4yNSwzLjEzLTEuMTMuNjYtMi4zLDEuMzktMy41NCwyLjE1LTIuMzMsMS40NC01LDMuMDctOCw0LjdDOC42OSwxOC4xMywzLDI2LjYyLDMsMzUuNywzLDUwLjg5LDE4LjcsNjMuMjUsMzgsNjMuMjVTNzMsNTAuODksNzMsMzUuN0M3MywyNi42Miw2Ny4zMSwxOC4xMyw1Ny43OCwxMyw1NCwxMSw1MS4wNSw5LjEyLDQ4LjY2LDcuNjRjLTEuMDktLjY3LTIuMDktMS4yOS0zLTEuODRDNDIuNjMsNCw0MC40MiwzLDM4LDNaIi8+PC9nPjxnIGlkPSJNb3V0aCI+PGcgaWQ9IkJhY2tncm91bmQtMiIgZGF0YS1uYW1lPSJCYWNrZ3JvdW5kIj48cGF0aCBkPSJNNDUuMDUsNDNhOC45Myw4LjkzLDAsMCwxLTIuOTIsNC43MSw2LjgxLDYuODEsMCwwLDEtNCwxLjg4QTYuODQsNi44NCwwLDAsMSwzNCw0Ny43MSw4LjkzLDguOTMsMCwwLDEsMzEuMTIsNDNhLjcyLjcyLDAsMCwxLC44LS44MUg0NC4yNkEuNzIuNzIsMCwwLDEsNDUuMDUsNDNaIiBzdHlsZT0iZmlsbDojYjcxNDIyIi8+PC9nPjxnIGlkPSJUb25ndWUiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kLTMiIGRhdGEtbmFtZT0iQmFja2dyb3VuZCIgZD0iTTM0LDQ3Ljc5YTYuOTEsNi45MSwwLDAsMCw0LjEyLDEuOSw2LjkxLDYuOTEsMCwwLDAsNC4xMS0xLjksMTAuNjMsMTAuNjMsMCwwLDAsMS0xLjA3LDYuODMsNi44MywwLDAsMC00LjktMi4zMSw2LjE1LDYuMTUsMCwwLDAtNSwyLjc4QzMzLjU2LDQ3LjQsMzMuNzYsNDcuNiwzNCw0Ny43OVoiIHN0eWxlPSJmaWxsOiNmZjYxNjQiLz48cGF0aCBpZD0iT3V0bGluZS0yIiBkYXRhLW5hbWU9Ik91dGxpbmUiIGQ9Ik0zNC4xNiw0N2E1LjM2LDUuMzYsMCwwLDEsNC4xOS0yLjA4LDYsNiwwLDAsMSw0LDEuNjljLjIzLS4yNS40NS0uNTEuNjYtLjc3YTcsNywwLDAsMC00LjcxLTEuOTMsNi4zNiw2LjM2LDAsMCwwLTQuODksMi4zNkE5LjUzLDkuNTMsMCwwLDAsMzQuMTYsNDdaIi8+PC9nPjxwYXRoIGlkPSJPdXRsaW5lLTMiIGRhdGEtbmFtZT0iT3V0bGluZSIgZD0iTTM4LjA5LDUwLjE5YTcuNDIsNy40MiwwLDAsMS00LjQ1LTIsOS41Miw5LjUyLDAsMCwxLTMuMTEtNS4wNSwxLjIsMS4yLDAsMCwxLC4yNi0xLDEuNDEsMS40MSwwLDAsMSwxLjEzLS41MUg0NC4yNmExLjQ0LDEuNDQsMCwwLDEsMS4xMy41MSwxLjE5LDEuMTksMCwwLDEsLjI1LDFoMGE5LjUyLDkuNTIsMCwwLDEtMy4xMSw1LjA1QTcuNDIsNy40MiwwLDAsMSwzOC4wOSw1MC4xOVptLTYuMTctNy40Yy0uMTYsMC0uMi4wNy0uMjEuMDlhOC4yOSw4LjI5LDAsMCwwLDIuNzMsNC4zN0E2LjIzLDYuMjMsMCwwLDAsMzguMDksNDlhNi4yOCw2LjI4LDAsMCwwLDMuNjUtMS43Myw4LjMsOC4zLDAsMCwwLDIuNzItNC4zNy4yMS4yMSwwLDAsMC0uMi0uMDlaIi8+PC9nPjxnIGlkPSJGYWNlIj48ZWxsaXBzZSBpZD0iUmlnaHRfQmx1c2giIGRhdGEtbmFtZT0iUmlnaHQgQmx1c2giIGN4PSI1My4yMiIgY3k9IjQwLjE4IiByeD0iNS44NSIgcnk9IjMuNDQiIHN0eWxlPSJmaWxsOiNmZWJiZDAiLz48ZWxsaXBzZSBpZD0iTGVmdF9CbHVjaCIgZGF0YS1uYW1lPSJMZWZ0IEJsdWNoIiBjeD0iMjIuOTUiIGN5PSI0MC4xOCIgcng9IjUuODUiIHJ5PSIzLjQ0IiBzdHlsZT0iZmlsbDojZmViYmQwIi8+PHBhdGggaWQ9IkV5ZXMiIGQ9Ik0yNS43LDM4LjhhNS41MSw1LjUxLDAsMSwwLTUuNS01LjUxQTUuNTEsNS41MSwwLDAsMCwyNS43LDM4LjhabTI0Ljc3LDBBNS41MSw1LjUxLDAsMSwwLDQ1LDMzLjI5LDUuNSw1LjUsMCwwLDAsNTAuNDcsMzguOFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJJcmlzIiBkPSJNMjQsMzMuNjRhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsMjQsMzMuNjRabTI0Ljc3LDBhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsNDguNzUsMzMuNjRaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg=="
        />
      </div>
      <span class="shrink-0 select-text">Bun</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">运行时</span>
      <div class="flex flex-1 items-center justify-center w-full p-3">
        <svg
          class="p-[10px]"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.147947 768.853333A507.733333 507.733333 0 0 1 0.00128 554.026667q0-29.781333 3.328-58.709334a512 512 0 0 1 9.856-57.173333A512 512 0 0 1 171.734613 171.52a512 512 0 0 1 232.96-118.229333 512 512 0 0 1 146.261334-9.813334c61.952 4.778667 120.533333 20.352 173.952 44.8a512 512 0 0 1 118.613333 75.690667 512.853333 512.853333 0 0 1 172.928 301.994667A512 512 0 0 1 1024.00128 554.026667q0 19.370667-1.536 38.997333a512 512 0 0 1-31.061333 141.013333 512 512 0 0 1-101.546667 165.333334c-56.746667 57.898667-128.853333 83.712-189.013333 82.602666a187.733333 187.733333 0 0 1-116.224-43.690666c-42.24-36.394667-59.349333-78.08-65.28-124.544a213.333333 213.333333 0 0 1 5.461333-64.768c4.48-16.213333 15.786667-47.616 32.426667-61.312-19.413333-8.405333-44.373333-26.624-52.309334-35.370667-1.92-2.133333-1.706667-5.546667 0-7.808a6.613333 6.613333 0 0 1 7.552-2.261333c16.725333 5.717333 37.077333 11.392 58.538667 14.933333 28.16 4.736 63.317333 10.666667 98.858667 12.458667 86.613333 4.266667 177.194667-34.688 205.312-112.085334s17.194667-153.984-83.626667-199.893333-147.370667-100.522667-228.821333-133.461333c-53.205333-21.546667-112.469333-8.746667-173.226667 24.832-163.754667 90.496-310.485333 376.405333-242.773333 641.365333a8.149333 8.149333 0 0 1-13.44 8.106667 512 512 0 0 1-53.333334-69.717334 512 512 0 0 1-32.810666-59.904M493.654613 259.712c27.690667-2.176 51.797333 21.376 55.893334 52.736 5.546667 41.770667-9.728 84.906667-60.16 85.888-43.093333 0.853333-56.106667-42.538667-53.248-68.864 2.816-26.282667 24.490667-67.2 57.6-69.76"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Deno</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">构建工具</span>
      <div class="flex flex-1 items-center justify-center w-full p-3">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#74B8C4"
        >
          <path
            d="M968.533333 183.466667c-64-64-162.133333-64-226.133333-4.266667-4.266667 4.266667-4.266667 8.533333-4.266667 12.8 0 4.266667 0 8.533333 4.266667 12.8l21.333333 21.333333c4.266667 4.266667 12.8 4.266667 21.333334 0 17.066667-12.8 34.133333-17.066667 55.466666-17.066666 51.2 0 93.866667 42.666667 93.866667 93.866666 0 25.6-8.533333 46.933333-25.6 64-128 128-302.933333-230.4-691.2-46.933333-25.6 12.8-38.4 42.666667-25.6 68.266667v4.266666L256 507.733333c12.8 25.6 46.933333 34.133333 72.533333 21.333334l29.866667-17.066667c34.133333-21.333333 64-42.666667 93.866667-68.266667 4.266667-4.266667 17.066667-4.266667 21.333333 0 8.533333 4.266667 8.533333 12.8 4.266667 21.333334l-4.266667 4.266666c-29.866667 25.6-64 51.2-98.133333 72.533334l-29.866667 12.8c-12.8 8.533333-25.6 12.8-42.666667 12.8-29.866667 0-59.733333-17.066667-72.533333-42.666667L166.4 413.866667c-119.466667 85.333333-196.266667 251.733333-153.6 460.8 0 8.533333 8.533333 12.8 17.066667 12.8h72.533333c8.533333 0 12.8-4.266667 17.066667-12.8 8.533333-59.733333 59.733333-98.133333 119.466666-89.6 46.933333 4.266667 85.333333 42.666667 89.6 89.6 0 8.533333 8.533333 12.8 17.066667 12.8h68.266667c8.533333 0 12.8-4.266667 17.066666-12.8 8.533333-59.733333 59.733333-98.133333 119.466667-89.6 46.933333 4.266667 85.333333 42.666667 89.6 89.6 0 8.533333 8.533333 12.8 17.066667 12.8H725.333333c8.533333 0 17.066667-8.533333 17.066667-17.066667 0-98.133333 29.866667-209.066667 102.4-264.533333 251.733333-196.266667 183.466667-362.666667 123.733333-422.4z m-264.533333 294.4l-51.2-25.6c0-17.066667 12.8-29.866667 29.866667-29.866667 17.066667 0 29.866667 12.8 29.866666 29.866667 4.266667 12.8 0 21.333333-8.533333 25.6z"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Gradle</span>
    </div>
  </template>
  <template v-else-if="type === 3">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据队列</span>
      <div class="flex flex-1 items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/redis.png" />
      </div>
      <span class="shrink-0 select-text">Redis</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据缓存</span>
      <div class="flex flex-1 items-center justify-center p-6">
        <img src="https://oss.macphpstudy.com/image/memcached.png" />
      </div>
      <span class="shrink-0 select-text">Memcached</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据队列</span>
      <div class="flex flex-1 items-center justify-center w-full p-6">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M947.1864 415.507015h-302.486547c-24.191244-2.911909-42.622668-24.191244-42.622668-49.27846v-317.43008A48.766476 48.766476 0 0 0 553.310709 0h-105.852692c-27.103153 0-48.862473 21.983313-48.862473 48.862473v320.757976c-1.311959 24.191244-21.279335 43.678635-45.278585 45.918565H274.087435a49.438455 49.438455 0 0 1-42.846661-45.950564V48.862473C231.240774 21.75932 209.257461 0 182.442299 0H76.557608C49.518453 0 27.759133 21.983313 27.759133 48.862473v926.275054c0 27.103153 21.983313 48.862473 48.798475 48.862473h870.852785c27.103153 0 48.798475-21.983313 48.798475-48.862473V464.401487a48.95847 48.95847 0 0 0-49.022468-48.862473z m-139.355645 350.293054c0 27.103153-21.983313 48.862473-48.798475 48.862473h-105.852692a48.798475 48.798475 0 0 1-48.798475-48.862473v-99.868879c0-27.103153 21.983313-48.862473 48.798475-48.862473h105.852692c27.103153 0 48.798475 21.983313 48.798475 48.862473z"
            fill="#FF6600"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">RabbitMQ</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">数据队列</span>
      <div class="flex flex-1 items-center justify-center w-full px-4">
        <svg role="img" viewBox="-6.31 3.69 510.12 493.62">
          <path
            fill="#419eda"
            d="M228.175 224.684a31.994 31.994.0 11-32.007-31.986 32.011 32.011.0 0132.007 31.986zm41.37.0a32.007 32.007.0 1032.007-31.986 31.988 31.988.0 00-32.007 31.986z"
          ></path>
          <path
            fill="#419eda"
            d="M487.371 259.399a87.82 87.82.0 01-7.07.267 92.362 92.362.0 01-40.621-9.455 377.209 377.209.0 005.47-71.86 371.808 371.808.0 00-46.507-55.11 92.396 92.396.0 0132.772-35.102l6.016-3.729-4.695-5.3a244.906 244.906.0 00-85.524-62.377l-6.507-2.828-1.654 6.862a92.144 92.144.0 01-23.19 42.096 371.928 371.928.0 00-67.006-27.602 370.624 370.624.0 00-66.908 27.558 91.915 91.915.0 01-23.098-42.003l-1.681-6.884-6.486 2.817A247.232 247.232.0 0065.164 79.104l-4.689 5.3 6.005 3.724a92.249 92.249.0 0132.695 34.917A374.63 374.63.0 0052.75 177.953a376.956 376.956.0 005.328 72.334 92.115 92.115.0 01-40.376 9.374 86.36 86.36.0 01-7.086-.268l-7.053-.551.655 7.042a243.413 243.413.0 0032.897 100.678l3.581 6.098 5.372-4.575a92.052 92.052.0 0143.592-20.406 373.97 373.97.0 0037.308 60.76 377.717 377.717.0 0070.69 17.382 91.87 91.87.0 01-5.885 48.232l-2.686 6.54 6.9 1.529a246.355 246.355.0 0052.966 5.857l52.954-5.857 6.906-1.529-2.675-6.54a91.755 91.755.0 01-5.869-48.286 377.784 377.784.0 0070.407-17.328 372.3 372.3.0 0037.335-60.815 92.233 92.233.0 0143.81 20.428l5.377 4.553 3.587-6.049a242.844 242.844.0 0032.859-100.672l.655-7.037zM324.644 345.45a285.884 285.884.0 01-151.628.0 290.124 290.124.0 01-46.141-143.385 288.675 288.675.0 0154.957-52.315 293.065 293.065.0 0167.028-36.462 293.976 293.976.0 0166.891 36.364 290.886 290.886.0 0155.198 52.675 292.253 292.253.0 01-13.817 74.682 293.726 293.726.0 01-32.488 68.441z"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">etcd</span>
    </div>
  </template>
  <template v-else-if="type === 4">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">DNS</span>
      <div class="flex flex-1 items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/dns.svg" />
      </div>
      <span class="shrink-0 select-text">DNS Server</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">FTP</span>
      <div class="flex flex-1 items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/ftp.svg" />
      </div>
      <span class="shrink-0 select-text">FTP Server</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">静态服务器</span>
      <div class="flex flex-1 items-center justify-center p-5">
        <img src="https://oss.macphpstudy.com/image/http.svg" />
      </div>
      <span class="shrink-0 select-text">Static Server</span>
    </div>
  </template>
  <template v-else-if="type === 5">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">搜索引擎</span>
      <div class="flex flex-1 items-center justify-center w-full p-6">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.666667 505.6c0 51.2 6.4 108.8 23.424 153.6H413.013333c12.8-51.2 17.045333-95.957333 17.045334-147.2a648.405333 648.405333 0 0 0-17.045334-147.2H59.733333C49.066667 409.6 42.666667 454.4 42.666667 505.6z m698.154666-140.8H476.885333c12.757333 44.8 17.024 95.957333 17.024 147.2s-6.4 95.957333-17.024 147.2h263.914667c83.008 0 146.88-63.978667 146.88-147.2 0-83.221333-63.872-147.2-146.88-147.2h0.021333zM95.850667 294.4h300.16c-36.202667-76.8-76.629333-147.2-123.52-204.8-76.586667 51.2-142.549333 121.6-176.597334 204.8h-0.042666z m698.154666 0c76.629333 0 140.48-32 187.306667-83.2C887.68 83.2 730.176 0 553.493333 0c-87.253333 0-157.504 19.2-229.866666 57.6 59.584 64 100.053333 147.2 129.834666 230.4l340.544 6.4zM89.493333 729.6h300.117334c-29.802667 76.8-70.229333 147.2-123.456 198.4-70.229333-44.8-136.213333-115.2-176.64-198.4z m704.533334 0c76.629333 0 140.48 32 187.306666 83.2-93.653333 127.957333-257.536 211.2-427.84 211.2-87.253333 0-157.504-25.6-229.866666-57.6 59.584-63.978667 100.053333-147.2 129.834666-230.4l340.565334-6.4z"
            fill="#FF6A00"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Elasticsearch</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">搜索引擎</span>
      <div class="flex flex-1 items-center justify-center w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 25" fill="none">
          <path
            d="M59.2069 14.2074C59.2069 12.5978 59.9786 11.6497 61.4559 11.6497C62.845 11.6497 63.308 12.6419 63.308 13.9208V20.7781H66.439V13.568C66.439 10.878 65.0279 8.9597 62.2497 8.9597C60.596 8.9597 59.4274 9.46683 58.4131 10.5913C57.7516 9.57708 56.6271 8.9597 55.0616 8.9597C53.4079 8.9597 52.2614 9.64323 51.7322 10.6354V9.22429H48.8438V20.7781H51.9747V14.1413C51.9747 12.5978 52.7685 11.6497 54.2238 11.6497C55.6129 11.6497 56.0759 12.6419 56.0759 13.9208V20.7781H59.2069V14.2074Z"
            fill="gray"
          />
          <path
            d="M79.2905 15.9052C79.2905 15.9052 79.3346 15.4863 79.3346 14.9791C79.3346 11.5615 77.0194 8.9597 73.6018 8.9597C70.1841 8.9597 67.8028 11.5615 67.8028 14.9791C67.8028 18.5291 70.2062 21.0427 73.6238 21.0427C76.2918 21.0427 78.4085 19.4331 79.092 17.0959H75.939C75.5641 17.9337 74.6601 18.3527 73.712 18.3527C72.1465 18.3527 71.1322 17.4928 70.9117 15.9052H79.2905ZM73.5797 11.4733C75.035 11.4733 75.9831 12.3553 76.2036 13.6562H70.9558C71.2204 12.3332 72.1465 11.4733 73.5797 11.4733Z"
            fill="gray"
          />
          <path
            d="M79.7962 11.9143H81.1853V20.7781H84.3163V9.22429H79.7962V11.9143ZM82.7508 7.72495C83.8533 7.72495 84.647 6.95322 84.647 5.85076C84.647 4.7483 83.8533 3.95453 82.7508 3.95453C81.6483 3.95453 80.8546 4.7483 80.8546 5.85076C80.8546 6.95322 81.6483 7.72495 82.7508 7.72495Z"
            fill="gray"
          />
          <path
            d="M90.7996 18.0881C90.7114 18.0881 90.5791 18.1101 90.3807 18.1101C89.6751 18.1101 89.5869 17.7794 89.5869 17.2943V4.24117H86.4559V17.5148C86.4559 19.8079 87.3379 20.8222 89.8295 20.8222C90.2484 20.8222 90.6453 20.7781 90.7996 20.756V18.0881Z"
            fill="gray"
          />
          <path
            d="M91.1559 11.9143H92.545V20.7781H95.676V9.22429H91.1559V11.9143ZM94.1105 7.72495C95.2129 7.72495 96.0067 6.95322 96.0067 5.85076C96.0067 4.7483 95.2129 3.95453 94.1105 3.95453C93.008 3.95453 92.2142 4.7483 92.2142 5.85076C92.2142 6.95322 93.008 7.72495 94.1105 7.72495Z"
            fill="gray"
          />
          <path
            d="M101.96 20.899C105.003 20.899 106.436 19.2894 106.436 17.5916C106.436 12.8731 99.4908 15.4969 99.4908 12.388C99.4908 11.3737 100.351 10.5138 102.093 10.5138C103.879 10.5138 104.716 11.484 104.849 12.6967H106.414C106.282 11.1753 105.246 9.14675 102.137 9.14675C99.4688 9.14675 97.9694 10.7343 97.9694 12.4541C97.9694 17.0624 104.915 14.4165 104.915 17.6357C104.915 18.7602 103.857 19.5319 101.96 19.5319C100.02 19.5319 99.0498 18.5618 98.9396 17.1286H97.3521C97.4843 19.0909 98.7191 20.899 101.96 20.899Z"
            fill="gray"
          />
          <path
            d="M118.87 15.4749C118.87 15.4749 118.892 15.1221 118.892 14.8795C118.892 11.7045 116.842 9.14675 113.49 9.14675C110.116 9.14675 107.978 11.9029 107.978 15.0118C107.978 18.1649 109.962 20.899 113.512 20.899C116.18 20.899 118.032 19.2673 118.694 17.1286H117.062C116.577 18.4956 115.254 19.4878 113.534 19.4878C111.175 19.4878 109.698 17.7459 109.543 15.4749H118.87ZM113.49 10.5579C115.695 10.5579 117.128 12.0352 117.327 14.196H109.587C109.852 12.1234 111.307 10.5579 113.49 10.5579Z"
            fill="gray"
          />
          <path
            d="M128.611 15.2985V16.3568C128.611 18.2751 127.222 19.5981 124.554 19.5981C122.9 19.5981 121.996 18.9146 121.996 17.4373C121.996 16.6876 122.349 16.1143 122.9 15.8056C123.473 15.4969 124.245 15.2985 128.611 15.2985ZM124.377 20.899C126.318 20.899 127.883 20.2816 128.677 19.0027V20.6344H130.176V13.292C130.176 10.8004 128.743 9.14675 125.502 9.14675C122.393 9.14675 121.026 10.7122 120.739 12.7187H122.261C122.569 11.1312 123.782 10.4917 125.436 10.4917C127.552 10.4917 128.611 11.3737 128.611 13.2699V13.9976C125.061 13.9976 123.584 14.0637 122.481 14.5047C121.202 15.0118 120.453 16.1364 120.453 17.4814C120.453 19.4437 121.709 20.899 124.377 20.899Z"
            fill="gray"
          />
          <path
            d="M138.735 9.32314C138.735 9.32314 138.471 9.30109 138.36 9.30109C136.288 9.30109 135.185 10.3815 134.766 11.1532V9.41134H133.267V20.6344H134.832V14.2622C134.832 11.9249 136.266 10.7784 138.184 10.7784C138.471 10.7784 138.735 10.8004 138.735 10.8004V9.32314Z"
            fill="gray"
          />
          <path
            d="M139.003 15.0339C139.003 18.0987 141.119 20.899 144.537 20.899C147.58 20.899 149.344 18.8705 149.785 16.6435H148.197C147.734 18.3854 146.455 19.4878 144.537 19.4878C142.178 19.4878 140.59 17.6136 140.59 15.0339C140.59 12.4321 142.178 10.5579 144.537 10.5579C146.455 10.5579 147.734 11.6604 148.197 13.4022H149.785C149.344 11.1753 147.58 9.14675 144.537 9.14675C141.119 9.14675 139.003 11.947 139.003 15.0339Z"
            fill="gray"
          />
          <path
            d="M153.47 4.09747H151.905V20.6344H153.47V13.9976C153.47 11.7045 154.947 10.5138 156.844 10.5138C158.85 10.5138 159.798 11.7486 159.798 13.7771V20.6344H161.364V13.4684C161.364 10.9768 159.886 9.14675 157.108 9.14675C155.014 9.14675 153.867 10.2933 153.47 10.9768V4.09747Z"
            fill="gray"
          />
          <path
            d="M0 24.4968L7.60256 5.04523C8.67392 2.30411 11.3161 0.5 14.2591 0.5H18.8426L11.24 19.9516C10.1687 22.6927 7.52653 24.4968 4.58348 24.4968H0Z"
            fill="url(#paint0_linear_2735_3490)"
          />
          <path
            d="M11.1533 24.4969L18.7558 5.04529C19.8272 2.30417 22.4693 0.500057 25.4124 0.500057H29.9959L22.3933 19.9517C21.3219 22.6928 18.6798 24.4969 15.7368 24.4969H11.1533Z"
            fill="url(#paint1_linear_2735_3490)"
          />
          <path
            d="M22.3072 24.4969L29.9098 5.04529C30.9811 2.30417 33.6233 0.500057 36.5663 0.500057H41.1498L33.5472 19.9517C32.4759 22.6928 29.8337 24.4969 26.8907 24.4969H22.3072Z"
            fill="url(#paint2_linear_2735_3490)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2735_3490"
              x1="41.1499"
              y1="-1.33294"
              x2="-1.49296e-06"
              y2="21.9145"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5CAA" />
              <stop offset="1" stop-color="#FF4E62" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2735_3490"
              x1="41.1499"
              y1="-1.33294"
              x2="-1.49296e-06"
              y2="21.9145"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5CAA" />
              <stop offset="1" stop-color="#FF4E62" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2735_3490"
              x1="41.1499"
              y1="-1.33294"
              x2="-1.49296e-06"
              y2="21.9145"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5CAA" />
              <stop offset="1" stop-color="#FF4E62" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span class="shrink-0 select-text">Meilisearch</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">搜索引擎</span>
      <div class="flex flex-1 items-center justify-center w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62" fill="black">
          <g transform="translate(-12.5, 0)">
            <path
              opacity="0.88"
              d="M43.603 47.3024L42.8424 50.2598"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M50.2426 48.9349L47.0571 54.1865"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M48.4123 46.0291L46.1604 48.4387"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M49.5946 46.3236L50.1416 48.2918"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M44.4974 46.4905L48.0078 45.5148"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M45.1371 43.207L47.8916 44.4017"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M47.3699 41.0277L48.6234 43.6299"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M53.2703 38.3396L50.1807 43.7138"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M31.5689 29.623L26.8391 31.4598"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M31.3966 24.6028L24.1138 22.5809"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M31.7331 23.8495L28.7751 20.5811"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M38.0214 21.5027L35.0986 20.2406"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M38.1014 22.2158L36.8546 23.1007"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M34.5136 14.8781L31.8279 13.6532"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M34.8861 15.994L28.8997 19.6114"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M40.2461 13.8615L37.3024 14.8523"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M36.4438 9.78455L35.9943 13.7688"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M44.4922 7.63464L40.6819 11.0259"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M41.9669 18.2827L39.0969 21.335"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M42.2641 16.9401L41.0476 14.2576"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M32.5141 30.4579L31.6516 32.9394"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M27.1032 28.3297L26.1371 30.9158"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M25.0219 31.4736L22.5583 30.1371"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M34.5257 26.8197L33.739 28.0662"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M25.4598 32.775L24.5801 34.4898"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M33.7321 34.5785L29.0168 37.3758"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M26.3021 41.781L22.9802 38.2297"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M37.3603 41.3998L33.5315 42.9101"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M33.5653 39.5944L32.6013 42.2781"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M36.0041 44.4484L33.6545 43.9476"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M30.8962 43.395L27.3459 42.5179"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M31.1257 44.5128L29.0139 45.7098"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M32.8774 44.994L34.1939 51.5245"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M55.2589 37.6326L59.4724 40.2985"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M55.9778 32.7476L57.4236 33.0713"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M57.5098 29.2468L62.4693 28.9882"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M58.2107 24.3954L57.0662 28.6669"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M59.2114 24.1801L62.8244 28.2574"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M59.6222 23.3925L64.1585 24.3246"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M65.3274 24.7726L68.4412 31.9922"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M59.384 22.767L65.5257 20.14"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M58.7111 22.3213L58.9632 20.0077"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M60.7978 18.9824L60.4597 17.6857"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M63.6481 17.2247L61.3186 19.373"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M52.8196 21.6002L57.6637 22.8559"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M54.9147 25.4277L57.6663 23.8988"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M54.9777 17.3009L58.0264 22.4784"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M53.9577 17.3181L52.2745 20.1788"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M57.683 11.5106L55.0505 15.5"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M57.4285 11.229L54.8816 11.589"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M54.2926 11.2608L53.7629 9.21033"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M58.6389 33.4818L60.7664 34.4306"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M57.4921 36.1155L60.854 35.1608"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M60.3926 39.9833L61.8774 36.1217"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M60.8132 40.7117L65.3275 41.8704"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M53.436 42.0878L50.6124 44.2601"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M57.5717 44.3959L50.7668 44.9566"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M58.5702 49.798L55.566 48.4613"
              stroke="#cffc75"
              stroke-width="0.12"
            />
            <path
              opacity="0.88"
              d="M58.5556 24.483C59.1576 24.483 59.6456 23.9904 59.6456 23.3828C59.6456 22.7752 59.1576 22.2826 58.5556 22.2826C57.9536 22.2826 57.4656 22.7752 57.4656 23.3828C57.4656 23.9904 57.9536 24.483 58.5556 24.483Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M51.9057 22.2382C52.5077 22.2382 52.9957 21.7456 52.9957 21.138C52.9957 20.5304 52.5077 20.0378 51.9057 20.0378C51.3037 20.0378 50.8157 20.5304 50.8157 21.138C50.8157 21.7456 51.3037 22.2382 51.9057 22.2382Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M32.4435 25.6503C33.0455 25.6503 33.5336 25.1578 33.5336 24.5501C33.5336 23.9425 33.0455 23.45 32.4435 23.45C31.8415 23.45 31.3535 23.9425 31.3535 24.5501C31.3535 25.1578 31.8415 25.6503 32.4435 25.6503Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M25.8666 32.9896C26.4686 32.9896 26.9566 32.497 26.9566 31.8894C26.9566 31.2818 26.4686 30.7892 25.8666 30.7892C25.2646 30.7892 24.7766 31.2818 24.7766 31.8894C24.7766 32.497 25.2646 32.9896 25.8666 32.9896Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M63.5385 30.063C64.1405 30.063 64.6285 29.5705 64.6285 28.9629C64.6285 28.3552 64.1405 27.8627 63.5385 27.8627C62.9365 27.8627 62.4485 28.3552 62.4485 28.9629C62.4485 29.5705 62.9365 30.063 63.5385 30.063Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M54.4571 17.4955C55.0591 17.4955 55.5471 17.003 55.5471 16.3954C55.5471 15.7877 55.0591 15.2952 54.4571 15.2952C53.8551 15.2952 53.3671 15.7877 53.3671 16.3954C53.3671 17.003 53.8551 17.4955 54.4571 17.4955Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M42.7839 18.7729C43.3859 18.7729 43.8739 18.2803 43.8739 17.6727C43.8739 17.0651 43.3859 16.5725 42.7839 16.5725C42.1819 16.5725 41.6938 17.0651 41.6938 17.6727C41.6938 18.2803 42.1819 18.7729 42.7839 18.7729Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M28.1148 47.3698C28.7168 47.3698 29.2048 46.8772 29.2048 46.2696C29.2048 45.662 28.7168 45.1694 28.1148 45.1694C27.5128 45.1694 27.0248 45.662 27.0248 46.2696C27.0248 46.8772 27.5128 47.3698 28.1148 47.3698Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M33.9272 39.8006C34.5292 39.8006 35.0172 39.308 35.0172 38.7004C35.0172 38.0928 34.5292 37.6002 33.9272 37.6002C33.3252 37.6002 32.8372 38.0928 32.8372 38.7004C32.8372 39.308 33.3252 39.8006 33.9272 39.8006Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M30.8942 14.2708C31.5196 14.2708 32.0266 13.7591 32.0266 13.1278C32.0266 12.4965 31.5196 11.9847 30.8942 11.9847C30.2687 11.9847 29.7617 12.4965 29.7617 13.1278C29.7617 13.7591 30.2687 14.2708 30.8942 14.2708Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M44.8765 12.92C45.5019 12.92 46.0089 12.4082 46.0089 11.7769C46.0089 11.1457 45.5019 10.6339 44.8765 10.6339C44.251 10.6339 43.744 11.1457 43.744 11.7769C43.744 12.4082 44.251 12.92 44.8765 12.92Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M35.9585 16.6336C36.7643 16.6336 37.4175 15.9743 37.4175 15.161C37.4175 14.3477 36.7643 13.6884 35.9585 13.6884C35.1527 13.6884 34.4995 14.3477 34.4995 15.161C34.4995 15.9743 35.1527 16.6336 35.9585 16.6336Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M59.6861 18.0218C60.4919 18.0218 61.1451 17.3625 61.1451 16.5492C61.1451 15.7359 60.4919 15.0765 59.6861 15.0765C58.8803 15.0765 58.2271 15.7359 58.2271 16.5492C58.2271 17.3625 58.8803 18.0218 59.6861 18.0218Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M62.1985 36.1544C63.0043 36.1544 63.6575 35.495 63.6575 34.6817C63.6575 33.8684 63.0043 33.2091 62.1985 33.2091C61.3927 33.2091 60.7395 33.8684 60.7395 34.6817C60.7395 35.495 61.3927 36.1544 62.1985 36.1544Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M58.0552 33.8727C58.4277 33.8727 58.7297 33.5679 58.7297 33.1918C58.7297 32.8158 58.4277 32.511 58.0552 32.511C57.6826 32.511 57.3806 32.8158 57.3806 33.1918C57.3806 33.5679 57.6826 33.8727 58.0552 33.8727Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M40.8141 14.2896C41.1866 14.2896 41.4887 13.9847 41.4887 13.6087C41.4887 13.2327 41.1866 12.9279 40.8141 12.9279C40.4415 12.9279 40.1395 13.2327 40.1395 13.6087C40.1395 13.9847 40.4415 14.2896 40.8141 14.2896Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M34.5829 20.6929C34.9554 20.6929 35.2574 20.3881 35.2574 20.012C35.2574 19.636 34.9554 19.3312 34.5829 19.3312C34.2103 19.3312 33.9083 19.636 33.9083 20.012C33.9083 20.3881 34.2103 20.6929 34.5829 20.6929Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M23.541 23.0604C23.9136 23.0604 24.2156 22.7556 24.2156 22.3796C24.2156 22.0036 23.9136 21.6987 23.541 21.6987C23.1685 21.6987 22.8665 22.0036 22.8665 22.3796C22.8665 22.7556 23.1685 23.0604 23.541 23.0604Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M36.5411 9.89089C36.9137 9.89089 37.2157 9.58606 37.2157 9.21003C37.2157 8.834 36.9137 8.52917 36.5411 8.52917C36.1686 8.52917 35.8666 8.834 35.8666 9.21003C35.8666 9.58606 36.1686 9.89089 36.5411 9.89089Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M40.1963 12.1159C40.5688 12.1159 40.8709 11.811 40.8709 11.435C40.8709 11.059 40.5688 10.7542 40.1963 10.7542C39.8237 10.7542 39.5217 11.059 39.5217 11.435C39.5217 11.811 39.8237 12.1159 40.1963 12.1159Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M49.2928 46.3634C50.0986 46.3634 50.7518 45.704 50.7518 44.8907C50.7518 44.0774 50.0986 43.4181 49.2928 43.4181C48.487 43.4181 47.8337 44.0774 47.8337 44.8907C47.8337 45.704 48.487 46.3634 49.2928 46.3634Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M32.9171 30.5555C33.7229 30.5555 34.3762 29.8962 34.3762 29.0829C34.3762 28.2695 33.7229 27.6102 32.9171 27.6102C32.1114 27.6102 31.4581 28.2695 31.4581 29.0829C31.4581 29.8962 32.1114 30.5555 32.9171 30.5555Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M31.5637 34.3655C31.9731 34.3655 32.305 34.0305 32.305 33.6173C32.305 33.204 31.9731 32.869 31.5637 32.869C31.1543 32.869 30.8224 33.204 30.8224 33.6173C30.8224 34.0305 31.1543 34.3655 31.5637 34.3655Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M34.2953 35.087C34.7047 35.087 35.0366 34.752 35.0366 34.3388C35.0366 33.9256 34.7047 33.5906 34.2953 33.5906C33.8859 33.5906 33.554 33.9256 33.554 34.3388C33.554 34.752 33.8859 35.087 34.2953 35.087Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M28.4081 38.5308C28.8175 38.5308 29.1494 38.1958 29.1494 37.7825C29.1494 37.3693 28.8175 37.0343 28.4081 37.0343C27.9986 37.0343 27.6667 37.3693 27.6667 37.7825C27.6667 38.1958 27.9986 38.5308 28.4081 38.5308Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M38.5492 22.5531C38.9586 22.5531 39.2905 22.2181 39.2905 21.8049C39.2905 21.3916 38.9586 21.0566 38.5492 21.0566C38.1398 21.0566 37.8079 21.3916 37.8079 21.8049C37.8079 22.2181 38.1398 22.5531 38.5492 22.5531Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M22.0443 30.4183C22.4537 30.4183 22.7856 30.0833 22.7856 29.6701C22.7856 29.2569 22.4537 28.9219 22.0443 28.9219C21.6349 28.9219 21.303 29.2569 21.303 29.6701C21.303 30.0833 21.6349 30.4183 22.0443 30.4183Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M27.3329 28.3223C27.7423 28.3223 28.0742 27.9873 28.0742 27.574C28.0742 27.1608 27.7423 26.8258 27.3329 26.8258C26.9235 26.8258 26.5916 27.1608 26.5916 27.574C26.5916 27.9873 26.9235 28.3223 27.3329 28.3223Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M60.1097 41.3534C60.5191 41.3534 60.851 41.0184 60.851 40.6052C60.851 40.1919 60.5191 39.8569 60.1097 39.8569C59.7003 39.8569 59.3684 40.1919 59.3684 40.6052C59.3684 41.0184 59.7003 41.3534 60.1097 41.3534Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M54.067 42.3989C54.4764 42.3989 54.8083 42.0639 54.8083 41.6507C54.8083 41.2375 54.4764 40.9025 54.067 40.9025C53.6576 40.9025 53.3257 41.2375 53.3257 41.6507C53.3257 42.0639 53.6576 42.3989 54.067 42.3989Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M58.0216 44.8109C58.2737 44.8109 58.4781 44.6047 58.4781 44.3502C58.4781 44.0958 58.2737 43.8895 58.0216 43.8895C57.7695 43.8895 57.5652 44.0958 57.5652 44.3502C57.5652 44.6047 57.7695 44.8109 58.0216 44.8109Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M58.971 50.4586C59.2231 50.4586 59.4274 50.2524 59.4274 49.9979C59.4274 49.7435 59.2231 49.5372 58.971 49.5372C58.7189 49.5372 58.5145 49.7435 58.5145 49.9979C58.5145 50.2524 58.7189 50.4586 58.971 50.4586Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M46.8958 54.9762C47.1479 54.9762 47.3522 54.7699 47.3522 54.5155C47.3522 54.2611 47.1479 54.0548 46.8958 54.0548C46.6437 54.0548 46.4393 54.2611 46.4393 54.5155C46.4393 54.7699 46.6437 54.9762 46.8958 54.9762Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M34.2088 52.3325C34.4608 52.3325 34.6652 52.1263 34.6652 51.8718C34.6652 51.6174 34.4608 51.4111 34.2088 51.4111C33.9567 51.4111 33.7523 51.6174 33.7523 51.8718C33.7523 52.1263 33.9567 52.3325 34.2088 52.3325Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M50.2912 49.1265C50.5432 49.1265 50.7476 48.9202 50.7476 48.6658C50.7476 48.4113 50.5432 48.2051 50.2912 48.2051C50.0391 48.2051 49.8347 48.4113 49.8347 48.6658C49.8347 48.9202 50.0391 49.1265 50.2912 49.1265Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M45.8422 49.1861C46.0943 49.1861 46.2986 48.9798 46.2986 48.7254C46.2986 48.4709 46.0943 48.2646 45.8422 48.2646C45.5901 48.2646 45.3857 48.4709 45.3857 48.7254C45.3857 48.9798 45.5901 49.1861 45.8422 49.1861Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M44.6529 43.4789C44.9049 43.4789 45.1093 43.2726 45.1093 43.0182C45.1093 42.7638 44.9049 42.5575 44.6529 42.5575C44.4008 42.5575 44.1964 42.7638 44.1964 43.0182C44.1964 43.2726 44.4008 43.4789 44.6529 43.4789Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M47.2228 41.0468C47.4749 41.0468 47.6792 40.8405 47.6792 40.5861C47.6792 40.3316 47.4749 40.1254 47.2228 40.1254C46.9707 40.1254 46.7664 40.3316 46.7664 40.5861C46.7664 40.8405 46.9707 41.0468 47.2228 41.0468Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M57.0475 36.6693C57.2996 36.6693 57.5039 36.4631 57.5039 36.2086C57.5039 35.9542 57.2996 35.7479 57.0475 35.7479C56.7954 35.7479 56.5911 35.9542 56.5911 36.2086C56.5911 36.4631 56.7954 36.6693 57.0475 36.6693Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M65.7711 42.4417C66.0232 42.4417 66.2276 42.2354 66.2276 41.981C66.2276 41.7265 66.0232 41.5203 65.7711 41.5203C65.5191 41.5203 65.3147 41.7265 65.3147 41.981C65.3147 42.2354 65.5191 42.4417 65.7711 42.4417Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M55.5797 33.0344C55.8318 33.0344 56.0362 32.8282 56.0362 32.5737C56.0362 32.3193 55.8318 32.113 55.5797 32.113C55.3276 32.113 55.1233 32.3193 55.1233 32.5737C55.1233 32.8282 55.3276 33.0344 55.5797 33.0344Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M54.6908 26.147C54.9429 26.147 55.1473 25.9407 55.1473 25.6863C55.1473 25.4319 54.9429 25.2256 54.6908 25.2256C54.4387 25.2256 54.2344 25.4319 54.2344 25.6863C54.2344 25.9407 54.4387 26.147 54.6908 26.147Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M65.8397 20.3943C66.0918 20.3943 66.2962 20.188 66.2962 19.9336C66.2962 19.6792 66.0918 19.4729 65.8397 19.4729C65.5877 19.4729 65.3833 19.6792 65.3833 19.9336C65.3833 20.188 65.5877 20.3943 65.8397 20.3943Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M68.4926 32.9007C68.7447 32.9007 68.949 32.6944 68.949 32.44C68.949 32.1855 68.7447 31.9792 68.4926 31.9792C68.2405 31.9792 68.0361 32.1855 68.0361 32.44C68.0361 32.6944 68.2405 32.9007 68.4926 32.9007Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M58.9878 20.0217C59.2399 20.0217 59.4443 19.8155 59.4443 19.561C59.4443 19.3066 59.2399 19.1003 58.9878 19.1003C58.7357 19.1003 58.5314 19.3066 58.5314 19.561C58.5314 19.8155 58.7357 20.0217 58.9878 20.0217Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M60.8996 19.887C61.1516 19.887 61.356 19.6807 61.356 19.4263C61.356 19.1718 61.1516 18.9656 60.8996 18.9656C60.6475 18.9656 60.4431 19.1718 60.4431 19.4263C60.4431 19.6807 60.6475 19.887 60.8996 19.887Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M63.8927 17.3307C64.1448 17.3307 64.3492 17.1244 64.3492 16.87C64.3492 16.6156 64.1448 16.4093 63.8927 16.4093C63.6406 16.4093 63.4363 16.6156 63.4363 16.87C63.4363 17.1244 63.6406 17.3307 63.8927 17.3307Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M36.57 23.8197C36.8221 23.8197 37.0264 23.6135 37.0264 23.359C37.0264 23.1046 36.8221 22.8983 36.57 22.8983C36.3179 22.8983 36.1135 23.1046 36.1135 23.359C36.1135 23.6135 36.3179 23.8197 36.57 23.8197Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M34.6872 27.0925C34.9392 27.0925 35.1436 26.8863 35.1436 26.6318C35.1436 26.3774 34.9392 26.1711 34.6872 26.1711C34.4351 26.1711 34.2307 26.3774 34.2307 26.6318C34.2307 26.8863 34.4351 27.0925 34.6872 27.0925Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M24.2948 35.333C24.5469 35.333 24.7513 35.1268 24.7513 34.8723C24.7513 34.6179 24.5469 34.4116 24.2948 34.4116C24.0427 34.4116 23.8384 34.6179 23.8384 34.8723C23.8384 35.1268 24.0427 35.333 24.2948 35.333Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M22.7562 38.3228C23.0083 38.3228 23.2127 38.1165 23.2127 37.8621C23.2127 37.6076 23.0083 37.4014 22.7562 37.4014C22.5042 37.4014 22.2998 37.6076 22.2998 37.8621C22.2998 38.1165 22.5042 38.3228 22.7562 38.3228Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M44.8168 7.79896C45.0689 7.79896 45.2732 7.5927 45.2732 7.33826C45.2732 7.08383 45.0689 6.87756 44.8168 6.87756C44.5647 6.87756 44.3604 7.08383 44.3604 7.33826C44.3604 7.5927 44.5647 7.79896 44.8168 7.79896Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M54.4354 12.1343C54.6875 12.1343 54.8919 11.928 54.8919 11.6736C54.8919 11.4192 54.6875 11.2129 54.4354 11.2129C54.1834 11.2129 53.979 11.4192 53.979 11.6736C53.979 11.928 54.1834 12.1343 54.4354 12.1343Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M36.3981 45.0143C36.6502 45.0143 36.8545 44.808 36.8545 44.5536C36.8545 44.2992 36.6502 44.0929 36.3981 44.0929C36.146 44.0929 35.9417 44.2992 35.9417 44.5536C35.9417 44.808 36.146 45.0143 36.3981 45.0143Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M37.7804 41.746C38.0325 41.746 38.2369 41.5397 38.2369 41.2853C38.2369 41.0308 38.0325 40.8246 37.7804 40.8246C37.5283 40.8246 37.324 41.0308 37.324 41.2853C37.324 41.5397 37.5283 41.746 37.7804 41.746Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M32.3018 45.1264C33.1076 45.1264 33.7608 44.4671 33.7608 43.6538C33.7608 42.8405 33.1076 42.1812 32.3018 42.1812C31.496 42.1812 30.8428 42.8405 30.8428 43.6538C30.8428 44.4671 31.496 45.1264 32.3018 45.1264Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M53.9854 38.5069C54.7912 38.5069 55.4444 37.8476 55.4444 37.0343C55.4444 36.221 54.7912 35.5616 53.9854 35.5616C53.1796 35.5616 52.5264 36.221 52.5264 37.0343C52.5264 37.8476 53.1796 38.5069 53.9854 38.5069Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M64.8474 25.2439C65.2568 25.2439 65.5887 24.9089 65.5887 24.4957C65.5887 24.0824 65.2568 23.7474 64.8474 23.7474C64.438 23.7474 64.1061 24.0824 64.1061 24.4957C64.1061 24.9089 64.438 25.2439 64.8474 25.2439Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M28.4293 20.6902C28.8387 20.6902 29.1706 20.3552 29.1706 19.942C29.1706 19.5287 28.8387 19.1937 28.4293 19.1937C28.0199 19.1937 27.688 19.5287 27.688 19.942C27.688 20.3552 28.0199 20.6902 28.4293 20.6902Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M56.8633 29.9008C57.2358 29.9008 57.5378 29.5959 57.5378 29.2199C57.5378 28.8439 57.2358 28.5391 56.8633 28.5391C56.4907 28.5391 56.1887 28.8439 56.1887 29.2199C56.1887 29.5959 56.4907 29.9008 56.8633 29.9008Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M26.7421 42.8786C27.1146 42.8786 27.4166 42.5737 27.4166 42.1977C27.4166 41.8217 27.1146 41.5168 26.7421 41.5168C26.3695 41.5168 26.0675 41.8217 26.0675 42.1977C26.0675 42.5737 26.3695 42.8786 26.7421 42.8786Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M42.7124 51.6185C43.085 51.6185 43.387 51.3137 43.387 50.9377C43.387 50.5617 43.085 50.2568 42.7124 50.2568C42.3399 50.2568 42.0378 50.5617 42.0378 50.9377C42.0378 51.3137 42.3399 51.6185 42.7124 51.6185Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M54.9733 48.8497C55.3458 48.8497 55.6478 48.5449 55.6478 48.1689C55.6478 47.7929 55.3458 47.488 54.9733 47.488C54.6007 47.488 54.2987 47.7929 54.2987 48.1689C54.2987 48.5449 54.6007 48.8497 54.9733 48.8497Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M43.8782 47.3709C44.2507 47.3709 44.5527 47.066 44.5527 46.69C44.5527 46.314 44.2507 46.0092 43.8782 46.0092C43.5056 46.0092 43.2036 46.314 43.2036 46.69C43.2036 47.066 43.5056 47.3709 43.8782 47.3709Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M53.663 9.28773C53.9151 9.28773 54.1194 9.08147 54.1194 8.82703C54.1194 8.5726 53.9151 8.36633 53.663 8.36633C53.4109 8.36633 53.2065 8.5726 53.2065 8.82703C53.2065 9.08147 53.4109 9.28773 53.663 9.28773Z"
              fill="#cffc75"
            />
            <path
              opacity="0.88"
              d="M57.8397 11.5736C58.0918 11.5736 58.2962 11.3674 58.2962 11.1129C58.2962 10.8585 58.0918 10.6522 57.8397 10.6522C57.5877 10.6522 57.3833 10.8585 57.3833 11.1129C57.3833 11.3674 57.5877 11.5736 57.8397 11.5736Z"
              fill="#cffc75"
            />
            <path
              d="M50.631 15.9474L37.1837 32.7787L43.3568 32.8229L38.6504 46.2455L52.4258 28.7916L46.1292 28.8147L50.631 15.9474Z"
              fill="#cffc75"
            />
          </g>
        </svg>
      </div>
      <span class="shrink-0 select-text">Typesense</span>
    </div>
  </template>
  <template v-else-if="type === 6">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">Mail Server</span>
      <div class="flex flex-1 items-center justify-center w-full p-6 aspect-square">
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
          viewBox="0 0 132.292 121.708"
          version="1.1"
        >
          <path
            d="M12.321 0l53.861 53.918L120.365 0zM5.155 9.025l60.842 59.673 61.211-59.489-.185 36.835L66.921 70.54l15.164 12.616-8.137 5.986-41.609.184c-4.838-.022-25.877-18.34-27.185-41.255z"
            fill-opacity=".941"
            fill="#2d4a5f"
            style="fill: #ffffff; fill-opacity: 1"
          />
          <path
            d="M78.385 72.049l53.907-21.679-8.031 57.318-11.845-9.132c-21.727 23.171-45.255 26.289-67.997 20.837S12.281 98.39 5.155 83.8-.67 53.116 2.843 38.769c1.13 10.511-1.313 16.316 6.38 33.612 6.31 11.399 14.413 20.417 25.89 24.956 13.9 6.195 32.247 3.357 41.701-3.039l14.24-12.156z"
            fill="#00b786"
          />
        </svg>
      </div>
      <span class="shrink-0 select-text">Mailpit</span>
    </div>
  </template>
  <template v-else-if="type === 7">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">AI 助手</span>
      <div class="flex flex-1 items-center justify-center w-full p-5 aspect-square">
        <svg
          class="icon fill-current text-slate-300"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M287.92158 79.6c-42.4 25.6-68.8 118-59.2 205.6l3.6 34.8-20 20C147.52158 404 131.12158 503.2 171.92158 583.2l10.8 21.2-10 24.8c-26 65.2-24 144 4.4 200.8l11.6 22.8-7.2 14.8c-16.4 33.6-24.4 107.6-14.8 141.2l4 15.2h60.4l-3.2-13.2c-2-6.8-3.6-30.8-3.6-52.8 0-38 0.8-41.6 15.2-71.6 8-17.2 14.8-34.4 14.8-38 0-3.6-5.6-15.6-12.8-26.8-35.6-55.6-36.4-123.6-2.8-190.4 14.8-29.6 14.4-38.8-2-58.8-22.4-26.4-33.2-69.2-26.4-104.4 9.6-50.4 40.4-92.8 82-112.4 20-9.6 29.2-11.6 54.8-11.6H378.32158l8-16c18.4-36.4 50.4-61.6 93.6-74 55.6-16.4 124.4 14.8 154.8 70.4l9.6 17.6 34 2c58 4 93.2 27.2 118.4 78 25.6 52 22.4 107.2-8.4 147.6-17.2 22.4-17.2 32-2.4 61.6 33.6 66.8 32.8 134.8-2.8 190.4-7.2 11.2-12.8 23.2-12.8 26.8 0 3.6 6.8 20.8 14.8 38 14.4 30 15.2 33.6 15.2 71.6 0 22-1.6 46-3.6 52.8l-3.2 13.2h60.4l4-14.8c9.6-34 1.6-108-14.8-141.6l-7.2-14.8 11.6-22.8c28.4-56.8 30.4-135.6 4-201.6l-10-25.2 10.8-22c24-49.6 27.2-108.8 8-164.8-10.8-32-25.2-54.8-50.8-79.2l-17.2-17.2 3.6-34.8c7.2-66-8.8-148.4-35.6-183.6-21.2-28-49.6-36.4-79.2-24-27.2 11.2-50.8 51.6-62 106.4-5.2 26-8 31.6-12.8 29.6-34-15.6-60.4-21.6-94.8-21.6-35.2 0-53.2 4.4-93.2 21.6-4.8 2-7.6-3.6-12.8-29.6-11.2-54.8-34.8-95.2-62-106.4-18.4-8-41.2-6.8-55.6 2z m45.6 73.6c16 32.8 27.2 110.8 17.6 125.2-1.6 2.4-13.6 5.6-26.8 7.2-13.2 1.6-27.2 3.6-30.8 4.8-6.4 2-7.2-1.6-7.2-37.2 0-21.6 2.8-50.4 6-64.4 7.2-30 20.8-58 27.2-55.6 2.4 0.8 8.8 10 14 20zM718.32158 148c12.8 24.8 20 62.8 20 105.6 0 30.8-1.2 38.8-5.2 37.2-3.2-1.2-17.6-3.2-32-4.8-32-3.6-33.2-5.6-29.6-54 3.6-43.2 23.2-100 35.2-100 2 0 7.2 7.2 11.6 16z"
          ></path>
          <path
            fill="#000000"
            d="M453.52158 479.6c-44.8 18-75.2 47.6-85.6 83.6-15.6 54 8.4 101.2 64.4 127.6 22.8 10.4 27.2 11.2 80 11.2s57.2-0.8 80-11.2c41.2-19.2 64-48 68.8-86.4 5.2-46.4-24-92.4-74-117.2-24.4-12.4-30-13.2-70.8-14-35.2-0.8-47.6 0.4-62.8 6.4z m102 38.8c10 3.2 26.4 13.2 36.4 22 35.2 31.2 38 68.4 6.8 96.8-21.6 19.6-40 24.8-86.4 24.8-46.4 0-64.8-5.2-86.4-24.8-31.2-28.4-28.4-65.6 6.8-96.8 10-8.8 25.6-18.4 34.8-22 22.4-7.6 65.2-8 88 0z"
          ></path>
          <path
            fill="#000000"
            d="M480.72158 558.8c-5.6 5.6-2 25.2 5.2 30 4.8 3.6 8.4 11.2 9.2 21.2 1.2 15.6 1.6 16 17.2 16s16-0.4 16.4-15.2c0-10 3.2-17.6 8.8-22.8 9.6-9.2 11.6-20.8 4-26.8-5.6-4.4-56.8-6-60.8-2.4zM311.92158 480.4c-18.4 9.2-28 44.8-16.4 60 7.2 9.2 20.8 15.6 34 15.6 17.2 0 36.8-23.2 36.8-43.2 0-8-2.4-17.6-5.2-21.2-11.2-14.4-32-19.2-49.2-11.2zM676.32158 480.8c-12.8 7.2-17.6 16-18 32 0 20 19.6 43.2 36.8 43.2 23.2 0 38.8-14 39.2-35.2 0-32.8-32-54.8-58-40z"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Ollama</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">AI 助手</span>
      <div class="flex flex-1 items-center justify-center w-full px-1 aspect-square">
        <svg
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="path"
            d="M27.501 8.46875C27.249 8.3457 27.1406 8.58008 26.9932 8.69922C26.9434 8.73828 26.9004 8.78906 26.8584 8.83398C26.4902 9.22852 26.0605 9.48633 25.5 9.45508C24.6787 9.41016 23.9785 9.66797 23.3594 10.2969C23.2275 9.52148 22.79 9.05859 22.125 8.76172C21.7764 8.60742 21.4238 8.45312 21.1807 8.11719C21.0098 7.87891 20.9639 7.61328 20.8779 7.35156C20.8242 7.19336 20.7695 7.03125 20.5879 7.00391C20.3906 6.97266 20.3135 7.13867 20.2363 7.27734C19.9258 7.84375 19.8066 8.46875 19.8174 9.10156C19.8447 10.5234 20.4453 11.6562 21.6367 12.4629C21.7725 12.5547 21.8076 12.6484 21.7646 12.7832C21.6836 13.0605 21.5869 13.3301 21.501 13.6074C21.4473 13.7852 21.3662 13.8242 21.1768 13.7461C20.5225 13.4727 19.957 13.0684 19.458 12.5781C18.6104 11.7578 17.8438 10.8516 16.8877 10.1426C16.6631 9.97656 16.4395 9.82227 16.207 9.67578C15.2314 8.72656 16.335 7.94727 16.5898 7.85547C16.8574 7.75977 16.6826 7.42773 15.8193 7.43164C14.957 7.43555 14.167 7.72461 13.1611 8.10938C13.0137 8.16797 12.8594 8.21094 12.7002 8.24414C11.7871 8.07227 10.8389 8.0332 9.84766 8.14453C7.98242 8.35352 6.49219 9.23633 5.39648 10.7441C4.08105 12.5547 3.77148 14.6133 4.15039 16.7617C4.54883 19.0234 5.70215 20.8984 7.47559 22.3633C9.31348 23.8809 11.4307 24.625 13.8457 24.4824C15.3125 24.3984 16.9463 24.2012 18.7881 22.6406C19.2529 22.8711 19.7402 22.9629 20.5498 23.0332C21.1729 23.0918 21.7725 23.002 22.2373 22.9062C22.9648 22.752 22.9141 22.0781 22.6514 21.9531C20.5186 20.959 20.9863 21.3633 20.5605 21.0371C21.6445 19.752 23.2783 18.418 23.917 14.0977C23.9668 13.7539 23.9238 13.5391 23.917 13.2598C23.9131 13.0918 23.9512 13.0254 24.1445 13.0059C24.6787 12.9453 25.1973 12.7988 25.6738 12.5352C27.0557 11.7793 27.6123 10.5391 27.7441 9.05078C27.7637 8.82422 27.7402 8.58789 27.501 8.46875ZM15.46 21.8613C13.3926 20.2344 12.3906 19.6992 11.9766 19.7227C11.5898 19.7441 11.6592 20.1875 11.7441 20.4766C11.833 20.7617 11.9492 20.959 12.1123 21.209C12.2246 21.375 12.3018 21.623 12 21.8066C11.334 22.2207 10.1768 21.668 10.1221 21.6406C8.77539 20.8477 7.64941 19.7988 6.85547 18.3652C6.08984 16.9844 5.64453 15.5039 5.57129 13.9238C5.55176 13.541 5.66406 13.4062 6.04297 13.3379C6.54199 13.2461 7.05762 13.2266 7.55664 13.2988C9.66602 13.6074 11.4619 14.5527 12.9668 16.0469C13.8262 16.9004 14.4766 17.918 15.1465 18.9121C15.8584 19.9688 16.625 20.9746 17.6006 21.7988C17.9443 22.0879 18.2197 22.3086 18.4824 22.4707C17.6895 22.5586 16.3652 22.5781 15.46 21.8613ZM16.4502 15.4805C16.4502 15.3105 16.5859 15.1758 16.7568 15.1758C16.7949 15.1758 16.8301 15.1836 16.8613 15.1953C16.9033 15.2109 16.9424 15.2344 16.9727 15.2695C17.0273 15.3223 17.0586 15.4004 17.0586 15.4805C17.0586 15.6504 16.9229 15.7852 16.7529 15.7852C16.582 15.7852 16.4502 15.6504 16.4502 15.4805ZM19.5273 17.0625C19.3301 17.1426 19.1328 17.2129 18.9434 17.2207C18.6494 17.2344 18.3281 17.1152 18.1533 16.9688C17.8828 16.7422 17.6895 16.6152 17.6074 16.2168C17.5732 16.0469 17.5928 15.7852 17.623 15.6348C17.6934 15.3105 17.6152 15.1035 17.3877 14.9141C17.2012 14.7598 16.9658 14.7188 16.7061 14.7188C16.6094 14.7188 16.5205 14.6758 16.4541 14.6406C16.3457 14.5859 16.2568 14.4512 16.3418 14.2852C16.3691 14.2324 16.501 14.1016 16.5322 14.0781C16.8838 13.877 17.29 13.9434 17.666 14.0938C18.0146 14.2363 18.2773 14.498 18.6562 14.8672C19.0439 15.3145 19.1133 15.4395 19.334 15.7734C19.5078 16.0371 19.667 16.3066 19.7754 16.6152C19.8408 16.8066 19.7559 16.9648 19.5273 17.0625Z"
            fill-rule="nonzero"
            fill="#4D6BFE"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">DeepSeek</span>
    </div>
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">AI 助手</span>
      <div class="flex flex-1 items-center justify-center w-full p-7 aspect-square">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
            fill="#2BCF7D"
          ></path>
          <path
            d="M725.938 293C771.29 293 794 315.626 794 360.937V632.5c0 45.312-20.135 66.68-65.553 66.68H518.43l-130.163 87.985c-3.764 2.577-8.154 3.836-12.546 3.836-3.7 0-7.403-0.88-10.727-2.704a22.585 22.585 0 0 1-11.982-19.922l8.092-69.131h-65.55C250.89 699.243 230 677.81 230 632.56V360.937C230 315.626 252.332 293 298.123 293zM503.83 377h-52.662L362 593h53.63l21-49.871h81.74l21 49.871H593l-89.17-216zM662 377h-45v216h45V377z m-183.622 51.805l31.18 76.39h-62.36l31.18-76.39z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Chatbox</span>
    </div>
  </template>
  <template v-else-if="type === 8">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">对象存储</span>
      <div class="flex flex-1 items-center justify-center w-full px-3 aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.612 24.465">
          <path
            d="M52.751.414h9.108v23.63h-9.108zM41.711.74l-18.488 9.92a.919.919 0 0 1-.856 0L3.879.74A2.808 2.808 0 0 0 2.558.414h-.023A2.4 2.4 0 0 0 0 2.641v21.376h9.1V13.842a.918.918 0 0 1 1.385-.682l10.361 5.568a3.634 3.634 0 0 0 3.336.028l10.933-5.634a.917.917 0 0 1 1.371.69v10.205h9.1V2.641A2.4 2.4 0 0 0 43.055.414h-.023a2.808 2.808 0 0 0-1.321.326zm65.564-.326h-9.237v10.755a.913.913 0 0 1-1.338.706L72.762.675a2.824 2.824 0 0 0-1.191-.261h-.016a2.4 2.4 0 0 0-2.535 2.227v21.377h9.163V13.275a.914.914 0 0 1 1.337-.707l24.032 11.2a2.813 2.813 0 0 0 1.188.26 2.4 2.4 0 0 0 2.535-2.227zm7.161 23.63V.414h4.191v23.63zm28.856.421c-11.274 0-19.272-4.7-19.272-12.232C124.02 4.741 132.066 0 143.292 0s19.32 4.7 19.32 12.233-7.902 12.232-19.32 12.232zm0-21.333c-8.383 0-14.84 3.217-14.84 9.1 0 5.926 6.457 9.1 14.84 9.1s14.887-3.174 14.887-9.1c0-5.883-6.504-9.1-14.887-9.1z"
            fill="#c72c48"
          />
        </svg>
      </div>
      <span class="shrink-0 select-text">Minio</span>
    </div>
  </template>
  <template v-else-if="type === 9">
    <div
      class="rounded-lg shadow-md bg-slate-100 flex flex-col items-center p-5 dark:bg-slate-800 justify-between"
    >
      <span class="shrink-0 select-text">容器</span>
      <div class="flex flex-1 items-center justify-center w-full p-5 aspect-square">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M669.504 944.64v26.069333h-260.906667V944.64h260.906667z m-128.554667-66.197333V904.533333H224.042667v-26.090666h316.906666z m419.093334-78.229334v26.090667H275.285333V800.213333h684.757334z m-174.698667-313.728c41.6 14.933333 73.877333 56.533333 83.157333 107.029334 16.682667 78.464 9.856 134.506667 41.6 191.146666l3.989334 6.784H521.002667c36.714667-59.370667 28.245333-116.330667 45.610666-197.930666 9.685333-50.090667 41.557333-91.690667 83.136-107.029334 29.866667-12.117333 101.290667-12.117333 135.594667 0zM485.248 723.349333v26.090667H42.666667v-26.090667h442.581333z m238.357333-120.533333c-33.088 0-60.138667 25.856-60.138666 57.344 0 31.509333 27.050667 57.386667 60.138666 57.386667s60.138667-25.877333 60.138667-57.386667c0-31.488-27.050667-57.344-60.16-57.344z m-399.616-194.154667c41.557333 14.933333 73.856 56.533333 83.136 107.029334 16.682667 78.464 9.856 134.506667 41.6 191.146666l4.010667 6.784H59.626667c36.736-59.370667 28.266667-116.330667 45.610666-197.930666 9.685333-50.090667 41.578667-91.690667 83.136-107.029334 29.866667-12.117333 101.312-12.117333 135.616 0z m399.616 201.024c29.056 0 52.864 22.613333 52.864 50.090667 0 27.456-23.808 50.069333-52.864 50.069333s-52.864-22.208-52.864-50.069333c0-27.477333 23.808-50.090667 52.864-50.090667z m-0.405333 18.176c-3.221333 0-6.464 1.216-9.28 2.005334-2.432 0.810667-4.842667 1.621333-7.253333 1.621333-6.869333 0-8.490667 7.68-9.706667 12.928a66.325333 66.325333 0 0 1-1.194667 4.437333c-0.789333 2.325333-2.666667 7.594667 22.250667 23.253334l0.213333 0.128-0.234666 4.096c-2.858667 2.154667-10.752 7.893333-18.282667 6.826666a14.933333 14.933333 0 0 1-9.322667-6.464l0.448-2.816 0.896-6.442666 0.448-2.773334 0.362667-1.6-7.168-1.792a161.216 161.216 0 0 0-2.453333 15.274667l-0.042667 0.512v1.429333l0.704 1.066667c3.946667 6.464 9.322667 10.048 15.424 10.773333 1.066667 0.362667 1.792 0.362667 2.858667 0.362667 9.770667 0 18.773333-6.506667 21.397333-8.874667 2.944 2.346667 12.010667 8.874667 21.610667 8.874667 1.066667 0 2.133333 0 2.496-0.362667 5.546667-0.917333 10.026667-3.690667 13.653333-8.32l1.770667-2.432 0.704-1.066666v-1.450667c0-0.170667-0.341333-3.072-0.832-6.421333l-0.64-4.096a89.450667 89.450667 0 0 0-0.661334-3.690667l-0.362666-1.578667-7.168 1.792c0.704 2.517333 1.792 9.685333 2.133333 13.653334-2.496 3.925333-5.717333 6.08-9.301333 6.442666-6.698667 0.96-13.653333-3.477333-17.152-5.973333l-1.130667-0.853333-0.213333-4.138667c23.936-15.36 23.36-20.864 22.592-23.04l-0.128-0.298667-0.384-1.322666c-0.277333-0.96-0.554667-2.026667-0.810667-3.114667-0.810667-5.248-2.837333-12.928-9.685333-12.928-2.432 0-4.842667-0.810667-7.253334-1.621333-2.837333-0.789333-6.08-2.005333-9.301333-2.005334z m0.405333 7.68c2.026667 0 4.437333 0.789333 6.869334 1.6 3.2 0.810667 6.037333 2.026667 9.685333 2.026667 1.194667 0 2.410667 4.437333 2.816 6.869333 0.405333 2.005333 0.810667 3.221333 1.216 4.842667-1.621333 2.837333-10.496 9.685333-20.586667 16.149333-9.28-6.058667-18.986667-13.312-20.586666-16.149333l1.216-4.842667c0.405333-2.026667 1.621333-6.869333 2.816-6.869333 3.626667 0 6.869333-1.216 9.685333-2.026667 2.432-0.810667 4.842667-1.621333 6.869333-1.621333z m165.141334-4.437333H981.333333v26.346667l-89.173333-0.021334-3.413333-26.325333zM633.6 582.613333c-17.344 0-31.082667 14.144-31.082667 31.509334 0 17.365333 14.144 31.509333 31.082667 31.509333 17.365333 0 31.082667-14.549333 31.082667-31.509333 0-17.365333-13.717333-31.509333-31.082667-31.509334z m176.362667 0c-17.344 0-31.061333 14.144-31.061334 31.509334 0 17.365333 14.122667 31.509333 31.061334 31.509333 17.365333 0 31.082667-14.549333 31.082666-31.509333 0-17.365333-13.717333-31.509333-31.082666-31.509334zM262.229333 525.013333c-33.088 0-60.138667 25.834667-60.138666 57.344s27.050667 57.365333 60.16 57.365334c33.066667 0 60.117333-25.856 60.117333-57.365334s-27.029333-57.344-60.138667-57.344z m547.733334 64.490667c13.333333 0 23.829333 10.901333 23.829333 24.234667 0 13.333333-10.901333 24.234667-23.829333 24.234666a23.957333 23.957333 0 0 1-23.808-24.234666c0-3.114667 0.597333-6.08 1.664-8.832a13.525333 13.525333 0 0 0 13.269333 14.890666 13.525333 13.525333 0 0 0 13.333333-13.738666 13.525333 13.525333 0 0 0-16.064-13.44c3.477333-1.984 7.445333-3.114667 11.605334-3.114667z m-176.362667 0c13.312 0 23.808 10.901333 23.808 24.234667 0 13.333333-10.88 24.234667-23.808 24.234666a23.957333 23.957333 0 0 1-23.808-24.234666c0-3.114667 0.597333-6.08 1.664-8.832a13.525333 13.525333 0 0 0 13.269333 14.890666 13.525333 13.525333 0 0 0 13.312-13.738666 13.525333 13.525333 0 0 0-16.042666-13.44c3.456-1.984 7.424-3.114667 11.605333-3.114667zM262.229333 531.84c29.056 0 52.885333 22.613333 52.885334 50.090667 0 27.477333-23.829333 50.090667-52.885334 50.090666s-52.864-22.208-52.864-50.090666c0-27.456 23.808-50.090667 52.864-50.090667zM599.573333 69.76c75.370667 27.093333 133.930667 102.549333 150.762667 194.112 16.853333 79.189333 20.48 145.792 30.314667 206.997333l-4.864-1.28-7.424-1.536-8.021334-1.344-9.173333-1.173333-4.266667-0.448-8.704-0.704-3.584-0.213333-10.197333-0.426667-8.810667-0.128-8.917333 0.106667-8.704 0.341333-5.034667 0.32-9.386666 0.789333-10.026667 1.258667-7.082667 1.173333-4.821333 0.96-6.72 1.621334-4.608 1.344-5.568 2.026666-5.418667 2.133334c-42.986667 18.346667-75.605333 62.08-85.738666 114.432-0.96 4.586667-1.92 9.301333-2.773334 14.101333l-1.322666 7.253333-1.813334 11.306667h-111.914666l-0.64-4.394667-2.026667-15.189333-1.92-15.701333-3.712-29.44-1.92-13.333334-1.28-7.957333-2.112-11.52-3.818667-18.709333c-11.093333-49.642667-43.285333-90.88-85.12-108.074667l-4.885333-1.877333-6.485333-2.048-6.976-1.792-7.424-1.557334-8.021334-1.344-9.173333-1.194666-4.266667-0.426667-8.704-0.704-3.584-0.213333-10.197333-0.426667-8.810667-0.128-8.917333 0.106667-8.704 0.341333-5.034667 0.32-9.386666 0.789333-10.026667 1.258667-7.082667 1.173333-4.8 0.96-6.741333 1.621334-4.608 1.344-5.568 2.026666-1.365333 0.512c4.8-40.768 10.090667-84.629333 20.458666-133.333333 17.557333-90.837333 75.370667-166.272 150.762667-194.112 54.144-21.973333 183.68-21.973333 245.909333 0zM261.824 550.037333c-3.221333 0-6.442667 1.194667-9.28 2.005334a23.552 23.552 0 0 1-7.253333 1.621333c-6.869333 0-8.490667 7.68-9.685334 12.928a66.325333 66.325333 0 0 1-1.216 4.437333c-0.768 2.325333-2.645333 7.594667 22.272 23.253334l0.213334 0.128-0.256 4.096c-2.858667 2.154667-10.752 7.893333-18.261334 6.826666a14.933333 14.933333 0 0 1-9.322666-6.464l0.426666-2.816 0.917334-6.442666 0.426666-2.773334 0.384-1.6-7.168-1.792a161.216 161.216 0 0 0-2.474666 15.274667l-0.042667 0.512v1.429333l0.725333 1.066667c3.925333 6.464 9.301333 10.048 15.402667 10.773333 1.066667 0.362667 1.792 0.362667 2.858667 0.362667 9.770667 0 18.773333-6.528 21.397333-8.874667 2.944 2.346667 12.032 8.874667 21.610667 8.874667 1.066667 0 2.133333 0 2.517333-0.362667 5.525333-0.917333 10.005333-3.690667 13.653333-8.32l1.749334-2.453333 0.725333-1.066667v-1.429333c0-0.32-1.152-9.429333-2.133333-14.208l-0.384-1.578667-7.168 1.792c0.725333 2.517333 1.792 9.685333 2.133333 13.632-2.496 3.946667-5.717333 6.101333-9.301333 6.464-6.698667 0.938667-13.653333-3.477333-17.130667-5.973333l-1.152-0.853333-0.213333-4.138667c23.957333-15.36 23.381333-20.864 22.613333-23.04l-0.128-0.298667-0.426667-1.322666a114.56 114.56 0 0 1-0.789333-3.114667c-0.810667-5.248-2.816-12.928-9.685333-12.928-2.410667 0-4.842667-0.810667-7.253334-1.621333-2.837333-0.810667-6.058667-2.005333-9.301333-2.005334z m0.426667 7.68c2.005333 0 4.416 0.789333 6.826666 1.6 3.242667 0.810667 6.08 2.026667 9.706667 2.026667 1.216 0 2.410667 4.437333 2.816 6.869333 0.426667 2.005333 0.810667 3.221333 1.216 4.842667-1.621333 2.816-10.496 9.685333-20.586667 16.149333-9.28-6.058667-18.965333-13.333333-20.586666-16.149333l1.216-4.842667c0.426667-2.026667 1.621333-6.869333 2.837333-6.869333 3.626667 0 6.848-1.216 9.685333-2.026667 2.410667-0.810667 4.842667-1.621333 6.848-1.621333z m-90.026667-52.928c-17.344 0-31.061333 14.144-31.061333 31.509334 0 17.365333 14.122667 31.509333 31.061333 31.509333 17.365333 0 31.082667-14.549333 31.082667-31.509333 0-17.365333-13.717333-31.509333-31.082667-31.509334z m176.384 0c-17.365333 0-31.082667 14.144-31.082667 31.509334 0 17.365333 14.122667 31.509333 31.082667 31.509333 17.344 0 31.082667-14.549333 31.082667-31.509333 0-17.365333-13.738667-31.509333-31.082667-31.509334z m462.976 32.981334c-8.96-0.341333-17.92 2.794667-24.64 8.32l-2.389333 2.197333-4.053334 4.032 7.68 7.68 4.053334-4.053333c4.821333-4.842667 12.096-7.68 18.944-7.253334 6.357333 0 12.714667 3.093333 17.173333 7.637334l1.792 2.048 3.242667 4.437333 8.469333-6.464-3.221333-4.437333a36.053333 36.053333 0 0 0-27.050667-14.144z m-179.605333 0a36.053333 36.053333 0 0 0-24.746667 11.434666l-2.282667 2.709334-3.221333 4.437333 8.469333 6.464 3.221334-4.437333c4.437333-5.653333 11.712-9.28 18.986666-9.685334 6.208-0.362667 12.16 1.664 16.768 5.312l2.197334 1.941334 4.032 4.053333 7.68-7.68-4.053334-4.053333a37.418667 37.418667 0 0 0-27.050666-10.496z m229.333333-1.706667h62.101333v26.325333l-49.770666-0.213333a168.32 168.32 0 0 0-12.309334-26.133333z m-689.066667-24.405333c13.312 0 23.808 10.901333 23.808 24.234666 0 13.333333-10.901333 24.234667-23.829333 24.234667a23.957333 23.957333 0 0 1-23.808-24.234667c0-3.114667 0.597333-6.101333 1.664-8.832a13.525333 13.525333 0 0 0 13.269333 14.890667 13.525333 13.525333 0 0 0 13.333334-13.738667 13.525333 13.525333 0 0 0-16.064-13.44c3.477333-1.984 7.445333-3.114667 11.605333-3.114666z m176.362667 0c13.312 0 23.808 10.901333 23.808 24.234666 0 13.333333-10.88 24.234667-23.808 24.234667a23.957333 23.957333 0 0 1-23.808-24.234667c0-3.114667 0.576-6.101333 1.664-8.832a13.525333 13.525333 0 0 0 13.269333 14.890667 13.525333 13.525333 0 0 0 13.312-13.738667 13.525333 13.525333 0 0 0-16.042666-13.44c3.456-1.984 7.424-3.114667 11.605333-3.114666z m436.245333-41.792h85.76v26.346666l-40.661333-0.021333a129.749333 129.749333 0 0 0-30.293333-20.48l-5.546667-2.474667-5.461333-2.133333-3.797334-1.237333zM487.594667 280.746667c-60.010667 0-109.056 46.869333-109.056 104s49.045333 104.021333 109.056 104.021333 109.034667-46.890667 109.034666-104.021333c0-57.130667-49.024-104-109.034666-104zM170.624 459.946667a36.053333 36.053333 0 0 0-24.746667 11.434666l-2.304 2.709334-3.221333 4.437333 8.469333 6.464 3.242667-4.437333c4.437333-5.653333 11.690667-9.301333 18.965333-9.706667 6.229333-0.341333 12.16 1.706667 16.768 5.333333l2.197334 1.941334 4.053333 4.053333 7.658667-7.68-4.053334-4.053333a37.418667 37.418667 0 0 0-27.029333-10.496z m179.584 0c-8.96-0.362667-17.92 2.794667-24.618667 8.32l-2.410666 2.176-4.053334 4.053333 7.68 7.68 4.053334-4.053333c4.821333-4.842667 12.096-7.68 18.965333-7.253334 6.357333 0 12.714667 3.072 17.173333 7.637334l1.792 2.048 3.221334 4.437333 8.469333-6.464-3.221333-4.437333a36.053333 36.053333 0 0 0-27.050667-14.144z m137.386667-166.784c52.693333 0 95.872 41.024 95.872 90.837333s-43.178667 90.816-95.872 90.816c-52.693333 0-95.872-40.277333-95.872-90.816 0-49.813333 43.178667-90.837333 95.872-90.837333z m-0.725334 32.96c-5.866667 0-11.733333 2.197333-16.853333 3.669333-4.373333 1.472-8.768 2.922667-13.162667 2.922667-12.437333 0-15.36 13.930667-17.557333 23.466666-0.746667 2.901333-1.472 5.845333-2.197333 8.042667-1.408 4.202667-4.821333 13.802667 40.682666 42.346667l-0.362666 7.466666c-5.205333 3.904-19.498667 14.314667-33.152 12.373334-6.485333-1.301333-12.330667-5.205333-16.896-11.712 1.152-6.250667 2.282667-17.002667 3.413333-22.634667l0.490667-2.069333-13.013334-3.264c-1.28 4.714667-2.837333 15.36-3.754666 22.272l-0.405334 3.093333-0.32 2.773333-0.042666 0.469334v2.602666l1.28 1.962667c7.168 11.712 16.917333 18.218667 27.946666 19.498667 1.962667 0.661333 3.264 0.661333 5.205334 0.661333 17.706667 0 33.984-11.776 38.784-16.085333 5.290667 4.245333 21.802667 16.085333 39.189333 16.085333 1.962667 0 3.904 0 4.565333-0.64 10.389333-1.749333 18.730667-7.082667 25.472-16l2.453334-3.52 1.301333-1.962667v-2.752l-0.042667-0.341333-0.32-2.773333a342.016 342.016 0 0 0-3.52-22.528l-0.64-2.816-13.013333 3.264c1.28 4.544 3.242667 17.557333 3.904 24.704-4.565333 7.146667-10.410667 11.050667-16.896 11.712-12.586667 1.792-25.749333-6.933333-31.786667-11.349334l-1.365333-1.002666-0.362667-7.530667c44.032-28.245333 42.304-38.144 40.874667-41.941333l-0.149333-0.362667-0.725334-2.410667a207.722667 207.722667 0 0 1-1.472-5.653333c-1.450667-9.514667-5.12-23.445333-17.557333-23.445333-4.394667 0-8.789333-1.450667-13.162667-2.922667-5.12-1.472-10.986667-3.669333-16.853333-3.669333z m0.725334 13.930666c3.648 0 8.042667 1.450667 12.437333 2.922667 5.845333 1.472 10.986667 3.669333 17.557333 3.669333 2.197333 0 4.394667 8.042667 5.12 12.437334 0.746667 3.669333 1.493333 5.866667 2.197334 8.810666-2.922667 5.12-19.029333 17.578667-37.333334 29.290667-15.701333-10.24-32.042667-22.421333-36.522666-28.16l-0.789334-1.130667 2.197334-8.810666c0.725333-3.648 2.922667-12.437333 5.12-12.437334 6.592 0 12.437333-2.197333 17.578666-3.669333 4.373333-1.472 8.768-2.922667 12.437334-2.922667z m-163.2-95.957333c-31.488 0-56.362667 25.642667-56.362667 57.130667s25.6 57.130667 56.341333 57.130666c31.488 0 56.362667-26.368 56.362667-57.130666 0-31.488-24.874667-57.130667-56.362667-57.130667z m319.808 0c-31.466667 0-56.341333 25.642667-56.341334 57.130667s25.6 57.130667 56.341334 57.130666c31.488 0 56.362667-26.368 56.362666-57.130666 0-31.488-24.874667-57.130667-56.362666-57.130667z m-319.829334 12.458667c24.170667 0 43.2 19.776 43.2 43.946666s-19.776 43.946667-43.2 43.946667c-24.149333 0-43.178667-19.776-43.178666-43.946667 0-5.653333 1.066667-11.050667 3.029333-16a21.205333 21.205333 0 0 0-0.085333 2.069334c0 13.76 10.794667 24.917333 24.149333 24.917333 13.333333 0 24.149333-11.157333 24.149333-24.917333 0-13.738667-10.816-24.896-24.149333-24.896-1.664 0-3.285333 0.170667-4.842667 0.490666 6.229333-3.562667 13.397333-5.610667 20.928-5.610666z m319.829334 0c24.170667 0 43.178667 19.776 43.178666 43.946666s-19.754667 43.946667-43.178666 43.946667c-24.149333 0-43.178667-19.776-43.178667-43.946667 0-5.653333 1.066667-11.050667 3.029333-16a21.205333 21.205333 0 0 0-0.085333 2.069334c0 13.76 10.794667 24.917333 24.149333 24.917333 13.333333 0 24.149333-11.157333 24.149334-24.917333 0-13.738667-10.816-24.896-24.149334-24.896-1.664 0-3.285333 0.170667-4.842666 0.490666 6.229333-3.562667 13.397333-5.610667 20.928-5.610666zM325.546667 162.752l-4.053334 0.042667a65.386667 65.386667 0 0 0-46.229333 22.186666l-2.816 3.434667-5.866667 8.064 15.36 11.733333 5.866667-8.064c8.064-10.24 21.226667-16.853333 34.410667-17.578666 11.84-0.661333 23.104 3.413333 31.637333 10.666666l2.752 2.517334 7.317333 7.317333 13.909334-13.909333-7.317334-7.338667c-10.538667-10.538667-25.770667-17.386667-40.853333-18.816l-4.117333-0.256z m275.541333 16.298667l-2.965333 2.773333-7.317334 7.338667 13.909334 13.909333 7.317333-7.317333a46.250667 46.250667 0 0 1 34.389333-13.184c11.989333 0 23.957333 6.037333 32.085334 14.848l2.325333 2.730666 5.845333 8.042667 15.36-11.712-5.845333-8.064a65.408 65.408 0 0 0-49.024-25.621333 66.922667 66.922667 0 0 0-46.08 16.256z" fill="#892ca0"></path>
        </svg>
      </div>
      <span class="shrink-0 select-text">Podman</span>
    </div>
  </template>
</template>

<script lang="ts" setup>
  defineProps<{
    type: number
  }>()
</script>
