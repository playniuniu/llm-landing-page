<template>
  <section id="features" class="py-24 bg-cofco-gray relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
    <div class="absolute bottom-0 right-0 w-64 h-64 bg-cofco-primary opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    <div class="absolute top-1/4 left-0 w-96 h-96 bg-cofco-secondary opacity-5 rounded-full transform -translate-x-1/2"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-cofco-primary bg-cofco-primary bg-opacity-10 rounded-full uppercase">
          产品特性
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-cofco-dark">中粮智能大模型特性</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          专为农业食品产业打造的智能解决方案，集成先进AI技术与行业专业知识
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 特性 1 -->
        <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="bg-cofco-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:bg-cofco-primary group-hover:bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cofco-primary transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-cofco-dark group-hover:text-cofco-primary transition-all duration-300">农业知识库</h3>
          <p class="text-gray-600">
            集成全球农业科研成果、中粮集团专有技术和经验，提供准确、专业的农业知识服务。
          </p>
          <div class="mt-6 pt-4 border-t border-gray-100">
            <a href="#" class="inline-flex items-center text-cofco-primary font-medium">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- 特性 2 -->
        <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="bg-cofco-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:bg-cofco-primary group-hover:bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cofco-primary transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-cofco-dark group-hover:text-cofco-primary transition-all duration-300">数据分析能力</h3>
          <p class="text-gray-600">
            可处理和分析农业生产数据、市场趋势和气象信息，为决策提供数据支持和预测分析。
          </p>
          <div class="mt-6 pt-4 border-t border-gray-100">
            <a href="#" class="inline-flex items-center text-cofco-primary font-medium">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- 特性 3 -->
        <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="bg-cofco-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:bg-cofco-primary group-hover:bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cofco-primary transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-cofco-dark group-hover:text-cofco-primary transition-all duration-300">智能对话助手</h3>
          <p class="text-gray-600">
            通过自然语言交互，解答农业生产、食品加工和安全问题，提供个性化建议和解决方案。
          </p>
          <div class="mt-6 pt-4 border-t border-gray-100">
            <a href="#" class="inline-flex items-center text-cofco-primary font-medium">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- 特性 4 -->
        <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="bg-cofco-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:bg-cofco-primary group-hover:bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cofco-primary transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-cofco-dark group-hover:text-cofco-primary transition-all duration-300">高效决策支持</h3>
          <p class="text-gray-600">
            提供基于科学和数据的农业决策建议，帮助农民和企业提高生产效率和产品质量。
          </p>
          <div class="mt-6 pt-4 border-t border-gray-100">
            <a href="#" class="inline-flex items-center text-cofco-primary font-medium">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- 特性 5 -->
        <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="bg-cofco-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:bg-cofco-primary group-hover:bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cofco-primary transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-cofco-dark group-hover:text-cofco-primary transition-all duration-300">安全与合规</h3>
          <p class="text-gray-600">
            符合食品安全标准和农业法规，提供合规指导和安全检查建议，保障产品质量安全。
          </p>
          <div class="mt-6 pt-4 border-t border-gray-100">
            <a href="#" class="inline-flex items-center text-cofco-primary font-medium">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- 特性 6 -->
        <div class="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
          <div class="bg-cofco-primary bg-opacity-10 w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:bg-cofco-primary group-hover:bg-opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cofco-primary transition-all duration-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-cofco-dark group-hover:text-cofco-primary transition-all duration-300">可持续农业</h3>
          <p class="text-gray-600">
            提供环保农业技术方案和资源高效利用建议，助力农业可持续发展和环境保护。
          </p>
          <div class="mt-6 pt-4 border-t border-gray-100">
            <a href="#" class="inline-flex items-center text-cofco-primary font-medium">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a href="#usecases" class="inline-flex items-center justify-center px-6 py-3 bg-cofco-primary text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:bg-cofco-primary-dark transition-all duration-300">
          <span>探索应用场景</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template> 