class CanvasHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<style>
.hero-box {
    padding: 0px;
    margin: 0px;
    width: 100%;
}
@media screen and (max-device-width: 480px)  {
    .hero-box.desktop {
        display:none !important;
    }
    .video-content {
        width: 100%;
        height: 100%; 
        overflow: hidden;
        object-fit: cover;
    }
}
@media screen and (min-device-width: 480px) {
    .hero-box.mobile {
        display:none !important;
    }
    .hero-box.desktop {
        display: flex;
        justify-content: center;
        /*max-width: 2400px; */
        max-width: calc(2.5 * 100vh);
        margin: auto;
        position: relative;
        left: 0px;
        top: 0px;
    }
    .picture {
        position: relative;
        width: 33vw;
        height: max(98vh,420px);
        min-height: 420px;
        min-width: 320px;
    
    }
    .empty:after {
        content: '';
        display: block;
        background: url("https://briejc.github.io/CanvasAndContent/hero_empty_frame.png") no-repeat center top transparent;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        position: absolute;
        z-index: 10;
        background-size: contain;

    }
    .logo {
        background: url("https://briejc.github.io/CanvasAndContent/hero_logo_frame.png") no-repeat center top transparent;
        background-size: contain;
    }
    .video-content {
        position: absolute;
        z-index: 5;
        top: min(8vw,calc(2.5 * 100vh * .07));
        left: 17%;
        z-index: 5;
        width: 66%;
    }
}
	</style>
        <div class="hero-box mobile">
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
        </div>      `;
  }
}
customElements.define('canvas-hero', CanvasHero);