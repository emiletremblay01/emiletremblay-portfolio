"use client";
export default function PrintButton() {
  return (
    <button onClick={() => window.print()}>
      Imprimer / enregistrer en PDF ↗
    </button>
  );
}
