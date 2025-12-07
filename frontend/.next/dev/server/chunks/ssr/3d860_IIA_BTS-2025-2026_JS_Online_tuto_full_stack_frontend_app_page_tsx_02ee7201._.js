module.exports = [
"[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import toast from "react-hot-toast";
import api from "./api";
import { useEffect, useState } from "react";
import { Wallet } from "lucide-react";
export default function Home() {
    const [transactions, setTransactions] = useState([]);
    const getTransactions = async ()=>{
        try {
            const res = await api.get("transactions/");
            setTransactions(res.data);
            toast.success("transactions chargées");
        } catch (error) {
            console.error("erreur lors de chargement de transaction", error);
            toast.error("Erreur lors de chargement");
        }
    };
    useEffect(()=>{
        const fetchData = async ()=>{
            await getTransactions();
        };
        fetchData();
    }, []);
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
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "w-2/3 flex flex-column gap-4",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "flex justify-between rounded-2xl border-warning/10 border-dashed bg-warning/5 p-5",
            children: /*#__PURE__*/ _jsxDEV("div", {
                className: "flex flex-column gap-1",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                " ",
                                /*#__PURE__*/ _jsxDEV(Wallet, {
                                    className: "w-4 h4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "stat-value",
                        children: [
                            balance.toFixed(2),
                            " €"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IIA/BTS-2025-2026/JS/Online_tuto/full_stack/frontend/app/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=3d860_IIA_BTS-2025-2026_JS_Online_tuto_full_stack_frontend_app_page_tsx_02ee7201._.js.map