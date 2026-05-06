"use client";
import toast from "react-hot-toast";
import api from "./api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Activity,
  Trash,
  TrendingDown,
  TrendingUp,
  Wallet,
  LogOut,
  Plus,
  Pencil,
} from "lucide-react";

type Transaction = {
  id: string;
  text: string;
  amount: number;
  created_at: string;
};

// Les 3 états possibles du filtre
type Filter = "all" | "income" | "expense";

export default function Home() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [form, setForm] = useState({ text: "", amount: "" });

  // --- Filtrage ---
  const [filter, setFilter] = useState<Filter>("all");

  // --- Édition ---
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);
  const [editForm, setEditForm] = useState({ text: "", amount: "" });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/login");
      return;
    }
    getTransactions();
  }, []);

  const getTransactions = async () => {
    try {
      const res = await api.get<Transaction[]>("transactions/");
      setTransactions(res.data);
    } catch {
      toast.error("Erreur lors du chargement");
    }
  };

  const addTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("transactions/", {
        text: form.text,
        amount: Number(form.amount),
      });
      setForm({ text: "", amount: "" });
      toast.success("Transaction ajoutée");
      getTransactions();
    } catch {
      toast.error("Erreur lors de l'ajout");
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      await api.delete(`transactions/${id}/`);
      toast.success("Transaction supprimée");
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    } catch {
      toast.error("Erreur lors de la suppression");
    }
  };

  // Ouvre le modal et pré-remplit le formulaire avec les valeurs actuelles
  const openEdit = (t: Transaction) => {
    setEditingTransaction(t);
    setEditForm({ text: t.text, amount: String(t.amount) });
  };

  const closeEdit = () => setEditingTransaction(null);

  // Envoie un PATCH au backend avec les nouvelles valeurs
  const saveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTransaction) return;
    try {
      await api.patch(`transactions/${editingTransaction.id}/`, {
        text: editForm.text,
        amount: Number(editForm.amount),
      });
      toast.success("Transaction modifiée");
      closeEdit();
      getTransactions();
    } catch {
      toast.error("Erreur lors de la modification");
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.push("/login");
  };

  // Stats calculées sur TOUTES les transactions (pas filtrées)
  const amounts = transactions.map((t) => Number(t.amount) || 0);
  const balance = amounts.reduce((acc, item) => acc + item, 0) || 0;
  const income =
    amounts.filter((a) => a > 0).reduce((acc, item) => acc + item, 0) || 0;
  const expense =
    amounts.filter((a) => a < 0).reduce((acc, item) => acc + item, 0) || 0;
  const ratio =
    income > 0 ? Math.min((Math.abs(expense) / income) * 100, 100) : 0;

  // Filtrage côté frontend — on filtre juste ce qu'on affiche
  const filteredTransactions = transactions.filter((t) => {
    if (filter === "income") return Number(t.amount) > 0;
    if (filter === "expense") return Number(t.amount) < 0;
    return true;
  });

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-2/3 flex flex-col gap-4">

      {/* Déconnexion */}
      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-outline btn-error gap-1"
          onClick={logout}>
          <LogOut className="w-4 h-4" />
          Déconnexion
        </button>
      </div>

      {/* Solde / Revenus / Dépenses */}
      <div className="flex justify-between rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5">
        <div className="flex flex-col gap-1">
          <div className="badge badge-soft">
            <Wallet className="w-4 h-4" />
            Votre solde
          </div>
          <div className="stat-value">{balance.toFixed(0)} €</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="badge badge-soft badge-success">
            <ArrowUpCircle className="w-4 h-4" />
            Revenus
          </div>
          <div className="stat-value">{income.toFixed(0)} €</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="badge badge-soft badge-error">
            <ArrowDownCircle className="w-4 h-4" />
            Dépenses
          </div>
          <div className="stat-value">{expense.toFixed(0)} €</div>
        </div>
      </div>

      {/* Barre ratio */}
      <div className="rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5">
        <div className="flex justify-between items-center mb-1">
          <div className="badge badge-soft badge-info gap-1">
            <Activity className="w-4 h-4" />
            Dépenses / Revenus
          </div>
          <div>{ratio.toFixed(0)}%</div>
        </div>
        <progress
          className="progress progress-warning w-full"
          value={ratio}
          max="100"
        />
      </div>

      {/* Formulaire d'ajout */}
      <form
        onSubmit={addTransaction}
        className="rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5 p-5 flex gap-3">
        <input
          type="text"
          className="input input-bordered flex-1"
          placeholder="Description (ex: Loyer)"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          required
        />
        <input
          type="number"
          className="input input-bordered w-36"
          placeholder="Montant (€)"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-primary gap-1">
          <Plus className="w-4 h-4" />
          Ajouter
        </button>
      </form>

      {/* Tableau + filtres */}
      <div className="rounded-2xl border-2 border-warning/10 border-dashed bg-warning/5">

        {/* Boutons de filtrage */}
        <div className="flex gap-2 p-4 border-b border-warning/10">
          <button
            className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setFilter("all")}>
            Tous ({transactions.length})
          </button>
          <button
            className={`btn btn-sm ${filter === "income" ? "btn-success" : "btn-outline btn-success"}`}
            onClick={() => setFilter("income")}>
            <ArrowUpCircle className="w-3 h-3" />
            Revenus ({transactions.filter((t) => Number(t.amount) > 0).length})
          </button>
          <button
            className={`btn btn-sm ${filter === "expense" ? "btn-error" : "btn-outline btn-error"}`}
            onClick={() => setFilter("expense")}>
            <ArrowDownCircle className="w-3 h-3" />
            Dépenses ({transactions.filter((t) => Number(t.amount) < 0).length})
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Montant</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center opacity-50 py-6">
                  Aucune transaction
                </td>
              </tr>
            )}
            {filteredTransactions.map((t, index) => (
              <tr key={t.id}>
                <th>{index + 1}</th>
                <td>{t.text}</td>
                <td>
                  {t.amount > 0 ? (
                    <TrendingUp className="inline w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="inline w-4 h-4 text-red-500 mr-1" />
                  )}
                  {t.amount > 0 ? `+${t.amount}` : `${t.amount}`} €
                </td>
                <td>{formatDate(t.created_at)}</td>
                <td className="flex gap-1">
                  {/* Bouton édition */}
                  <button
                    className="btn btn-sm btn-circle btn-outline btn-info"
                    title="Modifier"
                    onClick={() => openEdit(t)}>
                    <Pencil className="w-4 h-4" />
                  </button>
                  {/* Bouton suppression */}
                  <button
                    className="btn btn-sm btn-circle btn-outline btn-error"
                    title="Supprimer"
                    onClick={() => deleteTransaction(t.id)}>
                    <Trash className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal d'édition — visible seulement si editingTransaction est défini */}
      {editingTransaction && (
        <div className="modal modal-open">
          <div className="modal-box flex flex-col gap-4">
            <h3 className="font-bold text-lg">Modifier la transaction</h3>

            <form onSubmit={saveEdit} className="flex flex-col gap-3">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Description</legend>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={editForm.text}
                  onChange={(e) =>
                    setEditForm({ ...editForm, text: e.target.value })
                  }
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Montant (€)</legend>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  value={editForm.amount}
                  onChange={(e) =>
                    setEditForm({ ...editForm, amount: e.target.value })
                  }
                  required
                />
              </fieldset>

              <div className="modal-action mt-0">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={closeEdit}>
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">
                  Sauvegarder
                </button>
              </div>
            </form>
          </div>

          {/* Clic en dehors du modal = fermer */}
          <div className="modal-backdrop" onClick={closeEdit} />
        </div>
      )}
    </div>
  );
}
