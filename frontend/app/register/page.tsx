"use client";
import { useState } from "react";
import api from "../api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Section 2 : crée le compte, puis redirige vers login
      await api.post("auth/register/", form);
      toast.success("Compte créé ! Vous pouvez vous connecter.");
      router.push("/login");
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { username?: string[] } } })?.response
          ?.data?.username?.[0] ?? "Erreur lors de l'inscription";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 flex flex-col gap-4">
      <div className="flex flex-col gap-1 items-center">
        <UserPlus className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Créer un compte</h1>
        <p className="text-sm opacity-70">Gérez vos finances personnelles</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Nom d&apos;utilisateur</legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="mon_nom"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email (optionnel)</legend>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="moi@exemple.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Mot de passe</legend>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </fieldset>

        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
          disabled={loading}>
          S&apos;inscrire
        </button>
      </form>

      <p className="text-center text-sm">
        Déjà un compte ?{" "}
        <Link href="/login" className="link link-primary">
          Se connecter
        </Link>
      </p>
    </div>
  );
}
