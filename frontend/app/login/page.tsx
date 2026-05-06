"use client";
import { useState } from "react";
import api from "../api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Section 2 : on envoie username + password, on reçoit access + refresh token
      const res = await api.post("auth/login/", form);
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      toast.success("Connexion réussie !");
      router.push("/");
    } catch {
      toast.error("Identifiants incorrects");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 flex flex-col gap-4">
      <div className="flex flex-col gap-1 items-center">
        <LogIn className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Connexion</h1>
        <p className="text-sm opacity-70">Accéder à vos transactions</p>
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
          Se connecter
        </button>
      </form>

      <p className="text-center text-sm">
        Pas encore de compte ?{" "}
        <Link href="/register" className="link link-primary">
          Créer un compte
        </Link>
      </p>
    </div>
  );
}
