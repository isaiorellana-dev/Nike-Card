class nikeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    return [
      'titulo',
      'collection',
      'img',
      'description',
      'price'
    ];
  }
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
            this[attr] = newValue;
        }
    if (attr === 'title') {
      this.titulo = newValue;
    }
    if (attr === 'collection') {
      this.collection = newValue;
    }
    if (attr === 'img') {
      this.img = newValue;
    }
    if (attr === 'description') {
      this.description = newValue;
    }
    if (attr === 'price') {
      this.price = newValue;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <article>
        <div class="head">
          <p>Nike</p>
          <img src="${this.img}" alt="${this.title}">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h2>${this.title}<span>${this.collection}</span></h2>
          </div>
            <p>${this.description}</p>
          <div class="footer">
            <p>${this.price}</p>
            <button>Buy Now</button>
          </div>
        </div>
      </article>
      ${this.getStyles()}
    `
    return template;
  }
  getStyles() {
    return `
      <style>
        :host {
          --background-primary: #5a6cb2;
          --background-secondary: rgb(26, 30, 51);
          --brand-color: #3f4885;
          --category-color: #9e9c9f;
          padding: 0;
          margin: 0;
          color: #fff;
        }
        article {
          display: flex;
          flex-direction: column;
          max-width: 800px;
          height: fit-content;
          background: var(--background-primary);
        }
        .head {
          height: 200px;
          position: relative;
          padding-top: 15px;
          padding-left: 25px;
        }
        .head p {
          font-size: 80px;
          font-weight: bold;
          color: var(--brand-color);
          margin: 0;
        }
        .head img {
          position: absolute;
          max-width: 300px;
          bottom: -55px;
          right: 15px;
        }
        .card-body {
          background: var(--background-secondary);
          padding: 10px;
        }
        .card-title {
          display: flex;
        }
        .card-title h2 span {
          text-transform: uppercase;
          color: var(--category-color);
          font-size: 12px;
          padding-left: 10px;
        }
        .footer{
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer p {
          font-size: 25px;
          font-weight: bold;
          color: var(--category-color);
        }
        .footer button {
          width: 90px;
          height: 40px;
          font-weight: bold;
          color: #fff;
          background: var(--background-primary);
          border: none;
          border-radius: 30px;
        }
        @media screen(max-width: 560px) {
          article {
            flex-direction: row;
          }
          .head img {
            max-width: 400px;
          }
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("nike-card", nikeCard);