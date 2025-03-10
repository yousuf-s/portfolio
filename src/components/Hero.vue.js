import { ref, onMounted } from "vue";
const typingText = ref("");
const roles = ["Front-End Developer", "Vue.js Enthusiast", "Software Engineer"];
let index = 0;
const typeEffect = async () => {
    while (true) {
        for (let i = 0; i < roles[index].length; i++) {
            typingText.value = roles[index].slice(0, i + 1);
            await new Promise(r => setTimeout(r, 100));
        }
        await new Promise(r => setTimeout(r, 1000));
        for (let i = roles[index].length; i >= 0; i--) {
            typingText.value = roles[index].slice(0, i);
            await new Promise(r => setTimeout(r, 50));
        }
        index = (index + 1) % roles.length;
    }
};
onMounted(() => typeEffect());
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("home d-flex flex-column justify-content-center align-items-center text-center bg-light vh-100") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("word-cloud position-absolute w-100 h-100") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("display-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-flex align-items-center justify-content-center vw-100 h-100 position-relative") },
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("position-absolute blinking-cursor") },
    });
    (__VLS_ctx.typingText);
    ['home', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'text-center', 'bg-light', 'vh-100', 'word-cloud', 'position-absolute', 'w-100', 'h-100', 'display-4', 'd-flex', 'align-items-center', 'justify-content-center', 'vw-100', 'h-100', 'position-relative', 'position-absolute', 'blinking-cursor',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            typingText: typingText,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
