// <symbol-icon text="Hz" size="56"></symbol-icon>

const nextUuid = (() => {
    let counter = 0;
    return () => {
        counter += 1;
        const rand = Math.random().toString(36).substring(2, 9);
        return `${rand}-${counter}`;
    };
})();

class SymbolIcon extends HTMLElement {
    static observedAttributes = [
        'text',
        'size',
        'radius',
        'shadow-color',
        'foreground-gradient-top',
        'foreground-gradient-bottom',
        'foreground-top-color',
        'foreground-bottom-color',
        'background-gradient-top',
        'background-gradient-bottom',
        'background-top-color',
        'background-bottom-color',
    ];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._uuid = nextUuid();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    get _props() {
        const text = this.getAttribute('text') ?? '??';
        const sizeRaw = this.getAttribute('size');
        const size = Number.isFinite(Number(sizeRaw)) ? Number(sizeRaw) : 300;

        // attribute aliases:
        // - foreground-top-color / foreground-bottom-color
        // - foreground-gradient-top / foreground-gradient-bottom
        // - background-top-color / background-bottom-color
        // - background-gradient-top / background-gradient-bottom
        //   <symbol-icon style="--symbol-icon-bg-top: ...; --symbol-icon-bg-bottom: ..."></symbol-icon>
        const fgTop =
            this.getAttribute('foreground-top-color') ??
            this.getAttribute('foreground-gradient-top') ??
            'var(--symbol-icon-fg-top, rgba(255,255,255,0.95))';

        const fgBottom =
            this.getAttribute('foreground-bottom-color') ??
            this.getAttribute('foreground-gradient-bottom') ??
            'var(--symbol-icon-fg-bottom, rgba(220,220,220,0.95))';

        const bgTop =
            this.getAttribute('background-top-color') ??
            this.getAttribute('background-gradient-top') ??
            'var(--symbol-icon-bg-top, rgba(80,80,80,1))';

        const bgBottom =
            this.getAttribute('background-bottom-color') ??
            this.getAttribute('background-gradient-bottom') ??
            'var(--symbol-icon-bg-bottom, rgba(40,40,40,1))';

        return {
            text,
            size,
            radius: this.getAttribute('radius') ?? '0.5rem',
            shadowColor:
                this.getAttribute('shadow-color') ??
                'var(--symbol-icon-shadow-color, rgba(0,0,0,0.35))',
            foregroundTopColor: fgTop,
            foregroundBottomColor: fgBottom,
            backgroundTopColor: bgTop,
            backgroundBottomColor: bgBottom,
        };
    }

    render() {
        if (!this.shadowRoot) {
            return;
        }

        const {
            text,
            size,
            radius,
            shadowColor,
            foregroundTopColor,
            foregroundBottomColor,
            backgroundTopColor,
            backgroundBottomColor,
        } = this._props;

        const backgroundGradientId = `bgGradient-${this._uuid}`;
        const textGradientId = `textGradient-${this._uuid}`;
        const dropShadowId = `dropShadow-${this._uuid}`;
        const richShadowId = `richShadow-${this._uuid}`;

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: inline-block; }
                svg { filter: none; text-shadow: none !important; font-family: 'Consolas', 'Menlo', monospace; }
            </style>
            <svg
                style="border-radius: ${radius}; box-shadow: 0 0 1em #000A;"
                width="${size}"
                height="${size}"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="${escapeHtml(text)}"
            >
                <defs>
                    <linearGradient id="${backgroundGradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="${escapeAttr(backgroundTopColor)}" />
                        <stop offset="100%" stop-color="${escapeAttr(backgroundBottomColor)}" />
                    </linearGradient>

                    <linearGradient id="${textGradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="${escapeAttr(foregroundTopColor)}" />
                        <stop offset="100%" stop-color="${escapeAttr(foregroundBottomColor)}" />
                    </linearGradient>

                    <filter id="${dropShadowId}" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="5" dy="5" stdDeviation="10" flood-color="rgba(0,0,0,0.5)" />
                    </filter>

                    <filter id="${richShadowId}" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="20" dy="20" stdDeviation="20" flood-color="rgba(0,0,0,0.8)" />
                    </filter>
                </defs>

                <g>
                    <rect x="0" y="0" width="300" height="300" fill="url(#${backgroundGradientId})" />
                </g>

                <text
                    x="155"
                    y="170"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="180"
                    fill="${escapeAttr(shadowColor)}"
                    opacity="1.0"
                >
                    ${escapeHtml(text)}
                </text>

                <text
                    x="150"
                    y="165"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="180"
                    fill="url(#${textGradientId})"
                    filter="url(#${dropShadowId}) url(#${richShadowId})"
                    stroke="rgba(255,255,255,0.3)"
                    stroke-width="1"
                >
                    ${escapeHtml(text)}
                </text>
            </svg>
        `;
    }
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function escapeAttr(value) {
    return escapeHtml(value);
}

if (!customElements.get('symbol-icon')) {
    customElements.define('symbol-icon', SymbolIcon);
}
