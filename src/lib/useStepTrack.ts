import { useEffect, useRef, useState } from "react";

// Le défilement par étapes n'est actif que sur grand écran et si l'utilisateur
// accepte les animations ; sinon la section garde sa mise en page classique.
export const STEP_QUERY =
  "(min-width: 900px) and (prefers-reduced-motion: no-preference)";

// Vrai quand le mode étapes s'applique (suit les changements de taille).
export function useStepMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(STEP_QUERY);
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return enabled;
}

// Section « à étapes » (Parcours, Services) : une piste haute dont le contenu
// reste collé à l'écran ; la position de scroll dans la piste donne l'étape
// courante. La section porte data-steps : Animations y fait avancer la molette
// d'une étape par geste, aux positions utilisées ici par goTo.
export function useStepTrack(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const enabled = useStepMode();
  const [active, setActive] = useState(0);

  // Étape courante d'après la position de scroll dans la piste.
  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;
        const scrollable = track.offsetHeight - window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, -track.getBoundingClientRect().top / scrollable),
        );
        setActive(Math.min(count - 1, Math.floor(progress * count)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, count]);

  // Fait défiler la page jusqu'à l'étape demandée.
  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const scrollable = track.offsetHeight - window.innerHeight;
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      // mêmes positions que le défilement par étapes (cf. Animations)
      top: top + (index / Math.max(1, count - 1)) * scrollable,
      behavior: "smooth",
    });
  };

  return { trackRef, enabled, active, goTo };
}
