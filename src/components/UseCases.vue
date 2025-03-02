<template>
  <section id="usecases" class="py-24 relative">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-r from-white via-cofco-gray to-white opacity-50"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-cofco-secondary opacity-5 rounded-full"></div>
    <div class="absolute bottom-40 left-10 w-80 h-80 bg-cofco-primary opacity-5 rounded-full"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-cofco-secondary bg-cofco-secondary bg-opacity-10 rounded-full uppercase">
          行业应用
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-cofco-dark">应用场景</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          中粮智能大模型如何在实际农业食品生产中创造价值
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 使用场景卡片 1 -->
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
          <div class="h-48 overflow-hidden relative">
            <img 
              src="/images/smart-agriculture.jpg" 
              alt="智能农业生产管理" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-cofco-primary to-transparent opacity-60"></div>
            <div class="absolute bottom-4 left-4 text-white font-semibold text-xl">智能农业生产管理</div>
          </div>
          <div class="p-6">
            <div class="text-cofco-dark font-medium mb-4">通过分析土壤、气候和农作物数据，提供精准的种植建议</div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>根据历史数据和气象预测提供最佳播种时间</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>根据土壤条件和作物需求定制化肥料方案</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>提前预警病虫害风险并提供防治方案</span>
              </li>
            </ul>
            <div class="mt-6 pt-4 border-t border-gray-100">
              <a href="#" class="inline-flex items-center text-cofco-primary font-medium group-hover:underline">
                <span>查看详情</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 使用场景卡片 2 -->
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
          <div class="h-48 overflow-hidden relative">
            <img 
              src="/images/food-processing.jpg" 
              alt="食品加工质量控制" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-cofco-secondary to-transparent opacity-60"></div>
            <div class="absolute bottom-4 left-4 text-white font-semibold text-xl">食品加工质量控制</div>
          </div>
          <div class="p-6">
            <div class="text-cofco-dark font-medium mb-4">监控质量参数，优化加工流程，确保产品质量稳定和安全合规</div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>实时监控食品加工关键参数并预警异常</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>优化加工工艺参数，提高产品质量和一致性</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>提供食品安全合规建议和问题排查指导</span>
              </li>
            </ul>
            <div class="mt-6 pt-4 border-t border-gray-100">
              <a href="#" class="inline-flex items-center text-cofco-primary font-medium group-hover:underline">
                <span>查看详情</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 使用场景卡片 3 -->
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
          <div class="h-48 overflow-hidden relative">
            <img 
              src="/images/supply-chain.jpg" 
              alt="供应链优化" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-cofco-dark to-transparent opacity-60"></div>
            <div class="absolute bottom-4 left-4 text-white font-semibold text-xl">供应链优化</div>
          </div>
          <div class="p-6">
            <div class="text-cofco-dark font-medium mb-4">优化农产品和食品的采购、库存和配送，降低成本并提高响应速度</div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>基于市场数据和需求预测优化采购计划</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>智能调度和路径规划，降低物流成本</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>优化库存管理，减少浪费并确保产品新鲜度</span>
              </li>
            </ul>
            <div class="mt-6 pt-4 border-t border-gray-100">
              <a href="#" class="inline-flex items-center text-cofco-primary font-medium group-hover:underline">
                <span>查看详情</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a href="#pricing" class="inline-flex items-center justify-center px-6 py-3 bg-cofco-secondary text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:bg-cofco-secondary-dark transition-all duration-300">
          <span>查看价格方案</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template> 