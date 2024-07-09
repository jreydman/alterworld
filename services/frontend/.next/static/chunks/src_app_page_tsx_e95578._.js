(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_page_tsx_e95578._.js", {

"[project]/services/frontend/src/app/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.3_@babel+core@7.24.7_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$rain$2d$animation$40$1$2e$0$2e$4$2f$node_modules$2f$react$2d$rain$2d$animation$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-rain-animation@1.0.4/node_modules/react-rain-animation/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$type$2d$animation$40$3$2e$2$2e$0_prop$2d$types$40$15$2e$8$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-type-animation@3.2.0_prop-types@15.8.1_react-dom@18.3.1_react@18.3.1/node_modules/react-type-animation/dist/esm/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/services/frontend/src/assets/styles/indexPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$copyrightBanner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/frontend/src/components/copyrightBanner.component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$logotypeBanner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/frontend/src/components/logotypeBanner.component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/frontend/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$useMousePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/frontend/src/lib/useMousePosition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/services/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const commandlineEntryTempl = [
    'Server started on port 3000',
    'Database connected successfully',
    'GET\trequest received at /api/users',
    'POST\trequest received at /api/users',
    'User authenticated successfully',
    'Error\tUnable to connect to database',
    'Warning\tHigh memory usage detected',
    'Info\tServer uptime is 24 hours'
];
const HomePage = ()=>{
    _s();
    const initialEntries = new Array(3).fill(null).map(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$type$2d$animation$40$3$2e$2$2e$0_prop$2d$types$40$15$2e$8$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeAnimation"], {
            cursor: false,
            sequence: [
                ''
            ]
        }, Math.random(), false, {
            fileName: "[project]/services/frontend/src/app/page.tsx",
            lineNumber: 27,
            columnNumber: 14
        }, this));
    const [commandlineEntries, setCommandlineEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialEntries);
    const [progressLine, setProgressLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSubmited, setIsSubmited] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mousePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$useMousePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const addCommandlineEntry = ()=>{
        setCommandlineEntries((prevState)=>{
            const commandlineEntry = commandlineEntryTempl[Math.floor(Math.random() * commandlineEntryTempl.length)];
            let newState = [
                ...prevState
            ];
            const getSequenceOrSelf = (entry)=>entry.props ? entry.props.sequence[0] ?? entry : entry;
            if (newState.length >= 3) newState = newState.map(getSequenceOrSelf).slice(1);
            if (progressLine < 100) setProgressLine((prevState)=>{
                const increment = Math.floor(Math.random() * 10) + 1;
                return Math.min(prevState + increment, 100);
            });
            newState.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$type$2d$animation$40$3$2e$2$2e$0_prop$2d$types$40$15$2e$8$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeAnimation"], {
                cursor: false,
                sequence: [
                    commandlineEntry
                ]
            }, commandlineEntry, false, {
                fileName: "[project]/services/frontend/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 18
            }, this));
            return newState;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(addCommandlineEntry, 2000);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const x = (mousePosition.y - window.innerWidth / 2) * -0.005;
        const y = (mousePosition.x - window.innerHeight / 2) * -0.01;
        document.documentElement.style.setProperty('--movePos-x', `${x}deg`);
        document.documentElement.style.setProperty('--movePos-y', `${y}deg`);
    }, [
        mousePosition
    ]);
    const dashboardSectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const submitHandler = ()=>{
        dashboardSectionRef.current?.classList.remove('hidden');
        dashboardSectionRef.current?.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__section);
        dashboardSectionRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(()=>{
            setIsSubmited(true);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!isSubmited ? __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__section : 'hidden', __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__header)
            }, void 0, false, {
                fileName: "[project]/services/frontend/src/app/page.tsx",
                lineNumber: 77,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!isSubmited ? __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__section : 'hidden', __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__main),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__layersContainer),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__layer, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer__wallpaper)
                        }, void 0, false, {
                            fileName: "[project]/services/frontend/src/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$rain$2d$animation$40$1$2e$0$2e$4$2f$node_modules$2f$react$2d$rain$2d$animation$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__layer, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer__rain),
                            numDrops: 20
                        }, void 0, false, {
                            fileName: "[project]/services/frontend/src/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__layer, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer__logotype),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$logotypeBanner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/services/frontend/src/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/services/frontend/src/app/page.tsx",
                            lineNumber: 82,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__layer, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer__console),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].console),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "workspace"
                                        }, void 0, false, {
                                            fileName: "[project]/services/frontend/src/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: commandlineEntries.map((commandlineEntry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: commandlineEntry
                                                }, index, false, {
                                                    fileName: "[project]/services/frontend/src/app/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/services/frontend/src/app/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/services/frontend/src/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-20"
                                }, void 0, false, {
                                    fileName: "[project]/services/frontend/src/app/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: progressLine,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].console__progressBar
                                }, void 0, false, {
                                    fileName: "[project]/services/frontend/src/app/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/services/frontend/src/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__layer, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer__submitBar),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: progressLine != 100 ? `secondary` : `default`,
                                // disabled={progressLine != 100}
                                onClick: submitHandler,
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/services/frontend/src/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/services/frontend/src/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/services/frontend/src/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/services/frontend/src/app/page.tsx",
                lineNumber: 78,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(!isSubmited ? [
                    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__section,
                    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__footer
                ] : 'hidden'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$components$2f$copyrightBanner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/services/frontend/src/app/page.tsx",
                    lineNumber: 109,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/services/frontend/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dashboardSectionRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$assets$2f$styles$2f$indexPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page__section, 'hidden'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$3_$40$babel$2b$core$40$7$2e$24$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "dashboard"
                }, void 0, false, {
                    fileName: "[project]/services/frontend/src/app/page.tsx",
                    lineNumber: 112,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/services/frontend/src/app/page.tsx",
                lineNumber: 111,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
};
_s(HomePage, "ZHrIx/R3V/+NDh4bDAZNp65PF5U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$frontend$2f$src$2f$lib$2f$useMousePosition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_refresh__.register(_c, "HomePage");

})()),
"[project]/services/frontend/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_app_page_tsx_e95578._.js.map