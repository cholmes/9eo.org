/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakSelect, TweakToggle */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2a5fb8",
  "bg": "paper",
  "font": "geist",
  "decor": "on",
  "density": "comfortable"
}/*EDITMODE-END*/;

const ACCENTS = ["#2a5fb8", "#b8472a", "#1f6d4a", "#1a1815"];

function Tweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to <html>
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    // recompute a soft tint from accent
    const soft =
      t.bg === "dark"
        ? hexShade(t.accent, -0.55)
        : hexShade(t.accent, 0.78);
    root.style.setProperty("--accent-soft", soft);

    root.setAttribute("data-bg", t.bg);
    root.setAttribute("data-font", t.font);
    root.setAttribute("data-decor", t.decor);
    root.setAttribute("data-density", t.density);
  }, [t.accent, t.bg, t.font, t.decor, t.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent">
        <TweakColor
          label="Color"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={ACCENTS}
        />
      </TweakSection>

      <TweakSection title="Surface">
        <TweakRadio
          label="Background"
          value={t.bg}
          onChange={(v) => setTweak("bg", v)}
          options={[
            { value: "paper", label: "Paper" },
            { value: "white", label: "White" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </TweakSection>

      <TweakSection title="Type">
        <TweakSelect
          label="Font pairing"
          value={t.font}
          onChange={(v) => setTweak("font", v)}
          options={[
            { value: "geist", label: "Geist + Geist Mono" },
            { value: "plex", label: "IBM Plex Sans + Mono" },
            { value: "instrument", label: "Instrument Sans + JetBrains" },
          ]}
        />
      </TweakSection>

      <TweakSection title="Detail">
        <TweakRadio
          label="Cartographic decor"
          value={t.decor}
          onChange={(v) => setTweak("decor", v)}
          options={[
            { value: "on", label: "On" },
            { value: "off", label: "Off" },
          ]}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "comfortable", label: "Comfortable" },
            { value: "compact", label: "Compact" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// Lighten/darken a hex color by amount in [-1, 1]
function hexShade(hex, amt) {
  const c = hex.replace("#", "");
  const num = parseInt(c.length === 3 ? c.split("").map((x) => x + x).join("") : c, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  if (amt >= 0) {
    r = Math.round(r + (255 - r) * amt);
    g = Math.round(g + (255 - g) * amt);
    b = Math.round(b + (255 - b) * amt);
  } else {
    r = Math.round(r * (1 + amt));
    g = Math.round(g * (1 + amt));
    b = Math.round(b * (1 + amt));
  }
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

const root = ReactDOM.createRoot(document.getElementById("tweaks-mount"));
root.render(<Tweaks />);
