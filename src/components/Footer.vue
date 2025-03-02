<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const company = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  // 这里应该有实际的表单提交逻辑
  submitted.value = true
}
</script>

<template>
  <footer>
    <!-- 联系表单部分 -->
    <div id="contact" class="bg-gradient-to-b from-white to-cofco-gray py-24 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-cofco-primary opacity-5 rounded-full"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-cofco-secondary opacity-5 rounded-full"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-cofco-primary bg-cofco-primary bg-opacity-10 rounded-full uppercase">
            联系我们
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-cofco-dark">开启智能农业之旅</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            想了解更多关于中粮智能大模型如何为您的业务创造价值？填写表单，我们的专业团队将尽快与您联系。
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div class="lg:col-span-2 lg:pr-8">
              <div class="space-y-8">
                <div class="flex items-start group">
                  <div class="bg-white shadow-md rounded-2xl p-3 text-cofco-primary mr-5 mt-1 group-hover:bg-cofco-primary group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2 text-cofco-dark">邮箱</h3>
                    <p class="text-gray-600 group-hover:text-cofco-primary transition-colors duration-300">llm@cofco.com</p>
                  </div>
                </div>
                
                <div class="flex items-start group">
                  <div class="bg-white shadow-md rounded-2xl p-3 text-cofco-primary mr-5 mt-1 group-hover:bg-cofco-primary group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2 text-cofco-dark">电话</h3>
                    <p class="text-gray-600 group-hover:text-cofco-primary transition-colors duration-300">+86 10-8888-7777</p>
                  </div>
                </div>
                
                <div class="flex items-start group">
                  <div class="bg-white shadow-md rounded-2xl p-3 text-cofco-primary mr-5 mt-1 group-hover:bg-cofco-primary group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2 text-cofco-dark">地址</h3>
                    <p class="text-gray-600 group-hover:text-cofco-primary transition-colors duration-300">北京市朝阳区朝阳门南大街8号中粮福临门大厦</p>
                  </div>
                </div>
                
                <div class="mt-10 pt-6 border-t border-gray-200">
                  <h3 class="text-xl font-semibold mb-4 text-cofco-dark">关注我们</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="bg-white p-3 rounded-full shadow-sm text-cofco-primary hover:bg-cofco-primary hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.126,2H4.87a2.871,2.871,0,0,0-2.87,2.87V19.126a2.871,2.871,0,0,0,2.87,2.87H19.126a2.871,2.871,0,0,0,2.87-2.87V4.87A2.871,2.871,0,0,0,19.126,2ZM7.146,18.12H4.518V9.309H7.146Zm-1.315-9.97A1.53,1.53,0,1,1,7.362,6.62,1.53,1.53,0,0,1,5.831,8.15Zm12.3,9.97H15.452v-4.3c0-.987-.017-2.255-1.371-2.255-1.373,0-1.584,1.074-1.584,2.185v4.371H9.82V9.309h2.513v1.154h.036a2.775,2.775,0,0,1,2.5-1.371c2.662,0,3.163,1.76,3.163,4.05Z"/>
                      </svg>
                    </a>
                    <a href="#" class="bg-white p-3 rounded-full shadow-sm text-cofco-primary hover:bg-cofco-primary hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.212,5.656a8.384,8.384,0,0,1-2.41.661A4.2,4.2,0,0,0,21.649,4.2a8.4,8.4,0,0,1-2.663,1.015,4.182,4.182,0,0,0-7.123,3.814A11.874,11.874,0,0,1,3.472,4.2a4.168,4.168,0,0,0-.566,2.1A4.181,4.181,0,0,0,4.7,9.737,4.161,4.161,0,0,1,2.8,9.223v.052a4.183,4.183,0,0,0,3.356,4.1,4.19,4.19,0,0,1-1.889.072A4.185,4.185,0,0,0,8.12,16.258a8.381,8.381,0,0,1-5.188,1.789A8.527,8.527,0,0,1,2,18a11.839,11.839,0,0,0,6.42,1.882c7.7,0,11.9-6.376,11.9-11.9,0-.18,0-.362-.012-.541A8.5,8.5,0,0,0,22.212,5.656Z"/>
                      </svg>
                    </a>
                    <a href="#" class="bg-white p-3 rounded-full shadow-sm text-cofco-primary hover:bg-cofco-primary hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.2c3.2,0,3.6,0,4.8,.1,3.3,.1,4.8,1.7,4.9,4.9,.1,1.3,.1,1.6,.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3,.1-1.6,.1-4.8,.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6,.1-4.8,.1-3.2,1.7-4.8,4.9-4.9,1.2-.1,1.6-.1,4.8-.1Zm0-2c-3.3,0-3.7,0-4.9,.1C2.7,.5,.5,2.6,.1,7.1,0,8.3,0,8.7,0,12s0,3.7,.1,4.9c.4,4.5,2.6,6.6,7.1,7,1.2,.1,1.6,.1,4.9,.1s3.7,0,4.9-.1c4.4-.4,6.6-2.6,7-7,.1-1.2,.1-1.6,.1-4.9s0-3.7-.1-4.9c-.4-4.4-2.6-6.6-7-7C15.7,0,15.3,0,12,0Zm0,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2,6.2-2.8,6.2-6.2-2.8-6.2-6.2-6.2Zm0,10.2c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Zm6.4-11.8c-.8,0-1.4,.6-1.4,1.4s.6,1.4,1.4,1.4,1.4-.6,1.4-1.4-.6-1.4-1.4-1.4Z"/>
                      </svg>
                    </a>
                    <a href="#" class="bg-white p-3 rounded-full shadow-sm text-cofco-primary hover:bg-cofco-primary hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.543,7.104c.014,.277,.014,.554,.014,.831,0,8.502-6.479,18.303-18.303,18.303-3.643,0-7.03-1.053-9.254-2.87,.48,.056,.946,.084,1.438,.084,2.774,0,5.323-.946,7.362-2.548-2.604-.048-4.795-1.764-5.548-4.122,.365,.057,.731,.084,1.109,.084,.531,0,1.05-.07,1.54-.196-2.716-.548-4.759-2.939-4.759-5.822V11.8c.798,.443,1.722,.71,2.704,.743-1.597-1.064-2.646-2.886-2.646-4.944,0-1.097,.293-2.109,.807-2.983,2.912,3.571,7.263,5.901,12.144,6.152-.099-.443-.152-.902-.152-1.361,0-3.279,2.66-5.939,5.94-5.939,1.708,0,3.25,.724,4.334,1.884,1.334-.26,2.604-.742,3.741-1.408-.443,1.375-1.375,2.522-2.603,3.251,1.195-.135,2.342-.473,3.405-.953-.8,1.186-1.806,2.231-2.975,3.068Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="lg:col-span-3">
              <div class="bg-white rounded-2xl shadow-card p-8">
                <h3 class="text-2xl font-bold mb-6 text-cofco-dark">免费咨询</h3>
                <div v-if="!submitted">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                      <input type="text" id="name" v-model="name" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cofco-primary focus:border-transparent transition-all" placeholder="请输入您的姓名" />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                      <input type="email" id="email" v-model="email" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cofco-primary focus:border-transparent transition-all" placeholder="请输入您的邮箱" />
                    </div>
                  </div>
                  <div class="mb-6">
                    <label for="company" class="block text-sm font-medium text-gray-700 mb-2">公司</label>
                    <input type="text" id="company" v-model="company" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cofco-primary focus:border-transparent transition-all" placeholder="请输入您的公司名称" />
                  </div>
                  <div class="mb-6">
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">需求描述</label>
                    <textarea id="message" v-model="message" rows="4" class="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cofco-primary focus:border-transparent transition-all" placeholder="请详细描述您的需求，帮助我们更好地了解您的业务"></textarea>
                  </div>
                  <button @click="submitForm" class="w-full bg-gradient-to-r from-cofco-primary to-cofco-primary-dark text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <span>发送信息</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div v-else class="text-center py-12">
                  <div class="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-cofco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 class="text-2xl font-bold mb-4 text-cofco-dark">感谢您的咨询!</h4>
                  <p class="text-gray-600 mb-6">我们的团队将在1-2个工作日内与您联系。</p>
                  <button @click="submitted = false" class="px-6 py-2 border border-cofco-primary text-cofco-primary rounded-lg hover:bg-cofco-primary hover:text-white transition-all">
                    返回
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 页脚版权信息 -->
    <div class="bg-cofco-dark py-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center mb-8">
          <div class="flex items-center mb-6 md:mb-0">
            <img src="../assets/logo.svg" alt="中粮智能大模型" class="h-10 mr-4" />
            <div>
              <h3 class="text-white font-bold text-xl mb-1">中粮智能大模型</h3>
              <p class="text-gray-400 text-sm">智慧农业，未来可期</p>
            </div>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 class="text-white font-semibold mb-3">产品</h4>
              <ul class="space-y-2">
                <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">产品特性</a></li>
                <li><a href="#usecases" class="text-gray-400 hover:text-white transition-colors">应用场景</a></li>
                <li><a href="#pricing" class="text-gray-400 hover:text-white transition-colors">价格方案</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-3">支持</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">API文档</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-3">公司</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">新闻资讯</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 中粮集团有限公司 版权所有 | 京ICP备XXXXXXXX号
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">隐私政策</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">使用条款</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm">Cookie政策</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template> 