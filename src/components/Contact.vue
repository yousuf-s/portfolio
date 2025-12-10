<template>
  <section id="contact" class="py-24 bg-gray-100 text-gray-800">
    <div class="container mx-auto px-6 md:px-16 lg:px-32">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h2>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
          Feel free to reach out for collaborations, job opportunities, or just
          to say hi!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mt-12">
        <!-- Contact Details -->
        <div class="p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">
            Contact Info
          </h3>
          <ul class="space-y-4 text-gray-600">
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail w-5 h-5 text-gray-500 mr-3"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                href="mailto:s.yousuf1235@gmail.com"
                class="hover:text-gray-900 transition duration-300"
                >s.yousuf1235@gmail.com</a
              >
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone w-5 h-5 text-gray-500 mr-3"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a
                href="tel:+917416051235"
                class="hover:text-gray-900 transition duration-300"
                >+91 7416051235</a
              >
            </li>
            <li class="flex items-center hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin w-5 h-5 text-gray-500 mr-3"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <a
                href="https://www.linkedin.com/in/yousuf-syed-dev/"
                target="_blank"
                class="transition duration-300"
                >Syed Yousuf</a
              >
            </li>
            <li class="flex items-center hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin w-5 h-5 text-gray-500 mr-3"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a
                href="https://www.google.com/maps?q=Hyderabad,India"
                target="_blank"
                class="transition duration-300"
              >
                Hyderabad, India
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Form -->
        <div class="p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">
            Send a Message
          </h3>
          <form @submit.prevent="handleSubmit" aria-label="Contact Form">
            <div class="mb-4">
              <label for="name" class="block text-gray-900 mb-1">Name</label>
              <input
                id="name"
                type="text"
                v-model="form.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-900 mb-1">Email</label>
              <input
                id="email"
                type="email"
                v-model="form.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-900 mb-1"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
              :disabled="loading"
            >
              {{ loading ? "Sending..." : "Send Message" }}
            </button>

            <p v-if="successMessage" class="text-green-600 mt-3">
              {{ successMessage }}
            </p>
            <p v-if="errorMessage" class="text-red-600 mt-3">
              {{ errorMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");
const MAX_SENDS = 3;

const sendCount = ref(0);

// Load existing count from localStorage
onMounted(() => {
  const stored = localStorage.getItem("contact_send_count");
  sendCount.value = stored ? Number(stored) : 0;
});

const handleSubmit = () => {
  // Check send limit
  if (sendCount.value >= MAX_SENDS) {
    errorMessage.value = "You have reached the maximum number of messages (3).";
    return;
  }

  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  const serviceID = "service_dpirxvl";
  const templateID = "template_hwshw7o";
  const publicKey = "fXkqsWbB5PERUkvza";

  emailjs
    .send(serviceID, templateID, form.value, publicKey)
    .then(() => {
      successMessage.value = "Your message has been sent successfully!";
      loading.value = false;

      // Increase counter
      sendCount.value++;
      localStorage.setItem("contact_send_count", String(sendCount.value));

      // Clear form
      form.value = { name: "", email: "", message: "" };
    })
    .catch(() => {
      errorMessage.value = "Failed to send message. Please try again later.";
      loading.value = false;
    })
    .finally(() => {
      const timeout = setTimeout(() => {
        successMessage.value = "";
        errorMessage.value = "";
        clearTimeout(timeout);
      }, 3000);
    });
};
</script>
