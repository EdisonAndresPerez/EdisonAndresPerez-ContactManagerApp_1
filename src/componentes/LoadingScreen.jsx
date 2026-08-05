const GLOBANT_LOADING_GIF =
  "https://www.globant.com/themes/custom/globant_corp_theme/images/2019/Loading-Globant.gif";

export function LoadingScreen() {
  return (
    <div className="loading_screen" role="status" aria-live="polite">
      <img
        src={GLOBANT_LOADING_GIF}
        alt="Cargando"
        className="loading_screen_gif"
      />
      <span className="loading_screen_text">Cargando...</span>
    </div>
  );
}
