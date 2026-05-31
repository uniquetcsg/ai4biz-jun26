import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin/modulos/novo")({
  head: () => ({
    meta: [
      { title: "Criar Módulo — Painel Admin" },
      { name: "description", content: "Crie um novo módulo do curso." },
      { property: "og:title", content: "Criar Módulo — Painel Admin" },
      { property: "og:description", content: "Crie um novo módulo do curso." },
    ],
  }),
  component: NovoModuloPage,
});

function NovoModuloPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Admin</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Criar Tópico</h1>
          <p className="mt-2 text-base text-muted-foreground">Adicione um novo tópico ao curso</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/admin" });
          }}
          className="flex flex-col gap-5"
        >
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do tópico"
            className="h-16 w-full bg-primary px-6 text-lg text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
          />
          <textarea
            required
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do tópico"
            className="w-full resize-none bg-primary px-6 py-5 text-lg text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
          />
          <button
            type="submit"
            className="h-16 w-full bg-segment px-6 text-lg font-bold uppercase tracking-wide text-segment-foreground hover:opacity-90"
          >
            Criar Tópico
          </button>
        </form>
      </div>
    </div>
  );
}