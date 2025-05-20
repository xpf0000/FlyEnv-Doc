class ImagePreview {
  static html = `<style>
    .x-image-preview-overflow-hide {
       overflow: hidden !important;
    }
    .x-image-viewer__wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999999;
    }
    .x-image-viewer__mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: .5;
      background: #000;
    }
    .x-image-viewer__btn {
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      opacity: .8;
      cursor: pointer;
      box-sizing: border-box;
      -webkit-user-select: none;
      user-select: none;
    }
    .x-image-viewer__close {
      width: 44px;
      height: 44px;
      top: 40px;
      right: 40px;
      font-size: 24px;
      color: #fff;
      background-color: #606266;
      border-color: #fff;
    }
    .x-image-viewer__wrapper .x-icon {
      --color: inherit;
      height: 1em;
      width: 1em;
      line-height: 1em;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      fill: currentColor;
      color: inherit;
      font-size: inherit;
      cursor: pointer;
    }
    .x-image-viewer__wrapper .x-icon svg {
      height: 1em;
      width: 1em;
    }
    .x-image-viewer__prev {
      top: 50%;
      transform: translateY(-50%);
      left: 40px;
      width: 44px;
      height: 44px;
      font-size: 24px;
      color: #fff;
      background-color: #606266;
      border-color: #fff;
    }
    .x-image-viewer__next {
      top: 50%;
      transform: translateY(-50%);
      right: 40px;
      text-indent: 2px;
      width: 44px;
      height: 44px;
      font-size: 24px;
      color: #fff;
      background-color: #606266;
      border-color: #fff;
    }
    .x-image-viewer__actions {
      left: 50%;
      bottom: 30px;
      transform: translate(-50%);
      width: 282px;
      height: 44px;
      padding: 0 23px;
      background-color: #606266;
      border-color: #fff;
      border-radius: 22px;
    }
    .x-image-viewer__actions__inner {
      width: 100%;
      height: 100%;
      cursor: default;
      font-size: 23px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .x-image-viewer__canvas {
      position: static;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-user-select: none;
      user-select: none;
    }
    .x-image-viewer__canvas .x-image-viewer__img {
        position: relative;
    }
  </style>
  <div tabindex="-1" class="x-image-viewer__wrapper">
  <div class="x-image-viewer__mask"></div>
  <span class="x-image-viewer__btn x-image-viewer__close">
    <i class="x-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor"
              d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
    </svg>
    </i>
  </span>
  <span class="x-image-viewer__btn x-image-viewer__prev">
    <i class="x-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
    </i>
  </span>
  <span class="x-image-viewer__btn x-image-viewer__next">
    <i class="x-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
    </i>
  </span>
  <div class="x-image-viewer__btn x-image-viewer__actions">
    <div class="x-image-viewer__actions__inner">
      <i class="x-icon zoom-in">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"></path>
        </svg>
      </i>
      <i class="x-icon zoom-out">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"></path>
        </svg>
      </i>
      <i class="x-image-viewer__actions__divider"></i>
      <i class="x-icon zoom-zero">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"></path>
        </svg>
      </i>
      <i class="x-image-viewer__actions__divider"></i>
      <i class="x-icon rotate-left">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"></path>
        </svg>
      </i>
      <i class="x-icon rotate-right">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"></path>
        </svg>
      </i>
    </div>
  </div>
  <div class="x-image-viewer__canvas">
    <img src="" class="x-image-viewer__img">
  </div>
</div>`;

  static dom = undefined;

  static list = [];

  static index = 0;

  static zoom = 1;

  static offset = {
    x: 0,
    y: 0,
  };

  static rotate = 0;

  static inited = false;

  static init = (
    config = {
      dataFlag: 'data-x-image-preview',
      zIndex: 99999999,
    },
  ) => {
    if (this.inited) {
      return;
    }
    this.inited = true;
    const imgClick = (e) => {
      const img = e.target;
      const key = img.getAttribute(config.dataFlag);
      const sameKeyImg = Array.from(
        document.querySelectorAll(`img[${config.dataFlag}="${key}"]`),
      );
      this.list = sameKeyImg.map((img) => img.getAttribute('src'));
      this.index = sameKeyImg.indexOf(img);

      const dom = document.createElement('div');
      dom.innerHTML = this.html;
      dom.style.zIndex = config.zIndex;
      this.dom = dom;
      document.body.append(this.dom);

      document.documentElement.classList.add('x-image-preview-overflow-hide');

      const previewImg = this.dom.querySelector('.x-image-viewer__img');
      previewImg.setAttribute('src', this.list[this.index]);

      const resetImageStyle = () => {
        this.zoom = 1;
        this.offset = {
          x: 0,
          y: 0,
        };
        this.rotate = 0;
      };
      let rotateing = false;
      const makeImageStyle = (isMove = false) => {
        previewImg.style.transition = 'none';
        previewImg.removeAttribute('style');
        let style = `transform: scale(${this.zoom}) rotate(${this.rotate}deg);left: ${this.offset.x}px;top: ${this.offset.y}px;`;
        if (!isMove) {
          const rotate = this.rotate;
          style += 'transition: transform 0.3s;';
          setTimeout(() => {
            if (rotate === -360 || rotate === 360) {
              style = `transform: scale(${this.zoom}) rotate(${this.rotate}deg);left: ${this.offset.x}px;top: ${this.offset.y}px;`;
              previewImg.setAttribute('style', style);
            }
            rotateing = false;
          }, 300);
        }
        previewImg.setAttribute('style', style);
      };

      const mouseWheel = (e) => {
        const isAdd = event.deltaY < 0;
        const add = isAdd ? 0.05 : -0.05;
        this.zoom = Math.min(Math.max(this.zoom + add, 0.2), 5);
        makeImageStyle();
      };

      makeImageStyle();

      this.dom
        .querySelector('.x-image-viewer__close')
        .addEventListener('click', () => {
          document.removeEventListener('wheel', mouseWheel);
          this.list.splice(0);
          this.index = 0;
          this.dom.remove();
          this.dom = undefined;
          resetImageStyle();
          makeImageStyle();
          document.documentElement.classList.remove(
            'x-image-preview-overflow-hide',
          );
        });

      this.dom
        .querySelector('.x-image-viewer__prev')
        .addEventListener('click', () => {
          let index = this.index - 1;
          if (index < 0) {
            index = this.list.length - 1;
          }
          this.index = index;
          previewImg.setAttribute('src', this.list[this.index]);
          resetImageStyle();
          makeImageStyle();
        });

      this.dom
        .querySelector('.x-image-viewer__next')
        .addEventListener('click', () => {
          let index = this.index + 1;
          if (index === this.list.length) {
            index = 0;
          }
          this.index = index;
          previewImg.setAttribute('src', this.list[this.index]);
          resetImageStyle();
          makeImageStyle();
        });

      this.dom.querySelector('.zoom-in').addEventListener('click', () => {
        this.zoom = Math.max(this.zoom - 0.05, 0.2);
        makeImageStyle();
      });
      this.dom.querySelector('.zoom-out').addEventListener('click', () => {
        this.zoom = Math.min(this.zoom + 0.05, 5);
        makeImageStyle();
      });
      this.dom.querySelector('.zoom-zero').addEventListener('click', () => {
        resetImageStyle();
        makeImageStyle(false);
      });
      this.dom.querySelector('.rotate-left').addEventListener('click', () => {
        if (rotateing) {
          return;
        }
        rotateing = true;
        this.rotate -= 90;
        makeImageStyle();
        if (this.rotate === -360) {
          this.rotate = 0;
        }
      });
      this.dom.querySelector('.rotate-right').addEventListener('click', () => {
        if (rotateing) {
          return;
        }
        rotateing = true;
        this.rotate += 90;
        makeImageStyle();
        if (this.rotate === 360) {
          this.rotate = 0;
        }
      });
      let begin = {
        clientX: 0,
        clientY: 0,
        x: 0,
        y: 0,
      };
      const mouseMove = (e) => {
        const diffx = e.clientX - begin.clientX;
        const diffy = e.clientY - begin.clientY;
        const x = begin.x + diffx;
        const y = begin.y + diffy;

        this.offset.x = x;
        this.offset.y = y;
        makeImageStyle(true);
      };
      const mouseUp = () => {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
      };
      previewImg.addEventListener('mousedown', (e) => {
        e.stopPropagation && e.stopPropagation();
        e.preventDefault && e.preventDefault();
        begin.clientX = e.clientX;
        begin.clientY = e.clientY;
        begin.x = this.offset.x;
        begin.y = this.offset.y;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
      });

      document.addEventListener('wheel', mouseWheel);
    };
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (
        target?.tagName?.toUpperCase() === 'IMG' &&
        target?.hasAttribute(config.dataFlag) &&
        !target?.classList.contains('x-image-viewer__img')
      ) {
        imgClick(e);
      }
    });
  };
}

ImagePreview.init();
