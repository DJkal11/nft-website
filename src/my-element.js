
import { LitElement, html, css } from "lit-element";

class AudioPlayer extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      isPlaying: { type: Boolean },
      isMuted: { type: Boolean },
      file: { type: String },
      audio: { type: Object },
      duration: { type: Number },
      volume: { type: Number },
      events: { type: Array, attribute: false },
      currentTime: { type: Number }
    };
  }

  constructor() {
    super();
    this.title = "Retro Shine";
    this.isPlaying = false;
    this.currentTime = 0;
    this.file =
      "https://cdn.discordapp.com/attachments/425064525339951106/578429540804853760/Retro_Shine.mp3";
    this.audio = new Audio(this.file);

    this.setAudioEventListeners();
  }

  connectedCallback() {
    super.connectedCallback();

    for (const event of this.events) {
      this.audio.addEventListener(event.name, event.onEvent, false);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    for (const event of this.events) {
      this.audio.removeEventListener(event.name, event.onEvent, false);
    }
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === "file") {
      this.audio.pause();
      this.isPlaying = false;
      this.audio = new Audio(newval);
      this.audio.load();
      this.connectedCallback();
    }
    console.log("attribute change: ", name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }

  setAudioEventListeners() {
    this.events = [
      {
        name: "loadeddata",
        onEvent: () => {
          this.duration = this.audio.duration;
          this.audio.volume = 0.75;
        }
      },
      {
        name: "ended",
        onEvent: () => {
          this.audio.currentTime = 0;
          this.isPlaying = false;
        }
      },
      {
        name: "timeupdate",
        onEvent: () => (this.currentTime = this.audio.currentTime)
      },
      {
        name: "volumechange",
        onEvent: () => (this.volume = this.audio.volume)
      }
    ];
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) this.audio.play();
    if (!this.isPlaying) this.audio.pause();
  }

  toTimecode(time) {
    const num = Math.floor(time);
    return `${Math.floor(num / 60)}:${String(num % 60).padStart(2, "0")}`;
  }

  setTime(e) {
    const percentage = this.getBarPercentage(e, "timeline");
    const seconds = Math.floor(percentage * this.duration);

    this.audio.currentTime = seconds;
  }

  setVolume(e) {
    const percentage = this.getBarPercentage(e, "volume");

    this.audio.volume = percentage;
  }

  getBarPercentage(e, className) {
    // gets the percentage of a bar (or box) clicked on the X plane
    const bar =
      e.target.className === className ? e.target : e.target.parentElement;
    const rect = bar.getBoundingClientRect();
    const clientPos = e.clientX - rect.x;

    return clientPos / rect.width;
  }

  toggleSoundMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
  }

  render() {
    return html`
      <div class="audio-player">
        <div class="timeline" @click="${this.setTime}">
          <div
            class="progress-bar"
            style="width: ${(this.currentTime / this.duration) * 100}%"
          ></div>
        </div>
        <div class="body">
          <div class="play-container">
            <div
              class="${!this.isPlaying ? "play" : "pause"} button"
              @click="${this.togglePlay}"
            ></div>
          </div>
          <div class="text-container">
            <div class="title">${this.title}</div>
            <div class="duration">
              ${this.toTimecode(this.currentTime)} /
              ${this.toTimecode(this.duration)}
            </div>
          </div>
          <div class="sound-container">
            <div class="volume" @click="${this.setVolume}">
              <div
                class="volume-slider"
                style="width: ${this.volume * 100}%"
              ></div>
            </div>
            <div class="sound-icon-container" @click="${this.toggleSoundMute}">
              <div
                class="sound button ${this.isMuted ? "sound-off" : "sound-on"}"
              ></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 50px;
        font-size: 14px;
        --progress-bar-color: coral;
        --volume-slider-color: coral;
        --volume-slider-bg: white;
        --background-color: #444;
        --text-color: white;
        box-shadow: 2px 2px 5px 0 #0004;
      }
      .audio-player {
        display: grid;
        grid-template-rows: 7px auto;
        height: 100%;
        background: var(--background-color);
        color: var(--text-color);
      }
      .body {
        padding: 0 10px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 40px auto 40px;
        align-items: center;
        justify-items: center;
      }

      .timeline {
        background: white;
        cursor: pointer;
      }
      .progress-bar {
        background: var(--progress-bar-color);
        height: 100%;
        width: 0%;
        transition: 0.1s;
      }

      .text-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .button {
        cursor: pointer;
      }

      .play {
        border: 7px solid transparent;
        border-left: 12px solid #fff;
        position: relative;
        right: -4px;
      }

      .pause:before,
      .pause:after {
        content: "";
        position: absolute;
        width: 3px;
        top: 0;
        bottom: 0;
        background: #fff;
      }
      .pause {
        height: 13px;
        width: 11px;
        position: relative;
      }
      .pause:before {
        left: 0;
      }
      .pause:after {
        right: 0;
      }

      .sound-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .sound-container:hover .volume {
        width: 100px;
      }

      .volume {
        cursor: pointer;
        background: var(--volume-slider-bg);
        position: absolute;
        right: 35px;
        transition: 0.25s;
        height: 15px;
        width: 0;
        overflow: hidden;
      }
      .volume-slider {
        background: var(--volume-slider-color);
        height: 100%;
        width: 24%;
      }

      .sound-icon-container {
        width: 25px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sound {
        transform: scale(0.75);
        border: 6px solid transparent;
        border-right-color: #fff;
        border-left: none;
        padding: 6px 3px;
        box-shadow: inset 4px 0 #fff;
      }
      .sound.sound-on:after {
        content: "";
        border-radius: 50%;
        border: 7px double transparent;
        border-right-color: #fff;
        position: absolute;
        right: -18px;
        top: -6px;
        width: 10px;
        height: 10px;
      }
      .sound.sound-off:before,
      .sound.sound-off:after {
        content: "";
        position: absolute;
        right: -15px;
        top: 1px;
        width: 2px;
        height: 9px;
        background: #fff;
      }
      .sound.sound-off:before {
        transform: rotate(45deg);
      }
      .sound.sound-off:after {
        transform: rotate(-45deg);
      }
    `;
  }
}

customElements.define("audio-player", AudioPlayer);