<template>
      <!-- chatbot -->
       <section :class="['chatbot-section', variant === 'popup' && 'chatbot-section--popup']">

    <!-- Section label -->
    <div class="chatbot-eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-text">Start a Conversation</span>
    </div>

    <h2 class="chatbot-heading">Tell us about your project</h2>
    <p class="chatbot-subheading">Answer a few quick questions and our team will get back to you within 24 hours.</p>

    <!-- Chat widget -->
    <div class="chatbot-card">

      <!-- Header -->
      <div class="chatbot-header">
        <div class="header-left">
          <div class="header-dot"></div>
          <div>
            <p class="header-title">WebHive Assistant</p>
            <p class="header-sub">Online · Replies instantly</p>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div ref="chatEl" class="chatbot-messages">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['msg-row', msg.sender === 'user' ? 'msg-row--user' : 'msg-row--bot']"
        >
          <div :class="['msg-bubble', msg.sender === 'user' ? 'msg-bubble--user' : 'msg-bubble--bot']">
            <span class="msg-text">{{ msg.text }}</span>
            <span class="msg-time">{{ msg.time }}</span>
          </div>
        </div>

        <div v-if="isTyping" class="msg-row msg-row--bot">
          <div class="msg-bubble msg-bubble--bot typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div class="chatbot-footer">

        <div v-if="stepType === 'buttons' && activeOptions.length" class="options-grid">
          <button
            v-for="opt in activeOptions"
            :key="opt.text"
            class="option-btn"
            @click="handleOption(opt)"
          >
            {{ opt.text }}
          </button>
        </div>

        <div v-else-if="stepType === 'text_input'" class="input-row">
          <input
            v-model="inputValue"
            :type="chatTree[currentStep]?.inputField === 'email' ? 'email' : 'text'"
            :placeholder="chatTree[currentStep]?.placeholder"
            class="chat-input"
            @keydown.enter="handleInput"
          />
          <button class="send-btn" @click="handleInput" aria-label="Send">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="18" height="18">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>

        <div v-else-if="currentStep === 'completed'" class="completed-msg">
          ✓ Message sent — we will be in touch soon!
        </div>

      </div>
    </div>

  </section>
  <!-- chatbot end -->
</template>

<script setup>
import { ref, reactive, nextTick, computed } from 'vue'
import emailjs from '@emailjs/browser'


const props = defineProps({
  variant: { type: String, default: 'section' } // 'section' | 'popup'
})

// chatbot code
const chatTree = {
  start: {
    sender: 'bot',
    message: "Hi! I'm the WebHive assistant. What kind of solution are you looking to build?",
    type: 'buttons',
    options: [
      { text: '💻 Custom Web App',       value: 'Custom Web Application',  nextStep: 'ask_platform' },
      { text: '📱 Mobile App',           value: 'Mobile App',              nextStep: 'ask_platform' },
      { text: '🛒 E-Commerce Platform',  value: 'E-Commerce Platform',     nextStep: 'ask_platform' },
      { text: '⚡ NetSuite Integration', value: 'NetSuite Integration',    nextStep: 'ask_platform' },
    ],
  },
  ask_platform: {
    sender: 'bot',
    message: 'Great choice! Which platform are you targeting?',
    type: 'buttons',
    options: [
      { text: '🌐 Web',          value: 'Web',          nextStep: 'ask_budget' },
      { text: '📱 Mobile',       value: 'Mobile',       nextStep: 'ask_budget' },
      { text: '🖥️ Both',         value: 'Web & Mobile', nextStep: 'ask_budget' },
      { text: '🤔 Not sure yet', value: 'Not decided',  nextStep: 'ask_budget' },
    ],
  },
  ask_budget: {
    sender: 'bot',
    message: 'What is your estimated budget for this project?',
    type: 'buttons',
    options: [
      { text: 'Under $5K',   value: 'Under $5,000',      nextStep: 'ask_timeline' },
      { text: '$5K – $15K',  value: '$5,000 – $15,000',  nextStep: 'ask_timeline' },
      { text: '$15K – $50K', value: '$15,000 – $50,000', nextStep: 'ask_timeline' },
      { text: '$50K+',       value: '$50,000+',           nextStep: 'ask_timeline' },
    ],
  },
  ask_timeline: {
    sender: 'bot',
    message: 'What is your expected timeline to launch?',
    type: 'buttons',
    options: [
      { text: '< 1 month',    value: 'Less than 1 month', nextStep: 'ask_stage' },
      { text: '1 – 3 months', value: '1–3 months',        nextStep: 'ask_stage' },
      { text: '3 – 6 months', value: '3–6 months',        nextStep: 'ask_stage' },
      { text: 'Flexible',     value: 'Flexible',          nextStep: 'ask_stage' },
    ],
  },
  ask_stage: {
    sender: 'bot',
    message: 'Where is your project right now?',
    type: 'buttons',
    options: [
      { text: '💡 Just an idea',         value: 'Just an idea',                nextStep: 'ask_description' },
      { text: '📄 Have requirements',    value: 'Have requirements',           nextStep: 'ask_description' },
      { text: '🔄 Redesigning existing', value: 'Redesigning existing product',nextStep: 'ask_description' },
      { text: '🚀 Ready to build',       value: 'Ready to build',              nextStep: 'ask_description' },
    ],
  },
  ask_description: {
    sender: 'bot',
    message: 'Briefly describe what you want to build or the problem you want to solve.',
    type: 'text_input',
    inputField: 'description',
    placeholder: 'e.g. An app that helps restaurants manage reservations…',
    nextStep: 'ask_name',
  },
  ask_name: {
    sender: 'bot',
    message: 'Thanks! What is your name?',
    type: 'text_input',
    inputField: 'name',
    placeholder: 'Your full name',
    nextStep: 'ask_email',
  },
  ask_email: {
    sender: 'bot',
    message: (name) => `Nice to meet you, ${name}! What's your email address so our team can reach you?`,
    type: 'text_input',
    inputField: 'email',
    placeholder: 'name@company.com',
    nextStep: 'submit_lead',
  },
}

const currentStep   = ref('start')
const isTyping      = ref(false)
const inputValue    = ref('')
const chatEl        = ref(null)

const lead = reactive({
  service: '', platform: '', budget: '',
  timeline: '', project_stage: '',
  description: '', name: '', email: '',
})

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
const messages = ref([{ id: 1, sender: 'bot', text: chatTree.start.message, time: now() }])
const activeOptions = ref(chatTree.start.options)
const stepType      = computed(() => chatTree[currentStep.value]?.type ?? '')

const scroll = async () => {
  await nextTick()
  if (chatEl.value) chatEl.value.scrollTop = chatEl.value.scrollHeight
}

const stepFieldMap = {
  ask_platform: 'platform',
  ask_budget:   'budget',
  ask_timeline: 'timeline',
  ask_stage:    'project_stage',
}

const handleOption = (option) => {
  const field = stepFieldMap[currentStep.value] || 'service'
  lead[field] = option.value
  messages.value.push({ id: Date.now(), sender: 'user', text: option.text, time: now() })
  activeOptions.value = []
  advance(option.nextStep)
}

const handleInput = () => {
  const val = inputValue.value.trim()
  if (!val) return
  const step = chatTree[currentStep.value]
  lead[step.inputField] = val
  messages.value.push({ id: Date.now(), sender: 'user', text: val, time: now() })
  inputValue.value = ''
  if (step.nextStep === 'submit_lead') sendEmail()
  else advance(step.nextStep)
}

const advance = (key) => {
  currentStep.value = key
  const step = chatTree[key]
  if (!step) return
  isTyping.value = true
  scroll()
  setTimeout(() => {
    isTyping.value = false
    const text = typeof step.message === 'function' ? step.message(lead.name) : step.message
    messages.value.push({ id: Date.now(), sender: 'bot', text, time: now() })
    if (step.type === 'buttons') activeOptions.value = step.options
    scroll()
  }, 1000)
}

const sendEmail = async () => {
  isTyping.value = true
  scroll()
  try {
    const res = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:     lead.name,
        from_email:    lead.email,
        service:       lead.service,
        platform:      lead.platform,
        budget:        lead.budget,
        timeline:      lead.timeline,
        project_stage: lead.project_stage,
        description:   lead.description,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    isTyping.value = false
    if (res.status === 200) {
      messages.value.push({ id: Date.now(), sender: 'bot', text: `✅ All done, ${lead.name}! Your details have been sent to our team. We'll get back to you within 24 hours.`, time: now() })
      currentStep.value = 'completed'
    }
  } catch (err) {
    console.error(err)
    isTyping.value = false
    messages.value.push({ id: Date.now(), sender: 'bot', text: '⚠️ Something went wrong. Please try again or email us directly.', time: now() })
  } finally {
    scroll()
  }
}
</script>

<style scoped>
/* ── chatbot design ── */
.chatbot-section {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(80px, 12vh, 140px) clamp(16px, 4vw, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
}

/* ── Eyebrow ── */
.chatbot-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 8px rgba(0, 255, 163, 0.6);
  animation: pulse-green 2s infinite;
}
.eyebrow-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #00ffa3;
}

/* ── Headings ── */
.chatbot-heading {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #fff;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  line-height: 1.1;
  width: 100%;
  transition: color var(--transition-speed);
}

.theme-light .chatbot-heading {
  color: #0f172a;
}
.chatbot-subheading {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 420px;
  transition: color var(--transition-speed);
}
.theme-light .chatbot-subheading {
  color: #475569;
}

/* ── Card ── */
.chatbot-card {
  width: 100%;
  background: #0a0a0a;
  border-radius: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 560px;
  outline: 1px solid rgba(255, 255, 255, 0.07);
}

/* ── Header ── */
.chatbot-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d0d0d;
  flex-shrink: 0;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 8px rgba(0, 255, 163, 0.7);
  animation: pulse-green 2s infinite;
  flex-shrink: 0;
}
.header-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1;
  text-align: center;
}
.header-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  margin: 4px 0 0;
  line-height: 1;
  text-align: center;
}

/* ── Messages ── */
.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scroll-behavior: smooth;
  background-color: #050505;
  background-image: radial-gradient(rgba(0, 255, 163, 0.025) 1px, transparent 1px);
  background-size: 22px 22px;
}
.chatbot-messages::-webkit-scrollbar { width: 3px; }
.chatbot-messages::-webkit-scrollbar-track { background: transparent; }
.chatbot-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

.msg-row { display: flex; margin: 4px 0; }
.msg-row--bot  { justify-content: flex-start; }
.msg-row--user { justify-content: flex-end; }

.msg-bubble {
  max-width: 88%;
  padding: 10px 16px;
  border-radius: 0;
  font-size: 13.5px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
.msg-text { flex: 1 1 auto; word-break: break-word; }
.msg-time {
  font-size: 10px;
  flex-shrink: 0;
  margin-left: auto;
  white-space: nowrap;
}

.msg-bubble--bot {
  background: #1c1c1e;
  color: #f0f0f0;
  border-bottom-left-radius: 0;
}
.msg-bubble--bot .msg-time { color: rgba(255, 255, 255, 0.35); }

.msg-bubble--user {
  background: #008f5f;
  color: #fff;
  border-bottom-right-radius: 0;
}
.msg-bubble--user .msg-time { color: rgba(255, 255, 255, 0.65); }

/* ── Typing dots ── */
.typing-dots {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 14px;
  background: #1c1c1e;
  border-bottom-left-radius: 0;
}
.typing-dots span {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  animation: bounce-dot 1.2s infinite;
}
.typing-dots span:nth-child(2) { animation-delay: 0.15s; }
.typing-dots span:nth-child(3) { animation-delay: 0.3s; }

/* ── Footer ── */
.chatbot-footer {
  padding: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d0d0d;
  flex-shrink: 0;
}

/* ── Options ── */
.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.option-btn {
  padding: 16px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
  color: #bbb;
  font-size: 11px;
  font-family: system-ui, -apple-system, sans-serif;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}
.option-btn:hover {
  border-color: #00ffa3;
  color: #00ffa3;
  background: rgba(0, 255, 163, 0.04);
}
.option-btn:active { transform: scale(0.97); }

/* ── Input row ── */
.input-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.chat-input {
  flex: 1;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
  color: #fff;
  font-size: 13.5px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}
.chat-input::placeholder { color: rgba(255, 255, 255, 0.2); }
.chat-input:focus { border-color: #00ffa3; }

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 0;
  border: none;
  background: #00ffa3;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s, background 0.15s;
}
.send-btn:hover  { background: #00e691; }
.send-btn:active { transform: scale(0.94); }

/* ── Completed ── */
.completed-msg {
  text-align: center;
  font-size: 13px;
  color: #00ffa3;
  font-weight: 500;
  padding: 10px 0;
  letter-spacing: 0.01em;
}

/* ── Keyframes ── */
@keyframes pulse-green {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(0,255,163,0.7); }
  50%       { opacity: 0.55; box-shadow: 0 0 4px rgba(0,255,163,0.2); }
}
@keyframes bounce-dot {
  0%, 80%, 100% { transform: translateY(0); }
  40%           { transform: translateY(-5px); }
}

/* ── Popup variant override (used only when embedded as a floating widget) ── */
.chatbot-section--popup {
  max-width: 100%;
  padding: 0;
  height: 100%;
}
.chatbot-section--popup .chatbot-eyebrow,
.chatbot-section--popup .chatbot-heading,
.chatbot-section--popup .chatbot-subheading {
  display: none;
}
.chatbot-section--popup .chatbot-card {
  height: 100%;
  outline: none;
}
</style>