<template>
  <section id="pricing" class="py-24 bg-gradient-to-b from-white to-cofco-gray relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute top-20 left-0 w-96 h-96 bg-cofco-primary opacity-5 rounded-full transform -translate-x-1/2"></div>
    <div class="absolute bottom-20 right-0 w-96 h-96 bg-cofco-secondary opacity-5 rounded-full transform translate-x-1/2"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-cofco-primary bg-cofco-primary bg-opacity-10 rounded-full uppercase">
          灵活方案
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-cofco-dark">价格方案</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          根据您的业务需求和规模选择合适的方案，助力农业食品产业智能化升级
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        <!-- 基础版 -->
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div class="p-1.5">
            <div class="p-6 border-b border-gray-100">
              <div class="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                基础版
              </div>
              <div class="flex items-end mb-6">
                <span class="text-4xl font-bold text-cofco-dark">¥1,999</span>
                <span class="text-gray-500 ml-2 mb-1">/月</span>
              </div>
              <p class="text-gray-600">
                适合小型农场和食品生产企业的入门级智能解决方案
              </p>
            </div>
            
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">每日1000次API调用额度</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">基础农业知识库访问</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">标准问答和决策支持</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">邮件支持</span>
                </li>
              </ul>
              
              <div class="mt-8">
                <a href="#contact" class="block w-full bg-white border border-cofco-primary text-cofco-primary text-center py-3 px-4 rounded-xl font-medium hover:bg-cofco-primary hover:text-white transition-all duration-300">
                  选择方案
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 专业版 -->
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative">
          <!-- 热门标签 -->
          <div class="absolute top-6 right-6">
            <div class="bg-cofco-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
              最受欢迎
            </div>
          </div>
          
          <!-- 高亮边框 -->
          <div class="p-1.5 bg-gradient-to-br from-cofco-primary to-cofco-secondary rounded-2xl">
            <div class="bg-white rounded-xl overflow-hidden">
              <div class="p-6 border-b border-gray-100">
                <div class="inline-block bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  专业版
                </div>
                <div class="flex items-end mb-6">
                  <span class="text-4xl font-bold text-cofco-dark">¥5,999</span>
                  <span class="text-gray-500 ml-2 mb-1">/月</span>
                </div>
                <p class="text-gray-600">
                  适合中型农业企业和食品加工厂的全面智能解决方案
                </p>
              </div>
              
              <div class="p-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">每日5000次API调用额度</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">高级农业知识库完全访问</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">高级数据分析和预测</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">5个自定义模型训练机会</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">电话和邮件支持</span>
                  </li>
                </ul>
                
                <div class="mt-8">
                  <a href="#contact" class="block w-full bg-gradient-to-r from-cofco-primary to-cofco-primary-dark text-white text-center py-3 px-4 rounded-xl font-medium hover:opacity-90 transition-all duration-300 shadow-md">
                    选择方案
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 企业版 -->
        <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div class="p-1.5">
            <div class="p-6 border-b border-gray-100">
              <div class="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                企业版
              </div>
              <div class="flex items-end mb-6">
                <span class="text-4xl font-bold text-cofco-dark">定制价格</span>
              </div>
              <p class="text-gray-600">
                适合大型农业集团和食品企业的个性化定制解决方案
              </p>
            </div>
            
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">无限API调用</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">私有化部署</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">定制模型训练和微调</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">数据集成和企业系统对接</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cofco-primary mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">专属客户经理和技术支持</span>
                </li>
              </ul>
              
              <div class="mt-8">
                <a href="#contact" class="block w-full bg-cofco-dark text-white text-center py-3 px-4 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center max-w-2xl mx-auto">
        <div class="bg-white rounded-2xl p-6 shadow-sm">
          <h3 class="text-xl font-semibold mb-4 text-cofco-dark">需要更多信息？</h3>
          <p class="text-gray-600 mb-6">
            我们的专业团队随时为您提供最合适的解决方案，无论您的企业规模如何，都能找到适合您的智能化方案。
          </p>
          <a href="#contact" class="inline-flex items-center text-cofco-primary font-medium hover:underline">
            <span>预约咨询</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template> 