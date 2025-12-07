"use client";
import toast from "react-hot-toast";
import api from "./api";
import { useEffect, useState } from "react";
import {
  ArrowDownCircle,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { ArrowUpCircle } from "lucide-react";
import { Activity } from "lucide-react";
import { Trash } from "lucide-react";

type Transaction = {
  id: string;
  text: string;
  amount: number;
  created_at: string;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactions = async () => {
    try {
      const res = await api.get<Transaction[]>("transactions/");
      setTransactions(res.data);
      toast.success("transactions chargées");
    } catch (error) {
      console.error("erreur lors de chargement de transaction", error);
      toast.error("Erreur lors de chargement");
    }
  };
  const deleteTransactions = async (id: string) => {
    try {
      const res = await api.get<Transaction[]>("transactions/");
      setTransactions(res.data);
      toast.success("transactions chargées");
    } catch (error) {
      console.error("erreur lors de chargement de transaction", error);
      toast.error("Erreur lors de chargement");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTransactions();
    };

    fetchData();
  }, []);

  // on converti en number de chaque transaction
  const amounts = transactions.map((t) => Number(t.amount) || 0);
  const balance = amounts.reduce((acc, item) => acc + item, 0) || 0; // SI Y A PAS DES TRANSACTIONS ON LE MIS à 0 ;
  const income =
    amounts.filter((a) => a > 0).reduce((acc, item) => acc + item, 0) || 0;
  const expense =
    amounts.filter((a) => a < 0).reduce((acc, item) => acc + item, 0) || 0;
  const ration =
    income > 0 ? Math.min((Math.abs(expense) / income) * 100, 100) : 0;

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);

    return d.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-2/3 flex flex-col gap-4">
      <div className="flex justify-between rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5">
        <div className="flex flex-col gap-1">
          <div className="badge badge-soft">
            <Wallet className="w-4 h4" />
            Votre solde
          </div>
          <div className="stat-value">{balance.toFixed(0)} €</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="badge badge-soft badge-success">
            <ArrowUpCircle className="w-4 h4" />
            Revenus
          </div>
          <div className="stat-value">{income.toFixed(0)} €</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="badge badge-soft badge-error">
            <ArrowDownCircle className="w-4 h4" />
            Dépenses
          </div>
          <div className="stat-value">{expense.toFixed(0)} € </div>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5">
        <div className="flex flex-between items-center mb-1">
          <div className="badge badge-soft badge-info gap-1">
            <Activity className="w-4 h-4" />
            Dépenses / Revenus
          </div>

          <div>{ration.toFixed(0)}%</div>
        </div>
        <progress
          className="progress progress-warning w-full"
          value={ration}
          max="100"></progress>
      </div>
      {/* {buttont } */}

      <div className="rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Montant</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={t.id}>
                <th>{index + 1}</th>
                <td>{t.text}</td>
                <td>
                  {t.amount > 0 ? (
                    <TrendingUp className="inline w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="inline w-4 h-4 text-red-500 rotate-180" />
                  )}
                  {t.amount > 0 ? `+${t.amount}` : `-${t.amount}`} €
                </td>
                <td>{formatDate(t.created_at)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-circle btn-outline btn-error"
                    title="supprimer">
                    <Trash className="w-4 h4" />
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
