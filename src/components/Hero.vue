<template>
  <section class="relative py-24 overflow-hidden">
    <!-- 背景图案 -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-b from-cofco-primary to-cofco-primary-dark"></div>
      <div class="absolute inset-0 opacity-20 bg-pattern"></div>
    </div>

    <div class="container relative z-10 mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-16">
        <div class="md:w-1/2 md:pr-8">
          <div class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-cofco-primary bg-cofco-primary bg-opacity-10 rounded-full uppercase">
            中粮集团新一代AI产品
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            中粮智能大模型
            <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cofco-secondary to-cofco-secondary-light">赋能农业食品产业</span>
          </h1>
          <p class="text-xl mb-8 text-gray-600 leading-relaxed">
            定制化农业食品领域智能助手，通过先进的大语言模型技术，为农业生产、食品加工和供应链管理提供专业智能解决方案。
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-cofco-secondary to-cofco-secondary-light text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              <span>免费试用</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#features" class="inline-flex items-center justify-center px-6 py-4 bg-white text-cofco-primary font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300">
              <span>了解更多</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          <div class="mt-8 flex items-center gap-2 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>企业级安全保障</span>
            <span class="mx-2">•</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>农业专家团队支持</span>
            <span class="mx-2">•</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>7x24小时服务</span>
          </div>
        </div>
        <div class="md:w-1/2 p-4">
          <div class="relative">
            <!-- 装饰元素 -->
            <div class="absolute -top-6 -left-6 w-24 h-24 bg-cofco-primary bg-opacity-10 rounded-2xl transform rotate-12 z-0"></div>
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-cofco-secondary bg-opacity-10 rounded-2xl transform -rotate-12 z-0"></div>
            
            <!-- 对话框 -->
            <div class="relative bg-white rounded-2xl shadow-card p-6 z-10">
              <div class="mb-6 flex items-center">
                <div class="w-10 h-10 flex-shrink-0 rounded-full bg-cofco-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-cofco-dark">中粮智能农业助手</h3>
                  <p class="text-sm text-gray-500">智能农业专家，随时解答您的问题</p>
                </div>
              </div>
              
              <!-- 用户提问 -->
              <div class="mb-4 bg-cofco-gray rounded-xl p-4">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-700">如何优化小麦在干旱条件下的生长？</p>
                  </div>
                </div>
              </div>
              
              <!-- AI回答 -->
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 flex-shrink-0 rounded-full bg-cofco-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <div class="flex-1 bg-green-50 p-4 rounded-xl">
                    <p class="text-gray-800">
                      在干旱条件下，可采用以下策略优化小麦生长：
                    </p>
                    <ul class="mt-2 space-y-1 text-sm">
                      <li class="flex items-start">
                        <span class="text-cofco-primary mr-2">•</span>
                        <span>选择抗旱品种，如"中麦175"</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-cofco-primary mr-2">•</span>
                        <span>实施深松土壤处理，增加蓄水能力</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-cofco-primary mr-2">•</span>
                        <span>采用覆盖技术减少水分蒸发</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-cofco-primary mr-2">•</span>
                        <span>改良灌溉方式，实施节水灌溉</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-cofco-primary mr-2">•</span>
                        <span>适时追施抗旱剂和有机肥...</span>
                      </li>
                    </ul>
                    <div class="mt-3 pt-2 border-t border-green-100 flex items-center justify-between">
                      <span class="text-xs text-gray-500">基于COFCO农业数据库 · 2025</span>
                      <div class="flex items-center gap-2">
                        <button class="text-gray-400 hover:text-cofco-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </button>
                        <button class="text-gray-400 hover:text-cofco-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 