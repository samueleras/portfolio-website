import * as React from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Nach oben scrollen"
      onClick={handleClick}
      className={
        "fixed bottom-5 right-5 z-50 rounded-[8px] border-2 border-white bg-secondary/80 px-4 py-2 text-sm text-textPrimary shadow-md backdrop-blur transition " +
        (isVisible ? "opacity-100" : "pointer-events-none opacity-0")
      }
    >
      ↑ nach oben
    </button>
  );
}
