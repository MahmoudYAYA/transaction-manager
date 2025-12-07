(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// le front contact le backend port(3000) contact le backend port(800) grace à ce axios et NEXT_PUBLIC_API_URL
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:8000/") + "api/"
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$app$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/circle-arrow-down.js [app-client] (ecmascript) <export default as ArrowDownCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-client] (ecmascript) <export default as ArrowUpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const getTransactions = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$app$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("transactions/");
            setTransactions(res.data);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("transactions chargées");
        } catch (error) {
            console.error("erreur lors de chargement de transaction", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Erreur lors de chargement");
        }
    };
    const deleteTransactions = async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$app$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("transactions/");
            setTransactions(res.data);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("transactions chargées");
        } catch (error) {
            console.error("erreur lors de chargement de transaction", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Erreur lors de chargement");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchData = {
                "Home.useEffect.fetchData": async ()=>{
                    await getTransactions();
                }
            }["Home.useEffect.fetchData"];
            fetchData();
        }
    }["Home.useEffect"], []);
    // on converti en number de chaque transaction
    const amounts = transactions.map((t)=>Number(t.amount) || 0);
    const balance = amounts.reduce((acc, item)=>acc + item, 0) || 0; // SI Y A PAS DES TRANSACTIONS ON LE MIS à 0 ;
    const income = amounts.filter((a)=>a > 0).reduce((acc, item)=>acc + item, 0) || 0;
    const expense = amounts.filter((a)=>a < 0).reduce((acc, item)=>acc + item, 0) || 0;
    const ration = income > 0 ? Math.min(Math.abs(expense) / income * 100, 100) : 0;
    const formatDate = (dateString)=>{
        const d = new Date(dateString);
        return d.toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-2/3 flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge badge-soft",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        className: "w-4 h4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    "Votre solde"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: [
                                    balance.toFixed(0),
                                    " €"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge badge-soft badge-success",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircle$3e$__["ArrowUpCircle"], {
                                        className: "w-4 h4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    "Revenus"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: [
                                    income.toFixed(0),
                                    " €"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge badge-soft badge-error",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownCircle$3e$__["ArrowDownCircle"], {
                                        className: "w-4 h4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    "Dépenses"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                children: [
                                    expense.toFixed(0),
                                    " € "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-between items-center mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge badge-soft badge-info gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    "Dépenses / Revenus"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    ration.toFixed(0),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("progress", {
                        className: "progress progress-warning w-full",
                        value: ration,
                        max: "100"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "table",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "#"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Montant"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                transactions.map((t, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: t.text
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    t.amount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "inline w-4 h-4 text-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                        className: "inline w-4 h-4 text-red-500 rotate-180"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    t.amount > 0 ? `+${t.amount}` : `-${t.amount}`,
                                                    " €"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: formatDate(t.created_at)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-sm btn-circle btn-outline btn-error",
                                                    title: "supprimer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                        className: "w-4 h4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Hart Hagerty"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Desktop Support Technician"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Purple"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Brice Swyre"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Tax Accountant"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IIA$2f$BTS$2d$2025$2d$2026$2f$JS$2f$Online_tuto$2f$full_stack$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: "Red"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(Home, "tSC852gg/pAfbHr6jYEePbawnUU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_IIA_BTS-2025-2026_JS_Online_tuto_full_stack_frontend_app_3cd38cbd._.js.map