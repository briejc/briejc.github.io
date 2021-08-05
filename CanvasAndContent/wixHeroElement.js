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
    .hero-box {
    	position: relative;
	left: -20px;
	top: -10px;
    }
}
@media screen and (min-device-width: 480px) {
    .hero-box.mobile {
        display:none !important;
    }
    .hero-box.desktop {
        display: flex;
        justify-content: center;
        min-width: 993px;    
    }
    .picture {
        position: relative;
        width: 331px;
        height: 444px;
    }
    .empty:after {
        content: '';
        display: block;
        background: url("https://briejc.github.io/CanvasAndContent/hero_empty_frame.png") no-repeat top left transparent;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        position: absolute;
        z-index: 10;
    }
    .logo {
        background-image: url("https://briejc.github.io/CanvasAndContent/hero_logo_frame.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .video-content {
    /*    padding:59px 35px;*/
        position: absolute;
        top: 83px; /* Adjust top position */
        left: 55px; /* Adjust left position */
        z-index: 5;
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
