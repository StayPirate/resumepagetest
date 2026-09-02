import "./style.css";

const typed = document.getElementById("typed");
const full = typed ? (typed.textContent ?? "") : "";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function typeTerminal(): void {
  if (!typed) return;

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  const node = document.createTextNode("");

  typed.textContent = "";
  typed.appendChild(node);
  typed.appendChild(cursor);

  let i = 0;
  const step = () => {
    i += 1;
    node.data = full.slice(0, i);
    if (i < full.length) {
      const next = full[i];
      const delay = next === "\n" ? 350 : 22;
      window.setTimeout(step, delay);
    }
  };
  window.setTimeout(step, 800);
}

if (typed && !reducedMotion) {
  typeTerminal();
}

const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
if ("IntersectionObserver" in window && reveals.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );
  for (const el of reveals) observer.observe(el);
} else {
  for (const el of reveals) el.classList.add("visible");
}
