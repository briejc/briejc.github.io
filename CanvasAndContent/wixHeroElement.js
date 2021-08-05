class CanvasHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="hero-box mobile">
            <video autoplay muted loop class="video-content">
                <source src="https://briejc.github.io/CanvasAndContent/hero_mobile.mp4" type="video/mp4">
            </video>
        </div>
        <div class="hero-box desktop">
            <div class="picture empty">
                <video autoplay muted loop class="video-content">
                    <source src="https://briejc.github.io/CanvasAndContent/teal_smoke_1.mp4" type="video/mp4">
                </video>
            </div>
            <div class="picture logo"></div>
            <div class="picture empty">
                <video autoplay muted loop class="video-content">
                    <source src="https://briejc.github.io/CanvasAndContent/teal_smoke_2.mp4" type="video/mp4">
                </video>
            </div>
        </div>   `;
  }
}
customElements.define('canvas-hero', CanvasHero);