import { ref, onMounted, onUnmounted } from "vue";
const sections = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];
const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};
onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("navbar navbar-expand-lg fixed-top") },
        ...{ class: (({ 'bg-transparent': !__VLS_ctx.isScrolled, 'bg-light': __VLS_ctx.isScrolled })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container justify-content-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("navbar-nav") },
    });
    for (const [section] of __VLS_getVForSourceType((__VLS_ctx.sections))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: ("nav-item") },
            key: ((section)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ class: ("nav-link") },
        });
        (section);
    }
    ['navbar', 'navbar-expand-lg', 'fixed-top', 'bg-transparent', 'bg-light', 'container', 'justify-content-center', 'navbar-nav', 'nav-item', 'nav-link',];
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
            sections: sections,
            isScrolled: isScrolled,
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
